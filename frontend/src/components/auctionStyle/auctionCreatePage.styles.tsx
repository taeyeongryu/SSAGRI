import { styled } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
// import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//달력
import 'react-calendar/dist/Calendar.css';
import './calendarstyle.css';
import Calendar from 'react-calendar';
import moment from 'moment';

const CreateDiv = styled.div`
  width: 100%;
  height: 1200px;

  /* border: 2px solid black; */
`;

const CreateDiv1 = styled.div`
  margin: 100px auto 30px;
  width: 400px;
  height: 50px;
  /* border: 2px solid red; */
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;
const CreateDiv2 = styled.div`
  display: flex;
  margin: 10px auto 40px;
  width: 500px;
  height: 120px;
  /* border: 2px solid red; */
  justify-content: space-around;
  align-items: center;
`;

const CreateDiv3 = styled.hr`
  width: 1200px;
  margin: 0 auto;
`;
const CreateDiv4 = styled.div`
  margin: 30px auto 40px;
  width: 1000px;
  height: 120px;
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
`;
const CreateDiv5 = styled.div`
  margin: 30px auto 40px;
  width: 1000px;
  height: 250px;
  /* border: 2px solid red; */
`;
const CreateDiv6 = styled.div`
  margin: 30px auto 40px;
  width: 1000px;
  height: 220px;
  /* border: 2px solid red; */
`;
const CreateDiv7 = styled.div`
  margin: 30px auto 40px;
  width: 1000px;
  height: 50px;

  display: flex;
  justify-content: center;
`;

const Title1 = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 130px;
  text-align: center;
  line-height: 130px;
  background: linear-gradient(rgb(79, 227, 255, 0.7), rgb(145, 23, 255, 0.7));
  color: white;
`;
const Title2 = styled.div`
  color: #3e88ce;
`;
const Title3 = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 130px;
  text-align: center;
  line-height: 130px;

  background: linear-gradient(rgb(79, 227, 255, 0.7), rgb(145, 23, 255, 0.7));
  color: white;
`;

const TagBtn1 = styled.div`
  width: 90px;
  height: 45px;
  background-color: #555453;
  border-radius: 10px;
  text-align: center;
  line-height: 45px;
  color: white;
`;
const TagBtn2 = styled.div`
  width: 110px;
  height: 45px;
  background-color: #555453;
  border-radius: 10px;
  text-align: center;
  line-height: 45px;
  color: white;
`;
const TagBtn3 = styled.div`
  width: 130px;
  height: 50px;
  background-color: #396cfa;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  color: white;
  margin-right: 90px;
`;

const TagBtn4 = styled.div`
  width: 130px;
  height: 50px;
  background-color: #737475;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  color: white;
`;
const TagBtn5 = styled.div`
  margin: 95px 0 20px 0;
  width: 300px;
  height: 45px;
  background-color: #396cfa;
  border-radius: 10px;
  text-align: center;
  line-height: 45px;
  color: white;
`;

const TagBtn6 = styled.div`
  width: 300px;
  height: 45px;
  background-color: #737475;
  border-radius: 10px;
  text-align: center;
  line-height: 45px;
  color: white;
`;

// 상품명
const InputTag1 = styled.input`
  width: 500px;
  height: 45px;
  margin-top: 20px;
  margin-left: 3px;
  border-radius: 5px;
  /* background-color: #555453; */
  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 2px 2px rgb(0, 0, 0, 0.3);
`;
// 상품 설명
const InputTag2 = styled.input`
  width: 980px;
  height: 200px;
  border-radius: 5px;
  /* background-color: #555453; */
  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 2px 2px rgb(0, 0, 0, 0.3);
  margin-top: 20px;
  margin-left: 3px;
  /* background-color: #555453; */
`;
// 상품 이미지
const InputTag3 = styled.div`
  width: 980px;
  height: 150px;
  margin-top: 20px;
  margin-left: 3px;
  border-radius: 5px;
  /* background-color: #555453; */
  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 2px 2px rgb(0, 0, 0, 0.3);
  /* background-color: #555453; */
