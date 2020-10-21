import React, { Component } from "react";
import styled, { css } from "styled-components";
import MenuItem from "./MenuItem";
function MenuCompleto(props) {
  return (
    <Container {...props}>
      <MenuPainel>
        <MenuDireito>
          <MenuItem iconName='gear' menu='Meus Cartões' icon='credit-card'></MenuItem>
          <MenuItem iconName='gear' menu='BanriSaque' icon='money'></MenuItem>
          <MenuItem iconName='gear' icon='handshake-o' menu='Resolva Dívidas'></MenuItem>
          <MenuItem iconName='gear' icon='th' menu='Outros Serviços'></MenuItem>
        </MenuDireito>
        <MenuEsquerdo>
          <MenuItem iconName='gear' icon='briefcase' menu='Office'></MenuItem>
          <MenuItem iconName='gear' icon='shopping-cart' menu='VeroPay'></MenuItem>
          <MenuItem iconName='gear' icon='shield' menu='Seguros'></MenuItem>
          <MenuItem iconName='gear' icon='gear' menu='Crédito Digital'></MenuItem>
        </MenuEsquerdo>
      </MenuPainel>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(242, 242, 242, 1);
  flex-direction: row;
  box-shadow: 3px -27px 22px 5px rgb(187 190 190);
  height: 100%;
  padding-bottom: 20px;
`;
const MenuDireito = styled.div`
  width: 45%;
  height: 230px;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
`;
const MenuEsquerdo = styled.div`
  width: 45%;
  height: 230px;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 3.333%;
  display: flex;
`;
const MenuPainel = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  width: 100%;
  margin-right: 3.333%;
  margin-left: 3.333%;
  margin-top: 50px;
`;
export default MenuCompleto;
