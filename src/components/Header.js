import React, { Component } from "react";
import styled, { css } from "styled-components";
import MenuLateral from "../components/MenuLateral";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import { render } from "react-dom";
import ReactDOM from "react-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClickOutside = (event) => {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
      this.setState((state) => ({
        isToggleOn: !state.isToggleOn,
      }));
      document.removeEventListener("click", this.handleClickOutside, true);
    }
  };

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
    document.addEventListener("click", this.handleClickOutside, true);
  }

  render() {
    const Container = styled.div`
      height: 50px;
      width: 100%;
      background-color: rgba(255, 255, 255, 1);
      align-items: center;
      padding: 4px;
    `;
    const Container1 = styled.div`
      height: 40px;
      width: 100%;
      display: flex;
      background-color: rgba(255, 255, 255, 1);
      align-items: center;
      padding: 4px;
    `;
    const ButtonOverlay = styled.button`
      display: block;
      background: none;
      height: 100%;
      width: 100%;
      border: none;
    `;
    const LeftIconButton = styled.div`
      height: 56px;
      width: 56px;
      flex-direction: column;
      display: flex;
      border: none;
    `;
    const Group = styled.div`
      width: 130px;
      height: 25px;
      flex-direction: row;
      display: flex;
      margin-top: 5px;
    `;
    const Image = styled.img`
      width: 25px;
      height: 25px;
      background-color: rgba(15, 15, 15, 0);
      object-fit: cover;
    `;
    const Image2 = styled.img`
      width: 100%;
      height: 19px;
      margin-top: 3px;
      object-fit: contain;
    `;
    const ImageRow = styled.div`
      height: 25px;
      flex-direction: row;
      display: flex;
      flex: 1 1 0%;
    `;
    const LeftIconButtonFiller = styled.div`
      flex: 1 1 0%;
      flex-direction: row;
      justify-content: center;
      display: flex;
    `;
    const RightIconsWrapper = styled.div`
      flex-direction: row;
      align-items: center;
      border-radius: 100px;
      width: 47px;
      height: 56px;
      display: flex;
    `;
    const IconButton = styled.div`
      border-radius: 100px;
      width: 35px;
      height: 35px;
      background-color: rgba(20, 115, 230, 1);
      align-items: center;
      flex-direction: column;
      display: flex;
    `;
    return (
      <Container onBlur={this.handleClick}>
        <Container1>
          <LeftIconButton>
            <ButtonOverlay onClick={this.handleClick}>
              <FontAwesomeIcon name='bars' style={{ backgroundColor: "transparent", fontSize: 30, color: "rgba(77,76,76,1)" }}></FontAwesomeIcon>
            </ButtonOverlay>
          </LeftIconButton>
          <LeftIconButtonFiller>
            <Group>
              <ImageRow>
                <Image src={require("../assets/images/logo1.png")}></Image> <Image2 src={require("../assets/images/BANRISUL-TEXTO.png")}></Image2>
              </ImageRow>
            </Group>
          </LeftIconButtonFiller>
          <RightIconsWrapper>
            <IconButton>
              <ButtonOverlay>
                <FontAwesomeIcon
                  name='question'
                  style={{ backgroundColor: "transparent", fontSize: 23, color: "rgba(230, 230, 230,1)" }}></FontAwesomeIcon>
              </ButtonOverlay>
            </IconButton>
          </RightIconsWrapper>
        </Container1>
        <MenuLateral style={{ left: this.state.isToggleOn ? "-300px" : "0px" }}></MenuLateral>
      </Container>
    );
  }
}
export default Header;
