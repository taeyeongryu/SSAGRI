import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onLogout, onSilentRefresh } from '../utils/user';

// 로그인 여부
import { useRecoilState } from 'recoil';
import { isLoggedInAtom } from '../states/account/loginAtom';
// 로그아웃

const NavbarDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  /* border-top: 2px solid black; */
  /* border-bottom: 2px solid black; */
  display: flex;
  justify-content: space-between;
  z-index: 10;
  background-color: #242526;
  /* font-family: 'Poppins', sans-serif; */
`;

const MenuDiv = styled.div`
  width: 50vw;
  height: 7vh;
  margin-top: 5px;
  /* border: 2px solid red; */
  display: flex;
  /* line-height: 4vh; */
  /* align-items: center; */
`;

const MenuName = styled.p`
  font-size: 15px;
  margin-right: 3vw;
  color: rgb(255, 255, 255, 0.5);
  transition:
    color 0.2s,
    font-weight 0.2s;
  &:hover {
    color: rgb(255, 255, 255);
    font-weight: 560;
  }
`;

const TitleTag = styled.div`
  width: 80px;
  height: 30px;
  margin-top: 4px;
  margin-left: 17px;
`;

const TitleName1 = styled.span`
  font-family: var(--font-googleNanumPen);
  font-size: 44px;
  color: #4786fa; // 텍스트 색상 설정
`;
const TitleName2 = styled.span`
  font-family: var(--font-googleNanumPen);
  font-size: 44px;
  color: #f2f7f7; // 텍스트 색상 설정
`;

const Title = () => {
  return (
    <TitleTag>
      <TitleName1>싸</TitleName1>
      <TitleName2>그리</TitleName2>
    </TitleTag>
  );
};

const MenuBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);

  const navigate = useNavigate();

  const [showOverlay, setShowOverlay] = useState(false);
  // MenuName에 마우스 진입 이벤트 핸들러
  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  // MenuName에서 마우스를 떠남 이벤트 핸들러
  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  const goLogout = () => {
    onLogout();
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const goLogin = () => {
    navigate('/login');
  };
  const goMain = () => {
    navigate('/');
  };
  const goTrade = () => {
    navigate('/tradeMain');
  };
  const goAuction = () => {
    navigate('/auction');
  };
  const goCommu = () => {
    navigate('/community');
  };

  useEffect(() => {
    console.log('로그인 여부 바뀜');
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <MenuDiv>
      {isLoggedIn ? (
        <MenuName
          onClick={goLogout}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          로그아웃
        </MenuName>
      ) : (
        <MenuName
          onClick={goLogin}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          로그인
        </MenuName>
      )}

      <MenuName
        onClick={goMain}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        메인
      </MenuName>
      <MenuName
        onClick={goTrade}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        중고거래{' '}
      </MenuName>
      <MenuName
        onClick={goAuction}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        경매{' '}
      </MenuName>
      <MenuName
        onClick={goCommu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        커뮤니티{' '}
      </MenuName>
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100vw',
          height: showOverlay ? '40px' : 0,
          backgroundColor: '#242526',
          transition: 'height 0.7s' // 이 부분 수정
          // overflow: 'hidden'
        }}
      ></div>
    </MenuDiv>
  );
};

const SideDiv = styled.div`
  width: 20vw;
  height: 7vh;
  /* border: 2px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideName = styled.p`
  font-size: 1.1vw;
  margin-right: 2vw;
`;

const SideBar = () => {
  return (
    <SideDiv>
      <SideName>마이페이지</SideName>
      <SideName>햄버그바</SideName>
    </SideDiv>
  );
};

const Navbar = () => {
  useEffect(() => {
    onSilentRefresh();
  }, []);

  return (
    <NavbarDiv>
      {/* <img
        style={{ marginTop: '1vh', marginLeft: '1vw' }}
        src='/assets/img/logo.PNG'
        alt=''
      /> */}
      <Title></Title>
      <MenuBar></MenuBar>
      <SideBar></SideBar>
    </NavbarDiv>
  );
};

export default Navbar;
