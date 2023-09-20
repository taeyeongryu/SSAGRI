package com.ssafy.ssagri.domain.usedproduct.controller;

import com.ssafy.ssagri.domain.usedproduct.dto.request.UsedProductSaveRequest;
import com.ssafy.ssagri.domain.usedproduct.dto.response.UsedProductResponse;
import com.ssafy.ssagri.domain.usedproduct.service.UsedProductService;
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
    public Long save(@RequestPart UsedProductSaveRequest usedProductSaveRequest, @RequestPart("s3upload") List<MultipartFile> multipartFileList)throws Exception {
        System.out.println("usedProductSaveRequest = " + usedProductSaveRequest);

        Long id = usedProductService.saveUsedProduct(usedProductSaveRequest,multipartFileList);
        return id;
    }

    @GetMapping("/{userNo}")
    public Page<UsedProductResponse> select(@PathVariable(name = "userNo")Long userNo, Pageable pageable) {
        Page<UsedProductResponse> usedProductResponses = usedProductService.selectUsedProduct(userNo, pageable);
        return usedProductResponses;
    }

    @DeleteMapping("/{usedProductNo}")
    public Long delete(@PathVariable(name = "usedProductNo")Long usedProductNo){
        Long id = usedProductService.deleteUsedProduct(usedProductNo);
        return id;
    }
}
