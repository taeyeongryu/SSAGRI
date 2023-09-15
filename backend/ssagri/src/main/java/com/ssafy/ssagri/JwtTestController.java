package com.ssafy.ssagri;

import com.ssafy.ssagri.util.jwt.JwtUtil;
import org.springframework.beans.factory.annotation.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("jwt")
@Slf4j
public class JwtTestController {

    @Value("${jwt.secretkey}")
    String key;

    @GetMapping("at")
    public void test() {
        JwtUtil.createAccessToken(1L);
        log.warn("ac 생성 : {}");
//        log.info("ac 만료 체크 {}", JwtUtil.isExpired(token));
//        log.warn("ac userNo꺼내기 : {}", JwtUtil.getUserNo(token));
//        log.warn("ac 토큰타입꺼내기 : {}", JwtUtil.getTokenType(token));

    }

    @GetMapping("rt")
    public void refreshTest() {
        JwtUtil.createRefreshToken(1L);
    }
}
