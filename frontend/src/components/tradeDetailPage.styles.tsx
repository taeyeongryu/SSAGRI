import { styled } from 'styled-components';
import {
  ProductList03,
  ProductStyle03,
  ProductImgStyle03,
  ProductDetailStyle03,
  ProductName03,
  ProductPrice03,
  SellerLocationAndTime03
} from '../components/tradeMainPage.styles';

const DetailFrame = styled.div`
  width: 1920px;
  margin-top: 7vh;
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailDiv = styled.div`
  /* border: 2px solid black; */
  width: 70%;
  margin: 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 이미지, 상품설명
const DetailUpDiv = styled.div`
  /* border: 2px solid black; */
  width: 100%;
  display: flex;
`;
const DetailUpDivImage = styled.div`
  /* border: 2px solid blue; */
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailUpDivInfo = styled.div`
  /* border: 2px solid red; */
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailUpDivInfoFrame = styled.div`
  /* border: 2px solid green; */
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

// 카테고리, 상품명, 가격, 판매자 지역 및 경과시간, 찜하기, 구매대화하기, 판매자 정보
const DetailDivInfoCategory = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  color: #929292;
  display: flex;
`;
const DetailDivInfoName = styled.div`
  margin-bottom: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DetailDivInfoNameText = styled.div`
  margin-bottom: 5px;
  font-size: 28px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const DetailDivInfoShareButton = styled.button`
  background-color: white;
  border: 0;
  &:hover {
    cursor: pointer;
  }
`;
const DetailDivInfoShare = styled.img`
  width: 20px;
  height: 20px;
`;
// 가격
const DetailDivInfoPrice = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 판매가
const RegularPrice = styled.div`
  font-size: 36px;
  font-weight: bold;
`;
const RegularPriceWon = styled.div`
  /* border: 1px solid black; */
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: end;
`;
// 정가
const CostText = styled.div`
  height: 36px;
  font-size: 14px;
  margin-left: 20px;
  color: #929292;
  display: flex;
  align-items: end;
`;
const Cost = styled.div`
  font-size: 24px;
  margin-left: 5px;
  color: #929292;
  text-decoration: line-through;
`;
const CostWon = styled.div`
  /* border: 1px solid black; */
  height: 36px;
  font-size: 14px;
  color: #929292;
  display: flex;
  align-items: end;
`;

// 중간선
const InfoLine = styled.div`
  width: 100%;
  margin: 10px auto;
  border-bottom: 1px solid #a3a3a3;
`;

const DetailDivInfoEtc = styled.div`
  font-size: 14px;
  margin: 5px 0px;
  color: #929292;
`;

// 버튼
const DetailDivButton = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 찜하기 버튼
const DetailDivHeart = styled.button`
  width: 320px;
  height: 50px;
  margin: 0 5px;
  border: 0;
  border-radius: 5px;
  background-color: #a0e4f1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 1px #757575;
  &:active {
    box-shadow: 0px 0px 0px 1px #757575;
  }
  &:hover {
    border: 1px solid #ec53b0;
    cursor: pointer;
  }
  &:hover > div {
    color: #ec53b0;
  }
`;
const HeartText = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  line-height: 40px;
`;
const HeartImgDiv = styled.div`
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeartImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;
// 채팅버튼
const DetailDivChat = styled.button`
  width: 320px;
  height: 50px;
  margin: 0 5px;
  border: 0;
  border-radius: 5px;
  background-color: #4786fa;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 1px #757575;
  &:active {
    box-shadow: 0px 0px 0px 1px #757575;
  }
  &:hover {
    border: 1px solid #ffa1f5;
    cursor: pointer;
  }
  &:hover > div {
    color: #ffa1f5;
  }
`;
const ChatText = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  line-height: 40px;
`;
const ChatImgDiv = styled.div`
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChatImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

// 판매자 정보
const DetailDivSellorFrame = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DetailSellorHeader = styled.div`
  /* border: 1px solid black; */
  width: 90%;
  height: 40px;
  padding: 5px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DetailSellorHeaderText = styled.div`
  /* border: 1px solid blue; */
  font-size: 16px;
  font-weight: bold;
`;
const DetailSellorHeaderDetail = styled.div`
  /* border: 1px solid blue; */
  font-size: 14px;
  font-weight: bold;
  &:hover {
    color: tomato;
    cursor: pointer;
  }
