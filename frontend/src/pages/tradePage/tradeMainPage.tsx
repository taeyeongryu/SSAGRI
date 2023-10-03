import { TradeMain } from '../../components/tradeStyle/tradeMainPage.styles';
import { useEffect } from 'react';

const TradeMainPage = () => {
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

  return <TradeMain></TradeMain>;
};

export default TradeMainPage;
