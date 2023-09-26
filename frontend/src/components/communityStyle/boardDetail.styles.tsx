import { styled } from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

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

const BoardDetailMain = () => {
  const [urlparam, setUrlparam] = useState(0);
  const [boardList, setBoardList] = useState([]);
  console.log(urlparam, boardList);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    for (const param of searchParams) {
      const paramName = param[0];
      console.log(paramName);
      const paramValue = parseInt(param[1], 10);
      setUrlparam(paramValue);
    }
    const BoardListApi = axios.create({
      headers: { 'cotent-type': 'application/json' }
    });
    //유저 id정보 요청
    BoardListApi.get('/board/all-write-list')
      .then((res) => {
        setBoardList(res.data);
      })
      .catch((err) => {
        console.log('실패1', err);
      });
  }, []);
  return (
    <DetailDiv>
      <TopTitle>질문게시판</TopTitle>
      디테일 페이지
    </DetailDiv>
  );
};

export { BoardDetailMain };
