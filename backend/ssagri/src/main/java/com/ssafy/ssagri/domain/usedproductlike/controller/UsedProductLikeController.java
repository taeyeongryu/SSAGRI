package com.ssafy.ssagri.domain.usedproductlike.controller;

import com.ssafy.ssagri.domain.usedproduct.service.UsedProductService;
import com.ssafy.ssagri.domain.usedproductlike.service.UsedProductLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("usedproductlike")
public class UsedProductLikeController {

    private final UsedProductLikeService usedProductLikeService;

    @PostMapping("/{userNo}/{usedProductNo}")
    public void save(@PathVariable("userNo") final Long userNo, @PathVariable("usedProductNo") final Long usedProductNo) {
        usedProductLikeService.saveUsedProductLike(userNo,usedProductNo);
    }

    @DeleteMapping("/{userNo}/{usedProductNo}")
    public void delete(@PathVariable("userNo") Long userNo,@PathVariable("usedProductNo") Long usedProductNo) {
        usedProductLikeService.deleteUsedProductLike(userNo,usedProductNo);
    }




}
