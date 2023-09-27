import { styled } from 'styled-components';

import { AuctionSearchInput } from '../tradeMainPage.styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from '../../states/account/loginAtom';

const AuctionDiv = styled.div`
  width: 100%;
`;

const AuctionBody = styled.div`
  width: 80%;
  height: 1000px;
  margin: 0 auto;
`;

const Line = styled.hr`
  width: 400px;
  margin: 0 auto;
  animation: fadein 1.5s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Line2 = styled.hr`
  width: 100%;
  margin: 0 auto;
  animation: fadein 3.5s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const AuctionTag1 = styled.div`
  text-align: center;
  font-size: 22px;
  margin: 30px 0 30px 0px;
  animation: fadein 1.5s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const AuctionTag2 = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin-top: 40px;
  margin-left: 200px;
  animation: fadein 2.5s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const AuctionTag3 = styled.div`
  font-size: 20px;
  animation: fadein 3s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const AuctionTag4 = styled.div`
  display: flex;
  justify-content: center;
`;
const AuctionTag5 = styled.div`
  font-size: 20px;
  position: absolute;
  left: 1120px;
  bottom: 0;
`;
const AuctionTag6 = styled.div`
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
const AuctionInputDiv = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const AuctionCreateBtn = styled.div`
  width: 100px;
  height: 50px;
  background-color: #555453;
  margin-left: 1350px;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  color: white;
`;
const AuctionList = styled.div`
  width: 1200px;
  height: 700px;
  /* border: 2px solid black; */
  margin: 70px auto;
  border-radius: 4px;
`;
const AuctionItem = styled.div`
  position: relative;
  width: 1050px;
  height: 150px;
  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 3px 3px rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 70px auto;
  display: flex;
`;

const ItemImg = styled.img`
  width: 120px;
  height: 120px;
  /* border: 2px solid black; */
  border-radius: 5px;
  margin: 14px 60px 0 60px;
`;
const ItemTitle = styled.div`
  font-size: 30px;
  margin-top: 18px;
`;

const ItmeDiv1 = styled.div``;
const ItmeDiv2 = styled.div``;
const ItemTag1 = styled.div`
  font-size: 15px;
  margin-top: 29px;
`;
const ItemTag2 = styled.div`
  font-size: 15px;
  margin-top: 10px;
  color: #ff5151;
`;
const ItemTime1 = styled.div`
  position: absolute;
  top: 30px;
  left: 700px;
  font-size: 15px;
  color: #ff5151;
`;
const ItemCurrent1 = styled.div`
  position: absolute;
  top: 22px;
  left: 960px;
  width: 60px;
  height: 30px;
  background-color: red;
  color: white;
  border-radius: 7px;
  text-align: center;
  line-height: 30px;
`;
const ItemCurrent2 = styled.div`
  position: absolute;
  top: 110px;
  left: 960px;
  width: 100px;
`;

const PagingSpace = styled.div`
  width: 50%;
  height: 50px;
  margin: 50px 0px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PagingButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 0 2px;
  border: 1px solid #4786fa;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    /* border: 2px solid #4786fa;
    background-color: #4786fa;
    color: #fff; */
    box-shadow: 1px 1px 2px 2px #757575;
  }
`;
const PagingButtonText = styled.div`
  height: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const BottomPageSpace = ({ setCurrentPage, totalPage }) => {
  const NextPage = (num) => {
    setCurrentPage(num);
    console.log(num);
  };
  const pageButtons: JSX.Element[] = [];

  for (let pageNumber = 1; pageNumber <= totalPage; pageNumber++) {
    pageButtons.push(
      <PagingButton key={pageNumber} onClick={() => NextPage(pageNumber)}>
        <PagingButtonText>{pageNumber}</PagingButtonText>
      </PagingButton>
    );
  }

  return (
    <PagingSpace>
      <PagingButton>
        <PagingButtonText>&lt;&lt;</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>&lt;</PagingButtonText>
      </PagingButton>
      {pageButtons}
      <PagingButton>
        <PagingButtonText>&gt;</PagingButtonText>
      </PagingButton>
      <PagingButton>
        <PagingButtonText>&gt;&gt;</PagingButtonText>
      </PagingButton>
    </PagingSpace>
  );
};

