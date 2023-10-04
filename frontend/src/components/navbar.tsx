import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onLogout, onLoginSuccess } from '../utils/user';

// 로그인 여부
import { useRecoilState } from 'recoil';
import { isLoggedInAtom } from '../states/account/loginAtom';
import axios from 'axios';
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
  const navigate = useNavigate();

  const goMain = () => {
    navigate('/');
  };
  return (
    <TitleTag onClick={goMain}>
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
    console.log('로그인 여부 바뀜', isLoggedIn);
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
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);

  const onSilentRefreshInNav = () => {
    localStorage.removeItem('isLoggedIn');
    axios
      .get('/jwt/refill')
      .then((res) => {
        console.log('silent refresh, 새로운 액세스 토큰 발급');
        console.log('Recoil 로그인 여부: ', isLoggedIn);
        // 리프레시 토큰이 유효 [ STATUS 200 ]
        // 새로운 액세스 토큰 발급
        onLoginSuccess(res);
        setIsLoggedIn(true);
      })
      .catch(() => {
        console.log('silent refresh, 리프레시 토큰이 유효하지 않습니다.');
        // 리프레시 토큰이 유효하지 않은 경우 [ STATUS 400, 500 ]
        // 로그인페이지로 이동
      });
  };
  // 알림등록 api
  // const notification = () => {
  //   const storedAccessToken = sessionStorage.getItem('accessToken');
  //   const notifi = axios.create({
  //     headers: { Authorization: storedAccessToken }
  //   });
  //   console.log('3번@@@');
  //   const data = {
  //     timeout: 0
  //   };

  //   notifi
  //     .get('/notification/subscribe/1')
  //     .then((res) => {
  //       console.log(res.data, '알림요청성공');
  //     })
  //     .catch((err) => {
  //       console.log('알림 실패', err);
  //     });
  // };

  useEffect(() => {
    onSilentRefreshInNav();
    // notification();

    const urlEndPoint =
      'https://j9b209.p.ssafy.io/api/notification/subscribe/1';
    const eventSource = new EventSource(urlEndPoint);
    eventSource.addEventListener('sse-emitter-created', function (event) {
      console.log(event);
    });

    eventSource.addEventListener('new bid', function (e) {
      console.log(e.data);
      var parsedata = JSON.parse(e.data);
      console.log(parsedata);
    });

    const storedAccessToken = sessionStorage.getItem('accessToken');
    const notifi = axios.create({
      headers: { Authorization: storedAccessToken }
    });

    notifi
      .get('/notification')
      .then((result) => {
        console.log('성공', result);
      })
      .catch((error) => {
        console.error('토큰 전달 및 SSE 연결 설정 실패:', error);
      });
  });

  return (
    <NavbarDiv>
      <Title></Title>
      <MenuBar></MenuBar>
      <SideBar></SideBar>
    </NavbarDiv>
  );
};

export default Navbar;
