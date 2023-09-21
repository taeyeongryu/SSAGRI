package com.ssafy.ssagri.domain.message.dto;


import com.ssafy.ssagri.entity.chat.Message;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class MessageRequest {
    private Long chatRoomNo;
    private Long senderNo;
    private Long receiverNo;
    private String content;

    @Builder
    public MessageRequest(Long chatRoomNo, Long senderNo, Long receiverNo, String content) {
        this.chatRoomNo = chatRoomNo;
        this.senderNo = senderNo;
        this.receiverNo = receiverNo;
        this.content = content;
    }

    public MessageResponse toResponse(){
        return MessageResponse.builder()
                .chatRoomNo(this.chatRoomNo)
                .senderNo(this.senderNo)
                .receiverNo(this.receiverNo)
                .content(this.content)
                .time(LocalDateTime.now())
                .build();
    }

    public Message toEntity(){
        Message message = Message.builder()
                .roomNo(chatRoomNo)
                .senderNo(senderNo)
                .receiverNo(receiverNo)
                .content(content)
                .time(LocalDateTime.now())
                .build();
        return message;
    }
}
