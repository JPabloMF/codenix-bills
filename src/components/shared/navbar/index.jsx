import React from 'react'
import styled from 'styled-components';

import logo from '../../../assets/images/logo1.png';

import Item from './Items';

const Nav = styled.nav`
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #2d3436;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 1px 5px -2px rgba(0, 0, 0, 0.18);
`;

const Img = styled.img`
    width: 150px;
    height: 50px;
    margin: 10px 0;
    align-self: center;
`

const Navbar = props => (
  <Nav>
    <Img src={logo} alt="logo codenix bills" />
    {props.itemsMenu.map(item => (
      <Item title={item.title} url={item.url} icon={item.icon} />
    ))}
  </Nav>
);

export default Navbar