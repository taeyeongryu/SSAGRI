import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const ChatFrame = styled.div`
  width: 1920px;
  height: 890px;
  margin-top: 7vh;
  /* background-color: rgb(0, 0, 0, 0.3); */
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const ChatImgLeft = styled.div`
//   width: 16%;
// `;
// const ChatImgRight = styled.div`
//   width: 16%;
// `;

const ChatDiv = styled.div`
  width: 68%;
  height: 80%;
  background-color: #fff;
  border-radius: 20px;
  /* border: 2px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 3px 3px #cccccc;
`;
// 채팅 목록
const ChatLeft = styled.div`
  width: 460px;
  height: 100%;
`;
// 내 닉네임, 안읽은 메세지만 보기
const ChatHeader = styled.div`
  border: 1px solid #4786fa;
  border-top-left-radius: 20px;
  width: 460px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const ChatMyId = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
// @ts-ignore
const ChatUnRead = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  color: #929292;
  line-height: 30px;
  margin-right: 10px;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const ChatList = styled.div`
  border-top: 1px solid #4786fa;
  border-bottom: 1px solid #4786fa;
  border-bottom-left-radius: 20px;
  width: 460px;
  height: 642px;
  font-size: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #76a9fa; /* 스크롤바 막대 색상 */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #fff; /* 스크롤바 뒷 배경 색상 */
  }
`;
// 채팅 한줄한줄 요소
const ChatItem = styled.div`
  border-left: 1px solid #4786fa;
  border-bottom: 1px solid #4786fa;
  width: 452px;
  height: 80px;
  font-size: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #4786fa;
  }
  &:hover div {
    color: #fff;
  }
`;
const ChatProfile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const ChatRight = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const ChatInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const ChatName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const ChatTime = styled.div`
  font-size: 14px;
  margin-left: 10px;
  color: #929292;
`;
const ChatMiniContent = styled.div`
  width: 100%;
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
// @ts-ignore
const ChatUnReadDiv = styled.div`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border-radius: 18px;
  background-color: #4786fa;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 2px 2px #929292;
  &:hover {
    background-color: #fff;
    border: 1px solid #ce83f7;
  }
  &:hover > div {
    color: #ce83f7;
    font-weight: bold;
    cursor: pointer;
  }
`;
// @ts-ignore
const ChatUnReadNumber = styled.div`
  font-size: 20px;
  margin-bottom: 2px;
  color: #fff;
`;

// ---------------- 우측 채팅창 ----------------
const ChatContentFrame = styled.div`
  border: 1px solid #4786fa;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 65%;
  height: 100%;
  font-size: 30px;
`;
const ChatContentHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #4786fa;
`;
const ChatProfileRight = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 5px;
`;
const ChatOtherNick = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  height: 70px;
  margin: 0 10px;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const SellorProduct = styled.button`
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;
const SellorProductImg = styled.img`
  width: 40px;
  height: 40px;
`;
// 대화 내용 공간
const ChatContent = styled.div`
  width: 100%;
  height: 500px;
  background-color: #f1fafb;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #76a9fa; /* 스크롤바 막대 색상 */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1fafb; /* 스크롤바 뒷 배경 색상 */
  }
`;
// 채팅날짜
const ChatDateDiv = styled.div`
  width: 100%;
  height: 30px;
  margin: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChatDateLine = styled.div`
  width: 42%;
  height: 1px;
  border-top: 1px solid #929292;
`;
const ChatDate = styled.div`
  width: 16%;
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #929292;
  text-align: center;
`;
// 채팅 메세지 Div - 내가 보낼 때, 받을 때
const ChatMyMessageFrame = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: end;
  align-items: end;
`;
const ChatMessageTime = styled.div`
  width: 100px;
  height: 20px;
  line-height: 20px;
  color: #929292;
  font-size: 12px;
  text-align: center;
`;
const ChatMyMessage = styled.div`
  max-width: 35%;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #76a9fa;
  color: #fff;
  box-shadow: 2px 2px 2px 1px #929292;
  font-size: 16px;
`;
const ChatOthersMessageFrame = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: start;
  align-items: end;
`;
const ChatOthersProfile = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChatOthersProfileImg = styled.img`
  width: 30px;
  height: 30px;
`;
const ChatOthersMessage = styled.div`
  max-width: 35%;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: #000;
  box-shadow: 2px 2px 2px 1px #929292;
  font-size: 16px;
`;
// 메세지 입력
const ChatMessageTyping = styled.div`
  width: 100%;
  height: 138px;
  background-color: #f1fafb;
  border-bottom-right-radius: 20px;
  /* border-bottom: 1px solid #4786fa; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChatMessageTypingDiv = styled.div`
  width: 99%;
  height: 130px;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ChatInput = styled.div`
  width: 720px;
  height: 125px;
  margin-left: 5px;
  position: relative;
  border: none;
  &:active {
    border: none;
  }
`;
const ChatInputMessage = styled.div`
  /* border: 1px solid red; */
  width: 740px;
  height: 120px;
  color: #929292;
  font-size: 16px;
  margin-top: 5px;
`;
const ChatMessageDivRight = styled.div`
  width: 113px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
`;
const ChatButton = styled.button`
  width: 100px;
  height: 40px;
  margin-bottom: 5px;
  background-color: #4786fa;
  box-shadow: 2px 2px 2px 1px #929292;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: #ce83f7;
    /* border: 1px solid #ce83f7; */
    box-shadow: 1px 1px 3px 3px #929292;
  }
  &:active {
    border: 1px solid #ce83f7;
    color: #ce83f7;
    background-color: #fff;
  }
`;

