package com.ssafy.ssagri.domain.chatroom.controller;

import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomDetailResponseDto;
import com.ssafy.ssagri.domain.chatroom.dto.ChatRoomResponseDto;
import com.ssafy.ssagri.domain.chatroom.service.ChatRoomService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/chatroom")
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

    //채팅방 생성하는 메서드(있으면 있는 것 그대로 반환)
    @PostMapping("/{userANo}/{userBNo}")
    @ApiOperation("UserA, UserB의 No를 받아서 채팅방 생성해주는 메서드")
    public ResponseEntity<ChatRoomResponseDto> saveChatRoom(@PathVariable(name = "userANo") Long userANo, @PathVariable(name = "userBNo") Long userBNo){
        return ResponseEntity.ok(chatRoomService.saveChatRoom(userANo, userBNo));
    }

    //특정 유저가 참여하는 채팅방 전부 조회
    @GetMapping("/list/{userNo}")
    @ApiOperation("UserA의 No를 받아서 UserA의 채팅방 목록 반환하는 메서드")
    public ResponseEntity<List<ChatRoomResponseDto>> selectChatRoomByUser(@PathVariable(name = "userNo") Long userNo){
        List<ChatRoomResponseDto> chatRoomResponseDtoList = chatRoomService.selectAllChatRoomByUser(userNo);
        return ResponseEntity.ok(chatRoomResponseDtoList);
    }

    //채팅 방 번호로 채팅방 반환하는 메서드
    @GetMapping("/{chatRoomNo}")
    @ApiOperation("chatRoomNo를 받아서 chatRoom 반환")
    public ResponseEntity<ChatRoomResponseDto> selectOneChatRoom(@PathVariable(name = "chatRoomNo") Long chatRoomNo){
        return ResponseEntity.ok(chatRoomService.selectOneChatRoom(chatRoomNo));
    }

    //채팅방 입장할 때 호출하는 메서드
    //이거 실행하면 방 없으면 방 만들고
    //이미 대화로그 있으면 대화까지 불러옴
    @GetMapping("/{userANo}/{userBNo}")
    @ApiOperation("userA,userB의 채팅방에 입장하는 메서드 반환값은 채팅방 정보랑 메시지를 반환")
    public ResponseEntity<ChatRoomDetailResponseDto> selectChatRoomDetail(@PathVariable(name = "userANo") Long userANo, @PathVariable(name = "userBNo") Long userBNo, Pageable pageable){
        ChatRoomDetailResponseDto chatRoomDetailResponseDto = chatRoomService.selectChatRoomDetailByUsers(userANo, userBNo, pageable);
        return ResponseEntity.ok(chatRoomDetailResponseDto);

    }

    //채팅방 삭제 메서드
    @DeleteMapping("/{userANo}/{userBNo}")
    @ApiOperation("chatRoomNo로 채팅방 삭제하는 메서드")
    public ResponseEntity<Void> deleteChatRoom(@PathVariable(name = "userANo") Long userANo,@PathVariable(name = "userBNo") Long userBNo){
        chatRoomService.deleteChatRoom(userANo, userBNo);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
