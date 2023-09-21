package com.ssafy.ssagri.domain.usedproductphoto.repository;


import com.querydsl.jpa.impl.JPAQueryFactory;

import com.ssafy.ssagri.domain.usedproductphoto.dto.QUsedProductPhotoResponseDto;
import com.ssafy.ssagri.domain.usedproductphoto.dto.UsedProductPhotoResponseDto;
import com.ssafy.ssagri.entity.usedproduct.QUsedProductPhoto;

import javax.persistence.EntityManager;
import java.util.List;

public class UsedProductPhotoCustomRepositoryImpl implements UsedProductPhotoCustomRepository{

    private final JPAQueryFactory jpaQueryFactory;

    QUsedProductPhoto usedProductPhoto = QUsedProductPhoto.usedProductPhoto;

    public UsedProductPhotoCustomRepositoryImpl(EntityManager entityManager) {
        this.jpaQueryFactory = new JPAQueryFactory(entityManager);
    }


//    @Override
//    public List<UsedProductPhotoResponseDto> selectPhotoByProductNo(Long usedProductNo) {
//        List<UsedProductPhotoResponseDto> fetch = jpaQueryFactory.select(new QUsedProductPhotoResponseDto(usedProductPhoto.no, usedProductPhoto.usedProductPhotoLink))
//                .from(usedProductPhoto)
//                .where(usedProductPhoto.usedProduct.no.eq(usedProductNo))
//                .orderBy(usedProductPhoto.no.asc())
//                .fetch();
//        return fetch;
//    }

//    @Override
//    public List<UsedProductPhotoResponseDto> selectSubPhotoByProductNo(Long usedProductNo) {
//        jpaQueryFactory.select(new QUsedProductPhotoResponseDto(usedProductPhoto.no, usedProductPhoto.usedProductPhotoLink))
//                .from(usedProductPhoto)
//                .where(usedProductPhoto.usedProduct.no.eq(usedProductNo).and(usedProductPhoto.))
//        return null;
//    }
//
//    @Override
//    public UsedProductPhotoResponseDto selectMainPhotoByProductNo(Long usedProductNo) {
//        return null;
//    }
}
