import { styled, keyframes } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import Matter, {
  World,
  Engine,
  Render,
  Bodies,
  Mouse,
  MouseConstraint,
  Runner
} from 'matter-js';

const MainPage = styled.div`
  width: 100%;
  height: 100%;
  font-family: var(--font-Pretendard);
`;

const Scrollbar = styled.div`
  position: absolute;
  margin: 90vh 25vw;
  width: 50vw;
  height: 6px;
  border: 1px solid rgb(73, 147, 250, 0.7);
  border-radius: 1px;
  z-index: 20;
`;

const Scroller = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(23, 206, 219, 1);
  clip-path: polygon(0% 0%, 10px 0%, 10px 100%, 0% 100%);
  transition: all 0.2s;
`;

const ScrollTagDiv = styled.div`
  display: flex;
  position: absolute;
  top: -25px;
  color: rgb(0, 0, 0, 0.5);
`;
const ScrollTag = (scrollposition) => {
  return (
    <ScrollTagDiv>
      {/* <span style={HomeStyle}>Home</span> */}
      <span
        style={{
          marginRight: '90px',
          color:
            scrollposition.scrollposition === 1
              ? 'orange'
              : 'rgba(0, 0, 0, 0.5)'
        }}
      >
        Home
      </span>
      <span
        style={{
          marginRight: '100px',
          color:
            scrollposition.scrollposition === 2
              ? 'orange'
              : 'rgba(0, 0, 0, 0.5)'
        }}
      >
        about
      </span>
      <span
        style={{
          marginRight: '125px',
          color:
            scrollposition.scrollposition === 3
              ? 'orange'
              : 'rgba(0, 0, 0, 0.5)'
        }}
      >
        중고거래
      </span>
      <span
        style={{
          marginRight: '155px',
          color:
            scrollposition.scrollposition === 4
              ? 'orange'
              : 'rgba(0, 0, 0, 0.5)'
        }}
      >
        경매
      </span>
      <span
        style={{
          marginRight: '100px',
          color:
            scrollposition.scrollposition === 5
              ? 'orange'
              : 'rgba(0, 0, 0, 0.5)'
        }}
      >
        커뮤니티
      </span>
      <span
        style={{
          color:
            scrollposition.scrollposition === 6
              ? 'orange'
              : 'rgba(0, 0, 0, 0.5)'
        }}
      >
        Service
      </span>
    </ScrollTagDiv>
  );
};

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
  animation: fadein 2s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Pages1_tag2 = styled.p`
  font-size: 15px;
  animation: fadein 2s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Pages1_Img1 = styled.img`
  width: 320px;
  height: 200px;
  position: absolute;
  left: 280px;
  top: 300px;
  border-radius: 20px;
  animation:
    moveUpDown 1s infinite alternate,
    fadein 1.5s ease-in-out; /* 애니메이션 적용 */

  @keyframes moveUpDown {
    0% {
      top: 50px;
    }
    100% {
      top: 59px; /* 1초에 2vh 이동 */
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Pages1_Right = styled.div`
  /* position: absolute;
  top: -250px;
  left: 700px; */
  position: relative;
  /* width: 480px;
  height: 540px; */
  /* border: 1px solid black; */
  /* transform: rotate(20deg); */
  /* overflow: hidden; */
  width: 150vh;
  height: 100vh;
  /* width: 320px;
  height: 320px; */
  @media (max-width: 1000px) {
    width: 420px;
    height: 420px;
  }
  transform: rotate(0deg); /* 초기 회전 각도 */
  transition: transform 0.2s ease;
  animation: fadein 4s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
// @ts-ignore
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
  overflow: hidden;
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
  z-index: 20;
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
  margin-top: 140px;
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
  overflow: hidden;
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
  z-index: 20;
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
  z-index: 30;
  /* border: 2px solid black; */
`;
const TradeBackground = styled.div`
  width: 100%;
  height: 100%;
  clip-path: polygon(55% 0%, 100% 0%, 45% 100%, 0% 100%);
  background-image: url('/assets/img/page3_clip3.jpeg');
  background-size: cover;
