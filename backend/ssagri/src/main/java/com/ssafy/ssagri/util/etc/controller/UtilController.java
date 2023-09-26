package com.ssafy.ssagri.util.etc.controller;

import com.ssafy.ssagri.util.etc.service.UtilService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@Api("기타 유틸 컨트롤러")
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/util/")
/**
 * 기타 필요한 기능등을 단편적으로 제공합니다
 */
public class UtilController {

    private final UtilService utilService;
    @GetMapping("get-userno")
    @ApiOperation("AccessToken을 통해 userNo를 리턴")
    @Operation(description = "authorization header에 토큰 담아서 요청해주시면 됩니다. userNo가 리턴됩니다.")
    public Long getUserNo(HttpServletRequest request) throws Exception {
        return utilService.getUserNo(request);
    }

}
