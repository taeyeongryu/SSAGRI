//package com.ssafy.ssaguri.util.filter;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.HttpHeaders;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//
///**
// * JWT 인증 필터
// * OncePerRequestFilter Extend로 인해 모든 HTTP 요청에 대해 한 번씩만 호출된다.
// * 토큰에 대한 유효성을 검증한다.
// */
//@RequiredArgsConstructor
//@Component
//@Slf4j
//public class JwtFilter extends OncePerRequestFilter {
//
//    @Value("${jwt.key}")
//    private String secretkey;
//
//    //필터링 거치지 않는 API endpoint
//    private String[] allowedURI = new String[] {};
//
//    //다음 해당 사항은 jwt 토큰 인증 필터링을 거치지 않는다.
//    @Override
//    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
//        String path = request.getRequestURI();
//        for(String uri : allowedURI) {
//            if(path.startsWith(uri)) return true; //API 요청 주소가 사전 등록된 allowed에 있을 경우
//        }
//        return false;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        final String AUTH = request.getHeader(HttpHeaders.AUTHORIZATION);
//        log.info("Header Authorization get : {}", AUTH);
//
//        //1. 토큰이 없거나 Bearer가 아닌 경우
//        if(AUTH == null || !AUTH.startsWith("Bearer ")){
//            log.error("authorization을 잘못 보냈습니다.");
//            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "잘못된 토큰이거나 토큰이 없습니다.");
//            return;
//        }
//        //2. 액세스 토큰 검증
//        checkAccessToken();
//
//        //3. 리프레시 토큰이 만료될 경우
//        filterChain.doFilter(request, response);
//    }
//
//
//}