`;

const NameTag0_2 = styled.div`
  position: absolute;
  top: 400px;
  left: -70px;
  width: 530px;
  height: 750px;
  clip-path: polygon(55% 0%, 100% 0%, 45% 100%, 0% 100%);
  /* width: 700px; */
  /* background-color: red; */
  color: white;
  border: 2px solid black;
  margin: 0;
  /* background-image: url('/assets/img/page3_clip3.jpeg'); */
  transform: rotate(-50deg);

  background-size: cover;
  z-index: 2;
`;
const NameTag0_3 = styled.div`
  position: absolute;
  top: 100px;
  left: 150px;
  width: 530px;
  height: 750px;
  clip-path: polygon(55% 0%, 100% 0%, 45% 100%, 0% 100%);
  /* width: 700px; */
  /* background-color: red; */
  color: white;
  border: 2px solid black;
  margin: 0;
  background-image: url('/assets/img/page3_clip3.jpeg');
  transform: rotate(-50deg);
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

const Page2_section2 = ({
  backgroundPositionX,
  fadepages3Tag1,
  fadepages3Tag2
}) => {
  return (
    <Page2_colorbox>
      <TradeDiv>
        <Trade_box1
          className='Pages3_tag1'
          style={{
            opacity: fadepages3Tag1 / 100,
            transition: 'opacity 1.5s ease'
          }}
        >
          <NameTag0>중고거래</NameTag0>
          <Trade_btn>거래하러가기</Trade_btn>
        </Trade_box1>
        <Trade_box2
          className='Pages3_tag2'
          style={{
            opacity: fadepages3Tag2 / 100,
            transition: 'opacity 0.5s ease'
          }}
        >
          <NameTag0_2
            style={{
              backgroundPosition: `${backgroundPositionX}px 80px`,
              transition: 'backgroundPosition 1s ease'
            }}
          >
            <TradeBackground></TradeBackground>
          </NameTag0_2>
          <NameTag0_3
            style={{
              backgroundPosition: `${backgroundPositionX}px 80px`,
              transition: 'backgroundPosition 1s ease'
            }}
          ></NameTag0_3>
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

const AuctionRight = styled.div`
  width: 550px;
  height: 450px;
  /* border-left: 2px solid black; */
  text-align: center;
  line-height: 450px;
`;

const AuctionDiv2 = styled.div`
  margin-left: 20px;
  margin-top: 12px;
  z-index: 2;
  /* width: 900px; */
  width: 530px;
  height: 400px;
  border-right: 2px solid rgb(75, 82, 126, 0.2);
  /* border: 2px solid black; */
  /* background-color: #f6f1f1; */
  /* border: 2px solid black; */
  /* height: 450px; */
`;
const AuctionMidtag1 = styled.div`
  font-size: 27px;
  margin-top: 50px;
  margin-left: 20px;
  font-weight: 600;
`;
const AuctionMidtag2 = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin-top: 70px;
  margin-left: 20px;
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
  font-size: 28px;
`;
const NameTag1_3 = styled.p`
  font-size: 21px;
  margin-left: 10px;
  color: rgb(0, 0, 0, 0.4);
`;

const Auctionbox = styled.div`
  margin-left: 80px;
  margin-top: 220px;
  width: 450px;
  height: 200px;
  // border: 2px solid black;
`;

const Auction_tuto = styled.div`
  width: 170px;
  height: 55px;
  border: 1px solid rgb(0, 0, 0, 0.3);
  text-align: center;
  line-height: 55px;
  font-size: 25px;
  border-radius: 10px;
  color: #f47b55;
  background-color: white;
  box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.3);
  margin: 20px 0 40px 70px;
`;
const Auction_btn = styled.div`
  width: 200px;
  height: 60px;
  border: 1px solid rgb(0, 0, 0, 0.3);
  font-size: 26px;
  background-color: white;
  text-align: center;
  line-height: 60px;
  box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.3);
  color: #f47b55;
  margin: 20px 0 40px 70px;
  border-radius: 10px;
`;

const AuctionBorder = styled.div`
  position: absolute;
  margin-left: 75px;
  width: 700px;
  height: 500px;
  border: 30px solid #ccc8aa;
  border-radius: 20px;
  /* left: 100px; */
  z-index: 1;
  clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
