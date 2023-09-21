package com.ssafy.ssagri.domain.usedproduct.controller;

import com.ssafy.ssagri.domain.usedproduct.dto.request.UsedProductSaveRequest;
import com.ssafy.ssagri.domain.usedproduct.dto.response.UsedProductResponse;
import com.ssafy.ssagri.domain.usedproduct.service.UsedProductService;
import com.ssafy.ssagri.entity.usedproduct.ProductCategory;
import com.ssafy.ssagri.entity.user.Region;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/usedproduct")
public class UsedProductController {

    private final UsedProductService usedProductService;

    @PostMapping("")
    @ApiOperation("formdata로 사진, UsedProductSaveRequest 넘겨줘야 함")
    public Long save(@RequestPart UsedProductSaveRequest usedProductSaveRequest, @RequestPart("s3upload") List<MultipartFile> multipartFileList)throws Exception {
        System.out.println("usedProductSaveRequest = " + usedProductSaveRequest);

        Long id = usedProductService.saveUsedProduct(usedProductSaveRequest,multipartFileList);
        return id;
    }


    @GetMapping("/{userNo}")
    @ApiOperation("중고물품 리스트 조회하는 메서드 파라미터 값으로 userNo를 넣어주면 좋아요 상태도 같이 조회")
    public Page<UsedProductResponse> select(@PathVariable(name = "userNo")Long userNo
            ,@RequestParam(name = "category", required = false) ProductCategory productCategory
            ,@RequestParam(name = "region", required = false) Region region
            ,Pageable pageable) {
        Page<UsedProductResponse> usedProductResponses = usedProductService.selectUsedProduct(userNo, productCategory, region, pageable);
        return usedProductResponses;
    }


    @DeleteMapping("/{usedProductNo}")
    @ApiOperation("삭제하는 메서드")
    public Long delete(@PathVariable(name = "usedProductNo")Long usedProductNo){
        Long id = usedProductService.deleteUsedProduct(usedProductNo);
        return id;
    }
}
