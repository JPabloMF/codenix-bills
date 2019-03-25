import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

import logo from '../../../assets/images/logo1.png';

const Nav = styled.nav`
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #2d3436;
    display: flex;
    flex-direction: column;
`
const Item = styled(Link)`
    color: #fa8231;
    text-decoration: none;
    padding: 15px;
    :hover{
        border-left: 5px solid #fa8231;
        background-color: #343b3d;
    }
`
const Img = styled.img`
    width: 150px;
    height: 50px;
    margin: 10px 0;
    align-self: center;
`

const Navbar = props => (
    <Nav>
        <Img src={logo} alt="logo codenix bills"/>
        {props.itemsMenu.map(item => 
            <Item key={item.title} to={item.url}>
                {item.title}
            </Item>
        )}
    </Nav>
)

export default Navbar