package com.ssafy.ssagri.entity.usedproduct;

import com.ssafy.ssagri.domain.usedproduct.dto.response.UsedProductResponse;
import com.ssafy.ssagri.domain.usedproductphoto.dto.UsedProductPhotoResponse;
import com.ssafy.ssagri.entity.common.BaseTimeEntity;
import com.ssafy.ssagri.entity.user.User;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Table(name = "used_product")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UsedProduct extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "used_product_no")
    private Long no;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no",nullable = false)
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(name = "used_product_category",nullable = false)
    private ProductCategory category;

    @Column(name = "used_product_title",nullable = false)
    private String title;

    @Column(name = "used_product_content",length = 1000)
    private String content;

    @Column(name = "used_product_price",nullable = false)
    private int price;

    @Enumerated(EnumType.STRING)
    @Column(name = "used_product_status",nullable = false)
    private SaleStatus status;

    @OneToMany(mappedBy = "usedProduct",cascade = CascadeType.ALL)
    private List<UsedProductPhoto> usedProductPhotoList = new ArrayList<>();


    @Builder
    public UsedProduct(Long no, User user, ProductCategory category, String title, String content, int price, SaleStatus status) {
        this.no = no;
        this.user = user;
        this.category = category;
        this.title = title;
        this.content = content;
        this.price = price;
        this.status = status;
    }

    public UsedProductResponse toResponse(){
        UsedProductResponse usedProductResponse = UsedProductResponse.builder()
                .productNo(this.no)
                .registerNo(this.user.getNo())
                .registerNickName(this.user.getNickname())
                .productCategory(this.category)
                .title(this.title)
                .content(this.content)
                .price(this.price)
                .saleStatus(this.status)
                .createDate(this.getCreateDate())
                .updateDate(this.getUpdateDate())
                .build();

        return usedProductResponse;
    }

}
