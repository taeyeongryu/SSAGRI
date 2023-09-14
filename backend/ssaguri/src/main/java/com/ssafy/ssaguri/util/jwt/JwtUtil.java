package com.ssafy.ssaguri.util.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;

import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;

import java.security.SignatureException;
import java.util.Date;

/**
 * Header에 담긴 원본 토큰 값 파싱
 * 토큰의 생성, 유효성 검증, 내부 값 추출
 */
@Slf4j
public class JwtUtil {

    private final static String secretKey = "b209ssagriMemberBEschAndrtyAndrhbFEsjwAndsbhAndhjiFighting"; //salt

    static long hour = 1000 * 60 * 60L;
    private static long accessExpireTime = hour / 60 / 3; //액세스 토큰 만료시간 30분
    private static long refreshExpireTime = hour; //리프레시 토큰 만료시간 3일

    //액세스 토큰 생성
    public static String createAccessToken(Long userNo) {
        Claims claims = Jwts.claims();
        claims.put("userNo", userNo); //payload
        claims.put("tokenType", "Access");

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
        claims.put("userNo", userNo); //payload
        claims.put("tokenType", "Refresh");

        return Jwts.builder() // 리프레쉬 토큰을 생성
                .setClaims(claims) // claim은 비어있음
                .setIssuedAt(new Date(System.currentTimeMillis())) // 현재 시간
                .setExpiration(new Date(System.currentTimeMillis() + refreshExpireTime)) // 언제까지
                .signWith(SignatureAlgorithm.HS256, secretKey) // 어떤 키로 사인할지
                .compact();
    }

    //토큰 유효성 체크하여 String 타입으로 반출
    public static String isExpired(String token) {
        try {
            Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
            return "Valid";
        } catch (ExpiredJwtException e) {
            return "Expired"; //만료된 토큰
        } catch (Exception e) {
            return "Invalid"; //잘못된 토큰
        }
    }

    //토큰에서 유저 payLoad 값 꺼내기
    public static Long getUserNo(String token){
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody().get("userNo", Long.class);
    }

    //토큰 타입 꺼내기
    public static String getTokenType(String token){
        try {
            return Jwts.parser()
                    .setSigningKey(secretKey)
                    .parseClaimsJws(token)
                    .getBody().get("tokenType", String.class);
        } catch (ExpiredJwtException e) {
            return "ERROR";
        }
    }

}