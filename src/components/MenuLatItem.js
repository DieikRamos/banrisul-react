import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function MenuLatItem(props) {
  return (
    <Container {...props}>
      <IconRow>
        <FontAwesomeIcon
          name={props.icon || "home"}
          style={{
            color: "rgba(128,128,128,1)",
            fontSize: 25,
          }}></FontAwesomeIcon>
        <Menu>{props.menu || "Menu"}</Menu>
      </IconRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 100%;
`;

const Menu = styled.span`
  font-size: 14px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 18px;
  margin-top: 6px;
  width: 200px;
`;

const IconRow = styled.div`
  height: 25px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 111px;
  margin-left: 13px;
  margin-top: 1px;
`;

export default MenuLatItem;
