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

const TradeMainProduct = () => {
  return (
    <TradeMainProductDiv>
      <div>검색, 목록</div>
    </TradeMainProductDiv>
  );
};

export { TradeMainPageDiv, TradeMain };
