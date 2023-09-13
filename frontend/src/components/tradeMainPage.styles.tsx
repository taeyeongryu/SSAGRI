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
  height: 70%;
  border: 1px solid blue;
  display: flex;
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
  width: 30%;
  height: 100%;
  border: 2px solid green;
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
  width: 70%;
  height: 100%;
  border: 2px solid red;
`;

const RegionAndSearch = styled.div`
  width: 935px;
  height: 60px;
  border: 2px solid blue;

  display: flex;
  justify-content: space-around;
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

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecentProduct = styled.div`
  width: 935px;
  height: 320px;
  border: 2px solid green;
`;
const PopularProduct = styled.div`
  width: 935px;
  height: 320px;
  border: 2px solid blue;
`;

const TradeMainProduct = () => {
  return (
    <TradeMainProductDiv>
      <RegionAndSearch>
        <Region>지역: 서울</Region>
        <Search>
          <input
            type='text'
            style={{
              width: '450px',
              height: '38px',
              border: 0,
              marginLeft: '16px'
            }}
            placeholder='Search...'
          />
          <img
            src='/assets/img/searchGlass.png'
            alt=''
            style={{ width: '20px', height: '20px' }}
          />
        </Search>
      </RegionAndSearch>
      <RecentProduct>방금 등록된 상품</RecentProduct>
      <PopularProduct>실시간 인기 상품</PopularProduct>
    </TradeMainProductDiv>
  );
};

export { TradeMainPageDiv, TradeMain };
