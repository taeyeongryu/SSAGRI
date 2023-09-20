package com.ssafy.ssagri.domain.message.controller;


import com.ssafy.ssagri.domain.message.dto.MessageRequest;
import com.ssafy.ssagri.domain.message.dto.MessageResponse;
import com.ssafy.ssagri.domain.message.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("message")
public class MessageController {
    private final MessageService messageService;


    @MessageMapping("/chat/room/1")
    @SendTo("/sub/chat/room/1")
    public MessageResponse sendMessage(MessageRequest messageRequest) {
        System.out.println("messageRequest = " + messageRequest);
        MessageResponse messageResponse = messageService.saveMessage(messageRequest);
        return messageResponse;
    }

    @GetMapping("")
    public Page<MessageResponse> selectMessage(Long roomNo, Pageable pageable){
        return messageService.selectMessageResponse(roomNo, pageable);
    }
}
