import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import { ReactComponent as IcLeft } from '/public/assets/img/icon_left.svg';
import { ReactComponent as IcRight } from '/public/assets/img/icon_right.svg';

const DetailDiv = styled.div`
  margin-top: 200px;
  margin-left: 200px;
  width: 1400px;
  height: 1000px;
  border: 3px solid black;
  display: flex;
  justify-content: space-around;
`;

// 상품 정보
const ProductInfo = styled.div`
  margin: 10px;
`;

// 상품 이미지
const StWrapper = styled.div`
  display: flex;
  position: relative;
  width: 500px;
  height: 400px;
  overflow: hidden;
`;

const StImageWrapper = styled.div`
  display: flex;

  & > img {
    width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const StLeftButton = styled(IcLeft)`
  position: absolute;
  top: calc(100% / 2);
  left: 10px;
  z-index: 999;

  &:hover {
    cursor: pointer;
    & > path {
      fill: rgba(0, 0, 0, 0.5);
    }
  }
`;

const StRightButton = styled(IcRight)`
  position: absolute;
  top: calc(100% / 2);
  right: 10px;
  z-index: 999;

  &:hover {
    cursor: pointer;
    & > path {
      fill: rgba(255, 255, 255, 0.5);
    }
  }
`;

const SellerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

// 입찰 정보
const BidInfo = styled.div`
  width: 400px;
`;

const EachBid = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  background-color: rgba(157, 198, 255, 0.3);
  border-radius: 8px;
`;

const HighPriceIcon = styled.div`
  border: 1px solid #315dfb;
  background: #9dc6ff;
`;

// 각 소제목
const InfoTitle = styled.div`
  font-size: 40px;
`;
// 내용 구분
const InfoContentBox = styled.div`
  margin: 10px;
`;
// 각 내용들
const InfoContent = styled.div`
  margin: 10px;

  &.price-info {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
`;

