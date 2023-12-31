package com.ssafy.ssagri.domain.chatroom.dto;

import com.ssafy.ssagri.domain.message.dto.MessageResponseDto;

import lombok.Builder;
import org.springframework.data.domain.Page;

public class ChatRoomDetailResponseDto {
    private Long chatRoomNo;
    private Long userANo;
    private Long userBNo;
    private String chatRoomCode;


    private Page<MessageResponseDto> messageResponseList;
    @Builder

    public ChatRoomDetailResponseDto(Long chatRoomNo, Long userANo, Long userBNo, String chatRoomCode, Page<MessageResponseDto> messageResponseList) {
        this.chatRoomNo = chatRoomNo;
        this.userANo = userANo;
        this.userBNo = userBNo;
        this.chatRoomCode = chatRoomCode;
        this.messageResponseList = messageResponseList;
    }
}
