package com.ssafy.ssagri.domain.usedproductphoto.repository;


import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.ssagri.domain.usedproductphoto.dto.QUsedProductPhotoResponse;
import com.ssafy.ssagri.domain.usedproductphoto.dto.UsedProductPhotoResponse;
import com.ssafy.ssagri.entity.usedproduct.QUsedProductPhoto;
import com.ssafy.ssagri.entity.usedproduct.UsedProduct;
import com.ssafy.ssagri.entity.usedproduct.UsedProductPhoto;

import javax.persistence.EntityManager;
import java.util.List;

public class UsedProductPhotoCustomRepositoryImpl implements UsedProductPhotoCustomRepository{

    private final JPAQueryFactory jpaQueryFactory;

    QUsedProductPhoto usedProductPhoto = QUsedProductPhoto.usedProductPhoto;

    public UsedProductPhotoCustomRepositoryImpl(EntityManager entityManager) {
        this.jpaQueryFactory = new JPAQueryFactory(entityManager);
    }


    @Override
    public List<UsedProductPhotoResponse> selectPhotoByProductNo(Long usedProductNo) {
        List<UsedProductPhotoResponse> fetch = jpaQueryFactory.select(new QUsedProductPhotoResponse(usedProductPhoto.no, usedProductPhoto.usedProductPhotoLink))
                .from(usedProductPhoto)
                .where(usedProductPhoto.usedProduct.no.eq(usedProductNo))
                .orderBy(usedProductPhoto.no.asc())
                .fetch();
        return fetch;
    }
}
