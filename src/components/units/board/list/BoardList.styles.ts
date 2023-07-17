import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  margin: 0px 100px;
  width: 1200px;
`;

// ///////////////////////////////

export const WrapperBody = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 50px;
`;
export const DivideLine = styled.div`
  border-top: 1px solid black;
  width: 1200px;
`;

export const DivideLine2 = styled.div`
  border-bottom: 1px solid black;
  width: 1200px;
  margin-bottom: 20px;
  margin-top: 3px;
`;

export const TitleWrapper1 = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 18px;
  margin: 4px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 18px;
  margin: 4px;
  :hover {
    color: #ffd600;
  }
`;

export const BodyNumber = styled.div`
  width: 10%;
  height: 50px;
  margin-top: 10px;
  font-weight: 500;
`;

export const BodyTitle = styled.div`
  width: 700px;
  height: 50px;
  margin-top: 10px;
  font-weight: 500;
`;

export const BodyWriter = styled.div`
  width: 10%;
  height: 50px;
  margin-top: 10px;
  font-weight: 500;
`;

export const BodyDate = styled.div`
  width: 10%;
  height: 50px;
  margin-top: 10px;
  font-weight: 500;
`;

export const List = styled.div`
  width: 10%;
  height: 50px;
  border-top: 1px solid #dbdbdb;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListTitle = styled.div`
  width: 700px;
  height: 50px;
  border-top: 1px solid #dbdbdb;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;
// ///////////////////////////////

export const WrapperFooter = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const AddPosting = styled.button`
  width: 171px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
  }
`;

export const PencilIcon = styled.img`
  margin-right: 10px;
  width: 15px;
  height: 15px;
`;

// export const SearchInput = styled.input`
//     width: 180px;
//     height: 52px;
//     font-size: 16px;
//     font-weight: 500;
//     background-color: white;
//     border: 1px solid #f2f2f2;
//     border-radius: 10px;
//     margin-bottom: 50px;
//     :focus{
//         outline: 1px solid #ffd600;
//         color: black
//     }
//     padding-left:10px;
//     color: #f2f2f2
// `
