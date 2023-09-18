package com.ssafy.ssagri.entity.chat;

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
    private Long roomId;
    private Long userId;
    private String content;
    private LocalDateTime time;
    @Builder
    public Message(String id, Long roomId, Long userId, String content, LocalDateTime time) {
        this.id = id;
        this.roomId = roomId;
        this.userId = userId;
        this.content = content;
        this.time = time;
    }
}
