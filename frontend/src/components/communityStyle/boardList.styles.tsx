import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DetailDiv = styled.div`
  width: 100%;
  height: 1000px;

  /* border: 3px solid black; */
`;

const TopTitle = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: #f6e1b6; */
  display: flex;
  background-image: url('/assets/img/boardTop.PNG');
  background-size: cover;
  background-position: -510px 0px;
  animation: fadein 1s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TopTag = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
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
const LineDiv = styled.hr`
  width: 1750px;
`;

const FlexDiv = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
`;

const LeftDiv = styled.div`
  width: 100px;
  margin-left: 300px;
`;
const RightDiv = styled.div`
  width: 100px;
  margin: 50px 0 0 600px;
`;
const CreateDiv = styled.div`
  width: 600px;
  height: 80px;
  background-color: #f6e1b6;
  margin: 50px 0 50px 0;
  border-radius: 7px;
  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.4);
  /* text-align: center; */
  line-height: 70px;
  font-size: 25px;
  font-weight: 600;
  line-height: 80px;
  &:hover {
    background-color: #f1daab; /* 호버 시 변경될 배경색 */
    cursor: pointer; /* 호버 시 커서 모양 변경 (선택 사항) */
  }
  animation: fadein 2s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CreateTag = styled.div`
  margin-left: 90px;
`;

const CommuDiv = styled.div`
  width: 600px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.4);
  margin-bottom: 40px;
  border-radius: 5px;
`;
const CommuBody1 = styled(CommuDiv)`
  height: 350px;

  &:hover {
    border: 1px solid rgb(0, 0, 0, 0.4);
    box-shadow: 2.5px 2.5px 2.5px rgb(0, 0, 0, 0.4);
    cursor: pointer; /* 호버 시 커서 모양 변경 (선택 사항) */
  }
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
const CommuBody2 = styled(CommuDiv)`
  height: 600px;
  &:hover {
    border: 1px solid rgb(0, 0, 0, 0.4);
    box-shadow: 2.5px 2.5px 2.5px rgb(0, 0, 0, 0.4);
    cursor: pointer; /* 호버 시 커서 모양 변경 (선택 사항) */
  }

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
const CommuBody3 = styled(CommuDiv)`
  height: 300px;
  margin-top: 50px;
  &:hover {
    border: 1px solid rgb(0, 0, 0, 0.4);
    box-shadow: 2.5px 2.5px 2.5px rgb(0, 0, 0, 0.4);
    cursor: pointer; /* 호버 시 커서 모양 변경 (선택 사항) */
  }
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
const CommuBody4 = styled(CommuDiv)`
  height: 400px;
  &:hover {
    border: 1px solid rgb(0, 0, 0, 0.4);
    box-shadow: 2.5px 2.5px 2.5px rgb(0, 0, 0, 0.4);
    cursor: pointer; /* 호버 시 커서 모양 변경 (선택 사항) */
  }
  animation: fadein 4.5s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const CommuBody5 = styled(CommuDiv)`
  height: 300px;
  &:hover {
    border: 1px solid rgb(0, 0, 0, 0.4);
    box-shadow: 2.5px 2.5px 2.5px rgb(0, 0, 0, 0.4);
    cursor: pointer; /* 호버 시 커서 모양 변경 (선택 사항) */
  }
  animation: fadein 5s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// 페이징
const PagingSpace = styled.div`
  width: 50%;
  height: 50px;
  margin-top: 50px;
  margin-left: 490px;
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

const Alarm = styled.div`
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 2px solid #e7d2a7;
  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0);
  margin: 50px 0 0 100px;
  font-size: 20px;
  background-color: #f6e1b6;
  display: flex;
  border-radius: 5px;
  &:hover {
    background-color: #f1daab; /* 호버 시 변경될 배경색 */
    cursor: pointer; /* 호버 시 커서 모양 변경 (선택 사항) */
  }
`;

const AlarmImg = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 8px;
  margin-left: 10px;
  margin-right: 3px;
`;

const AlarmTag = styled.div``;

const TitleDiv = styled.div`
  font-family: var(--font-googleNanumPen);
  /* font-family: var(--font-Jua); */
  /* font-family: var(--font-NanumMyeongjo); */
  display: flex;
  font-size: 45px;
  margin-top: 104px;
  margin-left: 70px;
  width: 700px;
  /* border: 2px solid black; */
  color: white;
  height: 50px;
