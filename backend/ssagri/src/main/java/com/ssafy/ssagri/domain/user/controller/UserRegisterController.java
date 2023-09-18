package com.ssafy.ssagri.domain.user.controller;

import com.ssafy.ssagri.domain.user.service.UserRegisterService;
import com.ssafy.ssagri.util.exception.CustomException;
import com.ssafy.ssagri.util.exception.CustomExceptionStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.REGISTER_NICKNAME_IS_DUPLICATE;

/**
 * 유저 회원가입에 사용되는 인증 로직 및
 * 이메일 인증 관리에 사용되는 컨트롤러
 */
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/user/regist")
public class UserRegisterController {

    private final UserRegisterService userRegisterService;

    //유저 회원가입 최종 등록
    @GetMapping("/")
    public ResponseEntity<String> registUser() {
        return userRegisterService.registUser();
    }

    //닉네임 중복 확인
    @GetMapping("/check")
    public ResponseEntity<?> checkDuplicateNickname(@RequestParam("nickname")String nickname) throws CustomException {
        return userRegisterService.checkDuplicateNickname(nickname);
    }

    //이메일 중복 확인
    public ResponseEntity<?> checkDuplicateEmail(@RequestParam("email")String email) throws CustomException {
        return userRegisterService.checkDuplicateEmail(email);
    }

    //인증번호 유효 검증
}
