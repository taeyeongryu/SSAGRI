package com.ssafy.ssagri;

import com.ssafy.ssagri.util.mail.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("test")
@RequiredArgsConstructor
@RestController
public class TestController {

    private final JavaMailSender emailSender;
    private final EmailService emailService;


    @GetMapping
    public String test() {
        System.out.println("TEST");
        return "TEST";
    }


//    @GetMapping("mail")
//    public String test2() {
//        try {
//            sendEmail("syhfqq1810@gmail.com", "테스트 이메일", "안녕하세요! 이것은 테스트 이메일입니다.");
//            return "이메일이 전송되었습니다.";
//        } catch (Exception e) {
//            return "이메일 전송 중 오류가 발생했습니다: " + e.getMessage();
//        }
//    }

    @GetMapping("mail")
    public String test2() throws Exception {
        emailService.sendSimpleMessageRegist("syhfqq1810@gmail.com");
        return "완료";
    }

    public void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
    }
}
