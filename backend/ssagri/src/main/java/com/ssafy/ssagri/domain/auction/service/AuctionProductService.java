package com.ssafy.ssagri.domain.auction.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.ssafy.ssagri.domain.auction.repository.AuctionPhotoRepository;
import com.ssafy.ssagri.domain.auction.repository.AuctionRepository;
import com.ssafy.ssagri.domain.user.repository.UserRegistRepository;
import com.ssafy.ssagri.domain.auction.dto.AuctionProductAll;
import com.ssafy.ssagri.domain.auction.dto.AuctionProductCreate;
import com.ssafy.ssagri.entity.auction.AuctionProduct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AuctionProductService {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Value("${s3.learnershigh.url}")
    private String URL;

    private final AmazonS3 amazonS3;
    private final AuctionRepository auctionRepository;
    private final UserRegistRepository userRegistRepository;
    private final AuctionPhotoRepository auctionPhotoRepository;


    // 경매 모든 리스트 출력
    public List<AuctionProductAll> getAuctionProducts() {

        System.out.println("야야야");
         List<AuctionProduct> products = auctionRepository.findAll();

        System.out.println(products.size() + "야야야");


         List<AuctionProductAll> result = new ArrayList<>();

         for(int i=0;i<products.size();i++){
             AuctionProductAll auctionProductAll = AuctionProductAll.builder()
                     .no(products.get(i).getNo())
                     .userNo(products.get(i).getUser().getNo())
                     .name(products.get(i).getName())
                     .upPrice(products.get(i).getUpPrice())
                     .downPrice(products.get(i).getDownPrice())
                     .priceCount(products.get(i).getPrice())
//                     .startDate(products.get(i).getStartDate())
//                     .endDate(products.get(i).getEndDate())
                     .comment(products.get(i).getComment())
                     .auctionStatus(products.get(i).getAuctionStatus())
                     .finallyPrice(products.get(i).getFinallyPrice())
                     .modifyDate(products.get(i).getModifyDate())
                     .type(products.get(i).getType())
                     .originPrice(products.get(i).getOriginPrice())
                     .photos(auctionPhotoRepository.findByAuctionProduct(products.get(i)))
                     .build();

                result.add(auctionProductAll);

         }

         return result;
    }


    // 경매 상품 등록
    @Transactional
    public void setAuctionProduct(AuctionProductCreate auctionProductCreate){

        AuctionProduct auctionProduct = AuctionProduct.builder()
                .user(userRegistRepository.findByNo(auctionProductCreate.getUserNo()))
                .name(auctionProductCreate.getName())
//                .upPrice(auctionProductCreate.getUpPrice())
                .downPrice(auctionProductCreate.getDownPrice())
                .price(auctionProductCreate.getCountPrice())
//                .startDate(auctionProductCreate.getStartDate())
//                .endDate(auctionProductCreate.getEndDate())
                .comment(auctionProductCreate.getComment())
                .modifyDate(LocalDateTime.now())
                .originPrice(auctionProductCreate.getOriginPrice())
                .type(auctionProductCreate.getType()).build();



            auctionRepository.save(auctionProduct);
    }

    // 경매상품 추가시 사진을 DB와 S3에 모두 저장
    @Transactional
    public String auctionImageUploadToAWS(MultipartFile file, String dirName, Long no) {
        String key = dirName + "/" + UUID.randomUUID() + "_" + file.getOriginalFilename();

        String originName = file.getOriginalFilename();

        System.out.println("key: " + key);  // ---> 키를 넣어놓기

        System.out.println(file.getOriginalFilename()); // ---> origin name 에 넣어놓기
        try {

            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(file.getContentType());
            metadata.setContentLength(file.getSize());

            PutObjectRequest request = new PutObjectRequest(bucket, key, file.getInputStream(), metadata);
            request.withCannedAcl(CannedAccessControlList.AuthenticatedRead); // 접근권한 체크

            amazonS3.getUrl(bucket, key).toString();


            PutObjectResult result = amazonS3.putObject(request);

//            User user = userRepository.findByUserNo(userNo);

//            user.setProfileImg(key);

//            userRepository.save(user);


            return key;
        } catch (AmazonServiceException e) {
            // The call was transmitted successfully, but Amazon S3 couldn't process
            // it, so it returned an error response.
//            log.error("uploadToAWS AmazonServiceException filePath={}, yyyymm={}, error={}", e.getMessage());
        } catch (SdkClientException e) {
            // Amazon S3 couldn't be contacted for a response, or the client
            // couldn't parse the response from Amazon S3.
//            log.error("uploadToAWS SdkClientException filePath={}, error={}", e.getMessage());
        } catch (Exception e) {
            // Amazon S3 couldn't be contacted for a response, or the client
            // couldn't parse the response from Amazon S3.
//            log.error("uploadToAWS SdkClientException filePath={}, error={}", e.getMessage());
        }

        return "";
    }



}
