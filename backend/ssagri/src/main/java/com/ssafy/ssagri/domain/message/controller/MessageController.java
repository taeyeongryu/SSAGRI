package com.ssafy.ssagri.domain.message.controller;


import com.ssafy.ssagri.domain.message.dto.MessageRequest;
import com.ssafy.ssagri.domain.message.dto.MessageResponse;
import com.ssafy.ssagri.domain.message.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class MessageController {
    private final MessageService messageService;


    @MessageMapping("/chat/room/1")
    @SendTo("/sub/chat/room/1")
    public MessageResponse sendMessage(MessageRequest messageRequest) {
        System.out.println("messageRequest = " + messageRequest);
        MessageResponse messageResponse = messageService.saveMessage(messageRequest);
        return messageResponse;
    }
}
