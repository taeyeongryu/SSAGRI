package com.ssafy.ssagri.util.filter;

import com.ssafy.ssagri.util.jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


/**
 * JWT 인증 필터
 * OncePerRequestFilter Extend로 인해 모든 HTTP 요청에 대해 한 번씩만 호출된다.
 * 토큰에 대한 유효성을 검증한다.
 */
@RequiredArgsConstructor
@Component
@Slf4j
public class JwtFilter extends OncePerRequestFilter {

    private String secretkey = "ssafy9kiB209teamSsaguriFightingssafy9kiB209teamSsaguriFightingssafy9kiB209teamSsaguriFighting";

    //필터링 거치지 않는 API endpoint,, 테스트용
    private String[] allowedURI = new String[] {"/jwt"};

    //다음 해당 사항은 jwt 토큰 인증 필터링을 거치지 않는다.
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String path = request.getRequestURI();
        for(String uri : allowedURI) {
            if(path.startsWith(uri)) return true; //API 요청 주소가 사전 등록된 allowed에 있을 경우
        }
        return false;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        //토큰 원본 꺼내기 및 처리
        String rawToken = request.getHeader(HttpHeaders.AUTHORIZATION);
        if(rawToken == null || !rawToken.startsWith("Bearer ")){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.setContentType("application/json");
            response.getWriter().write("{\"error\": \"Null or Not Bearer Token\"}");
            return;
        }
        else {
            rawToken = rawToken.split(" ")[1]; //Bearer 제거
        }

        //입력받은 토큰 검증
        String tokenType = JwtUtil.isExpired(rawToken);
        log.warn("입력받은 토큰 타입 검증 : {}", tokenType);
        //토큰 타입 결과에 따른 필터 제어(Valid, Invalid, Expired)
        if(!tokenType.equals("Valid")) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.setContentType("application/json");
            if(tokenType.equals("Expired")) {
                response.getWriter().write("{\"error\": \"Expired\"}");
            }
            else {
                response.getWriter().write("{\"error\": \"Invalid\"}");
            }
            return;
        }


        //이상 없을 경우
        filterChain.doFilter(request, response);
    }


}
