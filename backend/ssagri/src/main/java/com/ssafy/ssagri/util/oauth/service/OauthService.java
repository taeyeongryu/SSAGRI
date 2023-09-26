package com.ssafy.ssagri.util.oauth.service;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.ssagri.util.exception.CustomException;
import com.ssafy.ssagri.util.exception.CustomExceptionStatus;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.OAUTH_USERINFO_PARSING_ERR;

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

        log.info("[KAKAO]액세스 토큰 발급 완료!");
        return (String) tokenResponse.get("access_token");
    }

    public String[] getUserInfo(String accessToken) {
        // webClient 설정
        WebClient kakaoApiWebClient =
                WebClient.builder()
                        .baseUrl("https://kapi.kakao.com")
                        .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .build();

        // info api 설정
        Map<String, Object> infoResponse =
                kakaoApiWebClient
                        .post()
                        .uri(uriBuilder -> uriBuilder
                                .path("/v2/user/me")
                                .build())
                        .header("Authorization", "Bearer " + accessToken)
                        .retrieve()
                        .bodyToMono(Map.class)
                        .block();


        log.info("토큰으로 받아낸 유저 정보 : {}" + infoResponse);
        //Map 내부 값 파싱
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            String json = objectMapper.writeValueAsString(infoResponse);
            JsonNode jsonNode = objectMapper.readTree(json);

            String nickname = jsonNode.path("properties").path("nickname").asText();
            String profileImageUrl = jsonNode.path("properties").path("profile_image").asText();
            String email = jsonNode.path("kakao_account").path("email").asText();

            System.out.println("Nickname: " + nickname);
            System.out.println("Profile Image URL: " + profileImageUrl);
            System.out.println("Email: " + email);
            return new String[]{nickname, profileImageUrl, email};

        } catch (Exception e) {
            e.printStackTrace();
            throw new CustomException(OAUTH_USERINFO_PARSING_ERR);
        }
    }

    public String getKakaoLoginPage() {
        return "https://kauth.kakao.com/oauth/authorize?client_id=" + REST_API_KEY + "&redirect_uri=" + REDIRECT_URI + "&response_type=code";
    }
}
