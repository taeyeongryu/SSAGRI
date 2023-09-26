package com.ssafy.ssagri.domain.auctionbid.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AuctionBidSelectResponseDto {

    //경매 상품
    private Long auctionProductNo;
    //입찰자 No
    private Long userNo;
    //입찰자 Nickname
    private String userNickname;
    //입찰 금액
    private int auctionBidPrice;
    //입찰 일시
    private LocalDateTime auctionBidDate;

    @Builder
    public AuctionBidSelectResponseDto(Long auctionProductNo, Long userNo, String userNickname, int auctionBidPrice, LocalDateTime auctionBidDate) {
        this.auctionProductNo = auctionProductNo;
        this.userNo = userNo;
        this.userNickname = userNickname;
        this.auctionBidPrice = auctionBidPrice;
        this.auctionBidDate = auctionBidDate;
    }
}
