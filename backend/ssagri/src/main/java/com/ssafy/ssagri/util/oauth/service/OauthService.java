package com.ssafy.ssagri.util.oauth.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
@Slf4j
public class OauthService {

    @Value("${kakao.restapi.key}")
    private String REST_API_KEY;

    @Value("${kakao.redirect.key}")
    private String REDIRECT_URI;

    @Value("${kakao.client.secret}")
    private String CLIENT_SECRET;

    public String getToken(String code) {
        //Kakao 보낼 API
        WebClient webClient = WebClient.builder()
                .baseUrl("https://kauth.kakao.com")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();

        //요청 보내기
        Map<String, Object> tokenResponse = webClient.post()
                .uri(uriBuilder -> uriBuilder
                        .path("/oauth/token")
                        .queryParam("grant_type", "authorization_code")
                        .queryParam("client_id", REST_API_KEY)
                        .queryParam("redirect_uri", REDIRECT_URI)
                        .queryParam("code", code)
                        .queryParam("client_secret", CLIENT_SECRET)
                        .build())
                .retrieve().bodyToMono(Map.class).block();

        log.info("토큰 발급 완료!");
        return tokenResponse.toString();
    }
}