`;
const AuctionBorder2 = styled.div`
  margin-left: 50px;
  width: 750px;
  height: 500px;
  border: 30px solid #ccc8aa;
  border-radius: 20px;
  /* left: 100px; */
  z-index: 300;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  transform: translateZ(1000px);
`;
const AuctionMain = styled.div`
  z-index: 2;
  display: flex;
  border: 1px solid rgb(0, 0, 0, 0.2);
  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.4);
  width: 840px;
  height: 420px;
  border-radius: 10px;
  transition: transform 0.5s;
  background-color: #fff5e0;
`;
const AuctionSide = styled.div`
  position: absolute;
  display: flex;
  transition: transform 0.5s;
`;

const AuctionMid = styled.div`
  width: 900px;
  height: 450px;

  display: flex;
  align-items: center;
  margin-top: 250px;
  margin-left: 100px;
  position: relative;
  perspective: 700px;
  z-index: 100;
  &:hover {
    & > ${AuctionMain} {
      transform: rotateY(4deg); /* AuctionMain을 시계방향으로 회전 */
    }
    & > ${AuctionSide} {
      transform: rotateY(-5deg); /* AuctionSide를 시계방향으로 회전 */
    }
  }
`;

const TradeImg = styled.img`
  margin-top: 30px;

  width: 350px;
  height: 350px;
  border-radius: 10px;
  opacity: 0.4;
`;

const Page2_section3 = () => {
  return (
    <Page2_Auction>
      <AuctionDiv>
        <AuctionLeft>
          <NameTag1>경매</NameTag1>
          <Auctionbox>
            <NameTag1_2>이번주의 경매 리스트.</NameTag1_2>
            <NameTag1_3>
              가격 측정이 어렵다면, <br /> 인사이트옥션에서 제공하는 경매를
              이용해보세요.
            </NameTag1_3>
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
            <AuctionRight>
              <TradeImg src='/assets/img/trademain.PNG'></TradeImg>
            </AuctionRight>
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
  /* display: flex; */
  margin-left: 400px;
  width: 1400px;
  height: 900px;
  /* border: 2px solid red; */
`;

const NameTag2 = styled.p`
  text-align: center;
  margin: 0 auto;

  /* border: 2px solid red; */
  margin-top: 150px;
  font-size: 70px;
  width: 400px;
`;

const TagBottom = styled.div`
  font-size: 30px;
  margin-top: 20px;
  margin-left: 440px;
`;

const Commu_img = styled.div`
  /* margin: 50px 0 400px 0; */
  margin-left: 220px;
  margin-top: 40px;
  /* margin: 150px 200px 0 250px; */
  width: 1000px;
  height: 500px;
  /* border: 20px solid black; */
`;

const CommuBottom = styled.div`
  width: 900px;
  height: 10px;
  background-color: #c5c5c5;
  margin-top: -80px;
  margin-left: 220px;
`;

