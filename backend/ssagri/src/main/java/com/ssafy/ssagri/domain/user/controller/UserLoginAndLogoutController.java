package com.ssafy.ssagri.domain.user.controller;

import com.ssafy.ssagri.domain.user.service.UserLoginAndLogoutService;
import com.ssafy.ssagri.domain.user.service.UserRegisterService;
import com.ssafy.ssagri.dto.user.UserLoginDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 유저 로그인 및 로그아웃 컨트롤러
 */
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserLoginAndLogoutController {

    private final UserRegisterService userRegisterService;
    private final UserLoginAndLogoutService userLoginAndLogoutService;

    //로그인
    @PostMapping("/login/")
    public ResponseEntity<String> loginUser(@RequestBody UserLoginDTO userLoginDTO) {
        return userLoginAndLogoutService.loginUser(userLoginDTO);
    }

}
