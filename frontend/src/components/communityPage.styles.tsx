import { styled } from 'styled-components';

const CommunityDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* border: 2px solid red; */
  justify-content: space-around;
  background-color: #f4f7f9;
`;

const LeftDiv = styled.div`
  margin-top: 13vh;
  width: 65vw;
  height: 80vh;
  border: 2px solid black;
`;
const RightDiv = styled.div`
  margin-top: 20vh;

  width: 20vw;
  height: 60vh;
  border: 2px solid black;
`;

const CommunityMain = () => {
  return (
    <CommunityDiv>
      <LeftDiv></LeftDiv>
      <RightDiv></RightDiv>
    </CommunityDiv>
  );
};

export default CommunityMain;
