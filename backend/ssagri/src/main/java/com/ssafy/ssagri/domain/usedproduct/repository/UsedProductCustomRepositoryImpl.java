package com.ssafy.ssagri.domain.usedproduct.repository;

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

    @Override
    public Page<UsedProduct> selectAllUsedProduct(ProductCategory productCategory, Region region, Pageable pageable) {
        QueryResults<UsedProduct> usedProductQueryResults = jpaQueryFactory.selectFrom(usedProduct)
                .where(usedProduct.deleteDate.isNull()
                        .and(usedProduct.category.eq(productCategory))
                        .and(usedProduct.user.region.eq(region)))
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
//                    case "like":
//                        return new OrderSpecifier<>(direction, usedProduct.like);
                    default:
                        return null;
                }

            }
        }
        return null;
    }
}
