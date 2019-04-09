import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled(Link)`
    color: #fa8231;
    text-decoration: none;
    padding: 15px;
    transition: 300ms;
    :hover{
        border-left: 5px solid #fa8231;
        background-color: #343b3d;
    }
    border-left :${props => props.active ? "5px solid #fa8231" : "none"}
    background-color :${props => props.active ? "#343b3d" : "transparent"}
`;

const Icon = styled(FontAwesomeIcon)`
  color: #fa8231;
  margin-right: 10px;
`;

const ItemNav = ({ title, url, icon, active}) => {
    return(
        <Item key={title} to={url} active={active ? 1 : 0}>
            <Icon icon={icon} />
            {title}
        </Item>
    )
}

export default ItemNav