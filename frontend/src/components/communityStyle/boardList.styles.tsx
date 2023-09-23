import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DetailDiv = styled.div`
  width: 100%;
  height: 1000px;

  /* border: 3px solid black; */
`;

const TopTitle = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f2ead3;
`;

const TopTag = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 2px solid black;
`;
const LineDiv = styled.div``;

const FlexDiv = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
`;

const LeftDiv = styled.div`
  width: 100px;
  margin-left: 300px;
`;
const RightDiv = styled.div`
  width: 100px;
  margin: 50px 0 0 600px;
`;
const CreateDiv = styled.div`
  width: 600px;
  height: 80px;
  background-color: #f2ead3;
  margin: 50px 0 50px 0;
  border-radius: 7px;
  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.4);
  text-align: center;
  line-height: 70px;
  font-size: 20px;
  font-weight: 600;
`;

const CommuDiv = styled.div`
  width: 600px;
  border: 2px solid rgb(0, 0, 0, 0.4);
  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.4);
  margin-bottom: 40px;
  border-radius: 5px;
`;
const CommuBody1 = styled(CommuDiv)`
  height: 350px;
`;
const CommuBody2 = styled(CommuDiv)`
  height: 600px;
`;
const CommuBody3 = styled(CommuDiv)`
  height: 300px;
  margin-top: 50px;
`;
const CommuBody4 = styled(CommuDiv)`
  height: 400px;
`;
const CommuBody5 = styled(CommuDiv)`
  height: 300px;
`;

// 페이징
const PagingSpace = styled.div`
  width: 50%;
  height: 50px;
  margin-top: 50px;
  margin-left: 490px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PagingButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 0 2px;
  border: 1px solid #4786fa;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    /* border: 2px solid #4786fa;
    background-color: #4786fa;
    color: #fff; */
    box-shadow: 1px 1px 2px 2px #757575;
  }
`;
const PagingButtonText = styled.div`
  height: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const Alarm = styled.div`
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 30px;
  border: 2px solid #4786fa;
  margin: 50px 0 0 100px;
  font-size: 20px;
`;
const BoardMain = () => {
  const navigate = useNavigate();
  const GoBoard = () => {
    navigate('/community/1/Detail');
  };
  return (
    <DetailDiv>
      <TopTitle>질문게시판</TopTitle>
      <TopTag>
        <Alarm>알림받기</Alarm>
      </TopTag>
      <LineDiv></LineDiv>
      <FlexDiv>
        <LeftDiv>
          <CreateDiv onClick={() => navigate('/community/1/Create')}>
            글 생성
          </CreateDiv>
          <CommuBody1 onClick={GoBoard}>닉네임</CommuBody1>
          <CommuBody2 onClick={GoBoard}></CommuBody2>
        </LeftDiv>
        <RightDiv>
          <CommuBody3></CommuBody3>
          <CommuBody4></CommuBody4>
          <CommuBody5></CommuBody5>
        </RightDiv>
      </FlexDiv>

      <PagingSpace>
        <PagingButton>
          <PagingButtonText>&lt;&lt;</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>&lt;</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>1</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>2</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>3</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>4</PagingButtonText>
        </PagingButton>

        <PagingButton>
          <PagingButtonText>&gt;</PagingButtonText>
        </PagingButton>
        <PagingButton>
          <PagingButtonText>&gt;&gt;</PagingButtonText>
        </PagingButton>
      </PagingSpace>
    </DetailDiv>
  );
};

export { BoardMain };
