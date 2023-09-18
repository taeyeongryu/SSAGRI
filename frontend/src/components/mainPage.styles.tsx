import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

const MainPage = styled.div`
  width: 100%;
  height: 100vh;
`;

const Scrollbar = styled.div`
  position: absolute;
  margin: 90vh 25vw;
  width: 50vw;
  height: 10px;
  border: 2px solid black;
  z-index: 20;
`;

const Page = styled.div`
  display: flex;
  overflow: hidden;
  /* scroll-behavior: smooth; */
`;
const PagesSection1 = styled.section`
  min-width: 130vw;
  min-height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 4ch;
  /* overflow: hidden; */
  /* border: 1px solid black; */
`;
const PagesSection2 = styled.section`
  /* min-width: 6000px; */
  min-height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 4ch;
  /* overflow: hidden; */
  /* border: 10px solid black; */
`;
const Pages1 = styled.div`
  display: flex;
  align-items: center;
  /* overflow: hidden; */
  margin-left: 100px;
`;
const Pages1_Left = styled.div`
  position: relative;
  width: 530px;
  height: 500px;
  /* border: 1px solid black; */
  margin-right: 200px;
  /* align-items: center; */
`;

const Pages1_tag1 = styled.p`
  font-size: 35px;
  margin-top: 240px;
`;
const Pages1_tag2 = styled.p`
  font-size: 15px;
`;
const Pages1_Img1 = styled.img`
  width: 320px;
  height: 200px;
  position: absolute;
  left: 280px;
  top: 300px;
  border-radius: 20px;
  animation: moveUpDown 1s infinite alternate; /* 애니메이션 적용 */
  @keyframes moveUpDown {
    0% {
      top: 50px;
    }
    100% {
      top: 59px; /* 1초에 2vh 이동 */
    }
  }
`;

const Pages1_Right = styled.div`
  /* position: absolute;
  top: 110px;
  left: 700px; */
  position: relative;
  /* width: 480px;
  height: 540px; */
  /* border: 1px solid black; */
  /* transform: rotate(20deg); */
  overflow: hidden;
  width: 550px;
  height: 550px;
  /* width: 320px;
  height: 320px; */
  @media (max-width: 1000px) {
    width: 420px;
    height: 420px;
  }

  transform: rotate(0deg); /* 초기 회전 각도 */
  transition: transform 0.2s ease;
`;

const Pages1_img1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 550px;
  height: 550px;
  /* width: 320px;
  height: 320px; */
  /* border: 20px solid red; */
  @media (max-width: 1000px) {
    width: 420px;
    height: 420px;
  }
`;

const Pages2 = styled.div`
  display: flex;
  /* align-items: center; */
  /* overflow: hidden; */
  margin-left: 10px;
`;

const Page2_tag1 = styled.div`
  margin-top: 330px;
  margin-right: 150px;
  font-size: 40px;
  width: 800px;
  height: 200px;
  border: 2px solid red;
`;

const Page2_tag2 = styled.div`
  margin-top: 100px;
  font-size: 40px;
  width: 400px;
  height: 400px;
  border: 2px solid red;
  margin-right: 300px;
`;

// 섹션2번 -중고거래

const Page2_colorbox = styled.div`
  font-size: 40px;
  width: 4300px;
  height: 100vh;
  /* border: 2px solid red; */
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
  background: #eee1e1;
  /* overflow: hidden; */
  position: relative;
`;

const TradeDiv = styled.div`
  display: flex;
  /* border: 2px solid red; */
`;
const Trade_box1 = styled.div`
  margin-top: 90px;
  margin-left: 1000px;
  margin-right: 400px;
  width: 500px;
  height: 700px;
  /* border: 2px solid red; */
`;
const Trade_box2 = styled.div`
  margin-top: 150px;
  width: 500px;
  height: 700px;
  /* border: 2px solid red; */
`;

const NameTag0 = styled.p`
  font-size: 120px;
  width: 500px;
  /* border: 2px solid black; */
`;
const NameTag0_2 = styled.p`
  font-size: 50px;
  width: 500px;
  /* border: 2px solid black; */
`;

const Trade_btn = styled.div`
  width: 200px;
  height: 70px;
  border: 2px solid black;
  margin-left: 280px;
  font-size: 20px;
