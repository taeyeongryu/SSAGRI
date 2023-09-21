package com.ssafy.ssagri.domain.auction.repository;

import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.ssagri.entity.auction.AuctionProduct;
import com.ssafy.ssagri.entity.auction.QAuctionProduct;
import com.ssafy.ssagri.entity.auction.QAuctionProductPhoto;

import javax.persistence.EntityManager;
import java.util.List;


public class AuctionCustomRepositoryImpl implements AuctionCustomRepository{

    private final JPAQueryFactory jpaQueryFactory;


    public AuctionCustomRepositoryImpl(EntityManager entityManager) {
        this.jpaQueryFactory = new JPAQueryFactory(entityManager);
    }

    // 경매 상품
    QAuctionProduct qAuctionProduct = QAuctionProduct.auctionProduct;
    // 경매 상품에 대한 이미지
    QAuctionProductPhoto qAuctionProductPhoto = QAuctionProductPhoto.auctionProductPhoto;

    // 모든 경매리스트 출력 (상품정보)
    @Override
    public void getAuctionProducts(){


//        jpaQueryFactory
//                .select(qAuctionProduct., qAuctionProductPhoto)
//                .from(qAuctionProductPhoto)
//                .rightJoin(qAuctionProductPhoto.auctionProduct,qAuctionProduct)
//                .fetchJoin()
//                .fetch();


    }





}
