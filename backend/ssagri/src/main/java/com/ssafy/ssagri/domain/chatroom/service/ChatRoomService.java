package com.ssafy.ssagri.domain.chatroom.service;

import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomDetailResponse;
import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomResponse;
import com.ssafy.ssagri.domain.chatroom.repository.ChatRoomRepository;
import com.ssafy.ssagri.domain.message.dto.MessageResponse;
import com.ssafy.ssagri.domain.message.service.MessageService;
import com.ssafy.ssagri.entity.chat.ChatRoom;
import com.ssafy.ssagri.entity.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    private final MessageService messageService;

    /*유저 두 명 받아서
     채팅방 만드는 메서드,
     Service 내부에서만 사용하는 메서드
     */
    @Transactional
    public ChatRoom saveChatRoom(Long userANo, Long userBNo){
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
        return chatRoom;
        //채팅방 생성한다.
    }
    /*
    * 특정유저의 No를 받아서 그 사람 참여하고
    * 있는 모든 채팅방 정보 Dto로 반환하는 메서드
    * */
    public List<ChatRoomResponse> selectAllChatRoomByUser(Long userNo){
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

    //이 메서드 실행하기 전에는 save 먼저 해서 채팅방을 만들어 줘야 한다.
    public ChatRoomDetailResponse selectChatRoomDetailByUser(Long userA , Long userB, Pageable pageable){
        Optional<ChatRoom> findChatRoom = chatRoomRepository.selectByUserAUserB(userA, userB);
        ChatRoom chatRoom = findChatRoom.get();

        Page<MessageResponse> messageResponseList = messageService.selectMessageResponse(chatRoom.getNo(), pageable);

        ChatRoomDetailResponse chatRoomDetailResponse = ChatRoomDetailResponse.builder()
                .chatRoomNo(chatRoom.getNo())
                .userANo(userA)
                .userBNo(userB)
                .chatRoomCode(chatRoom.getRoomCode())
                .messageResponseList(messageResponseList)
                .build();
        return chatRoomDetailResponse;

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
