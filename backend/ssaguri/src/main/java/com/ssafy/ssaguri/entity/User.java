package com.ssafy.ssaguri.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_no")
    private Long no;

    @Column(name = "user_email", unique = true)
    private String email;


    @Column(name = "user_password")
    private String password;

    @Column(name = "user_nickname", unique = true)
    private String nickname;

    @Column(name = "user_temper")
    private int temper;

    @Column(name = "user_profile")
    private String profile;

    @Column(name = "user_point")
    private int point;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_region")
    private Region region;


    //기수
    @Column(name = "user_name")
    private int number;

}
