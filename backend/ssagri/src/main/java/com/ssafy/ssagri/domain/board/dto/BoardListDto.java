package com.ssafy.ssagri.domain.board.dto;


import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;


@Getter
@Builder
public class BoardListDto {

    // 글 no
    private Long no;

    // 글을 쓰는 사람 no
    private Long user;

    // 게시판 no
    private String boardName;

    // 게시판 생명 주기
    private LocalDateTime boardLife;

    // 글 제목
    private String title;

    // 댓글 허가 여부
    private boolean allowComment;

    // 조회수
    private int view;

    // 글 내용
    private String content;

    // 글 좋아요 수
    private int like;
}
