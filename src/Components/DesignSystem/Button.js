import styled from "styled-components";

export const Button = styled.button`
    background: ${background};
    color: white;
    border: 1px solid #587fa6;
    border-radius: 7px;
    width: 150px;
    margin: 5px;
    height: 35px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      box-shadow: 0 0 5px #808080;
    }
  `