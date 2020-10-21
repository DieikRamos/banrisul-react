import React, { Component } from "react";
import styled, { css } from "styled-components";
import MenuLatItem from "./MenuLatItem";

function MenuLateral(props) {
  return (
    <Container {...props}>
      <Group2>
        <MenuLatItem menu='Banrisul Digital'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Sair' icon='close'></MenuLatItem>
      </Group2>
      <Label>Produtos</Label>
      <Group>
        <MenuLatItem iconName='home' menu='Office' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Meus Cartões de Crédito' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Vero Pay' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='BanriSaque' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Seguros e Capitalização' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Resolva Dívidas' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Abertura de Conta' icon='arrow-circle-right'></MenuLatItem>
      </Group>
      <Label>Outros Serviços</Label>
      <Group>
        <MenuLatItem iconName='home' menu='Onde Tem Banrisul' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Onde Tem Banricompras' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Consulta Cheques Banrisul' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Telefones Úteis' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Dúvidas Frequentes' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Agendamento de Atendimento' icon='arrow-circle-right'></MenuLatItem>
        <MenuLatItem iconName='home' menu='Onde Tem Vero' icon='arrow-circle-right'></MenuLatItem>
      </Group>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background-color: rgba(230, 230, 230, 1);
  flex-direction: column;
  height: 100%;
  width: 280px;
  z-index: 999;
  position: absolute;
  top: 0;
  left: -300px;
  transition: 0.5s;
`;

const Group2 = styled.div`
  width: 100%;
  height: 70px;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  display: flex;
`;

const Group = styled.div`
  width: 100%;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
`;
const Rect = styled.div`
  width: 300px;
  height: 2px;
  border-width: 1px;
  border-color: rgba(215, 212, 212, 1);
  margin-top: -604px;
  border-style: solid;
`;
const Rect1 = styled.div`
  width: 250px;
  height: 2px;
  border-width: 1px;
  border-color: rgba(215, 212, 212, 1);
  margin-top: 305px;
  border-style: solid;
`;
const Label = styled.span`
  font-size: 17px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  color: rgba(109, 107, 107, 1);
  width: 300px;
  height: 10px;
  font-size: 15px;
  margin-button: 20px;
`;

export default MenuLateral;
