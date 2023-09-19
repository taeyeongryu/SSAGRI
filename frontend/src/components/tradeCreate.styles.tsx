import { styled } from 'styled-components';

const CreateAndUpdateFrame = styled.div`
  width: 1920px;
  height: 1080px;
  margin-top: 7vh;
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateAndUpdateDiv = styled.div`
  width: 1400px;
  height: 980px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
`;

const CreateAndUpdateDivHeader = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CreateAndUpdateDivHeaderItem = styled.div`
  /* width: 100%;
  height: 50px; */
  border: 1px solid red;
  /* margin-left: 20px; */
  line-height: 40px;
  font-size: 32px;
  font-weight: bold;
  border-bottom: 2px solid black;
`;

const CreateAndUpdateButton = styled.button`
  width: 140px;
  height: 40px;
  margin-right: 2px;
  border: 0;
  border-radius: 5px;
  background-color: #4786fa;
  box-shadow: 2px 2px 2px 1px #757575;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    border: 2px solid #4786fa;
    background-color: #fff;
    color: #4786fa;
  }
  &:active {
    border: 2px solid tomato;
    color: tomato;
    box-shadow: 0px 0px 0px 0px #fff;
  }
`;

const CreateAndUpdateDivItem = styled.div`
  width: 100%;
  height: 900px; /*60px 남음*/
  margin-top: 20px;
  /* border: 3px solid cyan; */
  display: flex;
  flex-direction: column;
`;

const CreateAndUpdateDivItemUp = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
`;

const CreateAndUpdateDivItemUpLeft = styled.div`
  width: 50%;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LeftItemName = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid blue;
`;

const LeftItemCategory = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid blue;
`;

const LeftItemPrice = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid blue;
`;

const CreateAndUpdateDivItemUpRight = styled.div`
  width: 50%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightItemImage = styled.div`
  width: 100%;
  height: 130px;
  border: 1px solid blue;
`;

const CreateAndUpdateDivItemDown = styled.div`
  width: 100%;
  height: 770px;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TradeCreate = () => {
  return (
    <CreateAndUpdateFrame>
      <CreateAndUpdateDiv>
        <CreateAndUpdateDivHeader>
          <CreateAndUpdateDivHeaderItem>상품등록</CreateAndUpdateDivHeaderItem>
          <CreateAndUpdateButton>등록</CreateAndUpdateButton>
        </CreateAndUpdateDivHeader>
        <CreateAndUpdateDivItem>
          <CreateAndUpdateDivItemUp>
            <CreateAndUpdateDivItemUpLeft>
              <LeftItemName type='text' placeholder='상품명'></LeftItemName>
              <LeftItemCategory>
                <option value=''>선택</option>
                <option value=''>키보드</option>
                <option value=''>마우스</option>
                <option value=''>모니터</option>
                <option value=''>생활용품</option>
                <option value=''>기타용품</option>
              </LeftItemCategory>
              <LeftItemPrice
                type='number'
                placeholder='판매가격'
              ></LeftItemPrice>
            </CreateAndUpdateDivItemUpLeft>
            <CreateAndUpdateDivItemUpRight>
              <RightItemImage>이미지 업로드</RightItemImage>
            </CreateAndUpdateDivItemUpRight>
          </CreateAndUpdateDivItemUp>
          <CreateAndUpdateDivItemDown>에디터 삽입</CreateAndUpdateDivItemDown>
        </CreateAndUpdateDivItem>
      </CreateAndUpdateDiv>
    </CreateAndUpdateFrame>
  );
};

const TradeUpdate = () => {
  return (
    <CreateAndUpdateFrame>
      <CreateAndUpdateDiv>
        <CreateAndUpdateDivHeader>
          <CreateAndUpdateDivHeaderItem>상품수정</CreateAndUpdateDivHeaderItem>
          <CreateAndUpdateButton>수정</CreateAndUpdateButton>
        </CreateAndUpdateDivHeader>
        <CreateAndUpdateDivItem>
          <CreateAndUpdateDivItemUp>
            <CreateAndUpdateDivItemUpLeft>
              <LeftItemName type='text' placeholder='상품명'></LeftItemName>
              <LeftItemCategory>
                <option value=''>선택</option>
                <option value=''>키보드</option>
                <option value=''>마우스</option>
                <option value=''>모니터</option>
                <option value=''>생활용품</option>
                <option value=''>기타용품</option>
              </LeftItemCategory>
              <LeftItemPrice
                type='number'
                placeholder='판매가격'
              ></LeftItemPrice>
            </CreateAndUpdateDivItemUpLeft>
            <CreateAndUpdateDivItemUpRight>
              <RightItemImage>이미지 업로드</RightItemImage>
            </CreateAndUpdateDivItemUpRight>
          </CreateAndUpdateDivItemUp>
          <CreateAndUpdateDivItemDown>에디터 삽입</CreateAndUpdateDivItemDown>
        </CreateAndUpdateDivItem>
      </CreateAndUpdateDiv>
    </CreateAndUpdateFrame>
  );
};

export { TradeCreate, TradeUpdate };
