import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SocialKakaoPage = () => {
  const navigate = useNavigate();

  let code = new URL(window.location.href);

  const userKakaoData = {
    nickname: '',
    profileURL: '',
    email: ''
  };

  const authCode = code.searchParams.get('code');
  // console.log('kakao 서버로부터 발급받은 인가코드: ', authCode);

  // 유저의 카카오 이메일 아이디가
  // 서비스 아이디에 등록이 되어있다면 로그인
  // 안되어있다면 회원가입으로 리다이렉팅 시켜야함.
  const onKakaoLogin = (userData) => {
    axios
      .get(`/oauth/kakao-login`, {
        params: {
          email: userData.email
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.message === '해당 계정이 존재하지 않습니다.') {
          alert('회원가입이 필요한 계정입니다.');
          // 닉네임과 프로필사진 url, 이메일 정보(카카오 서버에서 받은)를 가지고 회원가입 페이지로 이동
          navigate('/login', {
            state: {
              isKakao: true,
              userData: userData
            }
          });
        }
      });
  };

  const getLoginData = () => {
    axios
      .get(`/oauth`, {
        params: {
          code: authCode
        }
      })
      .then((res) => {
        // 카카오 서버에서 가져온 닉네임, 프로필사진 url, 이메일 정보 저장
        userKakaoData.nickname = res.data[0];
        userKakaoData.profileURL = res.data[1];
        userKakaoData.email = res.data[2];

        onKakaoLogin(userKakaoData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLoginData();
  }, []);

  return (
    <div style={{ marginTop: '200px' }}>
      <div className='notice'>
        <p>로그인 중 입니다</p>
        <p>잠시만 기다려주세요</p>
      </div>
    </div>
  );
};

export default SocialKakaoPage;