`;

const InputTag5 = styled.input`
  width: 150px;
  height: 40px;

  margin-left: 10px;
  border-radius: 3px;

  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 2px 2px rgb(0, 0, 0, 0.3);
  /* background-color: #555453; */
`;

const Div1 = styled.div``;
const Div2 = styled.div``;
const Div3 = styled.div``;
const Div4 = styled.div`
  display: flex;
`;
const Div5 = styled.div`
  width: 280px;
  height: 50px;
  /* border: 2px solid black; */
  font-size: 20px;
`;
const Div6 = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  /* border: 2px solid red; */
`;
const Div7 = styled.div`
  margin-right: 60px;
`;
const Div8 = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
`;
const Div9 = styled.div`
  font-size: 40px;
  margin-right: 50px;
`;

const SelectDiv = styled.select`
  margin: 13px 0 0 5px;
  width: 80px;
  height: 35px;
  border-radius: 5px;
  border: 2px solid #555453;
`;

const TextDiv = styled.div`
  font-size: 15px;
  margin-right: 20px;
`;

const AuctionCreate = () => {
  const value = new Date();

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [nextPage, setNextPage] = useState(false);
  const LocalList = ['모니터', '키보드', '마우스', '생활용품', '기타용품'];
  // const hourList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

  // 경매 물품등록 api
  const userNo = localStorage.getItem('userNo'); // 주최자 아이디
  const [itemName, setItemName] = useState(''); // 상품명
  const [itemDescription, setItemDescription] = useState(''); // 상품 설명
  const [startTime, setStartTime] = useState(new Date()); // 경매 시작시간
  const [endTime, setEndTime] = useState(new Date()); // 경매 마감시간
  const [downPrice, setDownPrice] = useState(0); // 경매 하한가
  const [originPrice, setOriginPrice] = useState(0); // 경매 정가
  const [countPrice, setCountPrice] = useState(0); // 경매 입찰 단위
  const [Selected, setSelected] = useState(''); // 물품분류

  // console.log(selectedDate, itemName, itemDescription);

  const photoInput = useRef();

  const navigate = useNavigate();
  const goAuction = () => {
    navigate('/auction');
  };

  const onCalendarChange = async (value) => {
    let startData = formatDate(value);
    setStartTime(new Date(startData)); // 선택된 날짜를 상태에 반영
  };
  const onCalendarChange2 = async (value) => {
    let endData = formatDate(value);
    setEndTime(new Date(endData)); // 선택된 날짜를 상태에 반영
  };

  // 경매 생성 요청
  const auctionApi = axios.create({
    // baseURL: process.env.REACT_APP_SPRING_URI,
    headers: { 'cotent-type': 'application/json' }
  });

  const CreateAuctionItem = () => {
    const data = {
      comment: itemDescription,
      countPrice: countPrice,
      downPrice: downPrice,
      // endDate: endTime,
      endDate: '2023-09-21T05:41:47.940Z',
      modifyDate: '2023-09-21T05:41:47.940Z',
      name: itemName,
      originPrice: originPrice,
      // startDate: startTime,
      startDate: '2023-09-21T05:41:47.940Z',
      status: 'END',
      type: Selected,
      upPrice: 1000,
      userNo: userNo
    };
    auctionApi
      .post('/auction-product/auction/regist', data)
      .then((res) => {
        console.log(res, '성공');
      })
      .catch((err) => {
        console.log(err);
        console.log(data);
      });
  };

  //등록 2페이지로 이동
  const Checking = () => {
    setNextPage(true);
  };

  // 등록 1페이지로 돌아오기
  const Checking2 = () => {
    setNextPage(false);
  };

  const onInput1 = (e) => {
    setItemName(e.target.value);
  };

  const onInput2 = (e) => {
    setItemDescription(e.target.value);
  };
  const onInput3 = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    setDownPrice(inputValue);
  };
  const onInput4 = (e) => {
    const inputValue2 = parseInt(e.target.value, 10);
    setOriginPrice(inputValue2);
  };
  const onInput5 = (e) => {
    const inputValue3 = parseInt(e.target.value, 10);
    setCountPrice(inputValue3);
  };

  useEffect(() => {
    setNextPage(false);

    return setNextPage(false);
  }, []);

  return (
    <CreateDiv>
      <CreateDiv1>경매 상품 등록</CreateDiv1>
      <CreateDiv2>
        <Title1>상품 설정</Title1>
        <Title2>- -</Title2>
        <Title3>경매 설정</Title3>
      </CreateDiv2>
      <CreateDiv3></CreateDiv3>

      {!nextPage ? (
        <div>
          <CreateDiv4>
            <Div1>
              <TagBtn1>상품명</TagBtn1>
              <InputTag1 onChange={onInput1}></InputTag1>
            </Div1>
            <Div2>
              <TagBtn1>분류</TagBtn1>
              <SelectDiv
                value={Selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                {LocalList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </SelectDiv>
            </Div2>
          </CreateDiv4>
          <CreateDiv5>
            <TagBtn2>상품설명</TagBtn2>
            <InputTag2 onChange={onInput2}></InputTag2>
          </CreateDiv5>
          <CreateDiv6>
            <TagBtn1>이미지</TagBtn1>
            <InputTag3 className='addPhoto'>
              <div
                onClick={() => {
                  // @ts-ignore
                  photoInput.current.click();
                }}
              >
                이미지 등록 버튼
              </div>
              <input
                type='file'
                accept='image/jpg, image/jped, image/png'
                multiple
                // @ts-ignore
                ref={photoInput}
                style={{ display: 'none' }}
              />
            </InputTag3>
          </CreateDiv6>
          <CreateDiv7>
            <TagBtn3 onClick={Checking}>다음</TagBtn3>
            <TagBtn4 onClick={goAuction}>취소</TagBtn4>
          </CreateDiv7>
        </div>
      ) : (
        <div>
          <Div6 style={{ display: 'flex' }}>
            <Div7>
              <TagBtn1 style={{ marginBottom: '40px' }}>경매 기간</TagBtn1>
              <Div4>
                <Calendar
                  onChange={onCalendarChange}
                  value={value}
                  // @ts-ignore
                  formatDay={(locale, date) => moment(date).format('DD')}
                />
                <Calendar
                  onChange={onCalendarChange2}
                  value={value}
                  // @ts-ignore
                  formatDay={(locale, date) => moment(date).format('DD')}
                />
              </Div4>
              <Div4 style={{ marginTop: '40px' }}>
                <Div3>
                  <SelectDiv
                    value={Selected}
                    onChange={(e) => setSelected(e.target.value)}
                  >
                    {LocalList.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </SelectDiv>
                  <TextDiv>시작 시간</TextDiv>
                  <Div5>{moment(startTime).format('YYYY-MM-DD')}</Div5>
                </Div3>
                <Div9>--</Div9>
                <Div3>
                  <TextDiv>마감시간</TextDiv>
                  <Div5>{moment(endTime).format('YYYY-MM-DD')}</Div5>
                </Div3>
              </Div4>
            </Div7>
            <Div3>
              <Div8>
                <TagBtn1>시작가</TagBtn1>
                <InputTag5 onChange={onInput3}></InputTag5>
              </Div8>
              <Div8>
                <TagBtn1>정가</TagBtn1>
                <InputTag5 onChange={onInput4}></InputTag5>
              </Div8>
              <Div8>
                <TagBtn1>입찰 단위</TagBtn1>
                <InputTag5 onChange={onInput5}></InputTag5>
              </Div8>
              <TagBtn5 onClick={CreateAuctionItem}>상품등록 하기</TagBtn5>
              <TagBtn6 onClick={Checking2}>뒤로가기</TagBtn6>
            </Div3>
          </Div6>
          {/* <CreateDiv8>
          </CreateDiv8> */}
        </div>
      )}
    </CreateDiv>
  );
};

export { AuctionCreate };
