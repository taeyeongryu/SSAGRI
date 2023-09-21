package com.ssafy.ssagri.entity.usedproduct;

import com.ssafy.ssagri.domain.usedproduct.dto.response.UsedProductResponseDto;
import com.ssafy.ssagri.entity.common.BaseTimeEntity;
import com.ssafy.ssagri.entity.user.Region;
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

    @Column(name = "used_product_region",nullable = false)
    private Region region;

    @OneToMany(mappedBy = "usedProduct",cascade = CascadeType.ALL)
    private List<UsedProductPhoto> usedProductPhotoList = new ArrayList<>();


    @Builder
    public UsedProduct(Long no, User user, ProductCategory category, String title, String content, int price, SaleStatus status, Region region) {
        this.no = no;
        this.user = user;
        this.category = category;
        this.title = title;
        this.content = content;
        this.price = price;
        this.status = status;
        this.region = region;
    }


    public UsedProductResponseDto toResponse(){
        return UsedProductResponseDto.builder()
                .productNo(this.no)
                .productCategory(this.category)
                .title(this.title)
                .price(this.price)
                .saleStatus(this.status)
                .region(this.region)
                .createDate(this.getCreateDate())
                .updateDate(this.getUpdateDate())
                .build();
    }

}
