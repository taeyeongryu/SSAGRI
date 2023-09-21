import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

//달력
import 'react-calendar/dist/Calendar.css';
import './calendarstyle.css';
import Calendar from 'react-calendar';
import moment from 'moment';
const CreateDiv = styled.div`
  width: 100%;
  height: 1200px;

  border: 2px solid black;
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

const Div1 = styled.div``;
const Div2 = styled.div``;

const SelectDiv = styled.select`
  margin: 13px 0 0 5px;
  width: 80px;
  height: 35px;
  border-radius: 5px;
  border: 2px solid #555453;
`;

const AuctionCreate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜를 상태로 관리
  const value = new Date();
  const onCalendarChange = async (value) => {
    setSelectedDate(value); // 선택된 날짜를 상태에 반영

    console.log('선택된 날짜:', formatDate(value)); // 업데이트된 값 사용
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [nextPage, setNextPage] = useState(false);
  const LocalList = ['서울', '대전', '구미', '광주', '부울경'];

  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [Selected, setSelected] = useState('');

  const Checking = () => {
    setNextPage(true);
  };

  const onInput1 = (e) => {
    setItemName(e.target.value);
  };

  const onInput2 = (e) => {
    setItemDescription(e.target.value);
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
            <InputTag3></InputTag3>
          </CreateDiv6>
          <CreateDiv7>
            <TagBtn3 onClick={Checking}>다음</TagBtn3>
            <TagBtn4>취소</TagBtn4>
          </CreateDiv7>
        </div>
      ) : (
        <div>
          <Calendar
            onChange={onCalendarChange}
            value={value}
            // selectRange={true}
            formatDay={(locale, date) => moment(date).format('DD')}
          />
        </div>
      )}
    </CreateDiv>
  );
};

export { AuctionCreate };
