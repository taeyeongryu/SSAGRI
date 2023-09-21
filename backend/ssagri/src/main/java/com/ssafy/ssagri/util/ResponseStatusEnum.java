package com.ssafy.ssagri.util;

import lombok.Getter;

/**
 *        CODE : 카테고리 (4자리 정수)
 *        MESSAFE : 메세지
 */
@Getter
public enum ResponseStatusEnum {
    //Register = 10xx
    REGISTER_IS_OK(1000, "성공적으로 등록하였습니다."),
    REGISTER_NICKNAME_IS_OK(1001, "닉네임이 유효합니다."),
    REGISTER_EMAIL_IS_OK(1002, "이메일이 유효합니다."),

    //LOGIN = 11xx
    LOGIN_IS_OK(1100, "해당 계정이 존재합니다. (로그인 가능)"),
    //LOGOUT = 12xx
    LOGOUT_IS_OK(1200, "로그아웃이 성공적으로 이루어졌습니다."),

        ;
    private final int code;
    private final String message;

    ResponseStatusEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }

}
