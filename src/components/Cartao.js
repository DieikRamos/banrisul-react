import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function Cartao(props) {
  return (
    <Container {...props}>
      <CartaoFundo>
        <LogoRow>
          <Logo src={require("../assets/images/logo-branco.png")}></Logo>
          <EntypoIcon
            name='dots-three-vertical'
            style={{
              color: "rgba(250,250,250,0.85)",
              fontSize: 20,
              height: 23,
              width: 20,
              marginLeft: 220,
              marginTop: 7,
            }}></EntypoIcon>
        </LogoRow>
        <Nome>{props.nome || "Nome"}</Nome>
        <AgStack>
          <Ag>{props.ag || "Ag"}</Ag>
          <Conta>{props.conta12 || "Conta"}</Conta>
        </AgStack>
      </CartaoFundo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  shadow-radius: 0px;
  flex-direction: column;
  box-shadow: 0px 0px 0px 0.1px rgba(164, 164, 164, 1);
  z-index: 100;
  padding-left: 10%;
  padding-right: 10%;
`;

const CartaoFundo = styled.div`
  width: 100%;
  height: 95px;
  background-color: rgba(1, 107, 191, 1);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  flex-direction: column;
  display: flex;
  box-shadow: 5px -5px 8px 0.51px rgba(121, 121, 121, 1);
`;

const Logo = styled.img`
  width: 30px;
  padding-top:10px
  height: 30px;
  object-fit: contain;
`;

const LogoRow = styled.div`
  height: 49px;
  flex-direction: row;
  display: flex;
  margin-top: 4px;
  margin-left: 16px;
  margin-right: 11px;
`;

const Nome = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  color: rgba(253, 253, 253, 1);
  width: 274px;
  height: 17px;
  font-size: 15px;
  opacity: 0.85;
  margin-top: 1px;
  margin-left: 16px;
`;

const Ag = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 300;
  color: rgba(253, 253, 253, 1);
  width: 42px;
  height: 17px;
  font-size: 15px;
  opacity: 0.85;
`;

const Conta = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 41px;
  position: absolute;
  font-style: normal;
  font-weight: 300;
  color: rgba(253, 253, 253, 1);
  width: 142px;
  height: 17px;
  font-size: 15px;
  opacity: 0.85;
`;

const AgStack = styled.div`
  width: 183px;
  height: 17px;
  margin-top: 3px;
  margin-left: 16px;
  position: relative;
`;

export default Cartao;
