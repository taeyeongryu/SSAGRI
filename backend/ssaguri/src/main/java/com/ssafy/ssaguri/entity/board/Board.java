package com.ssafy.ssaguri.entity.board;

import com.ssafy.ssaguri.entity.common.BaseTimeEntity;
import com.ssafy.ssaguri.entity.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "board")
@NoArgsConstructor
public class Board extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_no",nullable = false)
    private Long no;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_create_user_no",nullable = false)
    private User user;

    @Column(name = "board_title",nullable = false)
    private String title;

    @Column(name = "board_show_name",nullable = false)
    private boolean showName;

    @Column(name = "board_allow_delete",nullable = false)
    private boolean allowDelete;


    @Builder
    public Board(Long no, User user, String title, boolean showName, boolean allowDelete) {
        this.no = no;
        this.user = user;
        this.title = title;
        this.showName = showName;
        this.allowDelete = allowDelete;
    }
}