const Page2_section4 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalScore = useRef<number>(0);

  useEffect(() => {
    // 2d 엔진 모델
    const engine = Engine.create(); // 물리엔진
    engine.world.gravity.y = -0.05;
    // engine.world.gravity.x = -0.1;
    const render = Render.create({
      // 시각화
      engine,
      canvas: canvasRef.current!,
      options: {
        width: 900,
        height: 420,
        background: '#f4f7f9',
        wireframes: false
      }
    });
    // 이미지 변환
    const textToImage = (text, width, height, fontsize, color) => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        // 컨텍스트가 유효하지 않으면 처리할 내용 추가
        console.error('2D 컨텍스트를 가져올 수 없습니다.');
        return null;
      }

      // 원 그리기
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
      ctx.fillStyle = `${color}`; // 배경 색상
      ctx.fill();

      // 텍스트 추가
      ctx.fillStyle = 'white'; // 텍스트 색상
      // ctx.font = '24px Arial';
      ctx.font = `${fontsize} Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, width / 2, height / 2);

      // Canvas를 이미지로 변환
      const img = new Image();
      img.src = canvas.toDataURL(); // Canvas를 이미지로 변환

      return img;
    };

    const textImage1 = new Image();
    textImage1.src =
      textToImage('자유 게시판', 320, 320, '30px', '#8ECDDD')?.src || '';

    const textImage2 = new Image();
    textImage2.src =
      textToImage('수명 게시판', 85, 85, '14px', '#E4F1FF')?.src || '';
    const textImage5 = new Image();
    textImage5.src =
      textToImage('수명2 게시판', 130, 130, '14px', '#75C2F6')?.src || '';
    const textImage6 = new Image();
    textImage6.src =
      textToImage('수명3 게시판', 80, 80, '14px', '#78D6C6')?.src || '';
    const textImage7 = new Image();
    textImage7.src =
      textToImage('수명4 게시판', 100, 100, '14px', '#5CD2E6')?.src || '';

    const topWall = Bodies.rectangle(0, 5, 1800, 10, {
      // x,y좌표, 바닥 너비, 바닥 높이
      isStatic: true, // 다른 사물이 통과하지 못함
      collisionFilter: {
        group: -1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#c5c5c5'
      }
    });

    const leftWall = Bodies.rectangle(5, 0, 10, 990, {
      isStatic: true, // 다른 사물이 통과하지 못함
      collisionFilter: {
        group: -1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#c5c5c5'
      }
    });
    const rightWall = Bodies.rectangle(895, 0, 10, 990, {
      isStatic: true, // 다른 사물이 통과하지 못함
      collisionFilter: {
        group: -1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#c5c5c5'
      }
    });

    const group1 = Bodies.circle(250, 480, 160, {
      label: 'user',
      isClickable: true,
      collisionFilter: {
        group: 1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#8ECDDD',
        sprite: {
          texture: textImage1.src
        }

        // visible: false
      }
    });
    const group2 = Bodies.circle(410, 650, 85, {
      label: 'user',
      collisionFilter: {
        group: 1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#E4F1FF',
        sprite: {
          texture: textImage2.src
        }
      }
    });

    const group5 = Bodies.circle(500, 650, 130, {
      label: 'user',
      collisionFilter: {
        group: 1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#75C2F6',
        sprite: {
          texture: textImage5.src
        }
      }
    });
    const group6 = Bodies.circle(520, 600, 80, {
      label: 'user',

      render: {
        fillStyle: '#78D6C6',
        sprite: {
          texture: textImage6.src
        }
      }
    });
    const group7 = Bodies.circle(400, 550, 100, {
      label: 'user',

      render: {
        fillStyle: '#5CD2E6',
        sprite: {
          texture: textImage7.src
        }
      }
    });

    const infiniteArr = Array.from({ length: 10 }).map((_) => {
      // 떨어지는 물체 로직
      return Bodies.circle(Math.random() * 800, 500, 10, {
        // x좌표, y좌표, 원반지름
        label: 'ball',
        restitution: 0.3, // 물체의 탄성
        collisionFilter: {
          group: -1
        },
        render: {
          sprite: {
            texture: '/assets/img/bubles.png',
            xScale: 0.12,
            yScale: 0.12
          },
          fillStyle: 'rgba(255, 255, 0, 0.5)'
        }
      });
    });

    World.add(engine.world, [
      rightWall,
      leftWall,
      topWall,

      group1,
      group2,

      group5,
      group6,
      group7
    ]);

    const runner = Runner.run(engine);

    const mouse = Mouse.create(render.canvas); // 마우스객체 생성
    const mouseConstraint = MouseConstraint.create(engine, {
      //mouseConstraint 객체는 물리 엔진과 연결되어, 마우스 입력에 따라 물체를 조작
      mouse
    });

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          resolve();
        }, ms);
      });

    const compositeArr: Matter.Body[] = [];

    const spreadBall = async (ball: Matter.Body) => {
      //
      compositeArr.push(ball);
      World.add(engine.world, compositeArr);
      await wait(2200);
      compositeArr.pop();
      World.remove(engine.world, compositeArr);
    };

    const event = async () => {
      World.add(engine.world, mouseConstraint);
      Render.run(render);

      for (const ball of infiniteArr) {
        await spreadBall(ball);
        totalScore.current = totalScore.current + 1;
      }
    };

    event();

    return () => {
      Runner.stop(runner);
      Render.stop(render);
    };
  }, []);
  return (
    <Page2_Commu>
      <CommuDiv>
        <NameTag2>커뮤니티</NameTag2>
        <TagBottom>자신만의 수명주기 게시판을 가꾸어 보세요.</TagBottom>
        <Commu_img>
          <div className='space-y-[1rem]'>
            <div
              className='relative'
              style={{
                width: 300,
                height: 400
              }}
            >
              <canvas ref={canvasRef} />
            </div>
          </div>
        </Commu_img>
        <CommuBottom></CommuBottom>
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

const BlockDiv1 = styled.div`
  /* margin-top:700px; */
  position: relative;
  top: 215px;
  left: 21px;
  z-index: 10;
  /* border: 2px solid purple; */
  width: 590px;
  height: 590px;
  /* background-image: url('/assets/img/page2_clip2.PNG');
    background-position: 20px 80px;
  color: transparent;
  background-size: cover; */
`;

const Block1 = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 41%;
  height: 42.5%;
  /* border: 2px solid red; */
  clip-path: polygon(60% 0%, 100% 0%, 40% 100%, 0% 100%);
  /* background: #27005d; */
  background-image: url('/assets/img/page2_clip3.jpg');
  background-position: 0px 0px;
  color: transparent;
  background-size: cover;
`;
const Block2 = styled.div`
  position: absolute;
  top: 0%;
  left: 28.5%;
  width: 41%;
  height: 42.5%;
  /* border: 2px solid red; */
  clip-path: polygon(60% 0%, 100% 0%, 40% 100%, 0% 100%);
  /* background: #27005d; */
  background-image: url('/assets/img/page2_clip3.jpg');
  background-position: 120px 0px;
  color: transparent;
  background-size: cover;
`;

const Block3 = styled.div`
  position: absolute;
  /* top: 360px; */
  bottom: -4%;
  /* left: 119px; */
  left: 21%;
  width: 41%;
  height: 42.5%;
  clip-path: polygon(60% 0%, 100% 0%, 40% 100%, 0% 100%);
  /* background: #27005d; */
  background-image: url('/assets/img/page2_clip4.jpg');
  background-position: 40px 40px;
  color: transparent;
  background-size: cover;
  transform: rotate(61deg);
`;
const Block4 = styled.div`
  position: absolute;
  top: 38%;
  left: 8%;
  width: 41%;
  height: 42.5%;
  clip-path: polygon(60% 0%, 100% 0%, 40% 100%, 0% 100%);
  /* background: #27005d; */
  background-image: url('/assets/img/page2_clip4.jpg');
  background-position: -50px 10px;
  color: transparent;
  background-size: cover;
  transform: rotate(61deg);
`;
const Block5 = styled.div`
  position: absolute;
  /* top: 73px; */
  top: 16%;
  /* left: 385px; */
  left: 64%;
  width: 41%;
  height: 42.5%;
  /* border: 2px solid red; */
  clip-path: polygon(60% 0%, 100% 0%, 40% 100%, 0% 100%);
  /* background: #27005d; */
  background-image: url('/assets/img/page2_clip2.PNG');
  background-position: 0px 0px;
  color: transparent;
  background-size: cover;
  transform: rotate(-58.5deg);
`;
const Block6 = styled.div`
  position: absolute;
  top: 215px;
  top: 38%;
  left: 50%;
  width: 41%;
  height: 42.5%;
  /* border: 2px solid red; */
  clip-path: polygon(60% 0%, 100% 0%, 40% 100%, 0% 100%);
  /* background: #27005d; */
  background-image: url('/assets/img/page2_clip2.PNG');
  background-position: 80px 80px;
  color: transparent;
  background-size: cover;
  transform: rotate(-60.5deg);
`;

const BlockDot = styled.div`
  /* margin-top:700px; */
  position: absolute;
  top: 295px;
  left: 265px;
  z-index: 10;
  width: 1px;
  height: 1px;
  background-color: red;
  /* background-image: url('/assets/img/page2_clip2.PNG');
    background-position: 20px 80px;
  color: transparent;
  background-size: cover; */
`;

const PageSlide = () => {
  const rotation = useRef(0);
  const size = useRef({
    width: 590,
    height: 590,
    top: 215,
    left: 21
  });
  // @ts-ignore
  const [arrow, setArrow] = useState(1);
  const [fadepages1Tag2, setFadepages1Tag2] = useState(100);
  const [fadepages2Tag1, setFadepages2Tag1] = useState(0);
  const [fadepages2Tag2, setFadepages2Tag2] = useState(0);
  const [fadepages3Tag1, setFadepages3Tag1] = useState(0);
  const [fadepages3Tag2, setFadepages3Tag2] = useState(0);
  const [backgroundPositionX, setBackgroundPositionX] = useState(-190);

  const scrollposition = useRef(0);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행되는 코드
    const scrollContainer: HTMLElement | null =
      document.querySelector('.page-container');

    // 스크롤바 계산
    const indi_bar = document.getElementById('indi_bar');
    let pct = 0;
    let s_pos = 0;
    // const win_wid = window.innerWidth;
    let s_move_max = 11000; // 슬라이드 전체길이

    // 스크롤바 게이지

    const on_indicator = (moving) => {
      s_pos = moving;
      if (s_pos > 200) {
        s_pos = 180;
      } else if (s_pos > 100) {
        s_pos = 360;
      } else if (s_pos < 0) {
        s_pos = 360 - moving;
      }

      if (s_pos <= 1500) {
        scrollposition.current = 1;
      } else if (s_pos <= 3100) {
        scrollposition.current = 2;
      } else if (s_pos <= 5200) {
        scrollposition.current = 3;
      } else if (s_pos <= 7500) {
        scrollposition.current = 4;
      } else if (s_pos <= 9300) {
        scrollposition.current = 5;
      } else if (s_pos <= 11000) {
        scrollposition.current = 6;
      }
      console.log(s_pos);
      pct = (s_pos * 100) / s_move_max;
      // @ts-ignore
      indi_bar.style.clipPath = `
      polygon(0% 0%, ${pct}% 0%, ${pct}% 100%, 0% 100%)
      `;
    };

    const handleWheelScroll = (evt: WheelEvent) => {
      evt.preventDefault();

      // 태그 위치를 찾고 없애는 동작로직
      const pages1Tag2Element = document.querySelector('.Pages1_tag2');
      const pages2Tag1Element = document.querySelector('.Pages2_tag1');
      const pages2Tag2Element = document.querySelector('.Pages2_tag2');
      const pages3Tag1Element = document.querySelector('.Pages3_tag1');
      const pages3Tag2Element = document.querySelector('.Pages3_tag2');
      // @ts-ignore
      const pages1Tag2Rect = pages1Tag2Element.getBoundingClientRect();
      // @ts-ignore
      const pages2Tag1Rect = pages2Tag1Element.getBoundingClientRect();
      // @ts-ignore
      const pages2Tag2Rect = pages2Tag2Element.getBoundingClientRect();
      // @ts-ignore
      const pages3Tag1Rect = pages3Tag1Element.getBoundingClientRect();
      // @ts-ignore
      const pages3Tag2Rect = pages3Tag2Element.getBoundingClientRect();
      // console.log('Pages1_tag3 위치:', pages2Tag2Rect.left, evt.deltaY);
      on_indicator(pages1Tag2Rect.left);

      if (evt.deltaY > 0) {
        if (pages1Tag2Rect.left >= 300) {
          setFadepages1Tag2(50);
        } else if (pages1Tag2Rect.left >= 200) {
          setFadepages1Tag2(20);
        } else if (pages1Tag2Rect.left <= 100) {
          setFadepages1Tag2(0);
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
          setFadepages2Tag2(80);
        } else if (pages2Tag2Rect.left >= 1400) {
          setFadepages2Tag2(100);
        }

        setBackgroundPositionX((prevX) => prevX - 40); // 이미지 왼쪽으로 이동

        // 페이지3 이미지
        if (pages3Tag1Rect.left <= -150) {
          setFadepages3Tag1(30);
        } else if (pages3Tag1Rect.left <= 1900) {
          setFadepages3Tag1(100);
        }
        // 페이지3 이미지2
        if (pages3Tag2Rect.left <= -150) {
          setFadepages3Tag2(30);
        } else if (pages3Tag2Rect.left <= 1900) {
          setFadepages3Tag2(100);
        }
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
        // 페이지3 이미지
        if (pages3Tag1Rect.left >= -150 && pages3Tag1Rect.left <= 450) {
          setFadepages3Tag1(100);
        } else if (pages3Tag1Rect.left >= 1450) {
          setFadepages3Tag1(0);
        }
        // 페이지3 이미지2
        if (pages3Tag2Rect.left >= -150 && pages3Tag2Rect.left <= 450) {
          setFadepages3Tag2(100);
        } else if (pages3Tag2Rect.left >= 1450) {
          setFadepages3Tag2(0);
        }
      }

      // 이미지 회전 동작로직
      if (scrollContainer) {
        scrollContainer.scrollLeft += evt.deltaY * 0.8;
        // console.log(evt.deltaY, scrollContainer.scrollLeft);
        const currentScrollLeft = scrollContainer.scrollLeft;
        const deltaY = evt.deltaY;

        // 원하는 애니메이션 시간 (0.5초)을 설정
        const animationDuration = 0.07;

        // 스크롤 애니메이션
        const animateScroll = (startTime: number) => {
          const currentTime = Date.now();
          const elapsedTime = (currentTime - startTime) / 2500;

          if (deltaY > 0) {
            setArrow(1);
          } else if (deltaY < 0) {
            setArrow(-1);
          }
          if (elapsedTime < animationDuration) {
            const progress = elapsedTime / animationDuration;
            const newScrollLeft = currentScrollLeft + deltaY * progress;
            scrollContainer.scrollLeft = newScrollLeft;

            requestAnimationFrame(() => animateScroll(startTime));
          } else {
            // 애니메이션이 완료된 후에도 정확한 위치로 이동
            scrollContainer.scrollLeft = currentScrollLeft + deltaY;
          }
        };
        // 애니메이션 시작
        animateScroll(Date.now());
      }
      // 회전 로직
      //초기상태
      // @ts-ignore
      if (evt.deltaY < 0 && scrollContainer.scrollLeft == 0) {
        rotation.current = 0;
      }
      // console.log( size.width);
      // @ts-ignore
      if (scrollContainer.scrollLeft > 0 && scrollContainer.scrollLeft < 1650) {
        if (evt.deltaY > 0) {
          // 이미지 반시계 회전
          //이미지 크기 변경
          // @ts-ignore
          if (scrollContainer.scrollLeft < 300) {
            rotation.current = rotation.current - 1;
            size.current = {
              width: size.current.width,
              height: size.current.height,
              top: size.current.top,
              left: size.current.left - 20
            };
            // @ts-ignore
          } else if (scrollContainer.scrollLeft < 650) {
            rotation.current = rotation.current - 10;
            size.current = {
              width:
                size.current.width >= 1000
                  ? size.current.width
                  : size.current.width * 1.1,
              height:
                size.current.height >= 1000
                  ? size.current.height
                  : size.current.height * 1.1,
              top: size.current.top <= -60 ? -60 : size.current.top - 20,
              left: size.current.left >= 100 ? 100 : size.current.left + 20
            };
            // @ts-ignore
          } else if (scrollContainer.scrollLeft < 1659) {
            rotation.current =
              rotation.current < -125 ? -125 : rotation.current - 13;
            size.current = {
              width:
                size.current.width >= 1600 ? 1600 : size.current.width * 1.1,
              height:
                size.current.height >= 1600 ? 1600 : size.current.height * 1.1,
              top: size.current.top <= -60 ? -60 : size.current.top - 25,
              left: size.current.left >= 100 ? 100 : size.current.left
            };
          }
        } else {
          // //이미지 크기 변경
          // @ts-ignore
          if (scrollContainer.scrollLeft < 300) {
            rotation.current = rotation.current > 0 ? 0 : rotation.current + 1;

            size.current = {
              width: size.current.width,
              height: size.current.height,
              top: size.current.top,
              left: size.current.left + 20
            };
            // @ts-ignore
          } else if (scrollContainer.scrollLeft < 650) {
            rotation.current = rotation.current > 0 ? 0 : rotation.current + 10;
            size.current = {
              width: size.current.width < 590 ? 590 : size.current.width * 0.9,
              height:
                size.current.height < 590 ? 590 : size.current.height * 0.9,
              top: size.current.top + 10,
              left: size.current.left - 20
            };
            // @ts-ignore
          } else if (scrollContainer.scrollLeft < 2059) {
            rotation.current = rotation.current + 13;

            size.current = {
              width: size.current.width < 590 ? 590 : size.current.width * 0.9,
              height:
                size.current.height < 590 ? 590 : size.current.height * 0.9,
              top: size.current.top < 590 ? 215 : size.current.top + 20,
              left: size.current.left
            };
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
      <Scrollbar>
        <ScrollTag scrollposition={scrollposition.current}></ScrollTag>
        <Scroller id='indi_bar'></Scroller>
      </Scrollbar>
      <PagesSection1>
        <Pages1>
          <Pages1_Left
            className='Pages1_tag2'
            style={{
              opacity: fadepages1Tag2 / 100,
              transition: 'opacity 1.5s ease'
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
          <Pages1_Right>
            <BlockDiv1
              style={{
                transform: `rotate(${rotation.current}deg)`,
                width: `${size.current.width}px`,
                height: `${size.current.height}px`,
                top: `${size.current.top}px`,
                left: `${size.current.left}px`,

                transition:
                  'transform 0.4s, width 0.4s, height 0.4s, top 0.5s, left 0.5s',
                transformOrigin: '488 303 0'
              }}
            >
              <BlockDot></BlockDot>
              <Block1
                style={{
                  transition:
                    'transform 0.3s, width 0.5s, height 0.5s, top 0.5s, left 0.5s'

                  // width: `${size.width}px`,
                  // height: `${size.height}px`,
                  // top: `${size.top1}px`,
                  // left: `${size.left1}px`
                }}
              ></Block1>
              <Block2
                style={{
                  transition:
                    'transform 0.3s, width 0.5s, height 0.5s, top 0.5s, left 0.5s'
                  // transformOrigin: '488 303 0'
                  // width: `${size.width}px`,
                  // height: `${size.height}px`,
                  // top: `${size.top2}px`,
                  // left: `${size.left2}px`
                }}
              ></Block2>
              <Block3
                style={{
                  transition:
                    'transform 0.3s, width 0.5s, height 0.5s, top 0.5s, left 0.5s'
                  // transformOrigin: '488 303 0'
                  // width: `${size.width}px`,
                  // height: `${size.height}px`,
                  // top: `${size.top3}px`,
                  // left: `${size.left3}px`
                }}
              ></Block3>
              <Block4
                style={{
                  transition:
                    'transform 0.3s, width 0.5s, height 0.5s, top 0.5s, left 0.5s'
                  // transformOrigin: '488 303 0'
                  // width: `${size.width}px`,
                  // height: `${size.height}px`,
                  // top: `${size.top4}px`,
                  // left: `${size.left4}px`
                }}
              ></Block4>
              <Block5
                style={{
                  transition:
                    'transform 0.3s, width 0.5s, height 0.5s, top 0.5s, left 0.5s'
                  // transformOrigin: '488 303 0'
                  // width: `${size.width}px`,
                  // height: `${size.height}px`,
                  // top: `${size.top5}px`,
                  // left: `${size.left5}px`
                }}
              ></Block5>
              <Block6
                style={{
                  transition:
                    'transform 0.3s, width 0.5s, height 0.5s, top 0.5s, left 0.5s'
                  // transformOrigin: '488 303 0'
                  // width: `${size.width}px`,
                  // height: `${size.height}px`,
                  // top: `${size.top6}px`,
                  // left: `${size.left6}px`
                }}
              ></Block6>
            </BlockDiv1>

            {/* <Pages1_img1
              src='/assets/img/mainbox1.png'
              alt=''
              style={{
                transform: `rotate(${rotation}deg)`,
                width: `600px`,
                height: `600px`,
                transition: 'transform 0.3s, width 0.1s, height 0.1s'
              }}
            /> */}
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
              transition: 'opacity 2s ease'
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
            fadepages3Tag1={fadepages3Tag1}
            fadepages3Tag2={fadepages3Tag2}
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
