package com.ssafy.ssagri.util.oauth.contoller;

import com.ssafy.ssagri.util.oauth.service.OauthService;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/oauth")
@Slf4j
@Api(tags = "Oauth(Kakao) 컨트롤러")
public class OauthController {

    private final OauthService oauthService;


    /*
    1. 인증 : 카카오 로그인 이후
    여기가 카카오 리다이렉팅 주소. 사용자 동의를 거쳐 인가 코드를 발급합니다.
    동의 화면은 앱에 설정된 동의 항목에 대해 사용자에게 인가(동의)를 구합니다.
    인가 코드는 동의 화면을 통해 인가받은 동의 항목 정보를 갖고 있으며, 인가 코드를 사용해 토큰 받기를 요청할 수 있습니다.
    OpenID Connect를 사용하는 앱일 경우, 앱 설정에 따라 ID 토큰을 함께 발급받을 수 있는 인가 코드를 발급합니다.
    => 이거 받은 값으로 토큰 받기를 수행해야 한다.

    2. 토큰 코드 받기
    인가코드만으로는 정상적인 로그인을 할 수 없다. 토큰까지 받아와야 정말로 로그인 처리가 되는 것이다.

    3. 파싱
    토큰 코드 내부의 유저 액세스 토큰을 사용하여, KAKAO API에 유저 정보를 추가 요청 후 파싱한다.
     */

    @GetMapping
    @Operation(summary = "KAKAO 로그인 시 해당 API로 리다이렉팅됩니다.", description = "인가된 코드를 바탕으로 유효한 토큰을 받아옵니다. ")
    public String[] getToken(@RequestParam("code") String code) {
        String accessToken = oauthService.getToken(code); //2. 토큰 받기
        return oauthService.getUserInfo(accessToken); //3. 유저 정보를 추가 요청 후 파싱
    }

    //카카오 로그인

//    @GetMapping("get/user-info")
//    @Operation(summary = "사용자 정보 받아오기", description = "Token에서 뽑아온 accessToken으로 로그인 사용자가 동의한 정보 확인하기 ")
//    public ResponseEntity<Map<String, String>> getUserInfo(@RequestParam("token") String token) {
//        log.info("[KAKAO]액세스 토큰 입력 : {}", token);
//        return oauthService.getUserInfo(token);
//    }

//    @GetMapping("logout")
//    public String logout(@RequestParam("code") String code) throws JSONException {
//
//    }
}
