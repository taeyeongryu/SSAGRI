import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import {
  LoginPage,
  SignInAndUpComponent
} from '../components/loginPage.styles';
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from '../states/account/loginAtom';
import axios from 'axios';
import { Avatar } from 'antd';

const loginPage = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate('/');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  // 로그인 버튼 눌렀을 때
  const onLoginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 버튼 누르면 새로고침 되는것을 막아줌
    event.preventDefault();

    console.log('로그인 정보');
    console.log('이메일: ', email);
    console.log('비밀번호: ', password);
    // onLogin(email, password)
  };

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

  // 회원가입
  const regionList = ['대전', '서울', '구미', '광주', '부울경'];
  const cardinalList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    region: regionList[0],
    cardinalNumber: cardinalList[0],
    nickname: ''
  });

  // 회원가입 요청 api
  const onSignUp = () => {
    try {
      const response = axios.post('url', signUpForm);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // 회원가입 버튼 눌렀을때
  const onSignUpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 회원가입 데이터 정보 확인
    console.log('회원가입 정보');
    console.log('프로필 사진: ', file);
    console.log(signUpForm);
  };

  const [image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);

  const onChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      // 업로드 취소할 시
      setImage(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      );
      return;
    }
    // 화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <LoginPage>
      <Navbar></Navbar>
      {/* <p>{isLoggedIn ? '로그인되었습니다.' : '로그인이 필요합니다.'}</p> */}
      <div onClick={goMain}>메인으로</div>

      <SignInAndUpComponent></SignInAndUpComponent>
      <div className='overlay-container'>
        <div className='overlay'>
          <div className='overlay-panel overlay-left'>
            <h1>회원이신가요?</h1>
            <p>계정이 이미 있으시다면</p>
            <button className='ghost' id='signIn'>
              로그인
            </button>
          </div>
          <div className='overlay-panel overlay-right'>
            <h1>안녕하세요!</h1>
            <p>처음이시라면 회원가입 후 필요한 물건을 구해보세요</p>
            <button className='ghost' id='signUp'>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </LoginPage>
  );
};

export default loginPage;
