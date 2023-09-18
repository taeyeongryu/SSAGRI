import { styled } from 'styled-components';

const ChatFrame = styled.div`
  width: 1920px;
  height: 900px;
  margin-top: 7vh;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatDiv = styled.div`
  width: 70%;
  height: 80%;
  /* border: 2px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 채팅 목록
const ChatList = styled.div`
  border-top: 1px solid #4786fa;
  border-bottom: 1px solid #4786fa;
  width: 35%;
  height: 100%;
  font-size: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
// 내 닉네임, 안읽은 메세지만 보기
const ChatHeader = styled.div`
  border: 1px solid #4786fa;
  width: 450px;
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
// 채팅 한줄한줄 요소
const ChatItem = styled.div`
  border: 1px solid #4786fa;
  border-collapse: collapse;
  width: 450px;
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
const ChatUnReadNumber = styled.div`
  font-size: 20px;
  margin-bottom: 2px;
  color: #fff;
`;
// 채팅창
const ChatContentFrame = styled.div`
  border: 1px solid #4786fa;
  width: 65%;
  height: 100%;
  font-size: 30px;
`;
const ChatOtherNick = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 70px;
`;
const ChatContent = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 500px;
`;
const ChatMessage = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 140px;
`;

const Chatting = () => {
  return (
    <ChatFrame>
      <ChatDiv>
        <ChatList>
          <ChatHeader>
            <ChatMyId>내 아이디</ChatMyId>
            <ChatUnRead>
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
            </ChatUnRead>
          </ChatHeader>
          <ChatItem>
            <ChatProfile src='/assets/img/profile.png'></ChatProfile>
            <ChatRight>
              <ChatInfo>
                <ChatName>코딩왕123</ChatName>
                <ChatTime>봉명동 · 2시간전</ChatTime>
              </ChatInfo>
              <ChatMiniContent>
                대화내용대화내용대화내용대화내용
              </ChatMiniContent>
            </ChatRight>
            <ChatUnReadDiv>
              <ChatUnReadNumber>75</ChatUnReadNumber>
            </ChatUnReadDiv>
          </ChatItem>
          <ChatItem>
            <ChatProfile src='/assets/img/profile.png'></ChatProfile>
            <ChatRight>
              <ChatInfo>
                <ChatName>코딩왕123</ChatName>
                <ChatTime>봉명동 · 2시간전</ChatTime>
              </ChatInfo>
              <ChatMiniContent>
                대화내용대화내용대화내용대화내용
              </ChatMiniContent>
            </ChatRight>
            <ChatUnReadDiv>
              <ChatUnReadNumber>75</ChatUnReadNumber>
            </ChatUnReadDiv>
          </ChatItem>
          <ChatItem>
            <ChatProfile src='/assets/img/profile.png'></ChatProfile>
            <ChatRight>
              <ChatInfo>
                <ChatName>코딩왕123</ChatName>
                <ChatTime>봉명동 · 2시간전</ChatTime>
              </ChatInfo>
              <ChatMiniContent>
                대화내용대화내용대화내용대화내용대화내용대화내용
              </ChatMiniContent>
            </ChatRight>
            <ChatUnReadDiv>
              <ChatUnReadNumber>75</ChatUnReadNumber>
            </ChatUnReadDiv>
          </ChatItem>
          <ChatItem>
            <ChatProfile src='/assets/img/profile.png'></ChatProfile>
            <ChatRight>
              <ChatInfo>
                <ChatName>코딩왕123</ChatName>
                <ChatTime>봉명동 · 2시간전</ChatTime>
              </ChatInfo>
              <ChatMiniContent>
                대화내용대화내용대화내용대화내용
              </ChatMiniContent>
            </ChatRight>
            <ChatUnReadDiv>
              <ChatUnReadNumber>75</ChatUnReadNumber>
            </ChatUnReadDiv>
          </ChatItem>
          <ChatItem>
            <ChatProfile src='/assets/img/profile.png'></ChatProfile>
            <ChatRight>
              <ChatInfo>
                <ChatName>코딩왕123</ChatName>
                <ChatTime>봉명동 · 2시간전</ChatTime>
              </ChatInfo>
              <ChatMiniContent>
                대화내용대화내용대화내용대화내용
              </ChatMiniContent>
            </ChatRight>
            <ChatUnReadDiv>
              <ChatUnReadNumber>75</ChatUnReadNumber>
            </ChatUnReadDiv>
          </ChatItem>
          <ChatItem>
            <ChatProfile src='/assets/img/profile.png'></ChatProfile>
            <ChatRight>
              <ChatInfo>
                <ChatName>코딩왕123</ChatName>
                <ChatTime>봉명동 · 2시간전</ChatTime>
              </ChatInfo>
              <ChatMiniContent>
                대화내용대화내용대화내용대화내용
              </ChatMiniContent>
            </ChatRight>
            <ChatUnReadDiv>
              <ChatUnReadNumber>75</ChatUnReadNumber>
            </ChatUnReadDiv>
          </ChatItem>
          <ChatItem>
            <ChatProfile src='/assets/img/profile.png'></ChatProfile>
            <ChatRight>
              <ChatInfo>
                <ChatName>코딩왕123</ChatName>
                <ChatTime>봉명동 · 2시간전</ChatTime>
              </ChatInfo>
              <ChatMiniContent>
                대화내용대화내용대화내용대화내용
              </ChatMiniContent>
            </ChatRight>
            <ChatUnReadDiv>
              <ChatUnReadNumber>75</ChatUnReadNumber>
            </ChatUnReadDiv>
          </ChatItem>
          <ChatItem>
            <ChatProfile src='/assets/img/profile.png'></ChatProfile>
            <ChatRight>
              <ChatInfo>
                <ChatName>코딩왕123</ChatName>
                <ChatTime>봉명동 · 2시간전</ChatTime>
              </ChatInfo>
              <ChatMiniContent>
                대화내용대화내용대화내용대화내용
              </ChatMiniContent>
            </ChatRight>
            <ChatUnReadDiv>
              <ChatUnReadNumber>75</ChatUnReadNumber>
            </ChatUnReadDiv>
          </ChatItem>
          <ChatItem>
            <ChatProfile src='/assets/img/profile.png'></ChatProfile>
            <ChatRight>
              <ChatInfo>
                <ChatName>코딩왕123</ChatName>
                <ChatTime>봉명동 · 2시간전</ChatTime>
              </ChatInfo>
              <ChatMiniContent>
                대화내용대화내용대화내용대화내용
              </ChatMiniContent>
            </ChatRight>
            <ChatUnReadDiv>
              <ChatUnReadNumber>75</ChatUnReadNumber>
            </ChatUnReadDiv>
          </ChatItem>
        </ChatList>
        <ChatContentFrame>
          <ChatOtherNick>상대방 닉네임</ChatOtherNick>
          <ChatContent>대화 내용</ChatContent>
          <ChatMessage>메세지 입력</ChatMessage>
        </ChatContentFrame>
      </ChatDiv>
    </ChatFrame>
  );
};

export { Chatting };
