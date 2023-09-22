import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import axios from 'axios';

// axios 설정
// axios.defaults.baseURL = 'http://localhost:5173';
axios.defaults.baseURL = 'https://j9b209.p.ssafy.io/api';
axios.defaults.withCredentials = true; // refreshToken cookie를 주고받기 위함

// 라우터 - 주소경로 생성
import { BrowserRouter } from 'react-router-dom';
// 리코일 - 상태정보, 비동기함수 관리
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
