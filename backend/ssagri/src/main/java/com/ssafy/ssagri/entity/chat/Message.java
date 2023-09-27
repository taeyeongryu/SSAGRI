package com.ssafy.ssagri.entity.chat;

import com.ssafy.ssagri.domain.message.dto.MessageResponseDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.time.LocalDateTime;

@Document
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Message {
    @Id
    private String id;
    private Long roomNo;
    private Long senderNo;
    private String senderNickName;
    private Long receiverNo;
    private String receiverNickName;
    private String content;
    private LocalDateTime time;

    @Builder
    public Message(String id, Long roomNo, Long senderNo, String senderNickName, Long receiverNo, String receiverNickName, String content, LocalDateTime time) {
        this.id = id;
        this.roomNo = roomNo;
        this.senderNo = senderNo;
        this.senderNickName = senderNickName;
        this.receiverNo = receiverNo;
        this.receiverNickName = receiverNickName;
        this.content = content;
        this.time = time;
    }

    public MessageResponseDto toResponse(){
        MessageResponseDto messageResponse = MessageResponseDto.builder()
                .chatRoomNo(roomNo)
                .senderNo(senderNo)
                .senderNickName(senderNickName)
                .receiverNo(receiverNo)
                .receiverNickName(receiverNickName)
                .content(content)
                .time(time)
                .build();
        return messageResponse;
    }
}
