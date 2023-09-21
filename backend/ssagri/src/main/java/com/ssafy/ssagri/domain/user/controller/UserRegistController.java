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
@Api(tags = "회원가입 및 이메일 인증 컨트롤러")
public class UserRegistController {

    private final UserRegistService userRegisterService;


    @Operation(summary = "회원가입 기능", description = "UserRegistDTO를 통해 회원 가입 및 등록 진행")
    @PostMapping("/")
    public ResponseEntity<?> registUser(@RequestBody UserRegistDTO userRegistDTO) throws Exception {
        return userRegisterService.registUser(userRegistDTO);
    }

    //닉네임 중복 확인
    @GetMapping("/check/nickname")
    public ResponseEntity<?> checkDuplicateNickname(@RequestParam("nickname")String nickname) throws CustomException {
        log.warn("NICKNAME 컨트롤러");
        return userRegisterService.checkDuplicateNickname(nickname);
    }

    //이메일 중복 확인
    @GetMapping("/check/email")
    public ResponseEntity<?> checkDuplicateEmail(@RequestParam("email")String email) throws CustomException {
        log.warn("EMAIL 컨트롤러");
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
