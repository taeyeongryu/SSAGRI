package com.ssafy.ssagri.domain.message.service;

import com.ssafy.ssagri.domain.message.dto.MessageRequest;
import com.ssafy.ssagri.domain.message.dto.MessageResponse;
import com.ssafy.ssagri.domain.message.repository.MessageRepository;
import com.ssafy.ssagri.entity.chat.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MessageService {
    private final MessageRepository messageRepository;

    public Page<MessageResponse> selectMessageResponse(Long roomNo, Pageable pageable){
        Page<Message> messages = messageRepository.findMessagesByRoomIdOrderByTimeDesc(roomNo, pageable);
        List<MessageResponse> messageResponseList = new ArrayList<>();
        for (Message message : messages) {
            messageResponseList.add(message.toResponse());
        }
        return new PageImpl<>(messageResponseList, messages.getPageable(), messages.getTotalElements());
    }



    /*
    * MessageRequest를 받아서
    * Entity로 바꾸고 DB 저장
    * MessageResponse로 바꿔서 client로 반환
    * */
    @Transactional
    public MessageResponse saveMessage(MessageRequest messageRequest){
        //Entity로 바꾸고
        Message message = messageRequest.toEntity();

        //저장
        messageRepository.save(message);

        //client로 반환
        return messageRequest.toResponse();
    }
}
