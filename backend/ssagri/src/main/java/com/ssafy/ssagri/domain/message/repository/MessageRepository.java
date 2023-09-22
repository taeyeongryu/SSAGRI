package com.ssafy.ssagri.domain.message.repository;

import com.ssafy.ssagri.entity.chat.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface MessageRepository extends MongoRepository<Message,String>{
    @Query(value = "{'roomNo' : ?0}", sort = "{'time' : -1}")
    Page<Message> findMessagesByRoomIdOrderByTimeDesc(Long roomNo, Pageable pageable);
}