const Chatting = () => {
  // 페이지 진입시, 채팅창 목록 보여주기
  const userNo = localStorage.getItem('userNo');
  const [userNick, setUserNick] = useState<string>('');
  const [chatRoomNo, setChatRoomNo] = useState('');
  const [receiverNo, setReceiverNo] = useState('');
  const [myChatList, setMyChatList] = useState<any[]>([]);
  /*
  chatRoonNo: 1
  lastDate: "2023-10-01T22:19:12"
  lastMent: "messageInput"
  receiverNickName: "1"
  receiverNo: 2
  receiverProfile: "https://learners-high.s3.ap-northeast-2.amazonaws.com/profile/2cf064d5-f5bc-4ea0-8469-5ce8088c8dc7_%EB%8B%B9%EA%B7%BC%EB%A7%88%EC%BC%93%20%EC%82%AC%EC%A7%84.jpg"
  receiverRegion: "DAEJEON"
  */

  // 시간 포맷
  const formatDate = (inputDate) => {
    const time = new Date(inputDate);
    const timeNow = new Date();
    const diffSec = timeNow.getTime() - time.getTime();
    const minute = diffSec / (60 * 1000);
    console.log(Math.floor(minute / 60));

    if (minute < 1) {
      return `방금 전`;
    } else if (minute < 60) {
      return `${minute.toFixed(0)}분 전`;
    } else if (minute < 24 * 60) {
      return `${Math.floor(minute / 60)}시간 전`;
    } else if (minute < 24 * 60 * 30) {
      return `${Math.floor(minute / (24 * 60))}일 전`;
    } else {
      return `${Math.floor(minute / (24 * 60 * 30))}달 전`;
    }
  };

  // 지역 영어 포맷
  const transformRegion = (regionEng) => {
    switch (regionEng) {
      case 'SEOUL':
        return '서울';
      case 'DAEJEON':
        return '대전';
      case 'GUMI':
        return '구미';
      case 'GWANGJU':
        return '광주';
      case 'BUG':
        return '부울경';
    }
  };

  // chatRoomNo 따라 채팅하기 -> chatRoomNo으로 useEffect 활성화
  // const navigate = useNavigate();
  const doChatting = (chatRoomNo, receiverNo) => () => {
    setReceiverNo(receiverNo);
    setChatRoomNo(chatRoomNo);
  };

  useEffect(() => {
    axios
      .get(`/chatroom/nickname/${userNo}`)
      .then((res) => {
        console.log(res.data);
        setUserNick(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/chatroom/list/${userNo}`)
      .then((res) => {
        console.log(res.data);
        setMyChatList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 채팅목록 DIV
  const chatListRendering = () => {
    const result: any = [];
    for (let i = 0; i < myChatList.length; i++) {
      result.push(
        <ChatItem
          onClick={doChatting(
            myChatList[i].chatRoomNo,
            myChatList[i].receiverNo
          )}
        >
          <ChatProfile src={myChatList[i].receiverProfile}></ChatProfile>
          <ChatRight>
            <ChatInfo>
              <ChatName>{myChatList[i].receiverNickName}</ChatName>
              <ChatTime>
                {transformRegion(myChatList[i].receiverRegion)} ·{' '}
                {formatDate(myChatList[i].lastDate)}
              </ChatTime>
            </ChatInfo>
            <ChatMiniContent>{myChatList[i].lastMent}</ChatMiniContent>
          </ChatRight>
          {/* <ChatUnReadDiv>
            <ChatUnReadNumber>75</ChatUnReadNumber>
          </ChatUnReadDiv> */}
        </ChatItem>
      );
    }
    return result;
  };
  return (
    <ChatFrame>
      {/* <ChatImgLeft>
        <img
          src='/assets/img/chatLeft.png'
          style={{
            width: '100%',
            height: '100%',
            zIndex: '10',
            opacity: '0.4'
          }}
        ></img>
      </ChatImgLeft> */}

      <ChatDiv>
        {/* 채팅 목록 */}
        <ChatLeft>
          <ChatHeader>
            <ChatMyId>{userNick}</ChatMyId>
            {/* <ChatUnRead>
              안읽은 메세지만 보기
              <img
                src='/assets/img/checkWhite.png'
                alt='checkWhite'
                style={{
                  width: '20px',
                  height: '20px',
                  marginLeft: '5px'
                }}
              />
            </ChatUnRead> */}
          </ChatHeader>
          <ChatList>{chatListRendering()}</ChatList>
        </ChatLeft>
        {/* 채팅 하나 공간 */}
        <ChatContentFrame>
          <ChatContentHeader>
            <ChatProfileRight src='/assets/img/profile.png'></ChatProfileRight>
            <ChatOtherNick>코딩왕123</ChatOtherNick>
            <SellorProduct>
              <SellorProductImg src='/assets/img/setting.png'></SellorProductImg>
            </SellorProduct>
          </ChatContentHeader>
          <ChatContent>
            <ChatDateDiv>
              <ChatDateLine></ChatDateLine>
              <ChatDate>2023년 9월 19일</ChatDate>
              <ChatDateLine></ChatDateLine>
            </ChatDateDiv>
            <ChatMyMessageFrame>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
              <ChatMyMessage>제우스랩?</ChatMyMessage>
            </ChatMyMessageFrame>
            <ChatOthersMessageFrame>
              <ChatOthersProfile>
                <ChatOthersProfileImg src='/assets/img/profile.png'></ChatOthersProfileImg>
              </ChatOthersProfile>
              <ChatOthersMessage>네</ChatOthersMessage>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
            </ChatOthersMessageFrame>
            <ChatMyMessageFrame>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
              <ChatMyMessage>안녕하세요 지금도?</ChatMyMessage>
            </ChatMyMessageFrame>
            <ChatOthersMessageFrame>
              <ChatOthersProfile>
                <ChatOthersProfileImg src='/assets/img/profile.png'></ChatOthersProfileImg>
              </ChatOthersProfile>
              <ChatOthersMessage>네 팝니다.</ChatOthersMessage>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
            </ChatOthersMessageFrame>
            <ChatMyMessageFrame>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
              <ChatMyMessage>
                안녕하세요 지금도 제우스랩 판매하시나요? 안녕하세요 지금도
                제우스랩 판매하시나요?안녕하세요 지금도 제우스랩 판매하시나요?
              </ChatMyMessage>
            </ChatMyMessageFrame>
            <ChatOthersMessageFrame>
              <ChatOthersProfile>
                <ChatOthersProfileImg src='/assets/img/profile.png'></ChatOthersProfileImg>
              </ChatOthersProfile>
              <ChatOthersMessage>안녕하세요. 네 팝니다.</ChatOthersMessage>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
            </ChatOthersMessageFrame>
            <ChatMyMessageFrame>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
              <ChatMyMessage>
                안녕하세요 지금도 제우스랩 판매하시나요?
              </ChatMyMessage>
            </ChatMyMessageFrame>
            <ChatOthersMessageFrame>
              <ChatOthersProfile>
                <ChatOthersProfileImg src='/assets/img/profile.png'></ChatOthersProfileImg>
              </ChatOthersProfile>
              <ChatOthersMessage>
                안녕하세요. 네 팝니다.안녕하세요. 네 팝니다.안녕하세요. 네
                팝니다.안녕하세요. 네 팝니다.
              </ChatOthersMessage>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
            </ChatOthersMessageFrame>
            <ChatMyMessageFrame>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
              <ChatMyMessage>
                안녕하세요 지금도 제우스랩 판매하시나요?
              </ChatMyMessage>
            </ChatMyMessageFrame>
            <ChatOthersMessageFrame>
              <ChatOthersProfile>
                <ChatOthersProfileImg src='/assets/img/profile.png'></ChatOthersProfileImg>
              </ChatOthersProfile>
              <ChatOthersMessage>안녕하세요. 네 팝니다.</ChatOthersMessage>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
            </ChatOthersMessageFrame>
            <ChatMyMessageFrame>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
              <ChatMyMessage>
                안녕하세요 지금도 제우스랩 판매하시나요?
              </ChatMyMessage>
            </ChatMyMessageFrame>
            <ChatOthersMessageFrame>
              <ChatOthersProfile>
                <ChatOthersProfileImg src='/assets/img/profile.png'></ChatOthersProfileImg>
              </ChatOthersProfile>
              <ChatOthersMessage>안녕하세요. 네 팝니다.</ChatOthersMessage>
              <ChatMessageTime>오후 1시 30분</ChatMessageTime>
            </ChatOthersMessageFrame>
          </ChatContent>
          <ChatMessageTyping>
            <ChatMessageTypingDiv>
              <ChatInput>
                <ChatInputMessage>메세지를 입력해주세요...</ChatInputMessage>
              </ChatInput>
              <ChatMessageDivRight>
                {/* <ChatButtonMarginDiv></ChatButtonMarginDiv> */}
                <ChatButton>전송</ChatButton>
              </ChatMessageDivRight>
            </ChatMessageTypingDiv>
          </ChatMessageTyping>
        </ChatContentFrame>
      </ChatDiv>
      {/* <ChatImgRight>
        <img
          src='/assets/img/chatRight.png'
          style={{
            width: '100%',
            height: '100%',
            zIndex: '1',
            opacity: '0.4'
          }}
        ></img>
      </ChatImgRight> */}
    </ChatFrame>
  );
};

export { Chatting };
