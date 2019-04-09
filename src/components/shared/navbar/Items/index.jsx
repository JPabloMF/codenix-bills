import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled(Link)`
    color: #fa8231;
    text-decoration: none;
    padding: 15px;
    :hover{
        border-left: 5px solid #fa8231;
        background-color: #343b3d;
    }
    border-left :${props => props.active ? "5px solid #fa8231" : "none"}
`

const Icon = styled(FontAwesomeIcon)`
  color: #fa8231;
  margin-right: 10px;
`;

const ItemNav = ({ title, url, icon}) => (
    <Item key={title} to={url}>
        <Icon icon={icon} />
        {title}
    </Item>
)

export default ItemNav