import React from "react";
import styled from "styled-components";

import logo from "../../../assets/images/logo1.png";
import shortLogo from "../../../assets/images/logo2.png";

import Item from "./Items";

const Nav = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #2d3436;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 1px 5px -2px rgba(0, 0, 0, 0.18);
  transition: 300ms;
  overflow: hidden;
  ${({ open }) => (open ? `width: 250px;` : `width: 50px;`)}
`;

const Img = styled.img`
  width: 100px;
  height: 30px;
  margin: 5px 0;
  align-self: center;
  ${({ open }) =>
    !open &&
    `
    width: 30px;
    height: 25px;
    margin: 7.5px 0;
  `}
`;

const Navbar = ({ open, itemsMenu }) => {
  const activeRoute = url =>
    window.location.href.split(window.location.host)[1] === url;

  return (
    <Nav open={open}>
      {open ? (
        <Img src={logo} open={open} alt="logo codenix bills" />
      ) : (
        <Img src={shortLogo} open={open} alt="logo codenix bills" />
      )}
      {itemsMenu.map(item => (
        <Item
          key={item.url}
          title={open ? item.title : ""}
          url={item.url}
          icon={item.icon}
          active={activeRoute(item.url)}
        />
      ))}
    </Nav>
  );
};

export default Navbar;
