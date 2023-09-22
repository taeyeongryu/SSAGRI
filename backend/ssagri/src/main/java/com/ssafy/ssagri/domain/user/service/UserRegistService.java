package com.ssafy.ssagri.domain.user.service;

import com.ssafy.ssagri.domain.redis.RedisService;
import com.ssafy.ssagri.domain.user.repository.UserRegistRepository;
import com.ssafy.ssagri.dto.user.ResponseDTO;
import com.ssafy.ssagri.dto.user.UserRegistDTO;
import com.ssafy.ssagri.entity.user.RefreshToken;
import com.ssafy.ssagri.entity.user.User;
import com.ssafy.ssagri.util.exception.CustomException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseDTO(REGISTER_IS_OK.getCode(), REGISTER_IS_OK.getMessage()));
    }

    //닉네임 중복 확인 로직
    public ResponseEntity<ResponseDTO> checkDuplicateNickname(String nickname) throws CustomException {
        if (userRegistRepository.isNicknameExists(nickname)) {
            throw new CustomException(REGISTER_NICKNAME_IS_DUPLICATE);
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseDTO(REGISTER_NICKNAME_IS_OK.getCode(), REGISTER_NICKNAME_IS_OK.getMessage()));
    }

    public ResponseEntity<?> checkDuplicateEmail(String email) throws CustomException {
        if(userRegistRepository.isEmailExists(email)) {
            throw new CustomException(REGISTER_EMAIL_IS_DUPLICATE);
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseDTO(REGISTER_EMAIL_IS_OK.getCode(), REGISTER_IS_OK.getMessage()));
    }

    public ResponseEntity<?> getUserImageURI(String email, String uri) {
        //개발 필요
        return ResponseEntity.status(HttpStatus.OK).body("이미지 URI 등록 완료");
    }

    public void saveAuthCodeToRedis(HttpServletRequest request, String authCode) throws CustomException{
        try {
            //2. IP + authCode를 통한 값을 생성하여 Redis에 보관(expire : 10분)
            String clientAddress = request.getRemoteAddr(); // 클라이언트의 IP 주소 얻은 뒤 결합
            authCode = clientAddress + authCode;
            System.out.println("예시 저장값 : " + clientAddress + authCode);
            redisService.saveRegistAuthCode(authCode);

        } catch (Exception e) {
            e.printStackTrace();
            throw new CustomException(MAIL_AUTH_SAVE_ERR);
        }

    }
}