`;

const Next_line = styled.div`
  margin-top: 390px;
  margin-left: 160px;
  width: 250px;
  height: 4px;
  /* border: 5px solid black; */
  background-color: rgb(0, 0, 0, 0.5);
`;

const Recent_box = styled.div`
  height: 800px;
  width: 1000px;
  /* border: 2px solid black; */
  margin-left: 200px;
`;

const NameTag0_3 = styled.p`
  font-size: 50px;
  width: 500px;
  /* border: 2px solid black; */
  margin: 100px auto;
  text-align: center;
`;

const Recent_list = styled.div`
  display: flex;
  width: 1000px;
  height: 300px;
  border: 2px solid black;
  margin: 0 auto;
`;
const Recent_btn = styled.div`
  width: 200px;
  height: 70px;
  border: 2px solid black;
  font-size: 20px;
  margin: 30px auto;
  text-align: center;
  line-height: 70px;
`;
const Page2_section2 = () => {
  return (
    <Page2_colorbox>
      <TradeDiv>
        <Trade_box1>
          <NameTag0>중고거래</NameTag0>
          <NameTag0_2>내용</NameTag0_2>
          <Trade_btn>거래하러가기</Trade_btn>
        </Trade_box1>
        <Trade_box2>이미지</Trade_box2>
        <Next_line></Next_line>
        <Recent_box>
          <NameTag0_3>최근 등록 리스트</NameTag0_3>
          <Recent_list></Recent_list>
          <Recent_btn>최근 등록 상품</Recent_btn>
        </Recent_box>
      </TradeDiv>
    </Page2_colorbox>
  );
};

// 섹션3번 -경매

const Page2_Auction = styled.div`
  width: 1820px;
  height: 100vh;
  /* border: 5px solid black; */
`;

const AuctionDiv = styled.div`
  display: flex;
  /* border: 2px solid red; */
`;

const NameTag1 = styled.p`
  margin-top: 150px;
  margin-left: 400px;
  margin-right: 50px;
  font-size: 90px;
  width: 200px;
`;

const NameTag1_2 = styled.p`
  /* margin: 150px auto; */
  margin: 150px 0 250px 500px;
  font-size: 40px;
`;

const Auctionbox = styled.div`
  margin-top: 150px;
  width: 1300px;
  height: 700px;
  /* border: 2px solid black; */
`;

const Auction_btn = styled.div`
  width: 200px;
  height: 70px;
  border: 2px solid black;
  font-size: 30px;
  margin: 0 auto;
`;

const Page2_section3 = () => {
  return (
    <Page2_Auction>
      <AuctionDiv>
        <NameTag1>경매</NameTag1>
        <Auctionbox>
          <NameTag1_2> 경매 설명</NameTag1_2>
          <Auction_btn>경매 입장하기</Auction_btn>
        </Auctionbox>
      </AuctionDiv>
    </Page2_Auction>
  );
};

// 섹션3번 -커뮤니티

const Page2_Commu = styled.div`
  width: 2020px;
  height: 100vh;
  /* border: 5px solid black; */
`;

const CommuDiv = styled.div`
  display: flex;
  /* border: 2px solid red; */
`;

const NameTag2 = styled.p`
  margin-top: 150px;
  margin-left: 100px;
  font-size: 70px;
  width: 400px;
`;

const Commu_img = styled.div`
  margin: 150px 200px 0 250px;
  width: 500px;
  height: 500px;
  border: 2px solid black;
`;

const Page2_section4 = () => {
  return (
    <Page2_Commu>
      <CommuDiv>
        <Commu_img></Commu_img>
        <NameTag2>커뮤니티</NameTag2>
      </CommuDiv>
    </Page2_Commu>
  );
};

// 섹션4번 -Q&A

const Page2_SQL = styled.div`
  position: relative;
  width: 2700px;
  height: 100vh;
  /* border: 5px solid black; */
`;

const NameTag3 = styled.p`
  position: absolute;
  top: 50px;
  left: 430px;
  font-size: 80px;
`;

const Page2_colorbox2 = styled.div`
  font-size: 40px;
  width: 2900px;
  height: 100vh;
  /* border: 2px solid red; */
  clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 0% 100%);
  background: #cccaca;
  /* overflow: hidden; */
  position: relative;
