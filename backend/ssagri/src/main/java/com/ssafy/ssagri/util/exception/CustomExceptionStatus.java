package com.ssafy.ssagri.util.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 *        CODE : 카테고리 (4자리 정수)
 *        MESSAFE : 메세지
 */
@Getter
@RequiredArgsConstructor
public enum CustomExceptionStatus {

    //Register = 1xxx
    REGISTER_NICKNAME_IS_DUPLICATE(-1000, "유저 닉네임이 중복됩니다."),
    REGISTER_EMAIL_IS_DUPLICATE(-1001, "이메일이 중복됩니다."),

    //LOGIN = 11xx
    LOGIN_HAVE_NO_ACCOUT(-1101, "일치하는 계정이 없습니다."),
    LOGIN_GET_TOKEN_ERROR(-1102, "토큰 발급 과정에서 문제가 발생했습니다."),
    LOGIN_SAVE_TOKEN_ERROR(-1103, "토큰을 Redis로 저장하는 과정에서 문제가 발생했습니다."),

    ;
    private final int code;
    private final String message;

}
