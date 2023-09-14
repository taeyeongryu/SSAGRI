package com.ssafy.ssagri.util.error;

import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.security.SignatureException;

/**
 * 전역적인 AOP 관련 로직을 수행하는 핸들러입니다.
 */
@ControllerAdvice //전역 예외 처리
@Slf4j
public class GlobalExceptionHandler {


    @ExceptionHandler(ExpiredJwtException.class)
    public void handleExpiredJwtException(ExpiredJwtException ex) {
        log.error("[AOP] handleExpiredJwtException Err"); // 다음 예외 발생 시 로깅을 하지 않음
    }

    @ExceptionHandler(SignatureException.class)
    public void handleSignatureException(SignatureException ex) {
        log.error("[AOP] handleSignatureException Err"); // 다음 예외 발생 시 로깅을 하지 않음
    }

}
