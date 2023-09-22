import { styled } from 'styled-components';
import {
  SearchDiv02,
  ProductList02,
  TradeProductItem02
} from '../components/tradeMainPage.styles';
// @ts-ignore
import { useEffect, useRef } from 'react';
// @ts-ignore
import axios from 'axios';
import { ProductItemType } from './type';

// Header 제외 중고거래 컴포넌트
const TradeListFrameDiv = styled.div`
  width: 1920px;
  /* height: 100vh; */
  margin-top: 7vh;
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// TradeMainFrameDiv의 가운데 부분. 여기에 지도와 거래 main 내용이 들어감
const TradeListDiv = styled.div`
  width: 80%;
  /* height: 80%; */
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CategorySpace = styled.div`
  width: 800px;
  height: 140px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid orange; */
`;

const CategoryName = styled.div`
  width: 300px;
  height: 70px;
  font-size: 36px;
  text-decoration: underline;
  text-align: center;
  line-height: 70px;
`;

const CategoryList = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryItem = styled.div`
  width: 130px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  &:hover {
    color: #4786fa;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const SearchSpace = styled.div`
  width: 800px;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid green; */
`;

//SearchSpace 안의 정렬선택창
const SearchOrder = styled.select`
  width: 100px;
  height: 30px;
  border: 1px solid #4786fa;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
`;

// 상품목록
const ProductList = styled.div`
  width: 70%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 페이징
const PagingSpace = styled.div`
  width: 50%;
  height: 50px;
  margin: 50px 0px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PagingButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 0 2px;
  border: 1px solid #4786fa;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    /* border: 2px solid #4786fa;
    background-color: #4786fa;
    color: #fff; */
    box-shadow: 1px 1px 2px 2px #757575;
  }
`;
const PagingButtonText = styled.div`
  height: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const TradeList = () => {
  // -------- 임시 데이터 --------
  let responseList = useRef([
    {
      createDate: '2023-09-22T00:42:26.086Z',
      like: true,
      price: 130000,
      productCategory: 'READY',
      productNo: 2,
      region: '지역',
      saleStatus: 'READY',
      title:
        '송병훈 짱 송병훈 짱 송병훈 짱 송병훈 짱\n 송병훈 짱 송병훈 짱 송병훈 짱 송병훈 짱',
      updateDate: '2023-09-22T00:42:26.086Z',
      usedProductPhotoResponseDto: {
        link: 'https://i.imgur.com/ixdlIIc.png',
        photoNo: 0
      }
    },
    {
      createDate: '2023-09-22T00:42:26.086Z',
      like: true,
      price: 130000,
      productCategory: 'READY',
      productNo: 2,
      region: '지역',
      saleStatus: 'READY',
      title:
        '송병훈 짱 송병훈 짱 송병훈 짱 송병훈 짱\n 송병훈 짱 송병훈 짱 송병훈 짱 송병훈 짱',
      updateDate: '2023-09-22T00:42:26.086Z',
      usedProductPhotoResponseDto: {
        link: 'https://i.imgur.com/ixdlIIc.png',
        photoNo: 0
      }
    }
  ]);

  useEffect(() => {
    const url = '';
    axios.get(url).then((res) => {
      console.log(res.data);
      responseList.current = res.data;
    });
  }, []);

  return (
    <TradeListFrameDiv>
      <TradeListDiv>
        <CategorySpace>
          <CategoryName>카테고리</CategoryName>
          <CategoryList>
            <CategoryItem>전체</CategoryItem>
            <CategoryItem>모니터</CategoryItem>
            <CategoryItem>키보드</CategoryItem>
            <CategoryItem>마우스</CategoryItem>
            <CategoryItem>생활용품</CategoryItem>
            <CategoryItem>기타용품</CategoryItem>
          </CategoryList>
        </CategorySpace>
        <SearchSpace>
          <SearchDiv02></SearchDiv02>
          <SearchOrder>
            <option value='링크1'>인기순</option>
            <option value='링크1'>최신순</option>
            <option value='링크2'>가격순</option>
          </SearchOrder>
        </SearchSpace>
        <ProductList>
          <ProductList02>
            {/* @ts-ignore */}
            {responseList.current.map((item: ProductItemType, id) => (
              <TradeProductItem02 key={id} item={item}></TradeProductItem02>
            ))}
          </ProductList02>
        </ProductList>
        <BottomPageSpace></BottomPageSpace>
      </TradeListDiv>
    </TradeListFrameDiv>
  );
};

const AuctionTradeList = () => {
  return (
    <CategoryList>
      <CategoryItem>전체</CategoryItem>
      <CategoryItem>모니터</CategoryItem>
      <CategoryItem>키보드</CategoryItem>
      <CategoryItem>마우스</CategoryItem>
      <CategoryItem>생활용품</CategoryItem>
      <CategoryItem>기타용품</CategoryItem>
    </CategoryList>
  );
};

const BottomPageSpace = () => {
  return (
    <PagingSpace>
      <PagingButton>
        <PagingButtonText>&lt;&lt;</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>&lt;</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>1</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>2</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>3</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>4</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>5</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>6</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>7</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>8</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>9</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>10</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>&gt;</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>&gt;&gt;</PagingButtonText>
      </PagingButton>
    </PagingSpace>
  );
};
export { TradeList, AuctionTradeList, BottomPageSpace };
