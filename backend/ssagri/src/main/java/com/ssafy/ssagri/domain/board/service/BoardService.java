package com.ssafy.ssagri.domain.board.service;

import com.ssafy.ssagri.domain.board.dto.BoardClickDto;
import com.ssafy.ssagri.domain.board.dto.BoardCreateDto;
import com.ssafy.ssagri.domain.board.dto.BoardDto;
import com.ssafy.ssagri.domain.board.dto.BoardWriteDto;
import com.ssafy.ssagri.domain.board.repository.BoardListRepository;
import com.ssafy.ssagri.domain.board.repository.BoardRopository;
import com.ssafy.ssagri.domain.user.repository.UserRegistAndModifyRepository;
import com.ssafy.ssagri.entity.board.Board;
import com.ssafy.ssagri.entity.board.BoardList;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
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
        Page<Board> allboardlist = boardRopository.findAllByOrderByCreateDateDesc(pageable);

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

        boardListRepository.save(boardList);

    }

    // 게시글 모두 출력
//    public Page<BoardListRes> boardList(){
//
//        PageRequest pageRequest = PageRequest.of(0,5);
//
//        Page<BoardList> boardwritelist = boardListRepository.findAll(pageRequest);
//
//
//        boardwritelist.map(B::new);
//
//        return result;
//    }
}
