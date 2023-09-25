package com.ssafy.ssagri.domain.usedproduct.service;

import com.ssafy.ssagri.domain.usedproduct.dto.request.UsedProductSaveRequestDto;
import com.ssafy.ssagri.domain.usedproduct.dto.response.UsedProductDetailResponseDto;
import com.ssafy.ssagri.domain.usedproduct.dto.response.UsedProductResponseDto;
import com.ssafy.ssagri.domain.usedproduct.repository.UsedProductRepository;
import com.ssafy.ssagri.domain.usedproductlike.repository.UsedProductLikeRepository;
import com.ssafy.ssagri.domain.usedproductphoto.dto.UsedProductPhotoResponseDto;
import com.ssafy.ssagri.domain.usedproductphoto.repository.UsedProductPhotoRepository;
import com.ssafy.ssagri.domain.user.repository.UserRegistAndModifyRepository;
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
import lombok.extern.slf4j.Slf4j;
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
@Slf4j
public class UsedProductService {
    private final UsedProductRepository usedProductRepository;
    private final UsedProductPhotoRepository usedProductPhotoRepository;
    private final UsedProductLikeRepository usedProductLikeRepository;
    private final UserRegistAndModifyRepository userRegistRepository;
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
        System.out.println("user.getRegion() = " + user.getRegion());
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
    /*
    *중고물품 리스트 가져오는 메서드
    *phototype이 sub 인것만 가져온다.
     */

    public Page<UsedProductResponseDto> selectUsedProductList(Long userNo, ProductCategory productCategory, Region region,String search ,Pageable pageable){
        Page<UsedProduct> usedProducts = usedProductRepository.selectAllUsedProduct(productCategory, region,search ,pageable);
        List<UsedProduct> usedProductList = usedProducts.getContent();
        log.info("db에서 가져오기 성공");
        List<UsedProductResponseDto> usedProductResponseList = new ArrayList<>();

        for (UsedProduct usedProduct : usedProductList) {

            UsedProductResponseDto usedProductResponse = usedProduct.toResponse();
            //Main 사진 가져오기
            UsedProductPhotoResponseDto usedProductPhotoResponseDto = usedProductPhotoRepository.selectMainPhotoByProductNo(usedProduct.getNo());
            usedProductResponse.setUsedProductPhotoResponseDto(usedProductPhotoResponseDto);

            //유저가 이 상품 좋아하는지 알아야함.
            boolean isLike = usedProductLikeRepository.checkLikeByUserNo(userNo, usedProduct.getNo());
            usedProductResponse.setLike(isLike);

            //리스트에 저장하기
            usedProductResponseList.add(usedProductResponse);
        }
        log.info("사진 가져오기 성공");
        return new PageImpl<>(usedProductResponseList, usedProducts.getPageable(), usedProducts.getTotalElements());
    }

    public Page<UsedProductResponseDto> selectUsedProductListByUser(Long userNo, Pageable pageable){
        Page<UsedProduct> usedProducts = usedProductRepository.selectUsedProductByUserNo(userNo, pageable);

        List<UsedProduct> usedProductList = usedProducts.getContent();

        List<UsedProductResponseDto> usedProductResponseList = new ArrayList<>();

        for (UsedProduct usedProduct : usedProductList) {
            UsedProductResponseDto usedProductResponse = usedProduct.toResponse();
            //Main 사진 가져오기
            UsedProductPhotoResponseDto usedProductPhotoResponseDto = usedProductPhotoRepository.selectMainPhotoByProductNo(usedProduct.getNo());
            usedProductResponse.setUsedProductPhotoResponseDto(usedProductPhotoResponseDto);

            //유저가 이 상품 좋아하는지 알아야함.
            boolean isLike = usedProductLikeRepository.checkLikeByUserNo(userNo, usedProduct.getNo());
            usedProductResponse.setLike(isLike);

            //리스트에 저장하기
            usedProductResponseList.add(usedProductResponse);
        }
        return new PageImpl<>(usedProductResponseList, usedProducts.getPageable(), usedProducts.getTotalElements());
    }

    /*
    * 디테일한 상품 정보 가져오는 메서드
    * */
    public UsedProductDetailResponseDto selectUsedProductDetail(Long userNo,Long usedProductNo){
        Optional<UsedProduct> findUsedProduct = usedProductRepository.findById(usedProductNo);
        UsedProduct usedProduct = null;
        if (findUsedProduct.isPresent()) {
            usedProduct = findUsedProduct.get();
        }else{
            throw new CustomException(CustomExceptionStatus.USED_PRODUCT_DOES_NOT_EXIST);
        }
        UsedProductDetailResponseDto detailResponse = usedProduct.toDetailResponse(usedProduct.getUser());
        List<UsedProductPhotoResponseDto> usedProductPhotoResponseDtoList = usedProductPhotoRepository.selectSubPhotoByProductNo(usedProductNo);
        detailResponse.setUsedProductPhotoResponseDto(usedProductPhotoResponseDtoList);
        boolean isLike = usedProductLikeRepository.checkLikeByUserNo(userNo,usedProductNo);
        detailResponse.setLike(isLike);
        return detailResponse;
    }

}
