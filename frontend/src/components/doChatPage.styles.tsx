import { styled } from 'styled-components';
// @ts-ignore
import { useEffect, useRef, useState } from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

const DoChatDIV = styled.div`
  width: 1920px;
  height: 900px;
  margin: 50px auto 0;
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DoChat = () => {
  (window as any).global = window;
  // Object.assign(global, { WebSocket });
  // @ts-ignore
  const [chatRoomNo, setChatRoomNo] = useState<string>('1'); // 방 번호
  // const [senderNo, setSenderNo] = useState<string>('2');
  const [receiverNo, setReceiverNo] = useState('2'); // 메세지를 받을 사람
  const [messageInput, setMessageInput] = useState<string>('messageInput'); // 메세지 내용
  // @ts-ignore
  const [messages, setMessages] = useState<any>([]); // 메세지 배열
  const userNo: any = localStorage.getItem('userNo'); // 사용자 번호

  let [stompClient, setStompClient] = useState<Stomp.Client>(); // 웹소켓
  // const [chatLog, setChatLog] = useState(chats); // 채팅로그
  // @ts-ignore
  const [chatTimes, setChatTimes] = useState<any[]>([]); // 채팅시간

  // 시간 포맷
  // @ts-ignore
  const formatDate = (inputDate) => {
    const currentDate = new Date();
    const targetDate = new Date(inputDate);
    const timeDiff = currentDate.getTime() - targetDate.getTime();
    const minute = timeDiff / (60 * 1000);

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

  // 연결
  const connect = () => {
    // stomp 객체 생성
    console.log('연결 시도 중...');
    const socket = new SockJS('http://localhost:5000/api/ws', null, {
      transports: ['websocket']
    });
    const stompClient = Stomp.over(socket);
    console.log('stomp 객체 생성..', stompClient);

    stompClient.connect({}, function (frame) {
      console.log('Connected!!, frame: ', frame);

      stompClient.subscribe(`/queue/chat/room/${chatRoomNo}`, (frame) => {
        console.log('subscribe frame: ', frame);

        // 메세지 전송시 화면에 보여주기
        // const messages = document.querySelector('#messages');
        // const message = document.createElement('li');
        // message.innerText = frame.body;
        // messages.appendChild(message);
      });
    });

    console.log('stomp 객체 생성 후 상태', stompClient);

    setStompClient(stompClient);
  };

  const sendMessage = () => {
    if (messageInput == '') {
      alert('메세지를 작성해주세요!');
      return;
    }
    if (stompClient) {
      // [테스트용 코드] : 사용자가 2번으로 로그인하면 1번에게 메세지 전송한다는 뜻
      if (userNo === 2) {
        setReceiverNo('1');
      }
      // 헤더 설정
      // const headers = {
      //   Authorization: `${localStorage.getItem('accessToken')}`
      // };
      // console.log('headers in Stomp', headers);
      stompClient.send(
        `/simple/chat/room/${chatRoomNo}`,
        {},
        JSON.stringify({
          chatRoomNo: chatRoomNo,
          senderNo: userNo,
          receiverNo: receiverNo,
          content: messageInput
        })
      );
    }
    setMessageInput('');
  };

  useEffect(() => {
    // 이전의 연결은 연결 해지
    if (stompClient && stompClient.connected) {
      // console.log("Attempting to disconnect existing stompClient connection");
      stompClient.disconnect(() => {
        // console.log("Disconnected existing stompClient connection");
      });
      setStompClient(undefined);
      console.log('Disconnected!');
    }

    // 새로운 연결 시도
    connect();
  }, [chatRoomNo]);

  return (
    <DoChatDIV>
      <div id='chat'>
        <div id='messages'>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        {/* 
        <input
        type='number'
        value={chatRoomNo}
        onChange={(e) => setChatRoomNo(e.target.value)}
        placeholder='Chat Room No'
      /> */}

        {/* <input
          type='number'
          value={senderNo}
          onChange={(e) => setSenderNo(e.target.value)}
          placeholder='Sender No'
        /> */}

        {/* <input
          type='number'
          value={userNo}
          // onChange={(e) => setReceiverNo(e.target.value)}
          placeholder='Receiver No'
        /> */}

        <textarea
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder='Message'
        ></textarea>

        <button onClick={sendMessage}>Send</button>
      </div>
    </DoChatDIV>
  );
};

export { DoChat };
