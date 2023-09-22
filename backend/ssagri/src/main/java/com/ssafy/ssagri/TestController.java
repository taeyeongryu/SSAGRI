package com.ssafy.ssagri;

import com.ssafy.ssagri.domain.user.repository.RandomFirstNameRepository;
import com.ssafy.ssagri.util.mail.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("test")
@RequiredArgsConstructor
@RestController
public class TestController {

    private final RandomFirstNameRepository randomFirstNameRepository;


    @GetMapping
    public String test() {
        System.out.println("TEST");
        return "TEST API 호출입니다.";
    }


    @GetMapping("test")
    public String test2() throws Exception {
        return randomFirstNameRepository.getRandomName();
    }

}
