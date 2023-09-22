package com.ssafy.ssagri.domain.board.service;

import com.ssafy.ssagri.domain.board.dto.BoardCreateDto;
import com.ssafy.ssagri.domain.board.dto.BoardDto;
import com.ssafy.ssagri.domain.board.repository.BoardRopository;
import com.ssafy.ssagri.domain.user.repository.UserRegistRepository;
import com.ssafy.ssagri.entity.board.Board;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BoardService {

    final private BoardRopository boardRopository;
    final private UserRegistRepository userRegistRepository;

    // 게시판 모두 출력
    public List<BoardDto> boardList(){
        List<Board> boardlist = boardRopository.findAll();

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

        return result;
    }

    // 게시판 등록
    public void regist(BoardCreateDto boardCreateDto){
        Board board = Board.builder()
                .user(userRegistRepository.findByNo(boardCreateDto.getNo()))
                .title(boardCreateDto.getTitle())
                .boardColor(boardCreateDto.getColor())
                .boardClick(0)
                .showName(boardCreateDto.getWho())

                .allowDelete(true).build();

        boardRopository.save(board);

    }
}
