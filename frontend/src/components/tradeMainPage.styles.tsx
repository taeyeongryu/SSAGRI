import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { ProductItemType } from './type';

// Header 제외 중고거래 컴포넌트
const TradeMainFrameDiv = styled.div`
  width: 1920px;
  height: 900px;
  margin: 50px auto 0;
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
  const [region, setRegion] = useState<string>('서울');
  const regionList = ['서울', '대전', '구미', '광주', '부울경'];
  useEffect(() => {
    console.log('region', region);
  }, [region]);
  return (
    <TradeMainFrameDiv>
      <TradeMainDiv>
        <TradeMainMap
          setRegion={setRegion}
          regionList={regionList}
        ></TradeMainMap>
        <TradeMainProduct region={region}></TradeMainProduct>
      </TradeMainDiv>
    </TradeMainFrameDiv>
  );
};

// --- 지도 (main 좌측) ---
const TradeMainMapDiv = styled.div`
  width: 400px;
  height: 700px;
  position: relative;
  /* border: 2px solid green; */
`;
// -------- 지역 동그라미 CSS --------
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
  top: 110px;
  left: 110px;
  box-shadow: 2px 2px 2px 1px #383838;

  &:hover {
    background-color: #ff5353;
  }
`;
const Dajeon = styled(Seoul)`
  top: 290px;
  left: 130px;
`;
const Gumi = styled(Seoul)`
  top: 310px;
  left: 240px;
`;
const Gwangju = styled(Seoul)`
  top: 480px;
  left: 50px;
`;
const Buwoolkyung = styled(Seoul)`
  font-size: 16px;
  top: 460px;
  left: 280px;
`;

