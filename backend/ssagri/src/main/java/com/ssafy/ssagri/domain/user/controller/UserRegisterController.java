package com.ssafy.ssagri.domain.user.controller;

import com.ssafy.ssagri.domain.user.service.UserRegisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 유저 회원가입에 사용되는 인증 로직 및
 * 이메일 인증 관리에 사용되는 컨트롤러
 */
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserRegisterController {

    private final UserRegisterService userRegisterService;

    //유저 회원가입 최종 등록
    @GetMapping("/regist")
    public ResponseEntity<String> registUser() {
        return userRegisterService.registUSter();
    }

    //이메일 검증
    //
}