`;

const LifeDiv = styled.div`
  font-family: var(--font-googleNanumPen);
  font-size: 30px;
  margin-top: 110px;
  margin-left: 860px;
  color: rgb(255, 0, 0, 0.6);
  width: 200px;
  height: 50px;
  background-color: rgb(246, 225, 182, 0.3);
  text-align: center;
  line-height: 50px;
`;

const BoardImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  /* margin-top: 20px; */
`;
const BoardImg2 = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 680px;
  margin-top: 35px;
`;

const Toptags = styled.span`
  font-family: var(--font-googleNanumPen);
  font-size: 29px;
  margin: 12px 0 0 30px;
`;

const BodyTop = styled.div`
  display: flex;
  width: 590px;
  height: 70px;
  /* border: 2px solid black; */
  /* text-align: center; */
  line-height: 70px;
  margin-top: 5px;
`;

const Profile = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin: 18px 20px 0 20px;
`;
const NickName = styled.div`
  font-size: 20px;
  margin-right: 370px;
`;

const Times = styled.div`
  color: rgb(0, 0, 0, 0.5);
`;
const MoreImg = styled.img``;

const BodyTitle = styled.div`
  width: 490px;
  height: 50px;
  /* border: 2px solid black; */
  line-height: 50px;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 20px;
`;
const BodyTitle2 = styled.div`
  width: 490px;
  height: 50px;
  /* border: 2px solid black; */
  line-height: 50px;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 20px;
`;
const BodyCommu = styled.div`
  width: 490px;
  height: 140px;
  /* border: 2px solid black; */
  margin-left: 38px;
  margin-top: 10px;
  /* line-height: 180px; */
`;
const BodyCommu2 = styled.div`
  width: 490px;
  height: 358px;
  /* border: 2px solid black; */
  margin-left: 38px;
  margin-top: 30px;
  /* line-height: 180px; */
`;
const BodyCommu3 = styled.div`
  width: 490px;
  height: 82px;
  /* border: 2px solid black; */
  margin-left: 38px;
  margin-top: 10px;
  /* line-height: 180px; */
`;
const BodyCommu4 = styled.div`
  width: 490px;
  height: 188px;
  /* border: 2px solid black; */
  margin-left: 38px;
  margin-top: 10px;
  /* line-height: 180px; */
`;
const BodyCommu5 = styled.div`
  width: 490px;
  height: 88px;
  /* border: 2px solid black; */
  margin-left: 38px;
  margin-top: 10px;
  /* line-height: 180px; */
`;
const BodyLine = styled.hr`
  width: 550px;
  margin-bottom: 14px;
`;
const BodyBottom = styled.div`
  width: 590px;
  height: 40px;
  /* border: 2px solid black; */
  display: flex;
`;
const Views = styled.div`
  margin-left: 45px;
`;
const Likes = styled.div`
  margin-left: 360px;
`;

