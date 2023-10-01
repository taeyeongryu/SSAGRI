package com.ssafy.ssagri.domain.chatroom.service;

import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomDetailResponseDto;
import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomListResponseDto;
import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomResponseDto;
import com.ssafy.ssagri.domain.chatroom.repository.ChatRoomRepository;
import com.ssafy.ssagri.domain.message.dto.MessageResponseDto;
import com.ssafy.ssagri.domain.message.repository.MessageRepository;
import com.ssafy.ssagri.domain.message.service.MessageService;
import com.ssafy.ssagri.domain.user.repository.UserRegistAndModifyRepository;
import com.ssafy.ssagri.entity.chat.ChatRoom;
import com.ssafy.ssagri.entity.chat.Message;
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

import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.CHATROOM_DOES_NOT_EXIST;
import static com.ssafy.ssagri.util.exception.CustomExceptionStatus.USER_DOES_NOT_EXSIST;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChatRoomService {
    private final UserRegistAndModifyRepository userRegistAndModifyRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final MessageRepository messageRepository;
    private final MessageService messageService;

    /*
    * 특정유저의 No를 받아서 그 사람 참여하고
    * 있는 모든 채팅방 정보 Dto로 반환하는 메서드
    * */
    public List<ChatRoomListResponseDto> selectAllChatRoomByUser(Long userNo){
        List<Message> MessageList = messageRepository.findChatRoomByUserNo(userNo);
        List<ChatRoomListResponseDto> chatRoomResponseDtoList = new ArrayList<>();
        for (Message msg : MessageList) {
            Long receiverNo = null;
            // 사용자와 수신인의 no가 같다면, 반대편 사용자는 receiverNo, 아니라면 반대
            if (userNo.longValue() == msg.getSenderNo().longValue()) {
                receiverNo = msg.getReceiverNo();
            } else {
                receiverNo = msg.getSenderNo();
            }
            ChatRoomListResponseDto receiver = chatRoomRepository.findReceiver(receiverNo);
            ChatRoomListResponseDto responseDto = ChatRoomListResponseDto.builder()
                    .receiverNo(receiverNo)
                    .chatRoomNo(msg.getRoomNo())
                    .lastMent(msg.getContent())
                    .lastDate(msg.getTime())
                    .receiverNickName(receiver.getReceiverNickName())
                    .receiverProfile(receiver.getReceiverProfile())
                    .receiverRegion(receiver.getReceiverRegion())
                    .build();
            chatRoomResponseDtoList.add(responseDto);
        }
        return chatRoomResponseDtoList;
    }

    public ChatRoomResponseDto selectOneChatRoom(Long chatRoomNo){
        Optional<ChatRoom> findChatRoom = chatRoomRepository.findById(chatRoomNo);
        if (findChatRoom.isEmpty()){
            //예외처리
            throw new CustomException(CHATROOM_DOES_NOT_EXIST);
        }else{
            return findChatRoom.get().toResponse();
        }
    }

    //이 메서드 실행하기 전에는 save 먼저 해서 채팅방을 만들어 줘야 한다.
    public ChatRoomDetailResponseDto selectChatRoomDetailByUsers(Long userA , Long userB, Pageable pageable){
        //채팅방이 없으면 생성하고 있으면 조회하는 메서드
        ChatRoomResponseDto chatRoomResponseDto = saveChatRoom(userA, userB);


        Page<MessageResponseDto> messageResponseList = messageService.selectMessageResponse(chatRoomResponseDto.getNo(), pageable);

        ChatRoomDetailResponseDto chatRoomDetailResponseDto = ChatRoomDetailResponseDto.builder()
                .chatRoomNo(chatRoomResponseDto.getNo())
                .userANo(userA)
                .userBNo(userB)
                .chatRoomCode(chatRoomResponseDto.getRoomCode())
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
            throw new CustomException(CHATROOM_DOES_NOT_EXIST);
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
            throw new CustomException(CHATROOM_DOES_NOT_EXIST);
        }
    }


    /*유저 두 명 받아서
     채팅방 만드는 메서드,
     */
    @Transactional
    public ChatRoomResponseDto saveChatRoom(Long userANo, Long userBNo){
        //채팅방 이미 있는지 확인하고 없으면 만들고 반환
        Optional<ChatRoom> findChatRoom = chatRoomRepository.selectByUserAUserB(userANo, userBNo);

        //채팅방 있으면 그대로 반환
        if (findChatRoom.isPresent()) {
            return findChatRoom.get().toResponse();
        }

        //채팅방 없으면 생성 후 반환
        Optional<User> findUserA = userRegistAndModifyRepository.findById(userANo);
        Optional<User> findUserB = userRegistAndModifyRepository.findById(userBNo);

        User userA = null;
        User userB = null;

        if (findUserA.isPresent()) {
            userA = findUserA.get();
        }else{
            throw new CustomException(USER_DOES_NOT_EXSIST);
        }
        if (findUserB.isPresent()) {
            userB = findUserB.get();
        }
        else{
            throw new CustomException(USER_DOES_NOT_EXSIST);
        }

        //채팅방 생성한다.
        String roomCode = UUID.randomUUID().toString();
        ChatRoom chatRoom = ChatRoom.builder()
                .userA(userA)
                .userB(userB)
                .roomCode(roomCode).build();
        chatRoomRepository.save(chatRoom);
        return chatRoom.toResponse();
    }

    public String selectNickname(Long userNo) {
        return chatRoomRepository.findNickname(userNo);
    }
}
