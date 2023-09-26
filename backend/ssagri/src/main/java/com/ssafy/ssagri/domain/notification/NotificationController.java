package com.ssafy.ssagri.domain.notification;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequiredArgsConstructor
@RequestMapping("/notification")
@CrossOrigin("*")
@Api(tags = {"알림을 위한 등록 API"})
@Slf4j
public class NotificationController {
    private final NotificationService notificationService;

    @PostMapping("/subscribe/{userNo}")
    public SseEmitter subscribe(@PathVariable(name = "userNo") Long userNo) {
        SseEmitter sseEmitter = notificationService.addSseEmitter(userNo);
        return sseEmitter;
    }

    @GetMapping("")
    public void test() {
        log.info("test");
        notificationService.sendMessageTest();
    }
}
