import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginPage,
  SignInAndUpComponent
} from '../components/loginPage.styles';
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from '../states/account/loginAtom';
import axios from 'axios';

const loginPage = () => {
  // 로그인 여부
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간)

  // 로그인 요청 api
  // const onLogin = (email: any, password: any) => {
  //   const data = {
  //     email,
  //     password
  //   };
  //   axios
  //     .post('/login', data)
  //     .then((response) => {
  //       const { accessToken } = response.data;

  //       // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
  //       axios.defaults.headers.common[
  //         'Authorization'
  //       ] = `Bearer ${accessToken}`;

  //       // accessToken을 localStorage, cookie 등에 저장하지 않는다!
  //     })
  //     .catch((error) => {
  //       // ... 에러 처리
  //     });
  // };

  const onSilentRefresh = () => {
    axios
      .post('/silent-refresh')
      .then(onLoginSuccess)
      .catch((error) => {
        console.log(error);
        // 로그인 실패처리
      });
  };

  // 로그인 성공 시
  const onLoginSuccess = (response: { data: { accessToken: any } }) => {
    const { accessToken } = response.data;

    // accessToken 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    // accessToken 만료하기 1분 전에 로그인 연장
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
  };

  return (
    <LoginPage>
      <SignInAndUpComponent></SignInAndUpComponent>
    </LoginPage>
  );
};

export default loginPage;
