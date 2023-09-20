import { styled } from 'styled-components';

const Headers = styled.div`
  width: 100%;
  height: 300px;
  background-color: whitesmoke;
`;

const AuctionTitle = styled.div`
  width: 100px;
  height: 100px;
  z-index: 20;
  display: flex;
  justify-content: center;
  color: black;
  border: 2px solid black;
`;
const CommuTitle = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  z-index: 3;
  color: black;
`;

const AuctionHeader = () => {
  return (
    <Headers>
      <AuctionTitle>asd</AuctionTitle>
    </Headers>
  );
};
const CommuHeader = () => {
  return (
    <Headers>
      <CommuTitle>경매</CommuTitle>
    </Headers>
  );
};

export { AuctionHeader, CommuHeader };
