import { styled } from 'styled-components';
import {
  Search,
  SearchInput,
  SearchButton,
  SearchImg,
  ProductList01,
  ProductStyle01,
  ProductImgStyle01,
  ProductDetailStyle01,
  ProductName,
  ProductPrice,
  SellerLocationAndTime
} from '../components/tradeMainPage.styles';

// 중고거래 전체 페이지
const TradeListPageDiv = styled.div`
  width: 1920px;
  height: 1080px;
`;

// Header 제외 중고거래 컴포넌트
const TradeListFrameDiv = styled.div`
  width: 1920px;
  height: 1010px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// TradeMainFrameDiv의 가운데 부분. 여기에 지도와 거래 main 내용이 들어감
const TradeListDiv = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const SearchSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  margin: 50px 0px;
`;

const SearchDiv = () => {
  return (
    <Search>
      <SearchInput
        type='text'
        placeholder='원하는 제품을 검색해 보세요!'
      ></SearchInput>
      <SearchButton>
        <SearchImg src='/assets/img/searchGlass.png'></SearchImg>
      </SearchButton>
    </Search>
  );
};

const CategorySpace = styled.div`
  width: 1350px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
  margin: 50px 0px;
`;

const CategoryName = styled.div`
  width: 300px;
  height: 70px;
  font-size: 40px;
  text-decoration: underline;
  text-align: center;
  line-height: 70px;
`;

const CategoryList = styled.div`
  width: 1300px;
  height: 60px;
`;

const ProductList = styled.div`
  width: 70%;
  height: 80%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TradeList = () => {
  return (
    <TradeListFrameDiv>
      <TradeListDiv>
        <SearchSpace>
          <SearchDiv></SearchDiv>
        </SearchSpace>
        <CategorySpace>
          <CategoryName>카테고리</CategoryName>
          <CategoryList></CategoryList>
        </CategorySpace>
        <ProductList>
          <ProductList01>
            <ProductStyle01>
              <ProductImgStyle01 src='/assets/img/zeuslab.jpg'></ProductImgStyle01>
              <ProductDetailStyle01>
                <ProductName>제우스랩 포터블 모니터 Z16 Pro</ProductName>
                <ProductPrice>130,000 원</ProductPrice>
                <SellerLocationAndTime>온천2동 | 10분 전</SellerLocationAndTime>
              </ProductDetailStyle01>
            </ProductStyle01>
            <ProductStyle01></ProductStyle01>
            <ProductStyle01></ProductStyle01>
            <ProductStyle01></ProductStyle01>

            <ProductStyle01></ProductStyle01>
            <ProductStyle01></ProductStyle01>
            <ProductStyle01></ProductStyle01>
            <ProductStyle01></ProductStyle01>

            <ProductStyle01></ProductStyle01>
            <ProductStyle01></ProductStyle01>
            <ProductStyle01></ProductStyle01>
            <ProductStyle01></ProductStyle01>
          </ProductList01>
        </ProductList>
      </TradeListDiv>
    </TradeListFrameDiv>
  );
};

export { TradeList, TradeListPageDiv };