`;

const Page2_section5 = () => {
  return (
    <Page2_SQL>
      <Page2_colorbox2></Page2_colorbox2>
      <NameTag3>Service</NameTag3>
    </Page2_SQL>
  );
};

const PageSlide = () => {
  const [rotation, setRotation] = useState(0);
  const [limsize, setLimSize] = useState({ width: 450, height: 450 });
  const [size, setSize] = useState({ width: 450, height: 450 });
  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행되는 코드
    const scrollContainer: HTMLElement | null =
      document.querySelector('.page-container');

    const handleWheelScroll = (evt: WheelEvent) => {
      evt.preventDefault();
      if (scrollContainer) {
        scrollContainer.scrollLeft += evt.deltaY;
        console.log(evt.deltaY, scrollContainer.scrollLeft);
      }
      if (evt.deltaY < 0 && scrollContainer.scrollLeft == 0) {
        setRotation(0);
        setSize((prevSize) => ({
          width: 450, // 가로 크기 5px 증가
          height: 450 // 세로 크기 5px 증가
        }));
        setLimSize((prevSize) => ({
          width: 450, // 가로 크기 5px 증가
          height: 450 // 세로 크기 5px 증가
        }));
      }
      if (scrollContainer.scrollLeft > 0 && scrollContainer.scrollLeft < 1250) {
        if (evt.deltaY > 0) {
          // 이미지 반시계 회전
          setRotation((prevRotation) => prevRotation - 13);
          //이미지 크기 변경
          setSize((prevSize) => ({
            width: prevSize.width + 35, // 가로 크기 5px 증가
            height: prevSize.height + 35 // 세로 크기 5px 증가
          }));
          if (scrollContainer.scrollLeft < 1050) {
            setLimSize((prevSize) => ({
              width: prevSize.width + 55, // 가로 크기 5px 증가
              height: prevSize.height + 35 // 세로 크기 5px 증가
            }));
          }
        } else {
          // (복구) 이미지 시계 회전
          setRotation((prevRotation) => prevRotation + 13);
          //이미지 크기 변경
          setSize((prevSize) => ({
            width: prevSize.width - 35, // 가로 크기 5px 증가
            height: prevSize.height - 35 // 세로 크기 5px 증가
          }));
          if (scrollContainer.scrollLeft < 1050) {
            setLimSize((prevSize) => ({
              width: prevSize.width - 55, // 가로 크기 5px 증가
              height: prevSize.height - 35 // 세로 크기 5px 증가
            }));
          }
        }
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheelScroll);
    }

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 해제
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheelScroll);
      }
    };
  }, []);

  return (
    <Page className='page-container'>
      <Scrollbar></Scrollbar>
      <PagesSection1>
        <Pages1>
          <Pages1_Left>
            <Pages1_tag1>
              <Pages1_Img1 src='/assets/img/mainicon1.PNG'></Pages1_Img1>
              빠르고 간단하게 <br />
              상품을 팔거나 살 수 있는
              <span style={{ color: '#F47B55' }}>스마트한 커뮤니티 장터</span>
            </Pages1_tag1>
            <Pages1_tag2>
              당신 근처의 지역 생활 커뮤니티. <br />
              동네라서 가능한 모든 것 싸그리에서 가까운 이웃과 함께하세요.{' '}
              <br />
            </Pages1_tag2>
          </Pages1_Left>
          <Pages1_Right
            style={{
              width: `${limsize.width}px`,
              height: `${limsize.height}px`
            }}
          >
            <Pages1_img1
              src='/assets/img/mainbox1.png'
              alt=''
              style={{
                transform: `rotate(${rotation}deg)`,
                width: `${size.width}px`,
                height: `${size.height}px`
              }}
            />
          </Pages1_Right>
        </Pages1>
      </PagesSection1>
      <PagesSection2>
        <Pages2>
          {/* 2-1 */}
          <Page2_tag1>
            당신 근처의 지역 생활 커뮤니티. <br />
            동네라서 가능한 모든 것 싸그리에서 가까운 이웃과 함께하세요. 1
            <br />
          </Page2_tag1>
          <Page2_tag2>이미지</Page2_tag2>
          {/* 2-2 */}
          <Page2_section2></Page2_section2>
          {/* 2-3 */}
          <Page2_section3></Page2_section3>
          <Page2_section4></Page2_section4>
          <Page2_section5></Page2_section5>
        </Pages2>
      </PagesSection2>
    </Page>
  );
};

export { MainPage, PageSlide };
