package com.ssafy.ssagri.domain.user.service;

import com.ssafy.ssagri.domain.redis.RedisService;
import com.ssafy.ssagri.domain.user.repository.UserRegistRepository;
import com.ssafy.ssagri.dto.user.ResponseDTO;
import com.ssafy.ssagri.dto.user.UserRegistDTO;
import com.ssafy.ssagri.entity.user.User;
import com.ssafy.ssagri.util.exception.CustomException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import static com.ssafy.ssagri.util.ResponseStatusEnum.*;
import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserRegistService {

    private final UserRegistRepository userRegistRepository;
    private final RedisService redisService;

    @Transactional
    public ResponseEntity<ResponseDTO> registUser(UserRegistDTO userRegistDTO) throws Exception {
        userRegistRepository.save(
                new User(userRegistDTO.getEmail(),
                        userRegistDTO.getPassword(),
                        userRegistDTO.getNickname(),
                        userRegistDTO.getProfile(),
                        userRegistDTO.getRegions(),
                        userRegistDTO.getNumber()
                        )
        );
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseDTO(REGIST_IS_OK.getCode(), REGIST_IS_OK.getMessage()));
    }

    //닉네임 중복 확인 로직
    public ResponseEntity<ResponseDTO> checkDuplicateNickname(String nickname) throws CustomException {
        if (userRegistRepository.isNicknameExists(nickname)) {
            throw new CustomException(REGISTER_NICKNAME_IS_DUPLICATE);
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseDTO(REGIST_NICKNAME_IS_OK.getCode(), REGIST_NICKNAME_IS_OK.getMessage()));
    }

    public ResponseEntity<?> checkDuplicateEmail(String email) throws CustomException {
        if(userRegistRepository.isEmailExists(email)) {
            throw new CustomException(REGISTER_EMAIL_IS_DUPLICATE);
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseDTO(REGIST_IS_OK.getCode(), REGIST_IS_OK.getMessage()));
    }

    //IP, authCode를 통한 값을 생성하여 Redis에 보관(expire : 10분)
    public void saveAuthCodeToRedis(String authCode) throws CustomException{
        try {
            redisService.saveRegistAuthCode(authCode);
        } catch (Exception e) {
            e.printStackTrace();
            throw new CustomException(MAIL_AUTH_SAVE_ERR);
        }
    }

    //Authcode 유효성 판별
    public void checkAuthcode(String authcode) throws CustomException {
        if(redisService.authcodeExists(authcode)) {
            redisService.deleteRegistAuthCode(authcode); //해당 authcode 제거
            return;
        }
        throw new CustomException(REDIS_GET_VALUE_FAIL); //아닐 경우 에러 리턴
    }
}
