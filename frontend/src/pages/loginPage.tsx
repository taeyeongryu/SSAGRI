import './loginPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import LoginPage from '../components/loginPage.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedInAtom } from '../states/account/loginAtom';
import axios from 'axios';

const loginPage = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate('/');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onLoginHandler = (event) => {
    // 버튼 누르면 새로고침 되는것을 막아줌
    event.preventDefault();

    console.log('로그인 정보');
    console.log('이메일: ', email);
    console.log('비밀번호: ', password);
    // onLogin(email, password)
  };

  // 로그인 여부
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  // 로그인 로직
  const onLogin = (email, password) => {
    const data = {
      email,
      password
    };
    axios
      .post('/login', data)
      .then((response) => {
        const { accessToken } = response.data;

        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;

        // accessToken을 localStorage, cookie 등에 저장하지 않는다!
      })
      .catch((error) => {
        // ... 에러 처리
      });
  };

  // 회원가입
  const regionList = ['대전', '서울', '구미', '광주', '부울경'];
  const cardinalList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [region, setRegion] = useState(regionList[0]);
  const [cardinalNumber, setCardinalNumber] = useState(cardinalList[0]);
  const [nickname, setNickname] = useState('');

  const onSignUpEmailHandler = (e) => {
    setSignUpEmail(e.target.value);
  };
  const onSignUpPasswordHandler = (e) => {
    setSignUpPassword(e.target.value);
  };
  const onPasswordConfirmHandler = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const onNicknameHandler = (e) => {
    setNickname(e.target.value);
  };

  const onCardinalHandler = (e) => {
    setCardinalNumber(e.target.value);
  };

  const onRegionHandler = (e) => {
    setRegion(e.target.value);
  };

  const onSignUpHandler = (e) => {
    e.preventDefault();

    console.log('회원가입 정보');
    console.log('이메일: ', signUpEmail);
    console.log('비밀번호: ', signUpPassword);
    console.log('비밀번호 확인: ', passwordConfirm);
    console.log('지역: ', region);
    console.log('기수: ', cardinalNumber);
    console.log('닉네임: ', nickname);
  };

  return (
    <LoginPage>
      <Navbar></Navbar>
      <p>{isLoggedIn ? '로그인되었습니다.' : '로그인이 필요합니다.'}</p>
      <div onClick={goMain}>메인으로</div>

      <div className='container' id='container'>
        <div className='form-container sign-in-container'>
          <form onSubmit={onLoginHandler}>
            <h1>로그인</h1>
            <label htmlFor='email'>이메일</label>
            <br />
            <input type='email' onChange={onEmailHandler} />
            <br />
            <label htmlFor='password'>비밀번호</label>
            <br />
            <input type='password' onChange={onPasswordHandler} />
            <br />
            <a href='#'>비밀번호를 잊으셨나요?</a>
            <br />
            <button>로그인</button>
          </form>
        </div>
        <div className='form-container sign-up-container'>
          <form onSubmit={onSignUpHandler}>
            <h1>회원가입</h1>
            <label htmlFor='email'>이메일</label>
            <br />
            <input type='email' onChange={onSignUpEmailHandler} />
            <br />

            <label htmlFor='password'>비밀번호</label>
            <br />
            <input type='password' onChange={onSignUpPasswordHandler} />
            <br />

            <label htmlFor='passwordConfirm'>비밀번호 확인</label>
            <br />
            <input type='password' onChange={onPasswordConfirmHandler} />
            <br />

            <label htmlFor='region'>지역</label>
            <select name='region' onChange={onRegionHandler} value={region}>
              {regionList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>

            <label htmlFor='cardinal-number'>기수</label>
            <select
              name='cardinal-number'
              onChange={onCardinalHandler}
              value={cardinalNumber}
            >
              {cardinalList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>

            <label htmlFor='nickname'>닉네임</label>
            <input type='text' onChange={onNicknameHandler} />
            <br />
            <button>회원 가입</button>
          </form>
        </div>
      </div>
    </LoginPage>
  );
};

export default loginPage;