const BoardMain = () => {
  const navigate = useNavigate();
  const GoBoard = () => {
    navigate(`/community/${urlparam}/Detail`);
  };
  const [urlparam, setUrlparam] = useState(0);
  const [boardList, setBoardList] = useState([]);
  console.log(boardList);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    for (const param of searchParams) {
      const paramName = param[0];
      console.log(paramName);
      const paramValue = parseInt(param[1], 10);
      setUrlparam(paramValue);
      console.log(paramValue, '게시판 번호@@@', urlparam);
      const BoardListApi = axios.create({
        headers: { 'cotent-type': 'application/json' }
      });
      //유저 id정보 요청
      BoardListApi.get(`/board/all-write-list/${paramValue}?page=0&size=2`)
        .then((res) => {
          setBoardList(res.data);
          console.log('데이터 확인@@@@@@@@@@@@@', res);
        })
        .catch((err) => {
          console.log('실패1', err);
        });
    }
  }, []);
  // const boardInfo1 = boardList[0];
  // const boardInfo2 = boardList[1];
  // const boardInfo3 = boardList[2];
  // const boardInfo4 = boardList[3];
  // const boardInfo5 = boardList[4];
  return (
    <DetailDiv>
      <TopTitle>
        <TitleDiv>
          <BoardImg src='/assets/img/boardImg.png'></BoardImg>
          질문게시판
          <Toptags>| 관심이용자 9,162</Toptags>
        </TitleDiv>
        <LifeDiv>남은 수명 : 20 Day</LifeDiv>
      </TopTitle>
      <TopTag>
        <Alarm>
          <AlarmImg src='/assets/img/alarm.png'></AlarmImg>
          <AlarmTag>알림받기</AlarmTag>
        </Alarm>
        <BoardImg2 src='/assets/img/boardImg.png'></BoardImg2>
      </TopTag>
      <LineDiv></LineDiv>
      <FlexDiv>
        <LeftDiv>
          <CreateDiv
            onClick={() =>
              navigate(`/community/${urlparam}/Create?boardNo=${urlparam}`)
            }
          >
            <CreateTag>글 생성하기</CreateTag>
          </CreateDiv>
          <CommuBody1 onClick={GoBoard}>
            {/* 닉네임 {boardInfo1 ? boardInfo1.title : ''} */}
            <BodyTop>
              <Profile src='/assets/img/profile.png'></Profile>
              <NickName>닉네임</NickName>
              <Times>2시간 전</Times>
              <MoreImg></MoreImg>
            </BodyTop>
            <BodyTitle>글 제목</BodyTitle>
            <BodyCommu>글 내용</BodyCommu>
            <BodyLine></BodyLine>
            <BodyBottom>
              <Views>950 Views</Views>
              <Likes>23 좋아요</Likes>
            </BodyBottom>
          </CommuBody1>
          <CommuBody2 onClick={GoBoard}>
            <BodyTop>
              <Profile src='/assets/img/profile.png'></Profile>
              <NickName>닉네임</NickName>
              <Times>7시간 전</Times>
              <MoreImg></MoreImg>
            </BodyTop>
            <BodyTitle2>글 제목</BodyTitle2>
            <BodyCommu2>글 내용</BodyCommu2>
            <BodyLine></BodyLine>
            <BodyBottom>
              <Views>950 Views</Views>
              <Likes>23 좋아요</Likes>
            </BodyBottom>
          </CommuBody2>
        </LeftDiv>
        <RightDiv>
          <CommuBody3>
            <BodyTop>
              <Profile src='/assets/img/profile.png'></Profile>
              <NickName>닉네임</NickName>
              <Times>9시간 전</Times>
              <MoreImg></MoreImg>
            </BodyTop>
            <BodyTitle>글 제목</BodyTitle>
            <BodyCommu3>글 내용</BodyCommu3>
            <BodyLine></BodyLine>
            <BodyBottom>
              <Views>950 Views</Views>
              <Likes>23 좋아요</Likes>
            </BodyBottom>
          </CommuBody3>
          <CommuBody4>
            <BodyTop>
              <Profile src='/assets/img/profile.png'></Profile>
              <NickName>닉네임</NickName>
              <Times>11시간 전</Times>
              <MoreImg></MoreImg>
            </BodyTop>
            <BodyTitle>글 제목</BodyTitle>
            <BodyCommu4>글 내용</BodyCommu4>
            <BodyLine></BodyLine>
            <BodyBottom>
              <Views>950 Views</Views>
              <Likes>23 좋아요</Likes>
            </BodyBottom>
          </CommuBody4>
          <CommuBody5>
            <BodyTop>
              <Profile src='/assets/img/profile.png'></Profile>
              <NickName>닉네임</NickName>
              <Times>20시간 전</Times>
              <MoreImg></MoreImg>
            </BodyTop>
            <BodyTitle>글 제목</BodyTitle>
            <BodyCommu5>글 내용</BodyCommu5>
            <BodyLine></BodyLine>
            <BodyBottom>
              <Views>950 Views</Views>
              <Likes>23 좋아요</Likes>
            </BodyBottom>
          </CommuBody5>
        </RightDiv>
      </FlexDiv>

      <PagingSpace>
        <PagingButton>
          <PagingButtonText>&lt;&lt;</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>&lt;</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>1</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>2</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>3</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>4</PagingButtonText>
        </PagingButton>

        <PagingButton>
          <PagingButtonText>&gt;</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>&gt;&gt;</PagingButtonText>
        </PagingButton>
      </PagingSpace>
    </DetailDiv>
  );
};

export { BoardMain };
