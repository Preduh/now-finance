import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  justify-content: space-between;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;

  h1 {
    font-size: 14px;
    font-weight: 400;
  }

  h2 {
    font-weight: 400;
    font-size: 32px;
    color: #363f5f;
    margin-top: 8px;
  }

  img {
    height: 28px;
  }

  header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  div {
    background-color: white;
    width: 302px;
    height: 110px;
    border-radius: 5px;
    padding: 19px 23px 0 32px;
    box-shadow: 0px 1px 2px #8E8E8E;
  }

  div:nth-child(3) {
      background-color: #FF872C;
  }

  div:nth-child(3) h1, h2 {
      color: white;
  }
`;
