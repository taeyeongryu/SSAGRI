import Navbar from '../components/navbar';
import {
  TradeListPageDiv,
  TradeList
} from '../components/tradeListPage.styles';
import {
  Search,
  SearchInput,
  SearchButton,
  SearchImg
} from '../components/tradeMainPage.styles';

const TradeMainPage = () => {
  //   const navigate = useNavigate();
  //   const goMain = () => {
  //     navigate('/main');
  //   };
  return (
    <TradeListPageDiv>
      <Navbar></Navbar>

      <Search>
        <SearchInput
          type='text'
          placeholder='원하는 제품을 검색해 보세요!'
        ></SearchInput>
        <SearchButton>
          <SearchImg src='/assets/img/searchGlass.png'></SearchImg>
        </SearchButton>
      </Search>

      <TradeList></TradeList>
    </TradeListPageDiv>
  );
};

export default TradeMainPage;
