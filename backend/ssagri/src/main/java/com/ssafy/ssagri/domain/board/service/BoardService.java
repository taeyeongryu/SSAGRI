package com.ssafy.ssagri.domain.board.service;

import com.ssafy.ssagri.domain.board.dto.*;
import com.ssafy.ssagri.domain.board.repository.BoardCommentRepository;
import com.ssafy.ssagri.domain.board.repository.BoardListRepository;
import com.ssafy.ssagri.domain.board.repository.BoardRopository;
import com.ssafy.ssagri.domain.user.repository.UserRegistAndModifyRepository;
import com.ssafy.ssagri.entity.board.Board;
import com.ssafy.ssagri.entity.board.BoardList;
import com.ssafy.ssagri.entity.comment.BoardComment;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BoardService {

    final private BoardRopository boardRopository;
    final private UserRegistAndModifyRepository userRegistAndModifyRepository;
    final private BoardListRepository boardListRepository;
    final private BoardCommentRepository boardCommentRepository;

    // 조회수로 오름차순한 게시판이름이랑 조회수 출력
    public List<BoardClickDto> boardClickList(){

        List<Board> boardlist = boardRopository.findAllByOrderByBoardClickDesc();

        List<BoardClickDto> result = new ArrayList<>();

        for(int i=0;i<boardlist.size();i++){
            BoardClickDto boardClickDto = BoardClickDto.builder()
                    .boardNo(boardlist.get(i).getNo())
                    .title(boardlist.get(i).getTitle())
                    .click(boardlist.get(i).getBoardClick()).build();

            result.add(boardClickDto);
        }
        return result;
    }

    // 게시판 title로 오름차순 리스트 출력
    public List<BoardClickDto> boardTitleList(){

        List<Board> boardlist = boardRopository.findAllByOrderByTitleAsc();

        List<BoardClickDto> result = new ArrayList<>();

        for(int i=0;i<boardlist.size();i++){
            BoardClickDto boardClickDto = BoardClickDto.builder()
                    .boardNo(boardlist.get(i).getNo())
                    .title(boardlist.get(i).getTitle())
                    .click(boardlist.get(i).getBoardClick()).build();

            result.add(boardClickDto);
        }
        return result;
    }

    // 게시판 모두 출력
    public Page<BoardDto> boardList(Pageable pageable){
        Page<Board> allboardlist = boardRopository.findAllByOrderByCreateDateAsc(pageable);

        List<Board> boardlist = allboardlist.getContent();

        List<BoardDto> result = new ArrayList<>();

        for(int i=0;i<boardlist.size();i++){
            BoardDto boardDto = BoardDto.builder()
                    .no(boardlist.get(i).getNo())
                    .user(boardlist.get(i).getUser().getNickname())
                    .title(boardlist.get(i).getTitle())
                    .boardClick(boardlist.get(i).getBoardClick())
                    .showName(boardlist.get(i).getShowName())
                    .allowDelete(boardlist.get(i).isAllowDelete()).build();

            result.add(boardDto);
        }

        return new PageImpl<>(result, allboardlist.getPageable(), allboardlist.getTotalElements());
    }

    // 게시판 등록
    @Transactional
    public void boardregist(BoardCreateDto boardCreateDto){
        Board board = Board.builder()
                .user(userRegistAndModifyRepository.findByNo(boardCreateDto.getNo()))
                .title(boardCreateDto.getTitle())
//                .boardColor(boardCreateDto.getColor())
                .boardClick(0)
                .showName(boardCreateDto.getWho())
                .createTime(LocalDateTime.now())
                .boardLife(LocalDateTime.now().plusDays(7))
                .allowDelete(false).build();

        boardRopository.save(board);

    }

    // 게시판 클릭 시 조회수 증가
    @Transactional
    public void boardClick(Long boardNo){
        Board board1 = boardRopository.findByNo(boardNo);

        Board board = Board.builder()
                .boardClick(board1.getBoardClick()+1).build();

        boardRopository.save(board);


    }

    // 게시글 등록
    @Transactional
    public void boardWrite(BoardWriteDto boardWriteDto){
        BoardList boardList = BoardList.builder()
                .user(userRegistAndModifyRepository.findByNo(boardWriteDto.getUserNo()))
                .board(boardRopository.findByNo(boardWriteDto.getBoardNo()))
                .title(boardWriteDto.getTitle())
                .allowComment(boardWriteDto.getAllowComment())
                .view(0)
                .content(boardWriteDto.getContents())
                .like(0).build();

        Board board = Board.builder()
                        .boardLife(boardRopository.findByNo(boardWriteDto.getBoardNo())
                                .getBoardLife().plusHours(1)).build();

        boardRopository.save(board);

        boardListRepository.save(boardList);

    }

    // 게시글에 좋아요 누르기
    @Transactional
    public void writeLike(Long writeNo){
        BoardList boardList1 = boardListRepository.findByNo(writeNo);

        BoardList boardList = BoardList.builder()
                .like(boardList1.getLike()+1).build();

        boardListRepository.save(boardList);

    }

    // 게시글 모두 출력
    public Page<BoardListDto> boardWriteList(Pageable pageable){

        Page<BoardList> allBoardWriteList = boardListRepository.findAllByOrderByCreateDateAsc(pageable);

        List<BoardList> boardWriteList = allBoardWriteList.getContent();

        List<BoardListDto> result = new ArrayList<>();

        for(int i=0;i<boardWriteList.size();i++){
            BoardListDto boardListDto = BoardListDto.builder()
                    .no(boardWriteList.get(i).getNo())
                    .user(boardWriteList.get(i).getUser().getNo())
                    .boardName(boardWriteList.get(i).getBoard().getTitle())
                    .boardLife(boardWriteList.get(i).getBoard().getBoardLife())
                    .title(boardWriteList.get(i).getTitle())
                    .view(boardWriteList.get(i).getView())
                    .like(boardWriteList.get(i).getLike())
                    .allowComment(boardWriteList.get(i).isAllowComment())
                    .content(boardWriteList.get(i).getContent()).build();

            result.add(boardListDto);
        }

        return new PageImpl<>(result, allBoardWriteList.getPageable(), allBoardWriteList.getTotalElements());
    }

    // 생명주기 가장 짧은 Top3 뽑기
    public List<BoardDto> boardLife(){

        List<Board> boardList = boardRopository.findTop3ByOrderByBoardLifeAsc();

        List<BoardDto> result = new ArrayList<>();

        for(int i=0;i<boardList.size();i++){

            String boardLife = boardList.get(i).getBoardLife().format(DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분 ss초"));

            BoardDto boardDto = BoardDto.builder()
                    .no(boardList.get(i).getNo())
                    .user(boardList.get(i).getUser().getNickname())
                    .title(boardList.get(i).getTitle())
                    .boardClick(boardList.get(i).getBoardClick())
                    .showName(boardList.get(i).getShowName())
                    .boardLife(boardLife)
                    .allowDelete(boardList.get(i).isAllowDelete()).build();

            result.add(boardDto);
        }
        return result;
    }

    // 하나의 게시글에 댓글달기
    public void writeComment(BoardWriteCommentDto boardWriteCommentDto){

        BoardComment boardComment = BoardComment.builder()
                .user(userRegistAndModifyRepository.findByNo(boardWriteCommentDto.getUserNo()))
                .boardList(boardListRepository.findByNo(boardWriteCommentDto.getBoardWriteNo()))
                .content(boardWriteCommentDto.getWriteComment()).build();

        boardCommentRepository.save(boardComment);
    }

    // 게시판 삭제
    public void boardDelete(Long boardNo){

        Board board1 = boardRopository.findByNo(boardNo);

        board1.builder()
                .deleteTime(LocalDateTime.now()).build();

        boardRopository.save(board1);
    }
}
