package com.ssafy.ssagri.domain.board.controller;

import com.ssafy.ssagri.domain.auction.dto.AuctionProductAllDTO;
import com.ssafy.ssagri.domain.auction.repository.AuctionCustomRepository;
import com.ssafy.ssagri.domain.board.dto.BoardClickDto;
import com.ssafy.ssagri.domain.board.dto.BoardCreateDto;
import com.ssafy.ssagri.domain.board.dto.BoardDto;
import com.ssafy.ssagri.domain.board.dto.BoardWriteDto;
import com.ssafy.ssagri.domain.board.repository.BoardRopository;
import com.ssafy.ssagri.domain.board.service.BoardService;
import com.ssafy.ssagri.domain.usedproduct.dto.response.UsedProductResponseDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/board")
@RequiredArgsConstructor
@Api(tags = {"게시판에 대한 API"})
@CrossOrigin("*")
public class BoardController {

    final private BoardService boardService;

    // 조회수로 오름차순한 게시판이름이랑 조회수 출력
    @GetMapping("/click-board-list")
    @ApiOperation("조회수로 오름차순한 게시판이름이랑 조회수 출력")
    public List<BoardClickDto> boardClickList() {
        return boardService.boardClickList();
    }

    // 타이틀로 오름차순한 게시판 리스트출력
    @GetMapping("/title-board-list")
    @ApiOperation("이름으로 오름차순한 게시판 리스트출력")
    public List<BoardClickDto> boardTitleList() {
        return boardService.boardTitleList();
    }

    @GetMapping("/all-list")
    @ApiOperation("모든 게시판 출력")
    public Page<BoardDto> allList(Pageable pageable) {
        Page<BoardDto> BoardDtos = boardService.boardList(pageable);
        return BoardDtos;
    }

    // 게시판 등록
    @PostMapping(value = "/regist")
    @ApiOperation("게시판 등록")
    public void boardregist(@RequestBody BoardCreateDto boardCreateDto) {
        boardService.boardregist(boardCreateDto);

    }

    // 게시판에 글 쓰기
    @PostMapping(value = "/write")
    @ApiOperation("게시판에 글 쓰기")
    public void boardWrite(@RequestBody BoardWriteDto boardWriteDto) {
        boardService.boardWrite(boardWriteDto);


    }


}
