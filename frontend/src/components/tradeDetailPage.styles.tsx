import { styled } from 'styled-components';

const DetailFrame = styled.div`
  width: 1920px;
  margin-top: 7vh;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailDiv = styled.div`
  border: 2px solid black;
  width: 90%;
  margin: 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 이미지, 상품설명
const DetailUpDiv = styled.div`
  border: 2px solid black;
  width: 100%;
  display: flex;
`;
const DetailUpDivImage = styled.div`
  border: 2px solid blue;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailUpDivInfo = styled.div`
  border: 2px solid red;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailUpDivInfoFrame = styled.div`
  border: 2px solid green;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

// 카테고리, 상품명, 가격, 판매자 지역 및 경과시간, 찜하기, 구매대화하기, 판매자 정보
const DetailDivInfoCategory = styled.div`
  font-size: 14px;
  color: #929292;
`;
const DetailDivInfoName = styled.div`
  font-size: 36px;
  font-weight: bold;
`;
const DetailDivInfoPrice = styled.div`
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 판매가
const RegularPrice = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
// 원가
const Cost = styled.div`
  font-size: 28px;
  margin-left: 20px;
  color: #929292;
  text-decoration: line-through;
`;

// 중간선
const InfoLine = styled.div`
  width: 100%;
  margin: 10px auto;
  border-bottom: 1px solid #929292;
`;

const DetailDivInfoEtc = styled.div`
  font-size: 14px;
  color: #929292;
`;
const DetailDivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailDivCheck = styled.button`
  width: 300px;
  height: 40px;
  margin: 0 5px;
  border: 0;
  border-radius: 5px;
  background-color: #a0e4f1;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
const DetailDivChatting = styled.button`
  width: 300px;
  height: 40px;
  margin: 0 5px;
  border: 0;
  border-radius: 5px;
  background-color: #4786fa;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
const DetailDivSellor = styled.div``;

// 상품내용 + 관련상품
const DetailDownDiv = styled.div`
  border: 2px solid black;
  width: 100%;
`;
const DetailDivContent = styled.div`
  border: 2px solid blue;
  width: 100%;
`;
const DetailDivContentCaution = styled.div`
  border: 2px solid blue;
  width: 100%;
`;
const DetailDownDivRecommend = styled.div`
  border: 2px solid red;
  width: 100%;
  height: 200px;
`;

const TradeDetail = () => {
  return (
    <DetailFrame>
      <DetailDiv>
        <DetailUpDiv>
          <DetailUpDivImage>
            <img
              src='/assets/img/zeuslab.jpg'
              style={{
                width: '600px',
                height: '600px',
                border: '1px solid black'
              }}
            ></img>
          </DetailUpDivImage>
          <DetailUpDivInfo>
            <DetailUpDivInfoFrame>
              <DetailDivInfoCategory>
                카테고리 &gt; 모니터
              </DetailDivInfoCategory>
              <DetailDivInfoName>
                제우스랩 포터블 모니터 Z16 Pro
              </DetailDivInfoName>
              <DetailDivInfoPrice>
                <RegularPrice>130,000원</RegularPrice>
                <Cost>160,000원</Cost>
              </DetailDivInfoPrice>
              <InfoLine></InfoLine>
              <DetailDivInfoEtc>
                온천2동 · 2시간 전 · 조회 25 · 찜 0
              </DetailDivInfoEtc>
              <InfoLine></InfoLine>
              <DetailDivButton>
                <DetailDivCheck>찜하기</DetailDivCheck>
                <DetailDivChatting>구매 채팅하기</DetailDivChatting>
              </DetailDivButton>
              <InfoLine></InfoLine>
              <DetailDivSellor>판매자 정보</DetailDivSellor>
            </DetailUpDivInfoFrame>
          </DetailUpDivInfo>
        </DetailUpDiv>
        <DetailDownDiv>
          <DetailDivContent>
            <DetailDivContentCaution>주의사항</DetailDivContentCaution>
            내용
          </DetailDivContent>
          <DetailDownDivRecommend>관련상품</DetailDownDivRecommend>
        </DetailDownDiv>
      </DetailDiv>
    </DetailFrame>
  );
};

export { TradeDetail };
