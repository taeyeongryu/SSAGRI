import { styled, keyframes } from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { Avatar } from 'antd';

const show = keyframes`
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
`;

const LoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  /* border: 2px solid red; */
`;

const H1 = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

const A = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const Button = styled.div`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &.ghost {
    background-color: transparent;
    border-color: #ffffff;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const Select = styled.select``;

const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

const FileInput = styled.input`
  display: none;
`;

const CustomFileInput = styled(FileInput)`
  /* 여기에 원하는 스타일 추가*/
`;

// Container
const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  top: 200px;
  max-width: 100%;
  min-height: 480px;
`;

// input form
const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  &.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;

    &.right-panel-active {
      transform: translateX(100%);
    }
  }

  &.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;

    &.right-panel-active {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: ${show} 0.6s;
    }
  }
`;

// overlay Container
const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;

  &.right-panel-active {
    transform: translateX(-100%);
  }
`;

const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  &.right-panel-active {
    transform: translateX(50%);
  }
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding: 0 40px; */
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  &.overlay-left {
    transform: translateX(-20%);
  }

  &.overlay-right {
    right: 0;
    transform: translateX(0);
  }
`;

const SignInAndUpComponent = () => {
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

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    const OverlayContainer = document.getElementById('overlay-container');
    const Overlay = document.getElementById('overlay');
    const signInContainer = document.getElementById('sign-in-container');
    const signUpContainer = document.getElementById('sign-up-container');

    const signUpClickHandler = () => {
      signInContainer.classList.add('right-panel-active');
      signUpContainer.classList.add('right-panel-active');
      OverlayContainer.classList.add('right-panel-active');
      Overlay.classList.add('right-panel-active');
    };

    const signInClickHandler = () => {
      signInContainer.classList.remove('right-panel-active');
      signUpContainer.classList.remove('right-panel-active');
      OverlayContainer.classList.remove('right-panel-active');
      Overlay.classList.remove('right-panel-active');
    };

    signUpButton.addEventListener('click', signUpClickHandler);
    signInButton.addEventListener('click', signInClickHandler);

    return () => {
      signUpButton.removeEventListener('click', signUpClickHandler);
      signInButton.removeEventListener('click', signInClickHandler);
    };
  }, []);

  return (
    <Container id='container' style={{ margin: 'auto' }}>
      <FormContainer className='sign-in-container' id='sign-in-container'>
        <Form>
          <H1>로그인</H1>
          <Label htmlFor='email'>이메일</Label>
          <Input type='email'></Input>
          <Label htmlFor='password'>비밀번호</Label>
          <Input type='password'></Input>
          <A>비밀번호를 잊으셨나요?</A>
          <Button>로그인</Button>
        </Form>
      </FormContainer>
      <FormContainer className='sign-up-container' id='sign-up-container'>
        <Form>
          <H1>회원가입</H1>
          <Avatar
            src={image}
            style={{ margin: '20px' }}
            size={200}
            onClick={() => {
              fileInput.current.click();
            }}
          ></Avatar>
          <FileInput
            type='file'
            accept='image/jpg, image/png, image/jpeg'
            name='profile_img'
            onChange={onChange}
            ref={fileInput}
          ></FileInput>
          <Label htmlFor='email'>이메일</Label>
          <Input
            type='email'
            value={signUpForm.email}
            onChange={(e) =>
              setSignUpForm({ ...signUpForm, email: e.target.value })
            }
          ></Input>
          <Label htmlFor='password'>비밀번호</Label>
          <Input
            type='password'
            value={signUpForm.password}
            onChange={(e) =>
              setSignUpForm({ ...signUpForm, password: e.target.value })
            }
          ></Input>
          <Label htmlFor='passwordConfirm'>비밀번호 확인</Label>
          <Input
            type='password'
            value={signUpForm.passwordConfirm}
            onChange={(e) =>
              setSignUpForm({ ...signUpForm, password: e.target.value })
            }
          ></Input>
          <Label htmlFor='region'>지역</Label>
          <Select
            name='region'
            value={signUpForm.region}
            onChange={(e) =>
              setSignUpForm({ ...signUpForm, region: e.target.value })
            }
          >
            {regionList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </Select>
          <Label htmlFor='cardinal-number'>기수</Label>
          <Select
            name='cardinal-number'
            value={signUpForm.cardinalNumber}
            onChange={(e) =>
              setSignUpForm({ ...signUpForm, cardinalNumber: e.target.value })
            }
          >
            {cardinalList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </Select>
          <Label htmlFor='nickname'>닉네임</Label>
          <Input
            type='text'
            value={signUpForm.nickname}
            onChange={(e) =>
              setSignUpForm({ ...signUpForm, nickname: e.target.value })
            }
          ></Input>
          <Button>회원 가입</Button>
        </Form>
      </FormContainer>
      <OverlayContainer id='overlay-container'>
        <Overlay id='overlay'>
          <OverlayPanel className='overlay-left'>
            <H1>회원이신가요?</H1>
            <P>계정이 이미 있으시다면</P>
            <Button id='signIn'>로그인</Button>
          </OverlayPanel>
          <OverlayPanel className='overlay-right'>
            <H1>안녕하세요!</H1>
            <P>처음이시라면 회원가입 후 필요한 물건을 구해보세요</P>
            <Button id='signUp'>회원가입</Button>
          </OverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
};

export { LoginPage, SignInAndUpComponent };
