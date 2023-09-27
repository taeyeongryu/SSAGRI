import { styled } from 'styled-components';

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

const ProductImage = styled.img`
  width: 400px;
  border-radius: 8px;
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
  return (
    <DetailDiv>
      <ProductInfo>
        <InfoTitle>상품 정보</InfoTitle>
        <InfoContentBox>
          <InfoContent className='image'>
            <ProductImage
              src='/assets/img/auctionsample.PNG'
              alt='상품 이미지'
            ></ProductImage>
          </InfoContent>

          <InfoContent className='info'>
            <div
              className='seller-info'
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <SellerInfo>
                <img
                  style={{ width: '30px' }}
                  src='/assets/img/profile.png'
                  alt='판매자 프로필 사진'
                />
                <div>닉네임</div>
              </SellerInfo>
              <SellerInfo>
                <img src='/assets/img/location.png' alt='위치 아이콘' />
                <div>지역</div>
              </SellerInfo>
            </div>

            <div>제우스랩 Z16P PRO MAX</div>

            <div style={{ backgroundColor: 'grey', color: 'white' }}>
              상품설명 ~~~~~~~~~~~~~~~
            </div>
          </InfoContent>

          <InfoContent className='price-info'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>시작가</div>
              <div>150000</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>정가</div>
              <div>210000</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>현재가</div>
              <div>180000</div>
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
            <div style={{ border: '1px solid black' }}>190000</div>
            <div style={{ backgroundColor: 'black', color: 'white' }}>입찰</div>
          </InfoContent>
        </InfoContentBox>
      </ProductInfo>
      <BidInfo>
        <InfoTitle>입찰 현황</InfoTitle>
        <InfoContentBox>
          <EachBid>
            <img src='/assets/img/bid_profile.png' alt='입찰자 프로필 사진' />
            <div>입찰자 닉네임</div>
            <div>입찰액</div>
            <HighPriceIcon>
              <div style={{ color: '#4786FA' }}>최고가</div>
            </HighPriceIcon>
          </EachBid>
        </InfoContentBox>
      </BidInfo>
    </DetailDiv>
  );
};

export { AuctionDetail };
