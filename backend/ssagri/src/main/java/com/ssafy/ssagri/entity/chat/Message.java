package com.ssafy.ssagri.entity.chat;

import com.ssafy.ssagri.domain.message.dto.MessageResponse;
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
    private Long receiverNo;
    private String content;
    private LocalDateTime time;

    @Builder
    public Message(String id, Long roomNo, Long senderNo, Long receiverNo, String content, LocalDateTime time) {
        this.id = id;
        this.roomNo = roomNo;
        this.senderNo = senderNo;
        this.receiverNo = receiverNo;
        this.content = content;
        this.time = time;
    }


    public MessageResponse toResponse(){
        MessageResponse messageResponse = MessageResponse.builder()
                .chatRoomNo(roomNo)
                .senderNo(senderNo)
                .receiverNo(receiverNo)
                .content(content)
                .time(time)
                .build();
        return messageResponse;
    }
}
