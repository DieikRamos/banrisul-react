import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function MenuItem(props) {
  return (
    <Container {...props}>
      <IconRow>
        <FontAwesomeIcon
          name={props.icon || "gear"}
          style={{
            color: "rgba(20,115,230,1)",
            fontSize: 21,
          }}></FontAwesomeIcon>
        <Menu>{props.menu || "Menu"}</Menu>
      </IconRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(242, 242, 242, 1);
  border-radius: 3px;
  flex-direction: row;
  width: 100%;
  height: 50px;
  box-shadow: 1px 1px 4px 1px rgba(192, 185, 185, 1);
`;

const Menu = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(74, 74, 74, 1);
  font-size: 12px;
  text-align: left;
  line-height: 12px;
  margin-left: 13px;
  margin-top: 3px;
  width: 100px;
`;

const IconRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 77px;
  margin-left: 10px;
  margin-top: 17px;
`;

export default MenuItem;
