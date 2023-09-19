package com.ssafy.ssagri.domain.chat.controller;


import com.ssafy.ssagri.domain.chat.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat")
public class MassageController {
    private final MessageService messageService;

    @PostMapping("")
    public String save(){
        return messageService.saveMessage();
    }
}
