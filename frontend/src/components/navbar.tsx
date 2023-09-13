import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const NavbarDiv = styled.div`
  width: 100vw;
  height: 7vh;
  /* border-top: 2px solid black; */
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
`;

const MenuDiv = styled.div`
  width: 50vw;
  height: 7vh;
  /* border: 2px solid red; */
  display: flex;
  /* line-height: 4vh; */
  align-items: center;
`;

const MenuName = styled.p`
  font-size: 1.5vw;
  margin-right: 3vw;
  color: black;
  &:hover {
    color: blue;
    font-weight: 600;
  }
`;

const MenuBar = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login');
  };
  const goMain = () => {
    navigate('/');
  };
  const goTrade = () => {
    navigate('/tradeMain');
  };
  const goAuction = () => {
    navigate('/auction');
  };
  const goCommu = () => {
    navigate('/community');
  };
  return (
    <MenuDiv>
      <MenuName onClick={goLogin}>로그인</MenuName>
      <MenuName onClick={goMain}>메인</MenuName>
      <MenuName onClick={goTrade}>중고거래 </MenuName>
      <MenuName onClick={goAuction}>경매 </MenuName>
      <MenuName onClick={goCommu}>커뮤니티 </MenuName>
    </MenuDiv>
  );
};

const SideDiv = styled.div`
  width: 20vw;
  height: 7vh;
  /* border: 2px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideName = styled.p`
  font-size: 1.1vw;
  margin-right: 2vw;
`;

const SideBar = () => {
  return (
    <SideDiv>
      <SideName>마이페이지</SideName>
      <SideName>햄버그바</SideName>
    </SideDiv>
  );
};

const Navbar = () => {
  return (
    <NavbarDiv>
      <img src='/assets/img/logo.PNG' alt='' />
      <MenuBar></MenuBar>
      <SideBar></SideBar>
    </NavbarDiv>
  );
};
const Navbar2 = () => {
  return (
    <NavbarDiv>
      <img src='/assets/img/logo.PNG' alt='' />
      <SideBar></SideBar>
    </NavbarDiv>
  );
};

export default Navbar;