const AuctionItme = (item: any) => {
  const navigate = useNavigate();
  // 상세 페이지로 이동
  const goAuctionDetail = (item) => {
    console.log(item);
    navigate(`/auctionDetail/${item.item.no}`);
  };

  return (
    <AuctionItem
      onClick={() => {
        goAuctionDetail(item);
      }}
    >
      <ItemImg src='assets/img/auctionsample.PNG'></ItemImg>

      <ItmeDiv1>
        <ItemTitle>{item.item.name}</ItemTitle>
        <ItemTag1>시작가 {item.item.downPrice}</ItemTag1>
        <ItemTag2>판매가 {item.item.upPrice} </ItemTag2>
      </ItmeDiv1>
      <ItemTime1>남은시간 </ItemTime1>
      <ItmeDiv2>
        <ItemCurrent1>{item.item.auctionStatus}</ItemCurrent1>
        <ItemCurrent2>참여자수</ItemCurrent2>
      </ItmeDiv2>
    </AuctionItem>
  );
};

const CategoryList = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryItem = styled.div`
  width: 130px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  &:hover {
    color: #4786fa;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const AuctionTradeList = (setTypes) => {
  const CheckType = (num) => {
    setTypes(num);
  };

  return (
    <CategoryList>
      <CategoryItem onClick={() => CheckType(0)}>전체</CategoryItem>
      <CategoryItem onClick={() => CheckType(1)}>모니터</CategoryItem>
      <CategoryItem onClick={() => CheckType(2)}>키보드</CategoryItem>
      <CategoryItem onClick={() => CheckType(3)}>마우스</CategoryItem>
      <CategoryItem onClick={() => CheckType(4)}>생활용품</CategoryItem>
      <CategoryItem onClick={() => CheckType(5)}>기타용품</CategoryItem>
    </CategoryList>
  );
};

const AuctionPage = () => {
  const [itemList, setItemList] = useState([]);

  const [types, setTypes] = useState(0);
  console.log(types);

  // 로그인하고 다시 돌아오기 위해 현재 경로 저장
  const { pathname } = useLocation();
  console.log(pathname);

  // const [researchItems,setResearchItems] =
  // const researchItems = itemList.filter(item => item.type === '모니터');

  // useEffect(()=>{
  //   const filteredItems = itemList.filter(item =>{
  //     if (item.item.type ===)
  //   })
  // },[types])

  // 페이지 계산 로직
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;
  const SortList = itemList.slice(startIndex, endIndex);

  const totalPage = Math.ceil(itemList.length / 4);

  const navigate = useNavigate();
  const goAuctionCreate = () => {
    navigate('/auctionCreate');
  };

  // 경매 리스트 요청

  const auctionApi = axios.create({
    headers: { 'content-type': 'application/json' }
  });

  const GetAuctionItemList = () => {
    console.log(isLoggedIn);
    auctionApi
      .get('/auction-product/all-list')
      .then((res) => {
        console.log(res.data, '성공2');
        setItemList(res.data);
        // itemList.current = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  useEffect(() => {
    if (isLoggedIn) {
      GetAuctionItemList();
    } else {
      alert('로그인이 필요한 페이지입니다.');
      navigate('/login', { state: pathname });
    }
  }, [isLoggedIn]);

  return (
    <AuctionDiv>
      <AuctionBody>
        <AuctionTag1>현재 등록된 경매 리스트 총 23회</AuctionTag1>

        <Line></Line>
        <AuctionTag2></AuctionTag2>
        <AuctionTag3>
          <AuctionInputDiv>
            <AuctionSearchInput></AuctionSearchInput>
            <AuctionTag5> 검색결과 15 건</AuctionTag5>
          </AuctionInputDiv>
        </AuctionTag3>
        <Line2></Line2>
        <AuctionTag6>
          <AuctionTradeList setTypes={setTypes}></AuctionTradeList>
          <AuctionList>
            {SortList.map((item, id) => (
              <AuctionItme key={id} item={item}></AuctionItme>
            ))}
          </AuctionList>
          <AuctionCreateBtn onClick={goAuctionCreate}>
            경매 등록
          </AuctionCreateBtn>
          <AuctionTag4>
            <BottomPageSpace
              setCurrentPage={setCurrentPage}
              totalPage={totalPage}
            ></BottomPageSpace>
          </AuctionTag4>
        </AuctionTag6>
      </AuctionBody>
    </AuctionDiv>
  );
};

export { AuctionPage };
