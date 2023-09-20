package com.ssafy.ssagri.domain.chatroom.controller;

import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomDetailResponse;
import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomResponse;
import com.ssafy.ssagri.domain.chatroom.service.ChatRoomService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/chatroom")
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

    @PostMapping("/{userANo}/{userBNo}")
    @ApiOperation("UserA, UserB의 No를 받아서 채팅방 생성해주는 메서드")
    public ChatRoomResponse saveChatRoom(@PathVariable(name = "userANo") Long userANo
            ,@PathVariable(name = "userBNo") Long userBNo){
        return chatRoomService.saveChatRoom(userANo, userBNo);
    }

    @GetMapping("/list/{userNo}")
    @ApiOperation("UserA의 No를 받아서 UserA의 채팅방 목록 반환하는 메서드")
    public List<ChatRoomResponse> selectChatRoomByUser(@PathVariable(name = "userNo") Long userNo){
        List<ChatRoomResponse> chatRoomResponseList = chatRoomService.selectAllChatRoomByUser(userNo);
        return chatRoomResponseList;
    }

    @GetMapping("/{chatRoomNo}")
    @ApiOperation("chatRoomNo를 받아서 chatRoom 반환")
    public ChatRoomResponse selectOneChatRoom(@PathVariable(name = "chatRoomNo") Long chatRoomNo){
        return chatRoomService.selectOneChatRoom(chatRoomNo);
    }

    //채팅방 입장할 때 호출하는 메서드
    //이거 실행하면 방 없으면 방 만들고
    //이미 대화로그 있으면 대화까지 불러옴
    @GetMapping("/{userANo}/{userBNo}")
    @ApiOperation("userA,userB의 채팅방에 입장하는 메서드 반환값은 채팅방 정보랑 메시지를 반환")
    public ChatRoomDetailResponse selectChatRoomDetail(@PathVariable(name = "userANo") Long userANo,@PathVariable(name = "userBNo") Long userBNo, Pageable pageable){
        chatRoomService.saveChatRoom(userANo, userBNo);
        ChatRoomDetailResponse chatRoomDetailResponse = chatRoomService.selectChatRoomDetailByUsers(userANo, userBNo, pageable);
        return chatRoomDetailResponse;
    }
    @DeleteMapping("/{userANo}/{userBNo}")
    @ApiOperation("chatRoomNo로 채팅방 삭제하는 메서드")
    public void deleteChatRoom(@PathVariable(name = "userANo") Long userANo,@PathVariable(name = "userBNo") Long userBNo){
        chatRoomService.deleteChatRoom(userANo, userBNo);
    }
}