`;
const DetailSellorDiv = styled.div`
  /* border: 1px solid black; */
  width: 90%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const DetailSellorTitle = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DetailSellorLeft = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DetailSellorNickname = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 30px;
  margin-bottom: 3px;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
`;
const DetailSellorTrade = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  color: #929292;
`;
const DetailSellorRight = styled.div`
  /* border: 1px solid cyan; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailSellorProfile = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  top: 0px;
  right: 0px;
`;
// 매너온도
const DetailSellorTemperatureDiv = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const DetailSellorTemperatureInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DetailSellorTemperatureText = styled.div`
  color: #0dcc5a;
  font-weight: bold;
  font-size: 16px;
`;
const DetailSellorTemperatureMax = styled.div`
  color: #929292;
  font-weight: bold;
  font-size: 14px;
  margin-right: 3px;
`;
const DetailSellorTemperatureGraph = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: #ccf4dc;
`;
const DetailSellorTemperatureScale = styled.div`
  /* border: 1px solid black; */
  width: 40%;
  height: 10px;
  border-radius: 10px;
  background-color: #0dcc5a;
  position: inherit;
  top: 0px;
  left: 0px;
`;

// 상품내용 + 관련상품
const DetailDownDiv = styled.div`
  /* border: 1px solid black; */
  width: 90%;
`;
const DetailContentDiv = styled.div`
  /* border: 3px solid blue; */
  width: 100%;
`;
// 주의사항
const DetailContentCaution = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  height: 200px;
  display: flex;
  margin: 20px 0px;
  background-color: #f9f9f9;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const CautionHeader = styled.div`
  display: flex;
`;
const CautionHeaderText = styled.div`
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #5a5a5e;
`;
const CautionContent = styled.div``;
const CautionFooter = styled.div`
  border-bottom: 1px solid #5a5a5e;
  color: #5a5a5e;
  font-weight: bold;
`;
// 본문 상품내용
const DetailContentText = styled.div`
  border: 3px solid blue;
  margin: 20px 0px;
