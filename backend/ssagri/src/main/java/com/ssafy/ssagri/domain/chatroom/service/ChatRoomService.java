package com.ssafy.ssagri.domain.chatroom.service;

import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomResponse;
import com.ssafy.ssagri.domain.chatroom.repository.ChatRoomRepository;
import com.ssafy.ssagri.entity.chat.ChatRoom;
import com.ssafy.ssagri.entity.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChatRoomService {
    private final ChatRoomRepository chatRoomRepository;

    /*유저 두 명 받아서
     채팅방 만드는 메서드 채팅방 pk를 반환한다.

     채팅방이 이미 있다면 만들지 않고 이미 있는 채팅방의 pk를 반환
     */
    @Transactional
    public Long saveChatRoom(Long userANo, Long userBNo){
        //이미 존재하는 채팅방이 있는지 확인한다.
        Optional<ChatRoom> findChatRoom = chatRoomRepository.selectByUserAUserB(userANo, userBNo);
        if (findChatRoom.isEmpty()){
            //임시로 하는 것 나중에 파라미터로 받은 유저를 select 해서
            //채팅방 만들어야 함
            //야미로 만든 것임
            User userA = null;
            User userb = null;
            String roomCode = UUID.randomUUID().toString();
            ChatRoom chatRoom = ChatRoom.builder()
                    .userA(userA)
                    .userB(userb)
                    .roomCode(roomCode).build();
            chatRoomRepository.save(chatRoom);
            return chatRoom.getNo();
            //채팅방 생성한다.
        }else{
            return findChatRoom.get().getNo();
        }
    }
    /*
    * 특정유저의 No를 받아서
    * Dto로 반환하는 메서드
    * */
    public List<ChatRoomResponse> selectChatRoomByUser(Long userNo){
        List<ChatRoom> chatRoomList = chatRoomRepository.selectByUserNo(userNo);
        List<ChatRoomResponse> chatRoomResponseList = new ArrayList<>();
        for (ChatRoom chatRoom : chatRoomList) {
            ChatRoomResponse chatRoomResponse = ChatRoomResponse.builder()
                    .no(chatRoom.getNo())
                    .userANo(chatRoom.getUserA().getNo())
                    .userBNo(chatRoom.getUserB().getNo())
                    .roomCode(chatRoom.getRoomCode())
                    .updateDate(chatRoom.getChatUpdateDate())
                    .build();
            chatRoomResponseList.add(chatRoomResponse);
        }
        return chatRoomResponseList;
    }
    /*
    * 채팅방의 최근 대화시간으로
    * 업데이트 하는 메서드
    * */
    @Transactional
    public void updateDate(Long chatRommNo){
        Optional<ChatRoom> findChatRoom = chatRoomRepository.findById(chatRommNo);

        //채팅방이 존재한다면
        if (findChatRoom.isPresent()) {
            findChatRoom.get().updateDate();
        }
        //채팅방이 존재하지 않으면
        else {
            //예외처리 할것
        }
    }

    /*
    * 채팅방 지우는 메서드
    * */
    @Transactional
    public void deleteChatRoom(Long userANo, Long userBNo){
        Optional<ChatRoom> findChatRoom = chatRoomRepository.selectByUserAUserB(userANo, userBNo);
        //채팅방이 존재한다면
        if (findChatRoom.isPresent()) {
            Long chatRoomNo = findChatRoom.get().getNo();
            chatRoomRepository.deleteById(chatRoomNo);
        }
        //채팅방이 존재하지 않으면
        else {
            //예외처리 할것
        }

    }

}
