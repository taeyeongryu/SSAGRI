package com.ssafy.ssagri.domain.user.controller;

import com.ssafy.ssagri.domain.user.service.UserMypageService;
import com.ssafy.ssagri.dto.user.UserRegistDTO;
import com.ssafy.ssagri.util.etc.service.UtilService;
import com.ssafy.ssagri.util.jwt.JwtUtil;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("user/mypage")
@Api(tags = "[USER]유저 정보(마이페이지)")
public class UserMypageController {

    private final UserMypageService userMypageService;


    @Operation(summary = "비밀번호 변경", description = "NORMAL type 사용자만 가능, 비밀번호를 변경합니다, request를 통해 AccessToken을 보내야 합니다.")
    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody String password, HttpServletRequest request) throws Exception {
        return userMypageService.changePassword(password, request);
    }

    //닉네임 변경 -> 닉네임 중복체크 후 변경
    //회원탈퇴 ->
    //이미지 변경
    @Operation(summary = "프로필 이미지 변경", description = "새로운 이미지 url을 post로 받아 변경합니다, Access Token 파싱하여 userNo를 알아냅니다.")
    @PostMapping("/change-profile")
    public ResponseEntity<?> changeProfile(@RequestBody String path, HttpServletRequest request) throws Exception {
        return userMypageService.changeProfile(path, JwtUtil.getUserNo(request.getHeader(HttpHeaders.AUTHORIZATION).split(" ")[1]));
    }
}
