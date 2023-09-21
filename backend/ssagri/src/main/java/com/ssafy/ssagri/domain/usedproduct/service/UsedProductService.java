package com.ssafy.ssagri.domain.usedproduct.service;

import com.ssafy.ssagri.domain.usedproduct.dto.request.UsedProductSaveRequestDto;
import com.ssafy.ssagri.domain.usedproduct.dto.response.UsedProductResponseDto;
import com.ssafy.ssagri.domain.usedproduct.repository.UsedProductRepository;
import com.ssafy.ssagri.domain.usedproductlike.repository.UsedProductLikeRepository;
import com.ssafy.ssagri.domain.usedproductphoto.dto.UsedProductPhotoResponseDto;
import com.ssafy.ssagri.domain.usedproductphoto.repository.UsedProductPhotoRepository;
import com.ssafy.ssagri.domain.user.repository.UserRegistRepository;
import com.ssafy.ssagri.entity.usedproduct.PhotoType;
import com.ssafy.ssagri.entity.usedproduct.ProductCategory;
import com.ssafy.ssagri.entity.usedproduct.UsedProduct;
import com.ssafy.ssagri.entity.usedproduct.UsedProductPhoto;
import com.ssafy.ssagri.entity.user.Region;
import com.ssafy.ssagri.entity.user.User;
import com.ssafy.ssagri.util.exception.CustomException;
import com.ssafy.ssagri.util.exception.CustomExceptionStatus;
import com.ssafy.ssagri.util.s3upload.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UsedProductService {
    private final UsedProductRepository usedProductRepository;
    private final UsedProductPhotoRepository usedProductPhotoRepository;
    private final UsedProductLikeRepository usedProductLikeRepository;
    private final UserRegistRepository userRegistRepository;
    private final ImageService imageService;



    /*
    * 대표 사진이랑 본문 사진이랑 따로 받아서 저장한다.
    * */
    @Transactional
    public Long saveUsedProduct(UsedProductSaveRequestDto usedProductSaveRequest,
           MultipartFile MultipartFileMain , List<MultipartFile> multipartFileSubList)throws Exception{

        Optional<User> findUser = userRegistRepository.findById(usedProductSaveRequest.getUserNo());
        User user = null;
        if (findUser.isPresent()) {
            user = findUser.get();
        }else{
            throw new CustomException(CustomExceptionStatus.USER_DOES_NOT_EXSIST);
        }
        UsedProduct usedProductEntity = usedProductSaveRequest.toEntity(user);
        usedProductRepository.save(usedProductEntity);

        //대표 사진 저장 하는 것
        String link = imageService.saveImage(MultipartFileMain);
        UsedProductPhoto usedProductPhotoMain = UsedProductPhoto.builder()
                .usedProduct(usedProductEntity)
                .usedProductPhotoLink(link)
                .usedProductPhotoType(PhotoType.MAIN)
                .build();
        usedProductPhotoRepository.save(usedProductPhotoMain);

        //본문 사진 저장 하는 것
        for (MultipartFile multipartFileSub : multipartFileSubList) {
            link = imageService.saveImage(multipartFileSub);
            UsedProductPhoto usedProductPhotoSub = UsedProductPhoto.builder()
                    .usedProduct(usedProductEntity)
                    .usedProductPhotoLink(link)
                    .usedProductPhotoType(PhotoType.SUB)
                    .build();
            usedProductPhotoRepository.save(usedProductPhotoSub);
        }
        return usedProductEntity.getNo();
    }
    @Transactional
    public Long deleteUsedProduct(Long usedProductNo){
        Optional<UsedProduct> productOptional = usedProductRepository.findById(usedProductNo);
        if (productOptional.isPresent()) {
            UsedProduct usedProduct = productOptional.get();
            usedProduct.setDeleteDate(LocalDateTime.now());
        }
        //없는 중고 물품이면
        //예외 처리
        else {

        }
        return productOptional.get().getNo();
    }

    public Page<UsedProductResponseDto> selectUsedProduct(Long userNo, ProductCategory productCategory, Region region, Pageable pageable){
        Page<UsedProduct> usedProducts = usedProductRepository.selectAllUsedProduct(productCategory, region, pageable);
        List<UsedProduct> usedProductList = usedProducts.getContent();

        List<UsedProductResponseDto> usedProductResponseList = new ArrayList<>();

        for (UsedProduct usedProduct : usedProductList) {
            UsedProductResponseDto usedProductResponse = usedProduct.toResponse();
            //Main 사진 가져오기
            List<UsedProductPhotoResponseDto> usedProductPhotoResponses = usedProductPhotoRepository.selectPhotoByProductNo(usedProduct.getNo());
            usedProductResponse.setPhotolist(usedProductPhotoResponses);

            //유저가 이 상품 좋아하는지 알아야함.
            boolean isLike = usedProductLikeRepository.checkLikeByUserNo(userNo, usedProduct.getNo());
            usedProductResponse.setLike(isLike);

            //리스트에 저장하기
            usedProductResponseList.add(usedProductResponse);
        }
        return new PageImpl<>(usedProductResponseList, usedProducts.getPageable(), usedProducts.getTotalElements());
    }

}
