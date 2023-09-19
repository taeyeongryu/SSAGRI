package com.ssafy.ssagri.domain.usedproduct.dto.response;

import com.ssafy.ssagri.domain.usedproductphoto.dto.UsedProductPhotoResponse;
import com.ssafy.ssagri.entity.usedproduct.ProductCategory;
import com.ssafy.ssagri.entity.usedproduct.SaleStatus;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UsedProductResponse {
    private Long productNo;
    private Long registerNo;
    private String registerNickName;
    private ProductCategory productCategory;
    private String title;
    private String content;
    private int price;
    private SaleStatus saleStatus;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;

    private List<UsedProductPhotoResponse> photolist = new ArrayList<>();

    private boolean isLike;

    @Builder
    public UsedProductResponse(Long productNo, Long registerNo, String registerNickName, ProductCategory productCategory, String title, String content, int price, SaleStatus saleStatus, LocalDateTime createDate, LocalDateTime updateDate, List<UsedProductPhotoResponse> photolist, boolean isLike) {
        this.productNo = productNo;
        this.registerNo = registerNo;
        this.registerNickName = registerNickName;
        this.productCategory = productCategory;
        this.title = title;
        this.content = content;
        this.price = price;
        this.saleStatus = saleStatus;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.photolist = photolist;
        this.isLike = isLike;
    }
}
