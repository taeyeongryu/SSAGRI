package com.ssafy.ssagri.domain.message.service;

import com.ssafy.ssagri.domain.message.dto.MessageRequestDto;
import com.ssafy.ssagri.domain.message.dto.MessageResponseDto;
import com.ssafy.ssagri.domain.message.repository.MessageRepository;
import com.ssafy.ssagri.entity.chat.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class MessageService {
    private final MessageRepository messageRepository;

    public Page<MessageResponseDto> selectMessageResponse(Long roomNo, Pageable pageable){
        log.info("roomNo : {}",roomNo);
        Page<Message> messages = messageRepository.findMessagesByRoomNo(roomNo, pageable);
        List<MessageResponseDto> messageResponseList = new ArrayList<>();
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
    public MessageResponseDto saveMessage(MessageRequestDto messageRequest){
        //Entity로 바꾸고
        Message message = messageRequest.toEntity();

        //저장
        messageRepository.save(message);

        //client로 반환
        return messageRequest.toResponse();
    }
}
