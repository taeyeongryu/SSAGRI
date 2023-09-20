package com.ssafy.ssagri.entity.board;

import com.ssafy.ssagri.entity.common.BaseTimeEntity;
import com.ssafy.ssagri.entity.user.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "board_list")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardList extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_list_no")
    private Long no;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_list_writer_no",nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_no",nullable = false)
    private Board board;

    @Column(name = "board_list_title",nullable = false, length = 55)
    private String title;

    @Column(name = "board_list_show_name",nullable = false)
    @ColumnDefault("true")
    private boolean showName;

    @Column(name = "board_list_allow_comment",nullable = false)
    private boolean allowComment;

    @Column(name = "board_list_view",nullable = false)
    @ColumnDefault("0")
    private int view;

    @Lob
    @Column(name = "board_list_content",nullable = false)
    private String content;

    @Column(name = "board_list_like",nullable = false)
    @ColumnDefault("0")
    private int like;

    @Builder
    public BoardList(Long no, User user, Board board, String title, boolean showName, boolean allowComment, int view, String content, int like) {
        this.no = no;
        this.user = user;
        this.board = board;
        this.title = title;
        this.showName = showName;
        this.allowComment = allowComment;
        this.view = view;
        this.content = content;
        this.like = like;
    }
}
