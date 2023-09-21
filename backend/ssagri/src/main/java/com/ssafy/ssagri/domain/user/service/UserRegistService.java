package com.ssafy.ssagri.domain.user.service;

import com.ssafy.ssagri.domain.user.repository.UserRegistRepository;
import com.ssafy.ssagri.dto.user.ResponseDTO;
import com.ssafy.ssagri.dto.user.UserRegistDTO;
import com.ssafy.ssagri.entity.user.User;
import com.ssafy.ssagri.util.exception.CustomException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import static com.ssafy.ssagri.util.ResponseStatusEnum.*;
import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.REGISTER_EMAIL_IS_DUPLICATE;
import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.REGISTER_NICKNAME_IS_DUPLICATE;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserRegistService {

    private final UserRegistRepository userRegistRepository;

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

    public ResponseEntity<?> checkNumberIsCorrect(String email) {
        //일단 임시로 무조건 true 처리
        if(false) {
            log.info("유효성 처리, 이메일 : {}", email);
            throw new CustomException(REGISTER_EMAIL_IS_DUPLICATE);
        }
        return ResponseEntity.status(HttpStatus.OK).body("인증번호가 맞습니다.");
    }

    public ResponseEntity<?> getUserImageURI(String email, String uri) {
        //개발 필요
        return ResponseEntity.status(HttpStatus.OK).body("이미지 URI 등록 완료");
    }

}
