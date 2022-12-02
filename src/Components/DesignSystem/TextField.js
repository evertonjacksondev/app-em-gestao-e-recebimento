import React, { Fragment } from "react";
import styled from "styled-components";
import "material-icons/iconfont/material-icons.css";

const TextField = (props) => {
  const { name = "Salvar", background = "#F2D199", type = "text" } = props;

  const Label = styled.label`
    font-size: 12px;
    display: flex;
    padding-left: 2px;
  `;

  const TextField = styled.input`
    background: ${background};
    color: black;
    border: 2px solid #606060;
    border-radius: 7px;
    width: 200px;
    height: 30px;
    font-size: 14px;
    font-family: "Lato", sans-serif;
  `;

  return (
    <Fragment>
      <Label for="input">{name}</Label>
      <TextField type={type}id="input"></TextField>
    </Fragment>
  );
};

export default TextField;
