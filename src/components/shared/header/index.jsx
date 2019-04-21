import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  height: 40px;
  background-color: #fa8231;
  transition: 300ms;
  ${({ open }) =>open ? `width: calc(100% - 250px);` : `width: calc(100% - 50px);`}
`;

const MenuIcon = styled(FontAwesomeIcon)`
  height: 40px;
  color: #2d3436;
  font-size: 1.5em;
  margin-left: 10px;
  vertical-align: middle;
  cursor: pointer;
`;

const Header = ({ setOpenMenu, open }) => (
  <StyledHeader open={open}>
    <MenuIcon icon="bars" onClick={() => setOpenMenu(!open)} />
  </StyledHeader>
);

export default Header;
