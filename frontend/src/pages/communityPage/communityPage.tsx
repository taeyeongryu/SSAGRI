// @ts-ignore
import Navbar from '../../components/navbar';
// @ts-ignore
import { LoginPage } from '../../components/loginPage.styles';
import CommunityMain from '../../components/communityStyle/communityPage.styles';
import { CommuHeader } from '../../components/header';

// 로그인 상태에서만 접근 가능하도록

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from '../../states/account/loginAtom';

const communityPage = () => {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      alert('로그인이 필요한 페이지입니다.');
      navigate('/login', { state: pathname });
    }
  }, [isLoggedIn]);

  return (
    <div>
      <CommuHeader></CommuHeader>
      <CommunityMain></CommunityMain>
    </div>
  );
};

export default communityPage;
