package com.ssafy.ssagri.domain.user.service;

import com.ssafy.ssagri.domain.user.repository.UserRegistAndModifyRepository;
import com.ssafy.ssagri.dto.user.ResponseDTO;
import com.ssafy.ssagri.util.etc.service.UtilService;
import com.ssafy.ssagri.util.exception.CustomException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

import static com.ssafy.ssagri.util.ResponseStatusEnum.MYPAGE_PROFILE_CHANGE_IS_OK;
import static com.ssafy.ssagri.util.ResponseStatusEnum.REGIST_IS_OK;
import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.MYPAGE_PASSWORD_FAIL;
import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.MYPAGE_PROFILE_FAIL;

@Service
@RequiredArgsConstructor
public class UserMypageService {

    private final UserRegistAndModifyRepository userRegistAndModifyRepository;
    private final UtilService utilService;
    public ResponseEntity<?> changeProfile(String path, Long userNo) throws CustomException {
        try {
            userRegistAndModifyRepository.updateImage(path, userNo);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseDTO(MYPAGE_PROFILE_CHANGE_IS_OK.getCode(), MYPAGE_PROFILE_CHANGE_IS_OK.getMessage()));
        } catch (Exception e) {
            throw new CustomException(MYPAGE_PROFILE_FAIL);
        }


    }

    public ResponseEntity<?> changePassword(String password, HttpServletRequest request) throws Exception {
        Long userNo = utilService.getUserNo(request);
        System.out.println(password);
        if(userRegistAndModifyRepository.UserTypeIsNormal(userNo)) throw new CustomException(MYPAGE_PASSWORD_FAIL);
        //여기서 끊김 : if문이 동작하지 않는다.
        System.out.println("완벽하네요");
        return null;
    }
}