const TradeMainMap = ({ setRegion, regionList }) => {
  const changeRegion = (num: number) => {
    setRegion(regionList[num]);
  };
  return (
    <TradeMainMapDiv>
      <img
        src='/assets/img/koreaMap.jpg'
        alt=''
        style={{ width: '100%', height: '100%' }}
      />
      <Seoul onClick={() => changeRegion(0)}>서울</Seoul>
      <Dajeon onClick={() => changeRegion(1)}>대전</Dajeon>
      <Gumi onClick={() => changeRegion(2)}>구미</Gumi>
      <Gwangju onClick={() => changeRegion(3)}>광주</Gwangju>
      <Buwoolkyung onClick={() => changeRegion(4)}>부울경</Buwoolkyung>
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

const SearchRegion = styled.div`
  width: 100px;
  height: 40px;
  border: 1px solid #4786fa;
  border-radius: 10px;
  margin-right: 25px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  background-color: #4786fa;
  color: #fff;
  box-shadow: 2px 2px 2px 1px #929292;
  &:hover {
    box-shadow: 2px 2px 3px 3px #757575;
  }
`;

// ------ 검색 입력 01 --------
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

// ------ 검색 입력 02 --------
const Search02 = styled(Search01)`
  width: 600px;
`;
const SearchInput02 = styled(SearchInput01)`
  width: 540px;
`;

// ------ 검색 버튼 --------
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

// ------ 최근 올라온 물품, 인기 있는 상품 --------
const RecentOrPopularProductDiv = styled.div`
  width: 900px;
  height: 320px;
  /* border: 2px solid green; */
`;
const RecentOrPopularProductTitle = styled.div`
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
  margin-top: 5px;
  /* border: 1px solid black; */
`;
const ProductName01 = styled.div`
  width: 150px;
  height: 38px;
  /* line-height: 38px; */
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const ProductPrice01 = styled.div`
  width: 150px;
  height: 25px;
  margin-top: 2px;
  font-size: 20px;
  font-weight: bold;
`;
const SellerLocationAndTime01 = styled.div`
  width: 150px;
  height: 17px;
  margin-top: 3px;
  font-size: 12px;
  color: #929292;
`;

// -------------------- Product v02 -------------------------
const ProductList02 = styled(ProductList01)`
  height: auto;
  /* border: 1px solid green; */
  justify-content: start;
`;
const ProductStyle02 = styled(ProductStyle01)`
  width: 170px;
  margin: 10px 20px;
`;
const ProductImgStyle02 = styled(ProductImgStyle01)``;
const ProductDetailStyle02 = styled(ProductDetailStyle01)`
  width: 150px;
`;
const ProductName02 = styled(ProductName01)``;
const ProductPrice02 = styled(ProductPrice01)`
  font-size: 18px;
`;
const SellerLocationAndTime02 = styled(SellerLocationAndTime01)`
  margin-top: 2px;
`;

// -------------------- Product v03 -------------------------
const ProductList03 = styled(ProductList01)`
  width: 100%;
  height: auto;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;
const ProductStyle03 = styled(ProductStyle01)`
  width: 300px;
  height: 120px;
  margin: 10px 20px;
  flex-direction: row;
`;
const ProductImgStyle03 = styled(ProductImgStyle01)`
  width: 100px;
  height: 100px;
`;
const ProductDetailStyle03 = styled(ProductDetailStyle01)`
  height: 80px;
  margin-top: 0px;
  margin-left: 10px;
`;
const ProductName03 = styled(ProductName01)``;
const ProductPrice03 = styled(ProductPrice01)`
  font-size: 18px;
`;
const SellerLocationAndTime03 = styled(SellerLocationAndTime01)`
  margin-top: 2px;
`;

const SearchDiv01 = () => {
  return (
    <Search01>
      <SearchInput01
        type='text'
        placeholder='원하는 제품을 검색해 보세요!'
      ></SearchInput01>
      <SearchButton>
        <SearchImg src='/assets/img/searchGlass-4786fa.png'></SearchImg>
      </SearchButton>
    </Search01>
  );
};
const SearchDiv02 = () => {
  return (
    <Search02>
      <SearchInput02
        type='text'
        placeholder='원하는 제품을 검색해 보세요!'
      ></SearchInput02>
      <SearchButton>
        <SearchImg src='/assets/img/searchGlass-4786fa.png'></SearchImg>
      </SearchButton>
    </Search02>
  );
};
const AuctionSearchInput = () => {
  return (
    <Search01>
      <SearchInput01
        type='text'
        placeholder='원하는 제품을 검색해 보세요!'
      ></SearchInput01>
      <SearchButton>
        <SearchImg src='/assets/img/searchGlass-4786fa.png'></SearchImg>
      </SearchButton>
    </Search01>
  );
};

const TradeProductItem01 = (item) => {
  useEffect(() => {
    console.log(item.item.usedProductPhotoResponseDto.link);
  });
  const navigate = useNavigate();
  const goTradeDetail = (no: number) => {
    navigate(`/tradeDetail/${no}`);
  };
  return (
    <ProductStyle01 onClick={() => goTradeDetail(item.item.productNo)}>
      <ProductImgStyle01
        // src={item.usedProductPhotoResponseDto.link}
        src={item.item.usedProductPhotoResponseDto.link}
      ></ProductImgStyle01>
      <ProductDetailStyle01>
        <ProductName01>{item.item.title}</ProductName01>
        <ProductPrice01>{item.item.price} 원</ProductPrice01>
        <SellerLocationAndTime01>
          {item.item.region} | 10분 전
        </SellerLocationAndTime01>
      </ProductDetailStyle01>
    </ProductStyle01>
  );
};

const TradeProductItem02 = (item) => {
  useEffect(() => {
    console.log(item.item.usedProductPhotoResponseDto.link);
  });
  const navigate = useNavigate();
  const goTradeDetail = (no: number) => {
    navigate(`/tradeDetail/${no}`);
  };
  return (
    <ProductStyle02 onClick={() => goTradeDetail(item.item.productNo)}>
      <ProductImgStyle02
        // src={item.usedProductPhotoResponseDto.link}
        src={item.item.usedProductPhotoResponseDto.link}
      ></ProductImgStyle02>
      <ProductDetailStyle02>
        <ProductName02>{item.item.title}</ProductName02>
        <ProductPrice02>{item.item.price} 원</ProductPrice02>
        <SellerLocationAndTime02>
          {item.item.region} | 10분 전
        </SellerLocationAndTime02>
      </ProductDetailStyle02>
    </ProductStyle02>
  );
};
const TradeProductItem03 = (item) => {
  useEffect(() => {
    console.log(item.item.usedProductPhotoResponseDto.link);
  });
  const navigate = useNavigate();
  const goTradeDetail = (no: number) => {
    navigate(`/tradeDetail/${no}`);
  };
  return (
    <ProductStyle03 onClick={() => goTradeDetail(item.item.productNo)}>
      <ProductImgStyle03
        // src={item.usedProductPhotoResponseDto.link}
        src={item.item.usedProductPhotoResponseDto.link}
      ></ProductImgStyle03>
      <ProductDetailStyle03>
        <ProductName03>{item.item.title}</ProductName03>
        <ProductPrice03>{item.item.price} 원</ProductPrice03>
        <SellerLocationAndTime03>
          {item.item.region} | 10분 전
        </SellerLocationAndTime03>
      </ProductDetailStyle03>
    </ProductStyle03>
  );
};

const TradeMainProduct = (region) => {
  console.log(typeof region);
  console.log(region);

  const userNo = localStorage.getItem('userNo');
  let recentData = useRef([
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
  let popularData = useRef([
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
  // recentData
  axios
    .get(`/usedproduct/${userNo}?region=${region.region}&offset=4&pageSize=0`)
    .then((res) => {
      console.log(res.data);
      recentData = res.data.content;
    });
  // popularData
  axios
    .get(`/usedproduct/${userNo}?region=${region.region}&offset=4&pageSize=0`)
    .then((res) => {
      console.log(res.data);
      popularData = res.data.content;
    });
  // const responseApi = useRef([
  //   {
  //     createDate: '2023-09-22T00:42:26.086Z',
  //     like: true,
  //     price: 130000,
  //     productCategory: 'READY',
  //     productNo: 2,
  //     region: '지역',
  //     saleStatus: 'READY',
  //     title:
  //       '송병훈 짱 송병훈 짱 송병훈 짱 송병훈 짱\n 송병훈 짱 송병훈 짱 송병훈 짱 송병훈 짱',
  //     updateDate: '2023-09-22T00:42:26.086Z',
  //     usedProductPhotoResponseDto: {
  //       link: 'https://i.imgur.com/ixdlIIc.png',
  //       photoNo: 0
  //     }
  //   }
  // ]);
  const navigate = useNavigate();
  const goTradeList = () => {
    navigate(`/tradeList?region=${region.region}`);
  };
  return (
    <TradeMainProductDiv>
      <RegionAndSearch>
        <Region>지역: {region.region} </Region>
        <SearchRegion onClick={goTradeList}>검색</SearchRegion>
        <SearchDiv01></SearchDiv01>
      </RegionAndSearch>
      <RecentOrPopularProductDiv>
        <RecentOrPopularProductTitle>
          방금 등록된 상품
        </RecentOrPopularProductTitle>
        <ProductList01>
          {/* @ts-ignore */}
          {recentData.current.map((item: ProductItemType, id) => (
            <TradeProductItem01 key={id} item={item}></TradeProductItem01>
          ))}
        </ProductList01>
      </RecentOrPopularProductDiv>
      <RecentOrPopularProductDiv>
        <RecentOrPopularProductTitle>
          실시간 인기 상품
        </RecentOrPopularProductTitle>
        <ProductList01>
          {/* @ts-ignore */}
          {popularData.current.map((item: ProductItemType, id) => (
            <TradeProductItem01 key={id} item={item}></TradeProductItem01>
          ))}
        </ProductList01>
      </RecentOrPopularProductDiv>
    </TradeMainProductDiv>
  );
};

export {
  TradeMain,
  SearchDiv02,
  AuctionSearchInput,
  ProductList02,
  TradeProductItem02,
  ProductList03,
  TradeProductItem03
};
