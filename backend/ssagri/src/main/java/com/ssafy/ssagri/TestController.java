package com.ssafy.ssagri;

import com.ssafy.ssagri.domain.user.repository.RandomFirstNameRepository;
import com.ssafy.ssagri.util.mail.EmailService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RequestMapping("test")
@RequiredArgsConstructor
@RestController
public class TestController {


    @GetMapping
    public String test() {
        System.out.println("TEST");
        return "TEST API 호출입니다.";
    }

    @PostMapping("file")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {

        return new ResponseEntity<>("업로드 성공", HttpStatus.OK);
    }

}
