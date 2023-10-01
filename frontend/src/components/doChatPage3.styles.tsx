import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
// import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
// import WebSocket from 'ws';
import SockJS from 'sockjs-client';
// import { WebSocket } from 'websocket';

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
  // @ts-ignore
  const [senderNo, setSenderNo] = useState<string>('2'); // 메세지를 받을 사람
  // const [receiverNo, setReceiverNo] = useState('');
  const [messageInput, setMessageInput] = useState<string>('messageInput'); // 메세지 내용
  // @ts-ignore
  const [messages, setMessages] = useState<any>([]); // 메세지 배열
  const userNo: any = localStorage.getItem('userNo'); // 사용자 번호

  // console.log('--- 02. 변수 설정 확인 ---');
  // console.log('chatRoomNo: ', chatRoomNo);
  // console.log('senderNo: ', senderNo);
  // console.log('messageInput: ', messageInput);
  // console.log('userNo: ', userNo);

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

  // 연결해지
  useEffect(() => {
    if (stompClient && stompClient.connected) {
      stompClient.disconnect(() => {});
      setStompClient(undefined);
      console.log('DisConnected');
    }
    connect();
    // setChatLog(chats); // 채팅로그 적용
  }, [chatRoomNo]);

  // 연결
  const connect = () => {
    const socket = new SockJS('http://localhost:5000/api/ws');
    const stomp = Stomp.over(socket);
    console.log('connect 함수 실행, Stomp : ', stomp);

    // connecting
    stomp.connect(
      {},
      (frame) => {
        console.log('frame: ', frame);
        console.log('웹소켓 연결 중.. : ', stomp);
        setStompClient(stomp);

        stomp.subscribe(`/sub/chat/room/${chatRoomNo}`, (message) => {
          const chat = JSON.parse(message.body);
          console.log('subscribe chat: ', chat);
          // setChatLog((prevLog) => [...prevLog, chat]);
          // setChatTimes((prevTimes) => [
          //   ...prevTimes
          // formatDate(chat.scrcSendTime)
          // ]);
        });
      },
      (error) => {
        console.log('연결실패 에러 : ', error);
      }
    );
  };

  const sendMessage = () => {
    if (messageInput == '') {
      alert('메세지를 작성해주세요!');
      return;
    }
    if (stompClient) {
      const messageRequest = useRef({
        chatRoomNo: chatRoomNo,
        senderNo: senderNo,
        receiverNo: userNo,
        content: messageInput
      });
      stompClient.send(
        `/pub/chat/room/${chatRoomNo}`,
        {},
        JSON.stringify(messageRequest.current)
      );
    }
    setMessageInput('');
  };

  // console.log('--- 01. 채팅 페이지 진입 확인 ---');

  // (window as any).global = window;
  // Object.assign(global, { WebSocket });

  // const [chatRoomNo, setChatRoomNo] = useState('1');
  // const [senderNo, setSenderNo] = useState('2');
  // // const [receiverNo, setReceiverNo] = useState('');
  // const [messageInput, setMessageInput] = useState('messageInput');
  // const [messages, setMessages] = useState<any>([]);
  // const userNo = localStorage.getItem('userNo');

  // console.log('--- 02. 변수 설정 확인 ---');
  // console.log('chatRoomNo: ', chatRoomNo);
  // console.log('senderNo: ', senderNo);
  // console.log('messageInput: ', messageInput);
  // console.log('userNo: ', userNo);

  // const messageRequest = useRef({
  //   chatRoomNo: chatRoomNo,
  //   senderNo: senderNo,
  //   receiverNo: userNo,
  //   content: messageInput
  // });

  // console.log('--- 03. messageRequest 설정 확인: ---', messageRequest.current);

  // // let client;
  // const client = useRef<WebSocket>();

  // useEffect(() => {
  //   const _client = new WebSocket('http://localhost:5000/api/ws');
  //   client.current = _client;
  // 참고 자료
  // client = new Client({
  //   brokerURL: 'ws://localhost:5000/api/ws',
  //   onConnect: () => {
  //     client.subscribe(`/sub/chat/room/${chatRoomNo}`, (message) =>
  //       console.log(`Received: ${message.body}`)
  //     );
  //     client.publish({
  //       destination: `/pub/chat/room/${chatRoomNo}`,
  //       body: JSON.stringify(messageRequest.current)
  //     });
  //   }
  // });

  //   console.log('--- 04. client 생성 확인: ---', client);

  //   client.current.activate();
  // });

  // const sendMessage = () => {
  //   console.log('--- 05-1. sendMessage 메소드 진입 ---');

  //   messageRequest.current = {
  //     chatRoomNo: chatRoomNo,
  //     senderNo: senderNo,
  //     receiverNo: userNo,
  //     content: messageInput
  //   };

  //   console.log('--- 05-2. 변경된 messageRequest: ---', messageRequest.current);

  //   const headers = { ack: 'client' };

  //   const client = new Client({
  //     brokerURL: 'ws://localhost:5000/api/ws',
  //     onConnect: () => {
  //       client.subscribe(
  //         `/sub/chat/room/${chatRoomNo}`,
  //         (message) => console.log(`Received: ${message.body}`),
  //         headers
  //       );
  //       client.publish({
  //         destination: `/pub/chat/room/${chatRoomNo}`,
  //         body: JSON.stringify(messageRequest.current)
  //       });
  //     }
  //   });

  //   console.log('--- 05-3. client 생성 확인: ---', client);

  //   client.activate();

  //   setMessageInput('');
  // };

  // 230927 https://stomp-js.github.io/guide/stompjs/using-stompjs-v5.html
  /*
  const client = Stomp.client('ws://localhost:5000/api/ws');
  
  client.onConnect = (frame) => {
    // Do something, all subscribes must be done is this callback
    // This is needed because this will be executed after a (re)connect
    console.log('Connected: ' + frame);
  };
  
  client.onStompError = (frame) => {
    // Will be invoked in case of error encountered at Broker
    // Bad login/passcode typically will cause an error
    // Complaint brokers will set `message` header with a brief message. Body may contain details.
    // Compliant brokers will terminate the connection after any error
    console.log('Broker reported error: ' + frame.headers['message']);
    console.log('Additional details: ' + frame.body);
  };
  
  client.activate();

  const messageRequest = useRef({
    chatRoomNo: chatRoomNo,
    senderNo: senderNo,
    receiverNo: userNo,
    content: messageInput
  });
  
  const published = client.publish({
    // "/chat/room/{roomId}" 이 URL 구조에 따라 메시지를 보냅니다.
    destination: `/pub/chat/room/${chatRoomNo}`,
    body: JSON.stringify(messageRequest.current)
  });
  
  const headers = { ack: 'client' };
  client.subscribe(
    `/sub/chat/room/${chatRoomNo}`,
    (message) => {
      const quote = JSON.parse(message.body);
      alert(quote.symbol + ' is at ' + quote.value);
    },
    headers
    );
    
    const sendMessage = () => {
      messageRequest.current = {
        chatRoomNo: chatRoomNo,
        senderNo: senderNo,
        receiverNo: userNo,
        content: messageInput
      };
      
      published;
      
      setMessageInput('');
    };
    */

  // ---------------------------------------------------------------

  // 그 외
  // let socket = new WebSocket('ws://localhost:5000/api/ws');
  // let stompClient = Stomp.over(socket);

  // useEffect(() => {
  //   stompClient.connect({}, function (frame) {
  //     console.log('Connected: ' + frame);
  //     stompClient.subscribe('/sub/chat/room/1', function (messageOutput) {
  //       showMessageOutput(JSON.parse(messageOutput.body));
  //     });
  //   });

  //   return () => {
  //     if (stompClient) {
  //       stompClient.disconnect(() => {});
  //     }
  //   };
  // }, []);

  // const showMessageOutput = (messageOutput) => {
  //   setMessages((prevMessages) => [...prevMessages, messageOutput.content]);
  // };

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
