import { styled, keyframes } from 'styled-components';
import { useEffect, useState } from 'react';


const MainPage = styled.div`
  width: 100%;
  height: 100vh;
  font-family: var(--font-Pretendard);

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
  margin-left: 300px;
  position: relative;
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
  position: absolute;
  top: -250px;
  left: 700px;
  /* position: relative; */
  /* width: 480px;
  height: 540px; */
  border: 1px solid black;
  /* transform: rotate(20deg); */
  overflow: hidden;
  width: 950px;
  height: 950px;
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
  margin-top: 200px;
  
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
  font-family: var(--font-Pretendard);
  /* font-family: var(--font-googleNanumPen); */
  margin-top: 530px;
  margin-right: 200px;
  font-size: 45px;
  width: 800px;
  height: 200px;
  /* border: 2px solid red; */
  background-image: url('/assets/img/page2_clip2.PNG');
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Page2_tag2 = styled.div`
  position: relative;
  margin-top: 180px;
  font-size: 40px;
  width: 600px;
  height: 700px;
  /* border: 2px solid red; */
  /* margin-right: 300px; */
  border-radius: 10px;
  /* align-items: center; */
  animation: ${fadeIn} 10.5s ease forwards;
  &.hidden {
    animation: ${fadeOut} 10.5s ease forwards;
  }
`;

const Page2_img1 = styled.img`
  position: absolute;
  top: 0px;
  left: 130px;
  /* margin-top: 250px; */
  font-size: 40px;
  width: 370px;
  height: 400px;
  /* border: 2px solid red; */
  margin-right: 300px;
  border-radius: 10px;
`;
const Page2_img2 = styled.img`
  position: absolute;
  top: 250px;
  left: 20px;
  /* margin-top: 250px; */
  font-size: 40px;
  width: 340px;
  height: 370px;
  /* border: 2px solid red; */
  margin-right: 300px;
  border-radius: 10px;
`;

// 섹션2번 -중고거래

const Page2_colorbox = styled.div`
  margin-left: 150px;
  font-size: 40px;
  width: 2300px;
  height: 100vh;
  /* border: 2px solid red; */
  clip-path: polygon(24% 0%, 100% 0%, 100% 100%, 0% 100%);
  background: #27005d;
  /* overflow: hidden; */
  position: relative;
`;

const TradeDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* border: 2px solid red; */
`;
const Trade_box1 = styled.div`
  margin-top: 150px;
  margin-left: 700px;
  margin-right: 400px;
  width: 500px;
  height: 700px;
  /* border: 2px solid red; */
`;
const Trade_box2 = styled.div`
  position: absolute;
  top: -100px;
  left: 1300px;
  /* margin-top: 100px; */
  width: 500px;
  height: 700px;
  /* border: 2px solid red; */
`;

const NameTag0 = styled.p`
  font-size: 160px;
  width: 700px;
  color: white;
  /* border: 2px solid black; */
`;
const NameTag0_2 = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1100px;
  /* width: 700px; */

  color: white;
  border: 2px solid black;
  margin: 0;
  background-image: url('/assets/img/page3_clip3.jpeg');
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
`;

const Trade_btn = styled.div`
  width: 220px;
  height: 70px;
  border: 2px solid black;
  margin-left: 110px;
  margin-top: 120px;
  font-size: 25px;
  background-color: #8ecddd;
  background-color: #8ecddd;
  color: white;
  line-height: 70px;
  text-align: center;
  border-radius: 10px;
`;

const Page2_section2 = ({ backgroundPositionX }) => {
  return (
    <Page2_colorbox>
      <TradeDiv>
        <Trade_box1>
          <NameTag0>중고거래</NameTag0>
          <Trade_btn>거래하러가기</Trade_btn>
        </Trade_box1>
        <Trade_box2>
          <NameTag0_2
            style={{ backgroundPosition: `${backgroundPositionX}px 80px` }}
          >
            $
          </NameTag0_2>
        </Trade_box2>
        {/* <Next_line></Next_line>
        <Recent_box>
          <NameTag0_3>최근 등록 리스트</NameTag0_3>
          <Recent_list></Recent_list>
          <Recent_btn>최근 등록 상품</Recent_btn>
        </Recent_box> */}
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
  /* align-items: center; */
  /* border: 2px solid red; */
`;
const AuctionLeft = styled.div`
  margin-top: 100px;
  margin-left: 300px;
`;
const AuctionMid = styled.div`
  width: 900px;
  height: 450px;
  /* border: 2px solid black;
  border-radius: 10px; */
  display: flex;
  align-items: center;
  margin-top: 250px;
  position: relative;
  `;
const AuctionRight = styled.div`
  width: 550px;
  height:450px;
  border-left:2px solid black;
  text-align: center;
  line-height: 450px;
  `;
