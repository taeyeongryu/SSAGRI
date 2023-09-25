package com.ssafy.ssagri.util;

import lombok.Getter;

/**
 *        CODE : 카테고리 (4자리 정수)
 *        MESSAFE : 메세지
 */
@Getter
public enum ResponseStatusEnum {
    //Register = 10xx
    REGIST_IS_OK(1000, "성공적으로 등록하였습니다."),
    REGIST_NICKNAME_IS_OK(1001, "닉네임이 유효합니다."),
    REGIST_EMAIL_IS_OK(1002, "이메일이 유효합니다."),
    REGIST_AUTHCODE_IS_OK(1003, "메일 인증번호가 유효합니다"),

    //LOGIN = 11xx
    LOGIN_IS_OK(1100, "해당 계정이 존재합니다. (로그인 가능)"),
    //LOGOUT = 12xx
    LOGOUT_IS_OK(1200, "로그아웃이 성공적으로 이루어졌습니다."),
    //REFILL TOKEN = 13xx
    REFILL_TOKEN_IS_OK(1300, "액세스 토큰 발급이 성공적으로 이루어졌습니다."),
    //Mail send
    MAIL_SEND_IS_OK(1400, "이메일 전송과 인증번호 등록이 성공적으로 이루어졌습니다."),
    //Mail - Authcode

        ;
    private final int code;
    private final String message;

    ResponseStatusEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }

}
