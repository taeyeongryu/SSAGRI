package com.ssafy.ssaguri.entity.comment;

import com.ssafy.ssaguri.entity.board.BestBoard;
import com.ssafy.ssaguri.entity.board.BoardList;
import com.ssafy.ssaguri.entity.common.BaseTimeEntity;
import com.ssafy.ssaguri.entity.user.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "board_comment")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardComment extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_comment_no")
    private Long no;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_no", nullable = false)
    private BoardList boardList;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_comment_writer_no",nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_parent_comment_writer_no")
    private BoardComment parentComment;

    @Column(name = "board_comment_content",nullable = false)
    private String content;

    @Column(name = "board_comment_like", nullable = false)
    @ColumnDefault("0")
    private int like;

    @Builder
    public BoardComment(Long no, BoardList boardList, User user, BoardComment parentComment, String content, int like) {
        this.no = no;
        this.boardList = boardList;
        this.user = user;
        this.parentComment = parentComment;
        this.content = content;
        this.like = like;
    }
}