const AuctionDiv2 = styled.div`
  margin-left: 20px;
  z-index: 2;
  /* width: 900px; */
  height: 450px;
  /* border: 2px solid black; */
  background-color: white;
  /* border: 2px solid black; */
  /* height: 450px; */
`;
const AuctionMidtag1 = styled.div`
  font-size: 27px;
`;
const AuctionMidtag2 = styled.div`
  font-size: 27px;
`;
const NameTag1 = styled.p`
  font-size: 100px;
  width: 200px;
  background-image: url('/assets/img/test1.jpg');
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
`;

const NameTag1_2 = styled.p`
  font-size: 22px;
`;
const NameTag1_3 = styled.p`
  font-size: 19px;
  margin-left: 10px;
  color: rgb(0, 0, 0,0.4);
`;

const Auctionbox = styled.div`
margin-left: 50px;
  margin-top: 320px;
  width: 450px;
  height: 200px;
  // border: 2px solid black;
`;

const Auction_tuto = styled.div`
  width: 200px;
  height: 70px;
  /* border: 2px solid black; */
  font-size: 30px;
  /* border-radius: 5px; */
  color: #f47b55;
  /* background-color: #f47b55; */
  margin: 20px 0 40px 140px;
`;
const Auction_btn = styled.div`
  width: 200px;
  height: 70px;
  /* border: 2px solid black; */
  font-size: 30px;
  /* border-radius: 5px; */
  color: #f47b55;
  margin: 20px 0 40px 140px;
  /* margin: 0 auto; */
`;

const AuctionBorder = styled.div`
position: absolute;
margin-left: 50px;
  width: 750px;
  height: 500px;
  border: 30px solid red;
  border-radius: 20px;
  /* left: 100px; */
  z-index: 1;
  clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
`
const AuctionBorder2 = styled.div`
margin-left: 50px;
width: 750px;
height: 500px;
border: 30px solid blue;
border-radius: 20px;
/* left: 100px; */
z-index: 3;
clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
`
const AuctionMain = styled.div`
    z-index: 2;
    display: flex;
    border: 2px solid black;
  border-radius: 10px;
  transition: transform 0.5s;
    &:hover {
    transform: rotateY(75deg); /* hover 시 AuctionMain을 시계방향 30도 회전 */

  }
    `
