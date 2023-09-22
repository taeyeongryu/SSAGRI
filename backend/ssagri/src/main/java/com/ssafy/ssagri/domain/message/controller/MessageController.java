package com.ssafy.ssagri.domain.message.controller;


import com.ssafy.ssagri.domain.message.dto.MessageRequestDto;
import com.ssafy.ssagri.domain.message.dto.MessageResponseDto;
import com.ssafy.ssagri.domain.message.service.MessageService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("message")
public class MessageController {
    private final MessageService messageService;


    @MessageMapping("/chat/room/1")
    @SendTo("/sub/chat/room/1")
    @ApiOperation("메시지 보내는 메서드")
    public MessageResponseDto sendMessage(MessageRequestDto messageRequest) {
        System.out.println("messageRequest = " + messageRequest);
        MessageResponseDto messageResponse = messageService.saveMessage(messageRequest);
        return messageResponse;
    }

    @GetMapping("")
    @ApiOperation("chatRoomNo로 메시지 조회하는 메서드")
    public Page<MessageResponseDto> selectMessage(Long roomNo, Pageable pageable){
        return messageService.selectMessageResponse(roomNo, pageable);
    }

    @PostMapping("")
    public MessageResponseDto saveMessage(MessageRequestDto messageRequest) {
        return messageService.saveMessage(messageRequest);
    }
}
