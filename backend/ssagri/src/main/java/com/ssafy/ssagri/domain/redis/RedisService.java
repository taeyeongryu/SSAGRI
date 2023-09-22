package com.ssafy.ssagri.domain.redis;

import com.ssafy.ssagri.entity.user.RefreshToken;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;
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

    public void saveRefreshToken(RefreshToken refreshToken) {
        String key = "RefreshToken:" + refreshToken.getUserNo();
        HashOperations<Object, Object, Object> hashOperations = redisTemplate.opsForHash();
        hashOperations.putAll(key, Map.of(
                "userNo", refreshToken.getUserNo(),
                "refreshToken", refreshToken.getRefreshToken(),
                "expiration", refreshToken.getExpiration()
        ));
    }


    public void deleteRefreshTokenByUserNo(Long userNo) {
        String key = "RefreshToken:" + userNo;

        //opsForHash() 메소드를 호출하여 HashOperations 인스턴스 획득, 이 인스턴스를 통해 Hash 데이터 조작
        HashOperations<Object, Object, Object> hashOperations = redisTemplate.opsForHash();
        Map<Object, Object> entries = hashOperations.entries(key); //Hash에 저장된 모든 field와 값을 가져옴

        //Entry를 순회하며 각 field를 삭제
        for (Object field : entries.keySet()) {
            hashOperations.delete(key, field);
        }
    }

    public Boolean keyExists(Long userNo) {
        String key = "RefreshToken:" + userNo;
        return redisTemplate.hasKey(key);
    }

    public void saveRegistAuthCode(String authcode) throws Exception {
        redisTemplate.opsForValue().set(authcode, authcode); //키밸류 동일
        redisTemplate.expire(authcode, 600, TimeUnit.SECONDS);
    }

    public void deleteRegistAuthCode(String authcode) throws Exception {
        redisTemplate.delete(authcode);
    }
}
