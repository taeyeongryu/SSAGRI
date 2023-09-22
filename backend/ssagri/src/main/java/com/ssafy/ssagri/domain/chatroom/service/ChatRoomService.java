package com.ssafy.ssagri.domain.chatroom.service;

import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomDetailResponseDto;
import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomResponseDto;
import com.ssafy.ssagri.domain.chatroom.repository.ChatRoomRepository;
import com.ssafy.ssagri.domain.message.dto.MessageResponseDto;
import com.ssafy.ssagri.domain.message.service.MessageService;
import com.ssafy.ssagri.entity.chat.ChatRoom;
import com.ssafy.ssagri.entity.user.User;
import com.ssafy.ssagri.util.exception.CustomException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.CHATROOM_DOES_NOT_EXSIST;

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
    public ChatRoomResponseDto saveChatRoom(Long userANo, Long userBNo){
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
        return chatRoom.toResponse();
        //채팅방 생성한다.
    }
    /*
    * 특정유저의 No를 받아서 그 사람 참여하고
    * 있는 모든 채팅방 정보 Dto로 반환하는 메서드
    * */
    public List<ChatRoomResponseDto> selectAllChatRoomByUser(Long userNo){
        List<ChatRoom> chatRoomList = chatRoomRepository.selectByUserNo(userNo);
        List<ChatRoomResponseDto> chatRoomResponseDtoList = new ArrayList<>();
        for (ChatRoom chatRoom : chatRoomList) {
            ChatRoomResponseDto chatRoomResponseDto = ChatRoomResponseDto.builder()
                    .no(chatRoom.getNo())
                    .userANo(chatRoom.getUserA().getNo())
                    .userBNo(chatRoom.getUserB().getNo())
                    .roomCode(chatRoom.getRoomCode())
                    .updateDate(chatRoom.getChatUpdateDate())
                    .build();
            chatRoomResponseDtoList.add(chatRoomResponseDto);
        }
        return chatRoomResponseDtoList;
    }

    public ChatRoomResponseDto selectOneChatRoom(Long chatRoomNo){
        Optional<ChatRoom> findChatRoom = chatRoomRepository.findById(chatRoomNo);
        if (findChatRoom.isEmpty()){
            //예외처리
            throw new CustomException(CHATROOM_DOES_NOT_EXSIST);
        }else{
            return findChatRoom.get().toResponse();
        }
    }

    //이 메서드 실행하기 전에는 save 먼저 해서 채팅방을 만들어 줘야 한다.
    public ChatRoomDetailResponseDto selectChatRoomDetailByUsers(Long userA , Long userB, Pageable pageable){
        Optional<ChatRoom> findChatRoom = chatRoomRepository.selectByUserAUserB(userA, userB);
        ChatRoom chatRoom = findChatRoom.get();

        Page<MessageResponseDto> messageResponseList = messageService.selectMessageResponse(chatRoom.getNo(), pageable);

        ChatRoomDetailResponseDto chatRoomDetailResponseDto = ChatRoomDetailResponseDto.builder()
                .chatRoomNo(chatRoom.getNo())
                .userANo(userA)
                .userBNo(userB)
                .chatRoomCode(chatRoom.getRoomCode())
                .messageResponseList(messageResponseList)
                .build();
        return chatRoomDetailResponseDto;

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
