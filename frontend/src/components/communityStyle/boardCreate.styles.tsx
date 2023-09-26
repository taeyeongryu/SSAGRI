import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

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
const InputTag2 = styled.input`
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

const BoardCreateMain = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [accept, setAcceopt] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const onInput1 = (e) => {
    setTitle(e.target.value);
  };

  const onInput2 = (e) => {
    setContent(e.target.value);
  };
  const onInput3 = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount % 2 === 0) {
      setAcceopt(true);
    } else {
      setAcceopt(false);
    }
  };

  const CreateBoard = () => {
    const BoardApi = axios.create({
      headers: { 'cotent-type': 'application/json' }
    });
    const data = {
      allowComment: accept, // 댓글 허용여부 true ,false
      boardNo: 1, // 게시판 번호
      contents: content, // 내용
      title: title, // 제목
      userNo: 1 // 로그인유저
    };

    //게시판 순위 정보
    BoardApi.post('/board/write', data)
      .then((res) => {
        console.log(res.data, '1번요청성공');
      })
      .catch((err) => {
        console.log('실패1', err);
        console.log('실패1', data);
      });
    navigate('/community');
  };

  return (
    <Div style={{ width: '100vh', margin: '100px auto' }}>
      <TopTag>게시글 신규 등록</TopTag>
      <Tagexplain>게시글을 만들어 보세요.</Tagexplain>
      <TopFlexDiv>
        <Div>
          <TagTitle>게시글 제목</TagTitle>
          <InputTag1 onChange={onInput1}></InputTag1>
        </Div>
      </TopFlexDiv>
      <MidDiv>
        <TagTitle>게시글 내용</TagTitle>
        <InputTag3 onChange={onInput2}></InputTag3>
        <TagTitle>댓글 허용 여부</TagTitle>
        <InputTag2 type='checkbox' onChange={onInput3}></InputTag2>
      </MidDiv>

      <BottomFlexDiv>
        <CreateBtn onClick={CreateBoard}>게시글 생성하기</CreateBtn>
        <CancelBtn onClick={() => navigate('/community/1')}>뒤로가기</CancelBtn>
      </BottomFlexDiv>
    </Div>
  );
};

export { BoardCreateMain };
