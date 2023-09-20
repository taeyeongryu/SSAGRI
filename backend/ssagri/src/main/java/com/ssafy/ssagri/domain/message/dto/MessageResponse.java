package com.ssafy.ssagri.domain.message.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MessageResponse {
    private Long chatRoomNo;
    private Long senderNo;
    private Long receiverNo;
    private String content;

    @Builder
    public MessageResponse(Long chatRoomNo, Long senderNo, Long receiverNo, String content) {
        this.chatRoomNo = chatRoomNo;
        this.senderNo = senderNo;
        this.receiverNo = receiverNo;
        this.content = content;
    }
}