const AuctionDetail = () => {
  const { state } = useLocation();
  const auctionItem = state.item;
  console.log('경매 아이템 정보: ', auctionItem);

  const [images, setImages] = useState([]);

  // 가격 선택 박스
  // 초기 가격 설정
  const [startPrice, setStartPrice] = useState(auctionItem.downPrice); // 입찰 가능한 최소금액
  const [selectedPrice, setSelectedPrice] = useState(auctionItem.downPrice); // 화면에서 선택된 금액

  // 입찰가격 옵션
  const priceOptions = [];

  for (
    let price = startPrice;
    price <= startPrice + 10 * auctionItem.priceCount;
    price += auctionItem.priceCount
  ) {
    // @ts-ignore
    priceOptions.push(price);
  }

  const handlePriceChange = (e) => {
    setSelectedPrice(parseInt(e.target.value));
  };

  // 경매 입찰
  const auctionBid = () => {
    const bidData = {
      auctionBidPrice: selectedPrice,
      auctionNo: auctionItem.no,
      userNo: Number(localStorage.getItem('userNo')) // 입찰자의 유저 넘버
    };
    console.log('입찰 정보: ', bidData);

    axios
      .post(`/auction-bid`, bidData)
      .then((res) => {
        console.log(res);
        // 입찰 가능한 최소금액을 갱신해준다.
        setStartPrice(selectedPrice + auctionItem.priceCount);
        getBidList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 지역 포맷
  const formatRegion = (region) => {
    switch (region) {
      case 'SEOUL':
        return '서울';
      case 'DAEJEON':
        return '대전';
      case 'GUMI':
        return '구미';
      case 'GWANGJU':
        return '광주';
      case 'BUG':
        return '부울경';
    }
  };

  // 상품 사진 불러오기
  const loadImg = () => {
    axios
      .get(`/auction-product/load/${auctionItem.no}`)
      .then((res) => {
        if (res.data.result) {
          console.log('상품 사진 있음: ', res.data.result);
          const auctionItemImages = res.data.result;
          setImages(auctionItemImages);
        } else {
          console.log('상품 사진 없음');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [bidList, setBidList] = useState([]);

  // 경매 입찰 내역 조회
  const getBidList = () => {
    axios
      .get(`/auction-bid/${auctionItem.no}`)
      .then((res) => {
        console.log('입찰 내역: ', res.data);
        setBidList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [currentIdx, setCurrentIdx] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    if (currentIdx === -1) {
      // @ts-ignore
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      // @ts-ignore
      slideRef.current.style.transform = `translateX(-2000px)`;
      setCurrentIdx(images.length - 1);
    } else if (currentIdx === images.length) {
      setCurrentIdx(0);
      // @ts-ignore
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      // @ts-ignore
      slideRef.current.style.transform = `translateX(0px)`;
    }
  }, [currentIdx]);

  const onClickLeftButton = () => {
    if (currentIdx === -1) {
      setCurrentIdx(images.length - 1);
    } else {
      setCurrentIdx((prev) => prev - 1);
      // @ts-ignore
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      // @ts-ignore
      slideRef.current.style.transform = `translateX(-${
        currentIdx * 500 - 500
      }px)`;
    }
  };

  const onClickRightButton = () => {
    if (currentIdx === images.length) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx((prev) => prev + 1);
      // @ts-ignore
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      // @ts-ignore
      slideRef.current.style.transform = `translateX(-${
        500 * (currentIdx + 1)
      }px)`;
    }
  };

  useEffect(() => {
    loadImg();
    getBidList();
  }, []);

  return (
    <DetailDiv>
      <ProductInfo>
        <InfoTitle>상품 정보</InfoTitle>
        <InfoContentBox>
          <InfoContent className='image'>
            <StWrapper>
              <StLeftButton onClick={onClickLeftButton} />
              <StRightButton onClick={onClickRightButton} />
              <StImageWrapper ref={slideRef}>
                {images.map((url, id) => (
                  // @ts-ignore
                  <img src={url.imageLink} key={id} />
                ))}
              </StImageWrapper>
            </StWrapper>
          </InfoContent>

          <InfoContent className='info'>
            <div
              className='seller-info'
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <SellerInfo>
                <img
                  style={{ width: '30px' }}
                  src={auctionItem.profile}
                  alt='판매자 프로필 사진'
                />
                <div> {auctionItem.userNickName} </div>
              </SellerInfo>
              <SellerInfo>
                <img src='/assets/img/location.png' alt='위치 아이콘' />
                <div>{formatRegion(auctionItem.region)}</div>
              </SellerInfo>
            </div>

            <div> {state.item.name} </div>

            <div style={{ backgroundColor: 'grey', color: 'white' }}>
              {state.item.comment}
            </div>
          </InfoContent>

          <InfoContent className='price-info'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>시작가</div>
              <div>{state.item.downPrice}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>정가</div>
              <div>{state.item.originPrice}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>현재가</div>
              <div>{state.item.finallyPrice}</div>
            </div>
          </InfoContent>

          <InfoContent
            className='info'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div>
              <div>남은 시간</div>
              <div>24:00:00</div>
            </div>
            {/* 입찰가격 선택 */}
            <div style={{ border: '1px solid black' }}>
              <div>
                <select
                  id='priceSelect'
                  onChange={handlePriceChange}
                  value={selectedPrice}
                >
                  {priceOptions.map((price, index) => (
                    <option key={index} value={price}>
                      {price}원
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* 입찰 버튼 */}
            <div
              style={{ backgroundColor: 'black', color: 'white' }}
              onClick={auctionBid}
            >
              입찰
            </div>
          </InfoContent>
        </InfoContentBox>
      </ProductInfo>
      <BidInfo>
        <InfoTitle>입찰 현황</InfoTitle>
        <InfoContentBox>
          {bidList.map((bid, idx) => (
            <EachBid key={idx}>
              <img src={bid.userProfileURL} alt='입찰자 프로필 사진' />
              <div>{bid.userNickname}</div>
              <div>{bid.auctionBidPrice}</div>
              {idx === 0 ? (
                <HighPriceIcon>
                  <div style={{ color: '#4786FA' }}>최고가</div>
                </HighPriceIcon>
              ) : null}
            </EachBid>
          ))}
        </InfoContentBox>
      </BidInfo>
    </DetailDiv>
  );
};

export { AuctionDetail };
