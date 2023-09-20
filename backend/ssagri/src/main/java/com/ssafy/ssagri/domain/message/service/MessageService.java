package com.ssafy.ssagri.domain.message.service;

import com.ssafy.ssagri.domain.message.dto.MessageRequest;
import com.ssafy.ssagri.domain.message.dto.MessageResponse;
import com.ssafy.ssagri.domain.message.repository.MessageRepository;
import com.ssafy.ssagri.entity.chat.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MessageService {
    private final MessageRepository messageRepository;

    /*
    * MessageRequest를 받아서
    * Entity로 바꾸고 DB 저장
    * MessageResponse로 바꿔서 client로 반환
    * */
    @Transactional
    public MessageResponse saveMessage(MessageRequest messageRequest){
        System.out.println("messageRequest123 = " + messageRequest);
        //Entity로 바꾸고
        Message message = messageRequest.toEntity();

        //저장
        messageRepository.save(message);

        //client로 반환
        return messageRequest.toResponse();
    }
}
