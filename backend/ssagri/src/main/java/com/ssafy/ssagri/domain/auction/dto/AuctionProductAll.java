package com.ssafy.ssagri.domain.auction.dto;

import com.ssafy.ssagri.entity.auction.AuctionProductType;

import com.ssafy.ssagri.entity.auction.AuctionStatus;
import lombok.Builder;
import lombok.Getter;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
public class AuctionProductAll {

    // 경매 no
    private Long no;

    // 경매 개최자 no
    private Long userNo;

    // 경매 상품 이름
    private String name;

    // 상품 상한가
    private int upPrice;

    // 상품 하한가
    private int downPrice;

    // 경매 입찰 단위
    private int priceCount;

    // 경매 시작 시간
    private String startDate;

    // 경매 마감 시간
    private String  endDate;

    // 경매 상품 설명
    private String comment;

    // 경매 진행 상태
    private AuctionStatus auctionStatus;

    // 경매 상품 입찰가
    private int finallyPrice;

    // 경매 상품 삭제 시간
    private LocalDateTime deleteDate;

    // 경매 상품 수정 시간
    private LocalDateTime modifyDate;

    // 경매 상품 분류
    private AuctionProductType type;

    // 경매 상품 정가
    private int originPrice;

    // 경매 상품에 대한 이미지들
    @Builder.Default
    private List<AuctionProductPhoto> photos = new ArrayList<>();
}
