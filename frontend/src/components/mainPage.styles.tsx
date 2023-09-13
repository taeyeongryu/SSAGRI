import { styled } from 'styled-components';
import { useEffect } from 'react';

const MainPage = styled.div`
  width: 100%;
  height: 100vh;
`;

const Page = styled.div`
  overflow-x: hidden;
  display: flex;
`;
const PagesSection = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4ch;
  border: 1px solid black;
`;
const Pages = styled.div`
  /* position: relative;
    width: 100vw;
    display: flex; */
`;
const Pages1 = styled.div`
  display: flex;
`;
const Pages1_Left = styled.div`
  position: relative;
  width: 40vw;
  height: 80vh;
  /* border: 1px solid black; */
  margin-right: 10vw;
  /* align-items: center; */
`;

const Pages1_tag1 = styled.p`
  font-size: 3vw;
  margin-top: 37vh;
`;
const Pages1_tag2 = styled.p`
  font-size: 2.5;
`;
const Pages1_Img1 = styled.img`
  width: 25vw;
  height: 40vh;
  position: absolute;
  left: 14vw;
  top: 2vh;
  animation: moveUpDown 1s infinite alternate; /* 애니메이션 적용 */
  @keyframes moveUpDown {
    0% {
      top: 2vh;
    }
    100% {
      top: 3vh; /* 1초에 2vh 이동 */
    }
  }
`;

const Pages1_Right = styled.div`
  position: relative;
  width: 35vw;
  height: 80vh;
  border: 1px solid black;
`;

const Pages1_box1 = styled.div`
  position: absolute;
  top: 42vh;
  left: 0vw;
  width: 18vw;
  height: 8vh;
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%);
  background: red;
`;
const Pages1_box2 = styled.div`
  position: absolute;
  top: 55vh;
  left: 5vw;
  width: 18vw;
  height: 8vh;

  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%);
  background: red;
`;
const Pages1_box3 = styled.div`
  position: absolute;
  top: 20vh;
  left: 0vw;
  width: 18vw;
  height: 10vh;
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%);
  transform: rotate(120deg);

  background: blue;
`;
const Pages1_box4 = styled.div`
  width: 19vw;
  height: 10vh;
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%);
  transform: rotate(120deg);

  background: blue;
`;
const Pages1_box5 = styled.div`
  position: absolute;
  top: 36vh;
  left: 15vw;
  width: 18vw;
  height: 10vh;
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%);
  transform: rotate(240deg);

  background: yellow;
`;
const Pages1_box6 = styled.div`
  width: 19vw;
  height: 10vh;
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%);
  transform: rotate(240deg);

  background: yellow;
`;

const PageSlide = () => {
  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행되는 코드
    const scrollContainer: HTMLElement | null =
      document.querySelector('.page-container');

    const handleWheelScroll = (evt: WheelEvent) => {
      evt.preventDefault();
      if (scrollContainer) {
        scrollContainer.scrollLeft += evt.deltaY;
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
      <PagesSection>
        <Pages1>
          <Pages1_Left>
            <Pages1_tag1>
              <Pages1_Img1 src='/assets/img/mainicon1.PNG'></Pages1_Img1>
              대충 <br />
              아무내용{' '}
              <span style={{ color: '#F47B55' }}>거래,경매,게시판</span>
            </Pages1_tag1>
            <Pages1_tag2>
              ~~~~~~~~~~~~~~~ <br />
              ~~~~~~~~~~~ <br />
              ~~~~~
            </Pages1_tag2>
          </Pages1_Left>
          <Pages1_Right>
            <Pages1_box1></Pages1_box1>
            <Pages1_box2></Pages1_box2>
            <Pages1_box3></Pages1_box3>
            <Pages1_box5></Pages1_box5>
          </Pages1_Right>
        </Pages1>
      </PagesSection>
      <PagesSection>
        <Pages>2</Pages>
      </PagesSection>
      <PagesSection>
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
      </PagesSection>
    </Page>
  );
};

export { MainPage, PageSlide };
