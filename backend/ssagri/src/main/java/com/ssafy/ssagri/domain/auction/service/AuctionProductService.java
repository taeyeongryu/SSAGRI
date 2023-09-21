package com.ssafy.ssagri.domain.auction.service;

import com.querydsl.core.Tuple;
import com.ssafy.ssagri.domain.auction.repository.AuctionPhotoRepository;
import com.ssafy.ssagri.domain.auction.repository.AuctionRepository;
import com.ssafy.ssagri.domain.user.repository.UserRegistRepository;
import com.ssafy.ssagri.dto.auction.AuctionProductAll;
import com.ssafy.ssagri.dto.auction.AuctionProductCreate;
import com.ssafy.ssagri.entity.auction.AuctionProduct;
import com.ssafy.ssagri.entity.auction.AuctionProductPhoto;
import com.ssafy.ssagri.entity.chat.ChatRoom;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AuctionProductService {


    private final AuctionRepository auctionRepository;
    private final UserRegistRepository userRegistRepository;
    private final AuctionPhotoRepository auctionPhotoRepository;


    // 경매 모든 리스트 출력
    public List<AuctionProductAll> getAuctionProducts() {

        System.out.println("야야야");
         List<AuctionProduct> products = auctionRepository.findAll();

        System.out.println(products.size() + "야야야");


         List<AuctionProductAll> result = new ArrayList<>();

         for(int i=0;i<products.size();i++){
             AuctionProductAll auctionProductAll = AuctionProductAll.builder()
                     .no(products.get(i).getNo())
                     .userNo(products.get(i).getUser().getNo())
                     .name(products.get(i).getName())
                     .upPrice(products.get(i).getUpPrice())
                     .downPrice(products.get(i).getDownPrice())
                     .priceCount(products.get(i).getPrice())
                     .startDate(products.get(i).getStartDate())
                     .endDate(products.get(i).getEndDate())
                     .comment(products.get(i).getComment())
                     .auctionStatus(products.get(i).getAuctionStatus())
                     .finallyPrice(products.get(i).getFinallyPrice())
                     .modifyDate(products.get(i).getModifyDate())
                     .type(products.get(i).getType())
                     .originPrice(products.get(i).getOriginPrice())
                     .photos(auctionPhotoRepository.findByAuctionProduct(products.get(i)))
                     .build();

                result.add(auctionProductAll);

         }

         return result;
    }


    // 경매 상품 등록
    @Transactional
    public void setAuctionProduct(AuctionProductCreate auctionProductCreate){

        AuctionProduct auctionProduct = AuctionProduct.builder()
                .user(userRegistRepository.findByNo(auctionProductCreate.getUserNo()))
                .name(auctionProductCreate.getName())
                .upPrice(auctionProductCreate.getUpPrice())
                .downPrice(auctionProductCreate.getDownPrice())
                .price(auctionProductCreate.getCountPrice())
                .startDate(auctionProductCreate.getStartDate())
                .endDate(auctionProductCreate.getEndDate())
                .comment(auctionProductCreate.getComment())
                .auctionStatus(auctionProductCreate.getStatus())
                .modifyDate(LocalDateTime.now())
                .originPrice(auctionProductCreate.getOriginPrice())
                .type(auctionProductCreate.getType()).build();



            auctionRepository.save(auctionProduct);
    }


}
