import './App.css';
import { Route, Routes } from 'react-router-dom';

// 각 페이지 정보
import LoginPage from './pages/loginPage';
import MainPage from './pages/mainPage';
import TradeMainPage from './pages/tradeMainPage';
import TradeListPage from './pages/tradeListPage';
import TradeCreatePage from './pages/tradeCreatePage';
import TradeUpdatePage from './pages/tradeUpdatePage';
import TradeDetailPage from './pages/tradeDetailPage';
import ChattingPage from './pages/chattingPage';
// import DoChatPage from './pages/doChatPage';
import CommunityPage from './pages/communityPage';
import AuctionPage from './pages/auctionPage';
import AuctionDetailPage from './pages/auctionDetailPage';
import AuctionCreatePage from './pages/auctionCreatePage';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        {/* 로그인 페이지 */}
        <Route path='/login' element={<LoginPage />} />
        {/* 메인 페이지 */}
        <Route path='/' element={<MainPage />} />
        {/* 중고거래 메인 페이지 */}
        <Route path='/tradeMain' element={<TradeMainPage />} />
        {/* 중고거래 페이지 */}
        <Route path='/tradeList' element={<TradeListPage />} />
        {/* 중고거래 생성 페이지 */}
        <Route path='/tradeCreate' element={<TradeCreatePage />} />
        {/* 중고거래 수정 페이지 */}
        <Route path='/tradeUpdate' element={<TradeUpdatePage />} />
        {/* 중고거래 상세 페이지 */}
        <Route path='/tradeDetail/:no' element={<TradeDetailPage />} />
        {/* 채팅 화면 페이지 */}
        <Route path='/chat' element={<ChattingPage />} />
        {/* 채팅 연결 페이지 */}
        {/* <Route path='/doChat' element={<DoChatPage />} /> */}
        {/* 경매 페이지 */}
        <Route path='/auction' element={<AuctionPage />} />
        {/* 경매 생성 페이지 */}
        <Route path='/auctionCreate' element={<AuctionCreatePage />} />
        {/* 경매 상세 페이지 */}
        <Route path='/auctionDetail' element={<AuctionDetailPage />} />
        {/* 커뮤티니 페이지 */}
        <Route path='/community' element={<CommunityPage />} />
      </Routes>
    </div>
  );
};

export default App;
