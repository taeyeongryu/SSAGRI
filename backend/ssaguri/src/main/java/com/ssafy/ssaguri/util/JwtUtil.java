package com.ssafy.ssaguri.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;

import java.util.Date;

/**
 * 리프레시와 액세스 토큰의 생성
 * 토큰의 내부 Payload 값 추출
 */
public class JwtUtil {

    @Value("${jwt.key}")
    private static String secretKey; //salt

    static long hour = 1000 * 60 * 60L;
    private static long accessExpireTime = hour; //액세스 토큰 만료시간 60분
    private static long refreshExpireTime = hour * 12; //리프레시 토큰 만료시간 12시간

    //액세스 토큰 생성
    public static String createAccessToken(Long userNo) {
        Claims claims = Jwts.claims();
        claims.put("userNo", userNo); //payload

        return Jwts.builder() // 액세스 토큰을 생성
                .setClaims(claims) // 유저의 pk값
                .setIssuedAt(new Date(System.currentTimeMillis())) // 현재 시간
                .setExpiration(new Date(System.currentTimeMillis() + accessExpireTime)) // 언제까지
                .signWith(SignatureAlgorithm.HS256, secretKey) // 뭐로 사인됐는지
                .compact();
    }

    //리프레시 토큰 생성
    public static String createRefreshToken(Long userNo) {
        Claims claims = Jwts.claims();

        return Jwts.builder() // 리프레쉬 토큰을 생성
                .setClaims(claims) // claim은 비어있음
                .setIssuedAt(new Date(System.currentTimeMillis())) // 현재 시간
                .setExpiration(new Date(System.currentTimeMillis() + refreshExpireTime)) // 언제까지
                .signWith(SignatureAlgorithm.HS256, secretKey) // 어떤 키로 사인할지
                .compact();
    }

    //토큰에서 유저 payLoad 값 꺼내기
    public static Long getUserNo(String token){
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody().get("userNo", Long.class);
    }
}
