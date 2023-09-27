import { TradeMain } from '../components/tradeMainPage.styles';
import { useEffect } from 'react';
import { isLoggedInAtom } from '../states/account/loginAtom';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';

const TradeMainPage = () => {
  // 로그인 여부
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  //
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지가 마운트될 때 스크롤 이벤트 리스너를 제거
    const handleScroll = (event) => {
      event.preventDefault();
    };

    window.addEventListener('scroll', handleScroll);

    // 0.5초 후에 스크롤 이벤트 리스너 다시 추가
    setTimeout(() => {
      window.removeEventListener('scroll', handleScroll);
    }, 4500);

    return () => {
      // 페이지를 언마운트할 때 스크롤 이벤트 리스너를 다시 제거
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      alert('로그인이 필요한 페이지입니다.');
      navigate('/login', { state: pathname });
    }
  }, [isLoggedIn]);
  return <TradeMain></TradeMain>;
};

export default TradeMainPage;
