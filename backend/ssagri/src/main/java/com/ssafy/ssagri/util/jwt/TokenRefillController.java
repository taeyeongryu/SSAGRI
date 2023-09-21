package com.ssafy.ssagri.util.jwt;

import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
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
    @Value("${jwt.secretkey}")
    private String secretkey;

    //RefreshToken 받고 검증 후 새로운 AccessToken을 돌려준다.
    @GetMapping("/send/refresh")
    @Operation(summary = "Acess-Token을 재발급합니다.", description = "해당 api로 RefreshToken을 요청해야 합니다. HttpHeaders.AUTHORIZATION로 보내주시면 됩니다.")
    public void refillRefreshToken(HttpServletRequest request) {
        String refreshToken = request.getHeader(HttpHeaders.AUTHORIZATION);
    }

}
