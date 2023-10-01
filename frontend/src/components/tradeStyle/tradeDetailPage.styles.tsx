import { styled } from 'styled-components';
import { ProductList03, TradeProductItem03 } from './tradeMainPage.styles';
import { useEffect, useRef, useState } from 'react';
import { ProductItemType } from '../type';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

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
// @ts-ignore
const CostText = styled.div`
  height: 36px;
  font-size: 14px;
  margin-left: 20px;
  color: #929292;
  display: flex;
  align-items: end;
`;
// @ts-ignore
const Cost = styled.div`
  font-size: 24px;
  margin-left: 5px;
  color: #929292;
  text-decoration: line-through;
`;
// @ts-ignore
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
    /* border: 1px solid #ec53b0; */
    cursor: pointer;
    box-shadow: 2px 2px 3px 3px #757575;
  }
  &:hover > div {
    /* color: #ec53b0; */
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
  &:hover {
    /* border: 1px solid #ffa1f5; */
    cursor: pointer;
    box-shadow: 2px 2px 3px 3px #757575;
  }
  &:hover > div {
    /* color: #ffa1f5; */
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

// --------- 판매자 정보 ---------
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

// ----- 판매자 정보 가져와서 화면에 보여주기 -----
const SellorDiv = (sellorInfo: any) => {
  // console.log('SellorDiv', sellorInfo.sellorInfo);
  return (
    <>
      <DetailSellorHeader>
        <DetailSellorHeaderText>판매자 정보</DetailSellorHeaderText>
        <DetailSellorHeaderDetail>
          판매자 상품 더보기 &gt;
        </DetailSellorHeaderDetail>
      </DetailSellorHeader>
      <DetailSellorDiv>
        <DetailSellorTitle>
          <DetailSellorLeft>
            <DetailSellorNickname>
              {sellorInfo.sellorInfo.sellorNickname != null
                ? sellorInfo.sellorInfo.sellorNickname
                : '닉네임'}
            </DetailSellorNickname>
            <DetailSellorTrade>판매상품 3</DetailSellorTrade>
          </DetailSellorLeft>
          <DetailSellorRight>
            <DetailSellorProfile>
              <img
                src={sellorInfo.sellorInfo.sellorProfile}
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
              매너온도 {sellorInfo.sellorInfo.sellorTemper}
            </DetailSellorTemperatureText>
            <DetailSellorTemperatureMax>1,000</DetailSellorTemperatureMax>
          </DetailSellorTemperatureInfo>
          <DetailSellorTemperatureGraph>
            <DetailSellorTemperatureScale></DetailSellorTemperatureScale>
          </DetailSellorTemperatureGraph>
        </DetailSellorTemperatureDiv>
      </DetailSellorDiv>
    </>
  );
};

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

const CautionBox = () => {
  return (
    <>
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
    </>
  );
};

// 본문 상품내용
const DetailContentText = styled.div`
  border-top: 1px solid #a3a3a3;
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
// @ts-ignore
const Tag = styled.div`
  font-size: 50px;
  line-height: 40px;
  font-weight: bold;
  color: #4786fa;
  margin-bottom: 15px;
  &:hover {
    color: tomato;
    cursor: pointer;
  }
`;

// type Sellor = {
//   sellorNickname: string;
//   sellorNo: number;
//   sellorProfile: string;
//   sellorTemper: number;
// };

const TradeDetail = () => {
  // 물품, 판매자 정보 저장 예정
  const productDetail = useRef({
    content: 'string',
    createDate: '2023-09-22T00:42:26.086Z',
    like: true,
    likeCount: 0,
    price: 0,
    productCategory: 'READY',
    productNo: 2,
    region: '지역',
    saleStatus: 'READY',
    title: '로딩 중...',
    updateDate: '2023-09-22T00:42:26.086Z',
    usedProductPhotoResponseDto: {
      link: 'https://i.imgur.com/ixdlIIc.png',
      photoNo: 0
    },
    userNickname: 'string',
    userNo: 0,
    userProfile: 'string',
    userTemper: 0
  });
  // URI에서 물품번호 가져오기
  const productNo = useParams().no;
  console.log(productNo, 'Detail');
  // 판매자 정보 저장
  const [sellorInfo, setSellorInfo] = useState({});

  // 관련 추천 상품 리스트
  const responseList = useRef([]);

  const navigate = useNavigate();
  const goChat = () => {
    navigate(`/chat`);
  };

  let linkDto: any;
  const categoryEng = useRef('');
  const categoryKor = useRef('');
  const regionEng = useRef('');
  const regionKor = useRef('');
  const likeYN = useRef('');
  const pastTime = useRef('');
  const [link, setLink] = useState('https://i.imgur.com/pqvW1Yv.png');

  const userNo = localStorage.getItem('userNo');

  useEffect(() => {
    const url = `/usedproduct/detail/${userNo}?usedProductNo=${productNo}`;
    axios
      .get(url)
      .then((res) => {
        // console.log('check Detail', res);

        // 응답 데이터 삽입
        productDetail.current = res.data;
        // console.log('check productDetail.current', productDetail.current);

        // 이미지 링크 삽입
        if (productDetail.current.usedProductPhotoResponseDto) {
          linkDto = productDetail.current.usedProductPhotoResponseDto[0];
        }
        setLink(linkDto.link);

        // HTML을 content 에 삽입
        const detailContent: any = document.querySelector('#detail-content');
        detailContent.innerHTML = productDetail.current.content;
        // console.log('check link', link);

        // 판매자 정보를 따로 저장
        setSellorInfo({
          sellorNickname: res.data.userNickname,
          sellorNo: res.data.userNo,
          sellorProfile: res.data.userProfile,
          sellorTemper: res.data.userTemper
        });
        // console.log('check sellorInfo', sellorInfo);

        // 카테고리를 따로 저장
        categoryEng.current = productDetail.current.productCategory;
        // console.log('check categoryEng', categoryEng.current);
        switch (categoryEng.current) {
          case 'MONITER':
            categoryKor.current = '모니터';
            break;
          case 'KEYBOARD':
            categoryKor.current = '키보드';
            break;
          case 'MOUSE':
            categoryKor.current = '마우스';
            break;
          case 'LIFE':
            categoryKor.current = '생활용품';
            break;
          case 'ETC':
            categoryKor.current = '기타용품';
            break;
        }
        // console.log('check categoryKor', categoryKor.current);

        // 지역도 따로 저장
        regionEng.current = productDetail.current.region;
        // console.log('check regionEng', regionEng.current);
        switch (regionEng.current) {
          case 'SEOUL':
            regionKor.current = '서울';
            break;
          case 'DAEJEON':
            regionKor.current = '대전';
            break;
          case 'GUMI':
            regionKor.current = '구미';
            break;
          case 'GWANGJU':
            regionKor.current = '광주';
            break;
          case 'BUG':
            regionKor.current = '부울경';
            break;
        }

        // 시간을 계산해보자 https://stonefree.tistory.com/259
        const time = new Date(productDetail.current.createDate);
        const timeNow = new Date();
        const diffSec = timeNow.getTime() - time.getTime();
        const minute = diffSec / (60 * 1000);
        // console.log('Minute : ', diffSec / (60 * 1000));
        // console.log('Hour : ', diffSec / (60 * 60 * 1000));
        // console.log('Date : ', diffSec / (24 * 60 * 60 * 1000));
        // console.log(minute.toFixed(0));
        // console.log(Math.floor(minute / 60));
        if (minute < 1) {
          pastTime.current = `방금 전`;
        } else if (minute < 60) {
          pastTime.current = `${minute.toFixed(0)}분 전`;
        } else if (minute < 24 * 60) {
          pastTime.current = `${Math.floor(minute / 60)}시간 전`;
        } else if (minute < 24 * 60 * 30) {
          pastTime.current = `${Math.floor(minute / (24 * 60))}일 전`;
        } else {
          pastTime.current = `${Math.floor(minute / (24 * 60 * 30))}달 전`;
        }
        console.log(pastTime.current);

        // 좋아요도 확인하자.
        if (productDetail.current.like) {
          likeYN.current = '/assets/img/heartColor.png';
        } else {
          likeYN.current = '/assets/img/heartWhite.png';
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // 관련상품 데이터 가져오기
    axios
      .get(
        `/usedproduct/${userNo}?category=${categoryEng.current}&region=${regionEng.current}&sort=like,desc&page=0&size=3`
      )
      .then((res) => {
        console.log('res.data', res.data.content);
        responseList.current = res.data.content;
      });
  }, []);

  return (
    <DetailFrame>
      <DetailDiv>
        <DetailUpDiv>
          <DetailUpDivImage>
            <img
              src={link}
              style={{
                width: '600px',
                height: '600px'
              }}
            ></img>
          </DetailUpDivImage>
          <DetailUpDivInfo>
            <DetailUpDivInfoFrame>
              <DetailDivInfoCategory>
                카테고리 &gt;{' '}
                <div style={{ color: '#000' }}>&nbsp;{categoryKor.current}</div>
              </DetailDivInfoCategory>
              <DetailDivInfoName>
                <DetailDivInfoNameText>
                  {/* 30자 제한을 둬야 화면에 깔끔하게 나온다 */}
                  {productDetail.current.title}
                </DetailDivInfoNameText>
                <DetailDivInfoShareButton>
                  <DetailDivInfoShare src='/assets/img/share.png'></DetailDivInfoShare>
                </DetailDivInfoShareButton>
              </DetailDivInfoName>
              <DetailDivInfoPrice>
                <RegularPrice>{productDetail.current.price}</RegularPrice>
                <RegularPriceWon>원</RegularPriceWon>
                {/* <CostText>정가</CostText>
                <Cost>160,000</Cost>
                <CostWon>원</CostWon> */}
              </DetailDivInfoPrice>
              <InfoLine></InfoLine>
              <DetailDivInfoEtc>
                {regionKor.current} · {pastTime.current} · 좋아요{' '}
                {productDetail.current.likeCount}
              </DetailDivInfoEtc>
              <InfoLine></InfoLine>
              <DetailDivButton>
                <DetailDivHeart>
                  <HeartText>찜하기</HeartText>
                  <HeartImgDiv>
                    <HeartImg src={likeYN.current}></HeartImg>
                  </HeartImgDiv>
                </DetailDivHeart>
                <DetailDivChat>
                  <ChatText onClick={goChat}>구매 채팅하기</ChatText>
                  <ChatImgDiv>
                    <ChatImg src='/assets/img/chat.png'></ChatImg>
                  </ChatImgDiv>
                </DetailDivChat>
              </DetailDivButton>
              <InfoLine></InfoLine>
              {/* 판매자 정보 */}
              <DetailDivSellorFrame>
                <SellorDiv sellorInfo={sellorInfo}></SellorDiv>
              </DetailDivSellorFrame>
            </DetailUpDivInfoFrame>
          </DetailUpDivInfo>
        </DetailUpDiv>
        <DetailDownDiv>
          <DetailContentDiv>
            {/* 주의사항 Box */}
            <DetailContentCaution>
              <CautionBox></CautionBox>
            </DetailContentCaution>
            {/* 본문 내용 */}
            <DetailContentText id='detail-content'>
              {productDetail.current.content}
            </DetailContentText>
          </DetailContentDiv>
          <InfoLine></InfoLine>
          {/* 관련 추천상품 */}
          <DetailRecommend>
            <DetailRecommendText>관련상품</DetailRecommendText>
            <ProductList03>
              {/* @ts-ignore */}
              {responseList.current.map((item: ProductItemType, id) => {
                return (
                  <TradeProductItem03 key={id} item={item}></TradeProductItem03>
                );
              })}
            </ProductList03>
          </DetailRecommend>
        </DetailDownDiv>
      </DetailDiv>
    </DetailFrame>
  );
};

export { TradeDetail };
