import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Div = styled.div``;
const TopTag = styled.div`
  font-size: 30px;
  font-weight: 580;
  margin: 50px 0 0 100px;
`;
const Tagexplain = styled.div`
  font-size: 20px;
  /* font-weight: 580; */
  margin: 20px 0 50px 130px;
`;
const FlexDiv = styled.div`
  display: flex;
`;
const TopFlexDiv = styled(FlexDiv)`
  margin-left: 130px;
`;
const BottomFlexDiv = styled(FlexDiv)`
  margin-top: 100px;
  margin-left: 130px;
  justify-content: center;
`;
const TagTitle = styled.div`
  font-size: 20px;
  font-weight: 580;
  margin-top: 50px;
`;

const InputTag = styled.input`
  border-radius: 5px;
  /* background-color: #555453; */
  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 2px 2px rgb(0, 0, 0, 0.3);
`;
const InputTag1 = styled(InputTag)`
  width: 500px;
  height: 45px;
  margin-top: 20px;
  margin-left: 3px;
`;
const InputTag2 = styled(InputTag)`
  width: 100px;
  height: 45px;
  margin-top: 20px;
  margin-left: 3px;
`;
const InputTag3 = styled(InputTag)`
  width: 900px;
  height: 200px;
  margin-top: 20px;
  margin-left: 3px;
`;

const CreateBtn = styled.div`
  margin-right: 50px;
  width: 250px;
  height: 50px;
  background-color: #396cfa;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  color: white;
`;

const CancelBtn = styled.div`
  width: 250px;
  height: 50px;
  background-color: #737475;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  color: white;
`;

const MidDiv = styled.div`
  margin-left: 130px;
`;

const CommuCreate = () => {
  const navigate = useNavigate();
  const CreateCommu = () => {
    alert('CreateCommu');
    navigate('/community');
  };

  return (
    <Div style={{ width: '100vh', margin: '0 auto' }}>
      <TopTag>게시판 신규 등록</TopTag>
      <Tagexplain>게시판 설정 정보를 관리 할 수 있습니다.</Tagexplain>
      <TopFlexDiv>
        <Div>
          <TagTitle>게시판 제목</TagTitle>
          <InputTag1></InputTag1>
        </Div>
        <Div>
          <TagTitle>게시판 색상</TagTitle>
          <InputTag2></InputTag2>
        </Div>
      </TopFlexDiv>
      <MidDiv>
        <TagTitle>게시판 설명</TagTitle>
        <InputTag3></InputTag3>
        <TagTitle>익명 여부</TagTitle>
        <InputTag2></InputTag2>
        <TagTitle>예상 게시판 이미지 미리보기</TagTitle>
        <InputTag2></InputTag2>
      </MidDiv>

      <BottomFlexDiv>
        <CreateBtn onClick={CreateCommu}>게시판 생성하기</CreateBtn>
        <CancelBtn onClick={() => navigate('/community')}>뒤로가기</CancelBtn>
      </BottomFlexDiv>
    </Div>
  );
};

export { CommuCreate };
