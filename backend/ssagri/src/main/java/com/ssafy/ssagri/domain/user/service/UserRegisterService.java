package com.ssafy.ssagri.domain.user.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserRegisterService {
    public ResponseEntity<String> registUSter() {
        try {
            return ResponseEntity.ok()
//                    .header("Refresh-Token", token)
                    .body("Refresh token has been created");
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(e.getMessage());
        }
    }
}
