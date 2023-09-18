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
  border: 2px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatList = styled.div`
  border: 1px solid black;
  width: 35%;
  height: 100%;
  font-size: 30px;
  overflow: auto;
`;
const ChatMyId = styled.div`
  font-size: 24px;
`;
const ChatItem = styled.div`
  border: 1px solid black;
  width: 450px;
  height: 80px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChatProfile = styled.img`
  width: 70px;
  height: 70px;
`;
const ChatRight = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ChatInfo = styled.div`
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
  color: #929292;
`;
const ChatMiniContent = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ChatContent = styled.div`
  border: 1px solid black;
  width: 65%;
  height: 100%;
  font-size: 30px;
`;

const Chatting = () => {
  return (
    <ChatFrame>
      <ChatDiv>
        <ChatList>
          <ChatMyId>내 아이디</ChatMyId>
          <ChatItem>
            <ChatProfile src='/assets/img/profile.png'></ChatProfile>
            <ChatRight>
              <ChatInfo>
                <ChatName>코딩왕123</ChatName>
                <ChatTime>봉명동 2시간전</ChatTime>
              </ChatInfo>
              <ChatMiniContent>
                대화내용대화내용대화내용대화내용
              </ChatMiniContent>
            </ChatRight>
          </ChatItem>
          <ChatItem></ChatItem>
          <ChatItem></ChatItem>
          <ChatItem></ChatItem>
          <ChatItem></ChatItem>
          <ChatItem></ChatItem>
          <ChatItem></ChatItem>
          <ChatItem></ChatItem>
          <ChatItem></ChatItem>
        </ChatList>
        <ChatContent>대화 내용</ChatContent>
      </ChatDiv>
    </ChatFrame>
  );
};

export { Chatting };
