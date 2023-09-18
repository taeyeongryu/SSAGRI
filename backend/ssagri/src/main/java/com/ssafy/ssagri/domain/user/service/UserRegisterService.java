package com.ssafy.ssagri.domain.user.service;

import com.ssafy.ssagri.domain.user.repository.UserRegistRepository;
import com.ssafy.ssagri.util.exception.CustomException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.REGISTER_EMAIL_IS_DUPLICATE;
import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.REGISTER_NICKNAME_IS_DUPLICATE;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserRegisterService {

    private final UserRegistRepository userRegistRepository;

    @Transactional
    public ResponseEntity<String> registUser() {
        try {
            return ResponseEntity.ok()
//                    .header("Refresh-Token", token)
                    .body("Refresh token has been created");
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(e.getMessage());
        }
    }

    //닉네임 중복 확인 로직
    public ResponseEntity<String> checkDuplicateNickname(String nickname) throws CustomException {
        if (userRegistRepository.isNicknameExists(nickname)) {
            throw new CustomException(REGISTER_NICKNAME_IS_DUPLICATE);
        }
        return ResponseEntity.status(HttpStatus.OK).body("닉네임이 유효합니다.");
    }

    public ResponseEntity<?> checkDuplicateEmail(String email) throws CustomException {
        if(userRegistRepository.isEmailExists(email)) {
            throw new CustomException(REGISTER_EMAIL_IS_DUPLICATE);
        }
        return ResponseEntity.status(HttpStatus.OK).body("이메일이 유효합니다.");
    }

}
