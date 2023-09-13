package com.ssafy.ssagri.entity.auction;

import com.ssafy.ssagri.entity.common.BaseTimeEntity;
import com.ssafy.ssagri.entity.user.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.apachecommons.CommonsLog;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Table(name = "auction_product")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AuctionProduct extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "auction_product_no")
    private Long no;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no",nullable = false)
    private User user;

    @Column(name = "auction_product_name",nullable = false)
    private String name;

    @Column(name = "auction_product_up_price",nullable = false)
    private int upPrice;

    @Column(name = "auction_product_down_price",nullable = false)
    private int downPrice;

    @Column(name = "auction_product_price",nullable = false)
    private int price;

    @Column(name = "auction_product_start_date",nullable = false)
    private LocalDateTime startDate;

    @Column(name = "auction_product_end_date",nullable = false)
    private LocalDateTime endDate;

    @Column(name = "auction_product_comment")
    private String comment;

    @Column(name = "auction_product_status",nullable = false)
    private AuctionStatus auctionStatus;

    @Column(name = "auction_product_finally_price")
    private int finallyPrice;

    @Builder
    public AuctionProduct(Long no, User user, String name, int upPrice, int downPrice, int price, LocalDateTime startDate, LocalDateTime endDate, String comment, AuctionStatus auctionStatus, int finallyPrice) {
        this.no = no;
        this.user = user;
        this.name = name;
        this.upPrice = upPrice;
        this.downPrice = downPrice;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.comment = comment;
        this.auctionStatus = auctionStatus;
        this.finallyPrice = finallyPrice;
    }
}
