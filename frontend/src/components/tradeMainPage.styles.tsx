import { styled } from 'styled-components';

// Header 제외 중고거래 컴포넌트
const TradeMainFrameDiv = styled.div`
  width: 1920px;
  height: 900px;
  margin-top: 50px;
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
  top: 270px;
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
  top: 450px;
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
  top: 470px;
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
  top: 640px;
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
  top: 620px;
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

// 검색 입력
const Search01 = styled.div`
  width: 500px;
  height: 40px;
  border: 1px solid #4786fa;
  border-radius: 20px;
  padding: 0px 30px 0px 0px;
  margin-right: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SearchInput01 = styled.input`
  width: 440px;
  height: 38px;
  border: 0;
  margin-left: 16px;
  font-size: 16px;
`;

const Search02 = styled.div`
  width: 600px;
  height: 40px;
  border: 1px solid #4786fa;
  border-radius: 20px;
  padding: 0px 30px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SearchInput02 = styled.input`
  width: 540px;
  height: 38px;
  border: 0;
  margin-left: 16px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  background-color: #fff;
  border: 0;
  cursor: pointer;
`;
const SearchImg = styled.img`
  width: 20px;
  height: 20px;
  color: #4786fa;
`;

const RecentProductDiv = styled.div`
  width: 900px;
  height: 320px;
  /* border: 2px solid green; */
`;

const RecentProductTitle = styled.div`
  width: 200px;
  height: 50px;
  margin-bottom: 10px;
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
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
`;

// -------------------- Product v01 -------------------------
const ProductList01 = styled.div`
  width: 840px;
  height: 260px;
  /* border: 2px solid red; */
  display: flex;
  flex-wrap: wrap;
`;

const ProductStyle01 = styled.div`
  width: 180px;
  height: 240px;
  border: 2px solid #4786fa;
  border-radius: 20px;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 1px #757575;
  &:hover {
    box-shadow: 2px 2px 3px 3px #757575;
  }
`;

const ProductImgStyle01 = styled.img`
  width: 130px;
  height: 130px;
  /* border: 1px solid black; */
  border-radius: 10px;
`;

const ProductDetailStyle01 = styled.div`
  width: 160px;
  height: 80px;
  /* border: 1px solid black; */
`;

const ProductName01 = styled.div`
  width: 150px;
  height: 38px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const ProductPrice01 = styled.div`
  width: 150px;
  height: 25px;
  font-size: 20px;
  font-weight: bold;
`;
const SellerLocationAndTime01 = styled.div`
  width: 150px;
  height: 17px;
  margin-top: 5px;
  font-size: 12px;
  color: #929292;
`;

// -------------------- Product v02 -------------------------
const ProductList02 = styled.div`
  width: 840px;
  /* height: 100%; */
  /* border: 1px solid green; */
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

const ProductStyle02 = styled.div`
  width: 170px;
  height: 240px;
  border: 2px solid #4786fa;
  border-radius: 20px;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 1px #757575;
  &:hover {
    box-shadow: 2px 2px 3px 3px #757575;
  }
`;

const ProductImgStyle02 = styled.img`
  width: 130px;
  height: 130px;
  /* border: 1px solid black; */
  border-radius: 10px;
`;

const ProductDetailStyle02 = styled.div`
  width: 150px;
  height: 80px;
  margin-top: 5px;
  /* border: 1px solid black; */
`;

const ProductName02 = styled.div`
  width: 150px;
  height: 38px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const ProductPrice02 = styled.div`
  width: 150px;
  height: 25px;
  font-size: 18px;
  font-weight: bold;
`;
const SellerLocationAndTime02 = styled.div`
  width: 150px;
  height: 17px;
  margin-top: 2px;
  font-size: 12px;
  color: #929292;
`;

// -------------------- Product v03 -------------------------
const ProductList03 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductStyle03 = styled.div`
  width: 300px;
  height: 120px;
  border: 2px solid #4786fa;
  border-radius: 20px;
  margin: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 1px #757575;
  &:hover {
    box-shadow: 2px 2px 3px 3px #757575;
  }
`;

const ProductImgStyle03 = styled.img`
  width: 100px;
  height: 100px;
  /* border: 1px solid black; */
  border-radius: 10px;
`;

const ProductDetailStyle03 = styled.div`
  width: 150px;
  height: 80px;
  margin-left: 5px;
  /* border: 1px solid black; */
`;

const ProductName03 = styled.div`
  width: 150px;
  height: 38px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const ProductPrice03 = styled.div`
  width: 150px;
  height: 25px;
  font-size: 18px;
  font-weight: bold;
`;
const SellerLocationAndTime03 = styled.div`
  width: 150px;
  height: 17px;
  margin-top: 2px;
  font-size: 12px;
  color: #929292;
`;

const TradeMainProduct = () => {
  return (
    <TradeMainProductDiv>
      <RegionAndSearch>
        <Region>지역: 서울</Region>
        <Search01>
          <SearchInput01
            type='text'
            placeholder='원하는 제품을 검색해 보세요!'
          ></SearchInput01>
          <SearchButton>
            <SearchImg src='/assets/img/searchGlass-4786fa.png'></SearchImg>
          </SearchButton>
        </Search01>
      </RegionAndSearch>
      <RecentProductDiv>
        <RecentProductTitle>방금 등록된 상품</RecentProductTitle>
        <ProductList01>
          <ProductStyle01>
            <ProductImgStyle01 src='/assets/img/zeuslab.jpg'></ProductImgStyle01>
            <ProductDetailStyle01>
              <ProductName01>제우스랩 포터블 모니터 Z16 Pro</ProductName01>
              <ProductPrice01>130,000 원</ProductPrice01>
              <SellerLocationAndTime01>
                온천2동 | 10분 전
              </SellerLocationAndTime01>
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
  TradeMain,
  Search02,
  SearchInput02,
  SearchButton,
  SearchImg,
  ProductList02,
  ProductStyle02,
  ProductImgStyle02,
  ProductDetailStyle02,
  ProductName02,
  ProductPrice02,
  SellerLocationAndTime02,
  ProductList03,
  ProductStyle03,
  ProductImgStyle03,
  ProductDetailStyle03,
  ProductName03,
  ProductPrice03,
  SellerLocationAndTime03
};
