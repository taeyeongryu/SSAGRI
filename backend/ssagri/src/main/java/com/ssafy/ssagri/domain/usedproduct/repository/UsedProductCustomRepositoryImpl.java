package com.ssafy.ssagri.domain.usedproduct.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.QueryResults;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.jpa.impl.JPAQueryFactory;

import com.ssafy.ssagri.entity.usedproduct.ProductCategory;
import com.ssafy.ssagri.entity.usedproduct.QUsedProduct;
import com.ssafy.ssagri.entity.usedproduct.UsedProduct;
import com.ssafy.ssagri.entity.user.Region;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import javax.persistence.EntityManager;
import java.util.List;

public class UsedProductCustomRepositoryImpl implements UsedProductCustomRepository{
    private final JPAQueryFactory jpaQueryFactory;

    QUsedProduct usedProduct = QUsedProduct.usedProduct;

    public UsedProductCustomRepositoryImpl(EntityManager entityManager) {
        this.jpaQueryFactory = new JPAQueryFactory(entityManager);
    }

    /*
    * 카테고리,지역 설정해서 모든 중고물품 다 가져올 수 있는 메서드
    * */
    @Override
    public Page<UsedProduct> selectAllUsedProduct(ProductCategory productCategory, Region region, Pageable pageable) {
        BooleanBuilder builder = new BooleanBuilder();
        builder.and(usedProduct.deleteDate.isNull());
        if (productCategory != null) {
            builder.and(usedProduct.category.eq(productCategory));
        }

        if(region != null){
            builder.and(usedProduct.user.region.eq(region));
        }

        QueryResults<UsedProduct> usedProductQueryResults = jpaQueryFactory.selectFrom(usedProduct)
                .where(builder)
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .orderBy(getOrderSpecifier(pageable))
                .fetchResults();

        List<UsedProduct> results = usedProductQueryResults.getResults();
        long total = usedProductQueryResults.getTotal();

        return new PageImpl<>(results, pageable, total);
    }
    /*
    * 특정 유저가 등록한 중고물품 다 가져오는 메서드
    * */
    @Override
    public Page<UsedProduct> selectUsedProductByUserNo(Long userNo, Pageable pageable) {
        QueryResults<UsedProduct> usedProductQueryResults = jpaQueryFactory.selectFrom(usedProduct)
                .where(usedProduct.deleteDate.isNull().and(usedProduct.user.no.eq(userNo)))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .orderBy(getOrderSpecifier(pageable))
                .fetchResults();
        List<UsedProduct> results = usedProductQueryResults.getResults();
        long total = usedProductQueryResults.getTotal();

        return new PageImpl<>(results, pageable, total);
    }

    private OrderSpecifier<?> getOrderSpecifier(Pageable pageable){
        if (!pageable.getSort().isEmpty()){
            for (Sort.Order order : pageable.getSort()) {
                Order direction = order.getDirection().isAscending() ? Order.ASC : Order.DESC;
                switch (order.getProperty()){
                    case "no":
                        return new OrderSpecifier<>(direction, usedProduct.no);
                    case "price":
                        return new OrderSpecifier<>(direction, usedProduct.price);
                    case "like":
                        return new OrderSpecifier<>(direction, usedProduct.likeCount);
                    default:
                        return null;
                }
            }
        }
        return null;
    }
}
