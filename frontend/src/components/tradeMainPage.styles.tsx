import { styled } from 'styled-components';

// 중고거래 전체 페이지
const TradeMainPageDiv = styled.div`
  width: 1920px;
  height: 1080px;
`;

// Header 제외 중고거래 컴포넌트
const TradeMainFrameDiv = styled.div`
  width: 1920px;
  height: 1010px;
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// TradeMainFrameDiv의 가운데 부분. 여기에 지도와 거래 main 내용이 들어감
const TradeMainDiv = styled.div`
  width: 70%;
  height: 80%;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TradeMain = () => {
  return (
    <TradeMainFrameDiv>
      <TradeMainDiv>
        <TradeMainMap></TradeMainMap>
        <TradeMainProduct></TradeMainProduct>
      </TradeMainDiv>
    </TradeMainFrameDiv>
  );
};

// --- 지도 (main 좌측) ---
const TradeMainMapDiv = styled.div`
  width: 400px;
  height: 700px;
  /* border: 2px solid green; */
`;

const Seoul = styled.div`
  width: 50px;
  height: 50px;
  background-color: #adc4ff;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 350px;
  left: 400px;
  box-shadow: 2px 2px 2px 1px #383838;

  &:hover {
    background-color: #ff5353;
  }
`;
const Dajeon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #adc4ff;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 530px;
  left: 420px;
  box-shadow: 2px 2px 2px 1px #383838;

  &:hover {
    background-color: #ff5353;
  }
`;
const Gumi = styled.div`
  width: 50px;
  height: 50px;
  background-color: #adc4ff;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 550px;
  left: 530px;
  box-shadow: 2px 2px 2px 1px #383838;

  &:hover {
    background-color: #ff5353;
  }
`;
const Gwangju = styled.div`
  width: 50px;
  height: 50px;
  background-color: #adc4ff;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 720px;
  left: 340px;
  box-shadow: 2px 2px 2px 1px #383838;

  &:hover {
    background-color: #ff5353;
  }
`;
const Buwoolkyung = styled.div`
  width: 50px;
  height: 50px;
  background-color: #adc4ff;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 700px;
  left: 570px;
  box-shadow: 2px 2px 2px 1px #383838;

  &:hover {
    background-color: #ff5353;
  }
`;

const TradeMainMap = () => {
  return (
    <TradeMainMapDiv>
      <img
        src='/assets/img/koreaMap.jpg'
        alt=''
        style={{ width: '100%', height: '100%' }}
      />
      <Seoul>서울</Seoul>
      <Dajeon>대전</Dajeon>
      <Gumi>구미</Gumi>
      <Gwangju>광주</Gwangju>
      <Buwoolkyung>부울경</Buwoolkyung>
    </TradeMainMapDiv>
  );
};

// --- 지역별 상품 (main 우측) ---
const TradeMainProductDiv = styled.div`
  width: 910px;
  height: 100%;

  /* border: 2px solid red; */
`;

const RegionAndSearch = styled.div`
  width: 910px;
  height: 60px;
  /* border: 2px solid blue; */
  margin-bottom: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 60px;
`;

const Region = styled.div`
  width: 152px;
  height: 45px;
  font-size: 30px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Search = styled.div`
  width: 500px;
  height: 40px;
  border: 1px solid #383838;
  border-radius: 20px;
  padding: 0px 30px 0px 0px;
  margin-right: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 440px;
  height: 38px;
  border: 0;
  margin-left: 16px;
  font-size: 20px;
`;

const SearchButton = styled.button`
  background-color: #fff;
  border: 0;
  cursor: pointer;
`;

const SearchImg = styled.img`
  width: 20px;
  height: 20px;
`;

const RecentProductDiv = styled.div`
  width: 900px;
  height: 320px;
  /* border: 2px solid green; */
`;

const RecentProductTitle = styled.div`
  width: 200px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
`;

const PopularProductDiv = styled.div`
  width: 900px;
  height: 320px;
  /* border: 2px solid blue; */
`;

const PopularProductTitle = styled.div`
  width: 200px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
`;

const ProductList01 = styled.div`
  width: 900px;
  height: 260px;
  /* border: 2px solid red; */
  display: flex;
`;

const ProductStyle01 = styled.div`
  width: 200px;
  height: 260px;
  border: 2px solid #4786fa;
  border-radius: 20px;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 1px #757575;
`;

const ProductImgStyle01 = styled.img`
  width: 150px;
  height: 150px;
  /* border: 1px solid black; */
  border-radius: 10px;
`;

const ProductDetailStyle01 = styled.div`
  width: 160px;
  height: 80px;
  /* border: 1px solid black; */
`;

const ProductName = styled.div`
  width: 160px;
  height: 38px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const ProductPrice = styled.div`
  width: 160px;
  height: 25px;
  font-size: 20px;
  font-weight: bold;
`;
const SellerLocationAndTime = styled.div`
  width: 160px;
  height: 17px;
  margin-top: 5px;
  font-size: 12px;
  color: #929292;
`;

const TradeMainProduct = () => {
  return (
    <TradeMainProductDiv>
      <RegionAndSearch>
        <Region>지역: 서울</Region>
        <Search>
          <SearchInput
            type='text'
            placeholder='원하는 제품을 검색해 보세요!'
          ></SearchInput>
          <SearchButton>
            <SearchImg src='/assets/img/searchGlass.png'></SearchImg>
          </SearchButton>
        </Search>
      </RegionAndSearch>
      <RecentProductDiv>
        <RecentProductTitle>방금 등록된 상품</RecentProductTitle>
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
        </ProductList01>
      </RecentProductDiv>
      <PopularProductDiv>
        <PopularProductTitle>실시간 인기 상품</PopularProductTitle>
        <ProductList01>
          <ProductStyle01></ProductStyle01>
          <ProductStyle01></ProductStyle01>
          <ProductStyle01></ProductStyle01>
          <ProductStyle01></ProductStyle01>
        </ProductList01>
      </PopularProductDiv>
    </TradeMainProductDiv>
  );
};

export {
  TradeMainPageDiv,
  TradeMain,
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
};
