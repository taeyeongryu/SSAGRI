package com.ssafy.ssagri.util.oauth.contoller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@RestController
@RequestMapping("/oauth")
@Slf4j
public class OauthController {

//    WebClient webClient = WebClient.create();
    @Value("${kakao.restapi.key}")
    private String REST_API_KEY;

    @Value("${kakao.redirect.key}")
    private String REDIRECT_URI;

    @Value("${kakao.client.secret}")
    private String CLIENT_SECRET;



    //1. 인가 코드 받기
    /*
    사용자 동의를 거쳐 인가 코드를 발급합니다.
    동의 화면은 앱에 설정된 동의 항목에 대해 사용자에게 인가(동의)를 구합니다.
    인가 코드는 동의 화면을 통해 인가받은 동의 항목 정보를 갖고 있으며, 인가 코드를 사용해 토큰 받기를 요청할 수 있습니다.
    OpenID Connect를 사용하는 앱일 경우, 앱 설정에 따라 ID 토큰을 함께 발급받을 수 있는 인가 코드를 발급합니다.
    => 이거 받은 값으로 토큰 받기를 수행해야 한다.
     */
    @GetMapping
    public String getAuthcode(@RequestParam("code") String code) {
        log.info("[KAKAO]인가 코드 받아옴 : {}", code);
        return code;
    }

    /*
    2. 토큰 코드 받기
    인가코드만으로는 정상적인 로그인을 할 수 없다. 토큰까지 받아와야 정말로 로그인 처리가 되는 것이다.
     */
    @GetMapping("token")
    public String getToken(@RequestParam("code") String code) throws JSONException {
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
                                .queryParam("client_id", "a8e8ca185ec462d26b73b3bcf176ce39")
                                .queryParam("redirect_uri", "http://localhost:5000/api/oauth")
                                .queryParam("code", code)
                                .queryParam("client_secret", "hrhpPBZWRC6OFMkHhh9Mvl9ZrFUNhph5")
                                .build())
                                .retrieve().bodyToMono(Map.class).block();

        log.info("DONE!");
        return tokenResponse.toString();
    }
}
