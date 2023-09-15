import { styled } from 'styled-components';
import { useEffect, useState, useRef } from 'react';

const MainPage = styled.div`
  width: 100%;
  height: 100vh;
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
  min-width: 1000vw;
  min-height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 4ch;
  /* overflow: hidden; */
  /* border: 1px solid black; */
`;
const Pages = styled.div`
  /* position: relative;
    width: 100vw;
    display: flex; */
  /* overflow: hidden; */
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
const Page2_colorbox = styled.div`
  margin-top: -100px;
  font-size: 40px;
  width: 4000px;
  height: 100vh;
  border: 2px solid red;
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
  background: #ff0000;
`;

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
          <Page2_tag1>
            당신 근처의 지역 생활 커뮤니티. <br />
            동네라서 가능한 모든 것 싸그리에서 가까운 이웃과 함께하세요. 1
            <br />
          </Page2_tag1>
          <Page2_tag2>이미지</Page2_tag2>
          <Page2_colorbox></Page2_colorbox>
        </Pages2>
      </PagesSection2>
      {/* <PagesSection>
        <Pages>3</Pages>
      </PagesSection>
      <PagesSection>
        <Pages>4</Pages>
      </PagesSection>
      <PagesSection>
        <Pages>5</Pages>
      </PagesSection>
      <PagesSection>
        <Pages>6</Pages>
      </PagesSection>
      <PagesSection>
        <Pages>7</Pages>
      </PagesSection> */}
    </Page>
  );
};

export { MainPage, PageSlide };
