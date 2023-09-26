package com.ssafy.ssagri.domain.auctionbid.controller;

import com.ssafy.ssagri.domain.auctionbid.dto.AuctionBidSaveRequestDto;
import com.ssafy.ssagri.domain.auctionbid.dto.AuctionBidSelectResponseDto;
import com.ssafy.ssagri.domain.auctionbid.service.AuctionBidService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auction-bid")
@CrossOrigin("*")
@Api(tags = {"경매 입찰에 대한 API"})
@Slf4j
public class AuctionBidController {
    private final AuctionBidService auctionBidService;

    @PostMapping("")
    @ApiOperation("경매 상품에 입찰하는 메서드")
    public ResponseEntity<Long> saveAuctionBid(AuctionBidSaveRequestDto auctionBidSaveRequestDto){
        Long bidNo = auctionBidService.save(auctionBidSaveRequestDto);
        return ResponseEntity.ok(bidNo);
    }

    @GetMapping("/{auctionProductNo}")
    @ApiOperation("경매 상품 입찰 내역 조회하는 메서드")
    public ResponseEntity<List<AuctionBidSelectResponseDto>> selectAuctionBid(@PathVariable(name = "auctionProductNo") Long auctionProductNo){
        return ResponseEntity.ok(auctionBidService.selectAuctionBid(auctionProductNo));
    }
}
