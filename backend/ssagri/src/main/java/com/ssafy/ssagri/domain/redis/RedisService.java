package com.ssafy.ssagri.domain.redis;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

/**
 * RedisRepository가 아닌 RedisTemplate를 통한 직접 조정
 */
@Service
@RequiredArgsConstructor
public class RedisService {
    private final RedisTemplate<Object, Object> redisTemplate;

    public void deleteRefreshTokenByUserNo(Long userNo) {
        String key = "RefreshToken:" + userNo;
        redisTemplate.delete(key);
    }
}
