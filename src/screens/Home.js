import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import MenuCompleto from "../components/MenuCompleto";
import Cartao from "../components/Cartao";
import MenuLateral from "../components/MenuLateral";

function Home(props) {
  return (
    <Container>
      <HeaderColumn>
        <Header leftIconButton='Menu' title='Cabergs Saúde'></Header>

        <Banner>
          <ImageRow>
            <Image src={require("../assets/images/andromeda_galaxy.jpg")}></Image>
            <Image2 src={require("../assets/images/peixes.jfif")}></Image2>
          </ImageRow>
        </Banner>
      </HeaderColumn>
      <RectStack>
        <Rect>
          <MenuCompleto
            style={{
              height: "100%",
              width: "100%",
              marginTop: 89,
            }}></MenuCompleto>
        </Rect>
        <Cartao nome2='Nome' nome='Dieik Ramos da Silva' conta12='35.180070.0.3' ag='0100'></Cartao>
      </RectStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(242, 242, 242, 1);
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Banner = styled.div`
  overflow-x: scroll;
  width: 100%;
  height: 198px;
  background-color: rgba(107, 107, 107, 1);
  flex-direction: row;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 198px;
  object-fit: stretch;
`;

const Image2 = styled.img`
  width: 100%;
  height: 198px;
  object-fit: stretch;
`;

const ImageRow = styled.div`
  height: 198px;
  flex-direction: row;
  display: flex;
  flex: 0 0 auto;
  margin-right: -720px;
`;

const HeaderColumn = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
`;

const Rect = styled.div`
  top: 7px;
  left: 0px;
  width: 100%;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const RectStack = styled.div`
  flex: 1 1 0%;
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Home;
