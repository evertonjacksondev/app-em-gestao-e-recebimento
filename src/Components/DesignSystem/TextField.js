import React, { Fragment } from "react";
import styled from "styled-components";
import "material-icons/iconfont/material-icons.css";

const TextField = (props) => {
  const { required = true,name = "Salvar", background = "#F2D199", type = "text" } = props;

  const Label = styled.label`
    font-size: 12px;
    display: flex;
    padding-left: 2px;
  `;

  const TextField = styled.input`
    background: ${background};
    border: 1px solid #606060;
    border-radius: 7px;
    width: 200px;
    height: 30px;
    font-size: 14px;
    box-shadow: 0 0 2px #808080;
  `;

  return (
    <Fragment>
      <Label for="input">{required ?name + ' *': name }</Label>
      <TextField type={type}id="input"></TextField>
    </Fragment>
  );
};

export default TextField;
