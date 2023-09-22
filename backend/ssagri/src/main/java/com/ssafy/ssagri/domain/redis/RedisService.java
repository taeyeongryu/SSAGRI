package com.ssafy.ssagri.domain.redis;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

/**
 * RedisRepository가 아닌 RedisTemplate를 통한 직접 조정
 * 로그인 시 접속 정보 저장, 인증번호 저장 등
 * 인메모리 휘발성 정보등을 저장 및 관리
 */
@Service
@RequiredArgsConstructor
public class RedisService {
    private final RedisTemplate<Object, Object> redisTemplate;
    private final StringRedisTemplate stringRedisTemplate; //직렬화하여 값을 저장
    public void saveRefreshToken(Long userNo, String tokenValue) {
        String key = "RT" + userNo;
        redisTemplate.opsForValue().set(key, tokenValue); //
        redisTemplate.expire(key, 3600 * 12, TimeUnit.SECONDS);
    }

    public void deleteRefreshTokenByUserNo(Long userNo) {
        String key = "RT" + userNo;
        redisTemplate.delete(key);
    }

    public Boolean keyExists(Long userNo) {
        String key = "RT" + userNo;
        return redisTemplate.hasKey(key);
    }

    public void saveRegistAuthCode(String authcode) {
        stringRedisTemplate.opsForValue().set(authcode, "authcode");
        stringRedisTemplate.expire(authcode, 600, TimeUnit.SECONDS);
    }

    public void deleteRegistAuthCode(String authcode){
        redisTemplate.delete(authcode);
    }

    public Boolean authcodeExists(String authcode) {
        return stringRedisTemplate.hasKey(authcode);
    }
}
