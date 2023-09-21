package com.ssafy.ssagri.entity.user;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.TimeToLive;

/**
 * Redis Entity
 */
@RedisHash("RefreshToken")
@Getter
public class RefreshToken {
    @Id
    private Long userNo;

    private String refreshToken;

    @TimeToLive
    private Long expiration; //TTL Field

    public RefreshToken(Long userNo, String refreshToken, Long expiration) {
        this.userNo = userNo;
        this.refreshToken = refreshToken;
        this.expiration = expiration;
    }
}
