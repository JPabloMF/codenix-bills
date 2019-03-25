import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

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

const Navbar = props => (
    <Nav>
        {props.itemsMenu.map(item => <Link key={item.title} to={item.url}>{item.title}</Link>)}
    </Nav>
)

export default Navbar