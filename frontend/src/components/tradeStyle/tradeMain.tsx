import { styled } from 'styled-components';
// import Logo from '../assets/img/logo.PNG';

const TradeMainFrame = styled.div`
  width: 100vw;
  height: 93vh;
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TradeMainDiv = styled.div`
  width: 70%;
  height: 70%;
  border: 1px solid blue;
  display: flex;
`;

const TradeMainMap = styled.div`
  width: 30%;
  height: 100%;
  border: 2px solid green;
`;

const TradeMainProduct = styled.div`
  width: 70%;
  height: 100%;
  border: 2px solid red;
`;

const TradeMain = () => {
  return (
    <TradeMainFrame>
      <TradeMainDiv>
        <TradeMainMap>
          <img
            src='/assets/img/koreaMap.jpg'
            alt=''
            style={{ width: '100%', height: '100%' }}
          />
        </TradeMainMap>
        <TradeMainProduct>검색, 목록</TradeMainProduct>
      </TradeMainDiv>
    </TradeMainFrame>
  );
};

export default TradeMain;