`;
// 관련상품 추천
const DetailRecommend = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DetailRecommendText = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
`;
const Tag = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: #4786fa;
  &:hover {
    color: tomato;
    cursor: pointer;
  }
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
                height: '600px'
              }}
            ></img>
          </DetailUpDivImage>
          <DetailUpDivInfo>
            <DetailUpDivInfoFrame>
              <DetailDivInfoCategory>
                카테고리 &gt; <div style={{ color: '#000' }}>&nbsp;모니터</div>
              </DetailDivInfoCategory>
              <DetailDivInfoName>
                <DetailDivInfoNameText>
                  {/* 30자 제한을 둬야 화면에 깔끔하게 나온다 */}
                  제우스랩 포터블 모니터 Z16 Pro
                </DetailDivInfoNameText>
                <DetailDivInfoShareButton>
                  <DetailDivInfoShare src='/assets/img/share.png'></DetailDivInfoShare>
                </DetailDivInfoShareButton>
              </DetailDivInfoName>
              <DetailDivInfoPrice>
                <RegularPrice>130,000</RegularPrice>
                <RegularPriceWon>원</RegularPriceWon>
                <CostText>정가</CostText>
                <Cost>160,000</Cost>
                <CostWon>원</CostWon>
              </DetailDivInfoPrice>
              <InfoLine></InfoLine>
              <DetailDivInfoEtc>
                온천2동 · 2시간 전 · 조회 25 · 찜 0
              </DetailDivInfoEtc>
              <InfoLine></InfoLine>
              <DetailDivButton>
                <DetailDivHeart>
                  <HeartText>찜하기</HeartText>
                  <HeartImgDiv>
                    <HeartImg src='/assets/img/heartWhite.png'></HeartImg>
                  </HeartImgDiv>
                </DetailDivHeart>
                <DetailDivChat>
                  <ChatText>구매 채팅하기</ChatText>
                  <ChatImgDiv>
                    <ChatImg src='/assets/img/chat.png'></ChatImg>
                  </ChatImgDiv>
                </DetailDivChat>
              </DetailDivButton>
              <InfoLine></InfoLine>
              <DetailDivSellorFrame>
                <DetailSellorHeader>
                  <DetailSellorHeaderText>판매자 정보</DetailSellorHeaderText>
                  <DetailSellorHeaderDetail>
                    판매자 상품 더보기 &gt;
                  </DetailSellorHeaderDetail>
                </DetailSellorHeader>
                <DetailSellorDiv>
                  <DetailSellorTitle>
                    <DetailSellorLeft>
                      <DetailSellorNickname>코딩왕123</DetailSellorNickname>
                      <DetailSellorTrade>
                        판매상품 3 · 안전거래 2 · 후기 0
                      </DetailSellorTrade>
                    </DetailSellorLeft>
                    <DetailSellorRight>
                      <DetailSellorProfile>
                        <img
                          src='/assets/img/profile.png'
                          style={{
                            width: '80px',
                            height: '80px'
                          }}
                        />
                      </DetailSellorProfile>
                    </DetailSellorRight>
                  </DetailSellorTitle>
                  <DetailSellorTemperatureDiv>
                    <DetailSellorTemperatureInfo>
                      <DetailSellorTemperatureText>
                        매너온도 424
                      </DetailSellorTemperatureText>
                      <DetailSellorTemperatureMax>
                        1,000
                      </DetailSellorTemperatureMax>
                    </DetailSellorTemperatureInfo>
                    <DetailSellorTemperatureGraph>
                      <DetailSellorTemperatureScale></DetailSellorTemperatureScale>
                    </DetailSellorTemperatureGraph>
                  </DetailSellorTemperatureDiv>
                </DetailSellorDiv>
              </DetailDivSellorFrame>
            </DetailUpDivInfoFrame>
          </DetailUpDivInfo>
        </DetailUpDiv>
        <DetailDownDiv>
          <DetailContentDiv>
            {/* 주의사항 Box */}
            <DetailContentCaution>
              <CautionHeader>
                <img
                  src='/assets/img/caution.png'
                  style={{ width: '30px', height: '30px' }}
                  alt='caution.png'
                />
                <CautionHeaderText>거래 전 주의사항 안내</CautionHeaderText>
              </CautionHeader>
              <CautionContent>
                판매자가 별도의 메신저로 결제 링크를 보내거나 직거래(직접송금)을
                <br></br>
                유도하는 경우 사기일 가능성이 높으니 거래를 자제해 주시고
              </CautionContent>
              <CautionFooter>
                싸그리 고객센터(02-123-4567) 로 신고해주시기 바랍니다.
              </CautionFooter>
            </DetailContentCaution>
            {/* 본문 내용 */}
            <DetailContentText>본문내용 삽입 HTML</DetailContentText>
          </DetailContentDiv>
          <InfoLine></InfoLine>
          {/* 관련 추천상품 */}
          <DetailRecommend>
            <DetailRecommendText>관련상품</DetailRecommendText>
            <ProductList03>
              <Tag>&lt;</Tag>
              <ProductStyle03>
                <ProductImgStyle03 src='/assets/img/zeuslab.jpg'></ProductImgStyle03>
                <ProductDetailStyle03>
                  <ProductName03>제우스랩 포터블 모니터 Z16 Pro</ProductName03>
                  <ProductPrice03>130,000 원</ProductPrice03>
                  <SellerLocationAndTime03>
                    온천2동 | 10분 전
                  </SellerLocationAndTime03>
                </ProductDetailStyle03>
              </ProductStyle03>
              <ProductStyle03>
                <ProductImgStyle03 src='/assets/img/zeuslab.jpg'></ProductImgStyle03>
                <ProductDetailStyle03>
                  <ProductName03>제우스랩 포터블 모니터 Z16 Pro</ProductName03>
                  <ProductPrice03>130,000 원</ProductPrice03>
                  <SellerLocationAndTime03>
                    온천2동 | 10분 전
                  </SellerLocationAndTime03>
                </ProductDetailStyle03>
              </ProductStyle03>
              <ProductStyle03>
                <ProductImgStyle03 src='/assets/img/zeuslab.jpg'></ProductImgStyle03>
                <ProductDetailStyle03>
                  <ProductName03>제우스랩 포터블 모니터 Z16 Pro</ProductName03>
                  <ProductPrice03>130,000 원</ProductPrice03>
                  <SellerLocationAndTime03>
                    온천2동 | 10분 전
                  </SellerLocationAndTime03>
                </ProductDetailStyle03>
              </ProductStyle03>
              <Tag>&gt;</Tag>
            </ProductList03>
          </DetailRecommend>
        </DetailDownDiv>
      </DetailDiv>
    </DetailFrame>
  );
};

export { TradeDetail };
