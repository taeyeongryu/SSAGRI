package com.ssafy.ssaguri.entity.usedproduct;

import com.ssafy.ssaguri.entity.common.BaseTimeEntity;
import com.ssafy.ssaguri.entity.user.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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
}
