import React from "react";
import styled from "styled-components";
import "material-icons/iconfont/material-icons.css";

const Button = (props) => {
  const { name = "Salvar", background = "#587FA6", icon = "close" } = props;
  const Button = styled.button`
    background: ${background};
    color: white;
    border: 1px solid #587FA6;
    border-radius: 7px;
    padding: 20px;
    width: 150px;
    height: 20px;
    font-size: 18px;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      box-shadow: 0 0 5px #808080;
    }
  `;

  const Paragraph = styled.p`
    margin: 5px;
  `;

  return (
    <Button>
      <i class="material-icons">{icon}</i>
      <Paragraph>{name}</Paragraph>
    </Button>
  );
};

export default Button;
