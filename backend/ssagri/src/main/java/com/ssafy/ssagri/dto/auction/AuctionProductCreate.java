package com.ssafy.ssagri.dto.auction;

import com.ssafy.ssagri.entity.auction.AuctionProductType;
import com.ssafy.ssagri.entity.auction.AuctionStatus;
import com.ssafy.ssagri.entity.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@ToString
@Builder
public class AuctionProductCreate {

    // 경매 주최자 아이디
    private Long userNo;

    // 상품 명
    private String name;

    // 상품 설명
    private String comment;

    // 상태
    private AuctionStatus status;

    // 경매 시작 시간
    private LocalDateTime startDate;

    // 경매 마감 시간
    private LocalDateTime endDate;

    // 경매 하한가
    private int downPrice;

    // 경매 상한가
    private int upPrice;

    // 경매 정가
    private int originPrice;

    // 경매 입찰 단위
    private int countPrice;

    // 물품 분류
    private AuctionProductType type;
}
