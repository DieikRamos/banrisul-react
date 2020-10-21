import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonGrey(props) {
  return (
    <Container {...props}>
      <TextInput placeholder=""></TextInput>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #8E8E93;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const TextInput = styled.input`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  width: 50px;
  height: 20px;
  border: none;
  background: transparent;
`;

export default CupertinoButtonGrey;
