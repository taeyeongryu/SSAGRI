import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
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
  align-items: start;
`;
const ChatMyId = styled.div`
  max-width: 460px;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const ChatMyNickName = styled.div`
  max-width: 300px;
  font-size: 24px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  border-radius: 50%;
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
  width: 70px;
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
  border-radius: 50%;
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
  const [selectChat, setSelectChat] = useState({});
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
    // console.log(Math.floor(minute / 60));

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
  const selectChatting = (selectChat) => () => {
    // console.log('selectChat : ', selectChat);
    setSelectChat(selectChat);
  };

  useEffect(() => {
    axios
      .get(`/chatroom/nickname/${userNo}`)
      .then((res) => {
        // console.log('nickname : ', res.data);
        setUserNick(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/chatroom/list/${userNo}`)
      .then((res) => {
        // console.log('chatroom list : ', res.data);
        setMyChatList(res.data);
        setSelectChat(res.data[0]);
        // console.log('selectChat', res.data[0]);
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
        <ChatItem key={i} onClick={selectChatting(myChatList[i])}>
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
            <ChatMyId>
              <ChatMyNickName>{userNick}</ChatMyNickName>
              <div
                style={{
                  fontSize: '18px'
                }}
              >
                님의 채팅목록
              </div>
            </ChatMyId>
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
          <DoChatting selectChat={selectChat}></DoChatting>
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

const DoChatting = ({ selectChat }) => {
  const userNo = localStorage.getItem('userNo');
  const number = useRef(0);
  const totalPages = useRef(0);
  const pastMessage = useRef(false);
  const [messageList, setMessageList] = useState<any[]>([]);
  const totalMessageList = useRef([]);

  // 채팅창 날짜선 형식 변환
  const transformDate = (date) => {
    const result = new Date(date);
    const year = result.getFullYear();
    const month = result.getMonth() + 1;
    const day = result.getDate();
    return `${year}년 ${month}월 ${day}일 `;
  };

  // 메세지 시간 포맷
  const messageFormatDate = (date) => {
    const result = new Date(date);
    const hour = result.getHours();
    let minute = result.getMinutes().toString();
    if (minute.length === 1) {
      minute = `0${minute}`;
    }
    if (hour < 12) {
      return `오전 ${hour}:${minute}`;
    } else {
      if (hour == 12) {
        return `오후 ${12}:${minute}`;
      } else {
        return `오후 ${hour - 12}:${minute}`;
      }
    }
  };

  useEffect(() => {
    if (selectChat.chatRoomNo !== undefined) {
      // console.log('selectChat', selectChat);
      axios
        .get(`/message/${selectChat.chatRoomNo}?&page=0&size=20`)
        .then((res) => {
          // 반환 메세지 삽입
          setMessageList(res.data.content);
          totalMessageList.current = res.data.content;

          // 누적 메세지 삽입
          // totalMessageList.current.unshift(...res.data.content);
          // console.log('totalMessageList : ', totalMessageList);

          // 페이지 번호 삽입
          number.current = res.data.number;
          totalPages.current = res.data.totalPages;
          // console.log('get messageList : ', messageList);

          // 이전 메세지가 있는지 없는지 page를 통해 판별한다.
          if (number.current + 1 < totalPages.current) {
            pastMessage.current = true;
          } else {
            pastMessage.current = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectChat]);

  // 스크롤을 위로 올렸을 때, pastMessage.current = true 라면,
  // 이전의 데이터를 불러온다.

  // messageList가 변경되었을 때, 메세지들을 가공한다.
  useEffect(() => {}, [totalMessageList.current]);

  // 대화 목록 DIV ->
  // 뒤에서 앞으로 채운다.
  // 1. 날짜를 저장해 두다가, 날짜가 변경될 때 날짜선을 그어준다.
  // 2. 내가 보낸 사람이면 내가 보낸 div를 만든다.
  // 3. 상대방이 보낸 메세지면 상대방이 보낸 div를 만든다.
  const messageListRendering = () => {
    const result: any = [];
    let date = ''; // 날짜 저장
    let pastDate = ''; // 갱신되는 과거 날짜
    let messageList: any[] = totalMessageList.current; // 여기서 쓰일 메세지 배열
    // console.log('messageList : ', messageList);
    for (let i = 0; i < messageList.length; i++) {
      // 내 메세지 출력
      if (messageList[i].senderNo == userNo) {
        result.unshift(
          <ChatMyMessageFrame>
            <ChatMessageTime>
              {messageFormatDate(messageList[i].time)}
            </ChatMessageTime>
            <ChatMyMessage>{messageList[i].content}</ChatMyMessage>
          </ChatMyMessageFrame>
        );
      } else {
        // 상대방 메세지 출력
        result.unshift(
          <ChatOthersMessageFrame>
            <ChatOthersProfile>
              <ChatOthersProfileImg
                src={selectChat.receiverProfile}
              ></ChatOthersProfileImg>
            </ChatOthersProfile>
            <ChatOthersMessage>{messageList[i].content}</ChatOthersMessage>
            <ChatMessageTime>
              {messageFormatDate(messageList[i].time)}
            </ChatMessageTime>
          </ChatOthersMessageFrame>
        );
      }

      // 첫 날짜 저장
      if (i === 0) {
        // console.log(messageList[i].time);
        date = messageList[i].time.substring(0, 10);
        // console.log(transformDate(date));
      }
      // 날짜가 바뀔 때마다 저장
      pastDate = messageList[i].time.substring(0, 10);
      // console.log('pastDate : ', pastDate);
      // 날짜가 다르다면 날짜 삽입, 마지막 메세지라면 날짜 삽입
      if (date !== pastDate || i == messageList.length - 1) {
        date = pastDate;
        result.unshift(
          <ChatDateDiv>
            <ChatDateLine></ChatDateLine>
            <ChatDate>{transformDate(date)}</ChatDate>
            <ChatDateLine></ChatDateLine>
          </ChatDateDiv>
        );
      }
    }
    return result;
  };

  return (
    <>
      <ChatContentHeader>
        <ChatProfileRight src={selectChat.receiverProfile}></ChatProfileRight>
        <ChatOtherNick>{selectChat.receiverNickName}</ChatOtherNick>
        <SellorProduct>
          <SellorProductImg src='/assets/img/setting.png'></SellorProductImg>
        </SellorProduct>
      </ChatContentHeader>
      <ChatContent>{messageListRendering()}</ChatContent>
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
    </>
  );
};

export { Chatting };
