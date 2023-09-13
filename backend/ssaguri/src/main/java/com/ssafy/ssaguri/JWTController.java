package com.ssafy.ssaguri;

import com.ssafy.ssaguri.util.jwt.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("jwt")
@Slf4j
public class JWTController {


    @GetMapping("at")
    public void test() {
        String token = JwtUtil.createAccessToken(1L);
        log.warn("ac 생성 : {}", token);
        log.info("ac 만료 체크 {}", JwtUtil.isExpired(token));
        log.warn("ac userNo꺼내기 : {}", JwtUtil.getUserNo(token));
        log.warn("ac 토큰타입꺼내기 : {}", JwtUtil.getTokenType(token));

    }

    @GetMapping("rt")
    public void refreshTest() {
        String token = JwtUtil.createRefreshToken(1L);
        log.info("rt 생성 : {}", token);
    }
}
