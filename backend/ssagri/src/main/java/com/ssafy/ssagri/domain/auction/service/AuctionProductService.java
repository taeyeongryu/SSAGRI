package com.ssafy.ssagri.domain.auction.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.ssafy.ssagri.domain.auction.dto.Images;
import com.ssafy.ssagri.domain.auction.repository.AuctionPhotoRepository;
import com.ssafy.ssagri.domain.auction.repository.AuctionRepository;
import com.ssafy.ssagri.domain.user.repository.UserRegistAndModifyRepository;
import com.ssafy.ssagri.domain.auction.dto.AuctionProductAllDTO;
import com.ssafy.ssagri.domain.auction.dto.AuctionProductCreateDTO;
import com.ssafy.ssagri.entity.auction.AuctionProduct;
import com.ssafy.ssagri.entity.auction.AuctionProductImage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
@PropertySource("classpath:application.properties")
public class AuctionProductService {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Value("${s3.learnershigh.url}")
    private String URL;

    @Qualifier("s3")
    private final AmazonS3 amazonS3;
    private final AuctionRepository auctionRepository;
    private final UserRegistAndModifyRepository userRegistRepository;
    private final AuctionPhotoRepository auctionPhotoRepository;


    // 경매 모든 리스트 출력
    public List<AuctionProductAllDTO> getAuctionProducts() {


         List<AuctionProduct> products = auctionRepository.findAll();


         List<AuctionProductAllDTO> result = new ArrayList<>();


         for(int i=0;i<products.size();i++){

         String startDate = products.get(i).getStartDate().format(DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분 ss초"));

         String endDate = products.get(i).getEndDate().format(DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분 ss초"));

             AuctionProductAllDTO auctionProductAllDTO = AuctionProductAllDTO.builder()
                     .no(products.get(i).getNo())
                     .userNickName(products.get(i).getUser().getNickname())
                     .name(products.get(i).getName())
                     .upPrice(products.get(i).getUpPrice())
                     .downPrice(products.get(i).getDownPrice())
                     .priceCount(products.get(i).getPriceCount())
                     .startDate(startDate)
                     .endDate(endDate)
                     .comment(products.get(i).getComment())
//                     .auctionStatus(products.get(i).getAuctionStatus())
                     .finallyPrice(products.get(i).getFinallyPrice())
                     .createDate(products.get(i).getCreateDate())
                     .type(products.get(i).getType())
                     .originPrice(products.get(i).getOriginPrice())
                     .build();

                result.add(auctionProductAllDTO);

         }

         return result;
    }


    // 경매 상품 등록
    @Transactional
    public void setAuctionProduct(AuctionProductCreateDTO auctionProductCreateDTO){

        String startDate1 = auctionProductCreateDTO.getStartDate();

        String endDate1 = auctionProductCreateDTO.getEndDate();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분 ss초");

        LocalDateTime startDate = LocalDateTime.parse(startDate1, formatter);
        LocalDateTime endDate = LocalDateTime.parse(endDate1, formatter);


        AuctionProduct auctionProduct = AuctionProduct.builder()
                .user(userRegistRepository.findByNo(auctionProductCreateDTO.getUserNo()))
                .name(auctionProductCreateDTO.getName())
//                .upPrice(auctionProductCreate.getUpPrice())
                .downPrice(auctionProductCreateDTO.getDownPrice())
                .priceCount(auctionProductCreateDTO.getCountPrice())
                .startDate(startDate)
                .endDate(endDate)
                .comment(auctionProductCreateDTO.getComment())
                .createTime(LocalDateTime.now())
                .originPrice(auctionProductCreateDTO.getOriginPrice())
                .type(auctionProductCreateDTO.getType()).build();



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

            AuctionProduct auctionProduct = auctionRepository.findByNo(no);

            AuctionProductImage auctionProductImage = AuctionProductImage.builder()
                            .auctionProductNo(auctionProduct)
                                    .imageLink(key).build();

            auctionPhotoRepository.save(auctionProductImage);


            return key;
        } catch (AmazonServiceException e) {
            // The call was transmitted successfully, but Amazon S3 couldn't process
            // it, so it returned an error response.
            log.error("uploadToAWS AmazonServiceException filePath={}, yyyymm={}, error={}", e.getMessage());
        } catch (SdkClientException e) {
            // Amazon S3 couldn't be contacted for a response, or the client
            // couldn't parse the response from Amazon S3.
            log.error("uploadToAWS SdkClientException filePath={}, error={}", e.getMessage());
        } catch (Exception e) {
            // Amazon S3 couldn't be contacted for a response, or the client
            // couldn't parse the response from Amazon S3.
            log.error("uploadToAWS SdkClientException filePath={}, error={}", e.getMessage());
        }

        return "";
    }

    // 경매 상품 이미지 업로드
    public List<Images> auctionProductLoad(Long auctionProductNo) {

        List<AuctionProductImage> list = auctionPhotoRepository.findByAuctionProductNo(auctionRepository.findByNo(auctionProductNo));

        if (list.size() == 0) {
            throw new IllegalStateException("등록된 사진이 없습니다.");

        }
        List<Images> images = new ArrayList<>();

        for(int i=0;i<list.size();i++){

            Images image = Images.builder()
                    .no(list.get(i).getNo())
                    .auctionProductNo(list.get(i).getAuctionProductNo().getNo())
                    .imageLink(URL + list.get(i).getImageLink()).build();

            images.add(image);
        }

        return images;


    }

    // 경매 상품 상세페이지
    public AuctionProductAllDTO auctionDetail(Long auctionProductNo){
       AuctionProduct auctionProduct = auctionRepository.findByNo(auctionProductNo);

        String startDate = auctionProduct.getStartDate().format(DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분 ss초"));

        String endDate = auctionProduct.getEndDate().format(DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분 ss초"));

       AuctionProductAllDTO auctionProductAllDTO =AuctionProductAllDTO.builder()
               .no(auctionProduct.getNo())
               .userNickName(userRegistRepository.findByNo(auctionProduct.getUser().getNo()).getNickname())
               .name(auctionProduct.getName())
               .upPrice(auctionProduct.getUpPrice())
               .downPrice(auctionProduct.getDownPrice())
               .priceCount(auctionProduct.getPriceCount())
               .startDate(startDate) // String 으로 변환해서 주기
               .endDate(endDate)
               .comment(auctionProduct.getComment())
               .auctionStatus(auctionProduct.getAuctionStatus())
               .finallyPrice(auctionProduct.getFinallyPrice())
               .deleteDate(auctionProduct.getDeleteDate())
               .createDate(auctionProduct.getCreateDate())
               .type(auctionProduct.getType())
               .originPrice(auctionProduct.getOriginPrice()).build();

       return auctionProductAllDTO;
    }




}