const AuctionSide = styled.div`
position: absolute;
    /* z-index: 2; */
    display: flex;
    transition: transform 0.5s;
    &:hover {
    transform: rotateY(-15deg); /* hover 시 AuctionMain을 시계방향 30도 회전 */

  }
`
const Page2_section3 = () => {
  return (
    <Page2_Auction>
      <AuctionDiv>
        <AuctionLeft>
          <NameTag1>경매</NameTag1>
          <Auctionbox>
          <NameTag1_2>이번주의 경매 리스트.</NameTag1_2>  
            <NameTag1_3> 가격 측정이 어렵다면, <br /> 인사이트옥션에서 제공하는 경매를 이용해보세요. </NameTag1_3>
          </Auctionbox>
        </AuctionLeft>
        <AuctionMid>
            <AuctionMain>
              <AuctionDiv2>

                <AuctionMidtag1>경매 가이드</AuctionMidtag1>
                <Auction_tuto>튜토리얼</Auction_tuto>
                <AuctionMidtag2>경매 시작하기</AuctionMidtag2>
                <Auction_btn>경매 입장하기</Auction_btn>
              </AuctionDiv2>
              <AuctionRight>반응형이미지</AuctionRight>
            </AuctionMain>

            <AuctionSide>
              <AuctionBorder></AuctionBorder>
              <AuctionBorder2></AuctionBorder2>

            </AuctionSide>
        </AuctionMid>

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



//작업중


const Block1 = styled.div`
position: absolute;
top: 0px;
left: 0px;
    width: 230px;
  height: 100px;
  border: 2px solid red;
  clip-path: polygon(24% 0%, 100% 0%, 76% 100%, 0% 100%);
  /* background: #27005d; */
  background-image: url('/assets/img/page2_clip2.PNG');
    background-position: 0px 0px;
  color: transparent;
  background-size: cover;
`
const Block2 = styled.div`
position: absolute;
top: 0px;
left: 200px;
    width: 230px;
  height: 100px;
  border: 2px solid red;
  clip-path: polygon(24% 0%, 100% 0%, 76% 100%, 0% 100%);
  /* background: #27005d; */
  background-image: url('/assets/img/page2_clip2.PNG');
    background-position: 80px 80px;
  color: transparent;
  background-size: cover;
`
const BlockDiv1 = styled.div`
/* margin-top:700px; */
position: absolute;
top: 370px;
left: 27px;
z-index: 10;
    /* background-image: url('/assets/img/page2_clip2.PNG');
    background-position: 20px 80px;
  color: transparent;
  background-size: cover; */
`

const Box1 = () => {
  return (
    <BlockDiv1>
      <Block1></Block1>
      <Block2></Block2>
    </BlockDiv1>
  )
}


const PageSlide = () => {
  const [rotation, setRotation] = useState(0);
  const [limsize, setLimSize] = useState({ width: 600, height: 1000 });
  const [size, setSize] = useState({ width: 600, height: 600 });

  const [fadepages1Tag2, setFadepages1Tag2] = useState(100);
  const [fadepages2Tag1, setFadepages2Tag1] = useState(0);
  const [fadepages2Tag2, setFadepages2Tag2] = useState(0);
  const [backgroundPositionX, setBackgroundPositionX] = useState(-190);


  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행되는 코드
    const scrollContainer: HTMLElement | null =
      document.querySelector('.page-container');

    const handleWheelScroll = (evt: WheelEvent) => {
      evt.preventDefault();
      
      // 태그 위치를 찾고 없애는 동작로직
      const pages1Tag2Element = document.querySelector('.Pages1_tag2');
      const pages2Tag1Element = document.querySelector('.Pages2_tag1');
      const pages2Tag2Element = document.querySelector('.Pages2_tag2');
      const pages1Tag2Rect = pages1Tag2Element.getBoundingClientRect();
      const pages2Tag1Rect = pages2Tag1Element.getBoundingClientRect();
      const pages2Tag2Rect = pages2Tag2Element.getBoundingClientRect();
      console.log('Pages1_tag3 위치:', pages2Tag2Rect.left, evt.deltaY);

      if (evt.deltaY > 0) {
        if (pages1Tag2Rect.left <= -300) {
          setFadepages1Tag2(20);
        } else if (pages1Tag2Rect.left <= 0) {
          setFadepages1Tag2(50);
        } else if (pages1Tag2Rect.left <= 100) {
          setFadepages1Tag2(70);
        }
        if (pages2Tag1Rect.left <= -500) {
          setFadepages2Tag1(0);
        } else if (pages2Tag1Rect.left <= -200) {
          setFadepages2Tag1(20);
        } else if (pages2Tag1Rect.left <= -100) {
          setFadepages2Tag1(50);
        } else if (pages2Tag1Rect.left <= 100) {
          setFadepages2Tag1(70);
        } else if (pages2Tag1Rect.left < 1700) {
          setFadepages2Tag1(100);
        } else if (pages2Tag1Rect.left >= 1700) {
          setFadepages2Tag1(0);
        }
        // 페이지2 이미지
        if (pages2Tag2Rect.left <= -300) {
          setFadepages2Tag2(10);
        } else if (pages2Tag2Rect.left <= -100) {
          setFadepages2Tag2(40);
        } else if (pages2Tag2Rect.left < 100) {
          setFadepages2Tag2(80);
        } else if (pages2Tag2Rect.left >= 1700) {
          setFadepages2Tag2(60);
        } else if (pages2Tag2Rect.left >= 1500) {
          console.log(2);
          setFadepages2Tag2(80);
        } else if (pages2Tag2Rect.left >= 1400) {
          setFadepages2Tag2(100);
        }
        setBackgroundPositionX((prevX) => prevX - 20); // 이미지 왼쪽으로 이동
      } else if (evt.deltaY < 0) {
        if (pages1Tag2Rect.left >= 0) {
          setFadepages1Tag2(100);
        }
        if (pages2Tag1Rect.left >= 1700) {
          setFadepages2Tag1(0);
        } else if (pages2Tag1Rect.left <= 1600) {
          setFadepages2Tag1(100);
        } else if (pages2Tag1Rect.left <= 100) {
          setFadepages2Tag1(70);
        } else if (pages2Tag1Rect.left <= -100) {
          setFadepages2Tag1(50);
        } else if (pages2Tag1Rect.left <= -200) {
          setFadepages2Tag1(20);
        } else if (pages2Tag1Rect.left >= 0) {
          setFadepages2Tag1(100);
        }
        // 페이지2 이미지
        if (pages2Tag2Rect.left >= 1600) {
          setFadepages2Tag2(0);
        } else if (pages2Tag2Rect.left <= 1600) {
          setFadepages2Tag2(100);
        } else if (pages2Tag2Rect.left <= 100) {
          setFadepages2Tag2(70);
        } else if (pages2Tag2Rect.left <= -100) {
          setFadepages2Tag2(50);
        } else if (pages2Tag2Rect.left <= -200) {
          setFadepages2Tag2(20);
        } else if (pages2Tag2Rect.left >= 0) {
          setFadepages2Tag2(100);
        }

        setBackgroundPositionX((prevX) => prevX + 20); // 이미지 오른쪽으로 이동
      }

      // 이미지 회전 동작로직
      if (scrollContainer) {
        scrollContainer.scrollLeft += evt.deltaY;
        // console.log(evt.deltaY, scrollContainer.scrollLeft);
        const currentScrollLeft = scrollContainer.scrollLeft;
        const deltaY = evt.deltaY;
    
        // 원하는 애니메이션 시간 (0.5초)을 설정
        const animationDuration = 0.12;
    
        // 스크롤 애니메이션
        const animateScroll = (startTime: number) => {
          const currentTime = Date.now();
          const elapsedTime = (currentTime - startTime) / 1000;
          if (elapsedTime < animationDuration) {
            const progress = elapsedTime / animationDuration;
            const newScrollLeft = currentScrollLeft + deltaY * progress;
            scrollContainer.scrollLeft = newScrollLeft;
            // console.log(currentTime,startTime,elapsedTime,animationDuration,newScrollLeft,deltaY,progress)
            requestAnimationFrame(() => animateScroll(startTime));
          } else {
            // 애니메이션이 완료된 후에도 정확한 위치로 이동
            scrollContainer.scrollLeft = currentScrollLeft + deltaY;
          }
        };
        // 애니메이션 시작
    animateScroll(Date.now());
      }
      if (evt.deltaY < 0 && scrollContainer.scrollLeft == 0) {
        setRotation(0);
        setSize((prevSize) => ({
          width: 600,
          height: 600
        }));
        setLimSize((prevSize) => ({
          width: 600,
          height: 1000
        }));
      }
      if (scrollContainer.scrollLeft > 0 && scrollContainer.scrollLeft < 1250) {
        if (evt.deltaY > 0) {
          // 이미지 반시계 회전
          setRotation((prevRotation) => prevRotation - 11);
          //이미지 크기 변경
          setSize((prevSize) => ({
            width: prevSize.width + 75,
            height: prevSize.height + 75
          }));
          if (scrollContainer.scrollLeft < 1050) {
            setLimSize((prevSize) => ({
              width: prevSize.width + 95,
              height: prevSize.height + 75
            }));
          }
        } else {
          // 이미지 시계 회전
          setRotation((prevRotation) => prevRotation + 13);
          //이미지 크기 변경
          setSize((prevSize) => ({
            width: prevSize.width - 35,
            height: prevSize.height - 35
          }));
          if (scrollContainer.scrollLeft < 1050) {
            setLimSize((prevSize) => ({
              width: prevSize.width - 55,
              height: prevSize.height - 35
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
    <Page className='page-container' >
      <Scrollbar></Scrollbar>
      <PagesSection1>
        <Pages1>
          <Pages1_Left
            className='Pages1_tag2'
            style={{
              opacity: fadepages1Tag2 / 100,
              transition: 'opacity 2.5s ease'
            }}
          >
            <Pages1_Img1 src='/assets/img/mainicon1.PNG'></Pages1_Img1>
            <Pages1_tag1>
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
            <Box1           
          
              // style={{
              //   transform: `rotate(${rotation}deg)`,
              //   width: `${size.width}px`,
              //   height: `${size.height}px`,
              //   transition: 'transform 0.3s, width 0.1s, height 0.1s'
              // }}
              ></Box1>
            <Pages1_img1
              src='/assets/img/mainbox1.png'
              alt=''
              style={{
                transform: `rotate(${rotation}deg)`,
                width: `${size.width}px`,
                height: `${size.height}px`,
                transition: 'transform 0.3s, width 0.1s, height 0.1s'
              }}
            />
          </Pages1_Right>
        </Pages1>
      </PagesSection1>
      <PagesSection2>
        <Pages2>
          {/* 2-1 */}
          <Page2_tag1
            className='Pages2_tag1'
            style={{
              opacity: fadepages2Tag1 / 100,
              transition: 'opacity 1.5s ease'
            }}
          >
            당신 근처의 지역 생활 커뮤니티. <br />
            동네라서 가능한 모든 것 싸그리에서 가까운 이웃과 함께하세요.
            <br />
          </Page2_tag1>
          <Page2_tag2>
            <Page2_img1
              className='Pages2_tag2'
              style={{
                opacity: fadepages2Tag2 / 100,
                transition: 'opacity 1s ease'
              }}
              src='/assets/img/page2_right.jpg'
              alt='page2 오른쪽이미지'
            ></Page2_img1>
            <Page2_img2
              className='Pages2_tag2'
              style={{
                opacity: fadepages2Tag2 / 100,
                transition: 'opacity 1s ease'
              }}
              src='/assets/img/page2_right2.jpg'
              alt='page2 오른쪽이미지2'
            ></Page2_img2>
          </Page2_tag2>
          {/* 2-2 */}
          <Page2_section2
            backgroundPositionX={backgroundPositionX}
          ></Page2_section2>
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
