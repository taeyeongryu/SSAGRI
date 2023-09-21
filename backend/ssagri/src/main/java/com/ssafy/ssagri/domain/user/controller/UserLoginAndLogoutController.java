package com.ssafy.ssagri.domain.user.controller;

import com.ssafy.ssagri.domain.user.service.UserLoginAndLogoutService;
import com.ssafy.ssagri.domain.user.service.UserRegisterService;
import com.ssafy.ssagri.dto.user.UserLoginDTO;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 유저 로그인 및 로그아웃 컨트롤러
 */
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/user")
@Api(tags = "로그인, 로그아웃 컨트롤러")
public class UserLoginAndLogoutController {

    private final UserLoginAndLogoutService userLoginAndLogoutService;

    //로그인
    @Operation(summary = "로그인 기능", description = "줘야 하는 값 : UserLoginDTO, 프론트로 넘겨주는 값 : Access-Token, Refresh-Token")
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDTO userLoginDTO) {
        return userLoginAndLogoutService.loginUser(userLoginDTO);
    }

    //로그아웃
    @Operation(summary = "로그아웃 기능", description = "로그아웃 시 Header에 `Access-Token`을 주어야 합니다. HttpHeaders.AUTHORIZATION로 받을 예정입니다.")
    @GetMapping("/logout")
    public ResponseEntity<?> logoutUser(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return userLoginAndLogoutService.logoutUser(request, response);
    }

}
