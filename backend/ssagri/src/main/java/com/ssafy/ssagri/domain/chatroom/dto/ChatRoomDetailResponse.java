package com.ssafy.ssagri.domain.chatroom.dto;

import com.ssafy.ssagri.domain.message.dto.MessageResponse;

import lombok.Builder;
import org.springframework.data.domain.Page;
import org.springframework.objenesis.instantiator.perc.PercInstantiator;


import java.util.List;

public class ChatRoomDetailResponse {
    private Long chatRoomNo;
    private Long userANo;
    private Long userBNo;
    private String chatRoomCode;


    private Page<MessageResponse> messageResponseList;
    @Builder

    public ChatRoomDetailResponse(Long chatRoomNo, Long userANo, Long userBNo, String chatRoomCode, Page<MessageResponse> messageResponseList) {
        this.chatRoomNo = chatRoomNo;
        this.userANo = userANo;
        this.userBNo = userBNo;
        this.chatRoomCode = chatRoomCode;
        this.messageResponseList = messageResponseList;
    }
}
