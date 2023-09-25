package com.ssafy.ssagri.domain.user.controller;

import com.ssafy.ssagri.domain.user.service.S3FileService;
import com.ssafy.ssagri.domain.user.service.UserRegistService;
import com.ssafy.ssagri.dto.user.ResponseDTO;
import com.ssafy.ssagri.dto.user.UserRegistDTO;
import com.ssafy.ssagri.util.exception.CustomException;
import com.ssafy.ssagri.util.mail.EmailService;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.io.IOException;
import java.io.UnsupportedEncodingException;

import static com.ssafy.ssagri.util.ResponseStatusEnum.MAIL_SEND_IS_OK;


@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/user/regist")
@Api(tags = "[USER]회원가입 및 이메일 인증 컨트롤러")
public class UserRegistController {

    private final UserRegistService userRegisterService;
    private final EmailService emailService;
    private final S3FileService s3FileService;

    @Operation(summary = "회원가입 기능", description = "UserRegistDTO 입력값을 통해 회원 가입 및 등록 진행. \n 성공일 경우 REGISTER_IS_OK(1000, \"성공적으로 등록하였습니다.\")발생")
    @PostMapping("/")
    public ResponseEntity<?> registUser(@RequestBody UserRegistDTO userRegistDTO) throws Exception {
        return userRegisterService.registUser(userRegistDTO);
    }

    @Operation(summary = "닉네임 중복 확인", description = "RequestParam(\"nickname\") 입력값을 통해 닉네임 중복 확인. \n" +
            "            \"중복일 경우 REGISTER_NICKNAME_IS_DUPLICATE(-1000, \\\"유저 닉네임이 중복됩니다.\\\") 발생(404)\\n\" +\n" +
            "            \"성공일 경우 REGISTER_NICKNAME_IS_OK(1001, \\\"닉네임이 유효합니다.\\\") 발생(200)\\n\" +\n" +
            "            \" ")
    @GetMapping("/check/nickname")
    public ResponseEntity<?> checkDuplicateNickname(@RequestParam("nickname")String nickname) throws CustomException {
        return userRegisterService.checkDuplicateNickname(nickname);
    }

    @Operation(summary = "이메일 중복 확인", description = "RequestParam(\"email\") 입력값을 통해 닉네임 중복 확인.   \n" +
            "중복일 경우 REGISTER_EMAIL_IS_DUPLICATE(-1001, \"이메일이 중복됩니다.\") 발생\n" +
            "성공일 경우 REGISTER_EMAIL_IS_OK(1002, \"이메일이 유효합니다.\")발생\n" +
            " ")
    @GetMapping("/check/email")
    public ResponseEntity<?> checkDuplicateEmail(@RequestParam("email")String email) throws CustomException {
        return userRegisterService.checkDuplicateEmail(email);
    }

    @Operation(summary = "이메일 전송(인증번호 전송)", description = "1. 메일번호를 RequrestParam으로 받음 -> 해당 메일로 인증번호 전송 : MAIL_SEND_ERR(-1500, \"메일 전송 과정 중 에러가 발생했습니다.\"),\n" +
            "2. -> BE 서버에서는 해당 인증 번호를 Redis 메모리에 저장(expired 기간 10분 등) : MAIL_AUTH_SAVE_ERR(-1501, \"인증번호를 Redis에 저장하는 중 에러가 발생했습니다.\")\n" +
            "\t: 이때 저장은 해당 유저의 인증번호(key) : IP(value)로 하여 여러 사용자가 하나의 인증번호를 돌려쓰지 못하게 함.")
    @GetMapping("/send-email")
    public ResponseEntity<?> sendAuthcodeToEmail(@RequestParam("email") String email, HttpServletRequest request) throws CustomException, MessagingException, UnsupportedEncodingException {
        String authCode = emailService.sendSimpleMessageRegist(email); //1. 해당 주소로 인증번호 포함된 메일 전송
        userRegisterService.saveAuthCodeToRedis(authCode); //2. authCode 값을 생성 Redis에 보관(expire : 10분)
        return ResponseEntity.ok(new ResponseDTO(MAIL_SEND_IS_OK.getCode(), MAIL_SEND_IS_OK.getMessage()));
    }

    @Operation(summary = "인증번호 확인", description = "인증 번호 확인 : \n" +
            " 인증 번호 확인 후, 해당 Authcode를 키값에서 삭제한다. 에러의 경우 : REDIS_GET_VALUE_FAIL(-1600, \"redis 키값으로 value를 찾아오는 것을 실패했습니다. (입력 값 다름)\"),\n" +
            " MAIL_SEND_IS_OK(1400, \"이메일 전송과 인증번호 등록이 성공적으로 이루어졌습니다.\"),\n")
    @Transactional
    @GetMapping("/check/authcode-valid")
    public ResponseEntity<?> checkAuthcodeIsValid(@RequestParam String authcode) throws CustomException {
//        log.warn("테스트 {}", authcode);
        userRegisterService.checkAuthcode(authcode); //Authcode 맞는지 판별
        return ResponseEntity.ok(new ResponseDTO(MAIL_SEND_IS_OK.getCode(), MAIL_SEND_IS_OK.getMessage()));
    }

    @Operation(summary = "프로필 사진 업로드", description = "MultipartFile 형태로 파일을 올려주시면 됩니다. 리턴값으로 해당 주소의 Url을 가져옵니다.")
    @Transactional
    @GetMapping("/upload/profile")
    public String saveFile(HttpServletRequest request, @RequestParam("upload-file") MultipartFile multipartFile) throws IOException {
        return s3FileService.saveFile(request, multipartFile, "profile");
    }


}
