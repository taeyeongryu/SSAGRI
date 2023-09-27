import {
  MainPage,
  PageSlide
} from '../../components/mainStyle/mainPage.styles';
import { useEffect, useState } from 'react';

const mainPage = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCirclePosition({ x: clientX, y: clientY });
  };
  const handleScrollWithDelay = () => {
    // 스크롤 이동 코드를 0.5초의 딜레이와 함께 실행
    setTimeout(() => {
      window.scrollTo({ top: 1000, left: 2000, behavior: 'smooth' });
    }, 500); // 0.5초 (500 밀리초) 딜레이
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    // window.scrollTo({top: -1000, left: -2000, behavior: "smooth"});
    handleScrollWithDelay();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
  return (
    <MainPage>
      <div
        className='circle'
        style={{
          transform: `translate(${circlePosition.x - 10}px, ${
            circlePosition.y - 10
          }px)`,
          width: '37px',
          height: '37px',
          position: 'absolute',
          borderRadius: '50%',
          opacity: 1,
          pointerEvents: 'none', // 여기 수정
          // backgroundColor: 'rgb(240, 248, 255, 1)',
          backgroundColor: 'rgb(100, 204, 197, 0.3)',
          zIndex: 100,
          transition: 'transform 0.1s, opacity 0.14s'
        }}
      ></div>

      <PageSlide></PageSlide>
    </MainPage>
  );
};

export default mainPage;
