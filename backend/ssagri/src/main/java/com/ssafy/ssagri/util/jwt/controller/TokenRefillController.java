package com.ssafy.ssagri.util.jwt.controller;

import com.ssafy.ssagri.dto.user.ResponseDTO;
import com.ssafy.ssagri.util.exception.CustomException;
import com.ssafy.ssagri.util.jwt.service.TokenRefillService;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

/**
 * Access 토큰 재발급용 컨트롤러입니다.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/jwt")
@Api(tags = "[JWT]만료된 토큰 발생 시 재요청 컨트롤러")
public class TokenRefillController {

    private final TokenRefillService tokenRefillService;

    //RefreshToken 받고 검증 후 새로운 AccessToken을 돌려준다.
    @GetMapping("/refill")
    @Operation(summary = "Acess-Token을 재발급합니다.", description = "refresh token cookie 확인 후 새로운 Access token을 발급합니다.  \n" +
            "1. Refresh Cookie 유효한지 확인, 에러의 경우 : JWT_REFILL_COOKIE_NOT_EXIST(-1400, \"Refresh Cookie가 유효하지 않습니다.\")\n" +
            "2. Redis 인메모리 캐시에 해당 리프레시 토큰이 존재하나 확인토큰값과 쿠키로 받은 리프레시 토큰이 일치하는지 확인\n" +
            "3. 1, 2가 맞다면 새로운 Access token 발급\n" +
            " ")
    public ResponseEntity<ResponseDTO> refillRefreshToken(HttpServletRequest request, HttpServletResponse response) throws CustomException, IOException {

        String token = tokenRefillService.checkCookie(request); //1. 리프레시 쿠키 유효한지 확인
        System.out.println("리프레시 쿠키 : " + token);
        tokenRefillService.checkRefreshTokenIsVaild(token); //2. 쿠키에서 꺼낸 값 유효성 확인, 이후 Redis에 존재 여부 확인
        return null;
    }

}
