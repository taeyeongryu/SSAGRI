package com.ssafy.ssagri.domain.auction.controller;

import com.ssafy.ssagri.domain.auction.service.AuctionProductService;
import com.ssafy.ssagri.domain.auction.dto.AuctionProductAll;
import com.ssafy.ssagri.domain.auction.dto.AuctionProductCreate;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "/auction-product")
@RequiredArgsConstructor
@Api(tags = {"경매에 대한 API"})
@CrossOrigin("*")
public class AuctionProductController {

    private final AuctionProductService auctionProductService;

    @GetMapping(value = "/all-list")
    @ApiOperation("모든 경매 출력")
    public List<AuctionProductAll> allList(){
        System.out.println("들어왔니");
        return auctionProductService.getAuctionProducts();

    }


    @PostMapping(value = "/auction/regist")
    @ApiOperation("경매 등록")
    public void registList(@RequestBody AuctionProductCreate auctionProductCreate){
        auctionProductService.setAuctionProduct(auctionProductCreate);
        // response 나중에 처리
    }

    @PostMapping(value = "/upload/profile/{no}", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    @ApiOperation("경매 상품 추가시 사진 업로드")
    public String auctionImageUpload(@RequestParam("multipartFile") MultipartFile multipartFile, @PathVariable("no") Long no) throws IOException {

        System.out.println("업로드");
        return auctionProductService.auctionImageUploadToAWS(multipartFile, "auction" + "/" + no , no); // lesson 가 lesson/로 들어감.

    }

}
