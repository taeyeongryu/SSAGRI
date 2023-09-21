package com.ssafy.ssagri.entity.auction;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "auction_product_photo")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AuctionProductPhoto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "auction_product_photo_no",nullable = false)
    private Long no;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "auction_product_no",nullable = false)
    private AuctionProduct auctionProduct;

    @Column(name = "auction_product_photo_link", nullable = false, length = 1000)
    private String photoLink;
}
