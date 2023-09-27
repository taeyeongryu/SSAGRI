import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const DoChatDIV = styled.div`
  width: 1920px;
  height: 900px;
  margin: 50px auto 0;
  /* border: 2px solid black; */
  display: flex;
`;

const DoChat = () => {
  (window as any).global = window;

  const [chatRoomNo, setChatRoomNo] = useState('');
  const [senderNo, setSenderNo] = useState('');
  const [receiverNo, setReceiverNo] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<any>([]);

  let socket;
  let stompClient;

  useEffect(() => {
    socket = new SockJS('http://localhost:5000/api/ws', {});
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      stompClient.subscribe('/sub/chat/room/1', function (messageOutput) {
        showMessageOutput(JSON.parse(messageOutput.body));
      });
    });

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, []);

  const sendMessage = () => {
    let messageRequest = {
      chatRoomNo: chatRoomNo,
      senderNo: senderNo,
      receiverNo: receiverNo,
      content: messageInput
    };

    // "/chat/room/{roomId}" 이 URL 구조에 따라 메시지를 보냅니다.
    stompClient.send('/pub/chat/room/1', {}, JSON.stringify(messageRequest));

    setMessageInput('');
  };

  const showMessageOutput = (messageOutput) => {
    setMessages((prevMessages) => [...prevMessages, messageOutput.content]);
  };

  return (
    <DoChatDIV>
      <div id='chat'>
        <div id='messages'>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>

        <input
          type='number'
          value={chatRoomNo}
          onChange={(e) => setChatRoomNo(e.target.value)}
          placeholder='Chat Room No'
        />

        <input
          type='number'
          value={senderNo}
          onChange={(e) => setSenderNo(e.target.value)}
          placeholder='Sender No'
        />

        <input
          type='number'
          value={receiverNo}
          onChange={(e) => setReceiverNo(e.target.value)}
          placeholder='Receiver No'
        />

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
