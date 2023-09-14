package com.ssafy.ssagri.util.jwt;

import com.ssafy.ssagri.util.jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Access 토큰 재발급용 컨트롤러입니다.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/jwt")
public class AccessTokenCreateController {

    //RefreshToken 받고 검증 후 새로운 AccessToken을 돌려준다.
    @GetMapping("/getaccess")
    public ResponseEntity<?> getAccessToken(@RequestParam("userNo") Long userNo, HttpServletRequest request) {
        //리프레시 토큰 검증, Header 값 파싱해서 확인
        //토큰 원본 꺼내기 및 처리
        String rawToken = request.getHeader(HttpHeaders.AUTHORIZATION);
        //토큰 DB 저장값과 비교해서 맞으면 넘기고, 아니면 에러 처리
        //return ResponseEntity.status(400).body("Invalid Token"); // 400 Bad Request 상태 코드와 에러 메시지 설정

        String jwtToken = JwtUtil.createAccessToken(userNo);
        return ResponseEntity.ok().header("Authorization", "Bearer " + jwtToken).body("Token has been created");
    }
}
