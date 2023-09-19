package com.ssafy.ssagri.domain.chat.service;

import com.ssafy.ssagri.domain.chat.repository.MessageRepository;
import com.ssafy.ssagri.entity.chat.Message;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MessageService {
    private final MessageRepository messageRepository;

//    @Transactional
//    public String saveMessage(){
//        Message.builder()
//
//    }
}
