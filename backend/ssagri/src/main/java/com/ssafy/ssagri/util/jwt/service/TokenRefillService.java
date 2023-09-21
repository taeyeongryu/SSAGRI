package com.ssafy.ssagri.util.jwt.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Service
public class TokenRefillService {
    @Value("${jwt.secretkey}")
    private String secretkey;

    public void refill(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String rawToken = request.getHeader(HttpHeaders.AUTHORIZATION);
        if(rawToken == null || !rawToken.startsWith("Bearer ")){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.setContentType("application/json");
            response.getWriter().write("{\"error\": \"Null or Not Bearer Token\"}");
            return;
            
            //작업 예정
        }
    }
}
