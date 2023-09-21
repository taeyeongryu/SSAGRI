package com.ssafy.ssagri.domain.user.controller;

import com.ssafy.ssagri.domain.user.service.UserRegistService;
import com.ssafy.ssagri.dto.user.UserRegistDTO;
import com.ssafy.ssagri.util.exception.CustomException;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/user/regist")
@Api(tags = "[USER]회원가입 및 이메일 인증 컨트롤러")
public class UserRegistController {

    private final UserRegistService userRegisterService;


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

    //인증번호 유효 검증(개발필요)
    @PostMapping("/check/auth-number")
    public ResponseEntity<?> checkNumberIsCorrect(@RequestParam("email") String email) throws CustomException {
        return userRegisterService.checkNumberIsCorrect(email);
    }

    //이미지 받기(개발필요)
    public ResponseEntity<?> getUserImageURI(@RequestParam("email") String email, @RequestParam("uri") String uri) throws CustomException {
        return userRegisterService.getUserImageURI(email, uri);
    }

}
