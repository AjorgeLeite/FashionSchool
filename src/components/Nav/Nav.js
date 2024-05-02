import React, { useState } from "react";
import {
  LogoContainer,
  NavContainer,
  MenuContainer,
  StyledButton,
  HamburgerMenu,
} from "./Nav.styles";
import Menu from "../Menu/Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavContainer>
        <LogoContainer src="/logo.png" />
        <MenuContainer>
          <StyledButton>SIGN UP</StyledButton>
          <HamburgerMenu src="Hamburger.png" onClick={toggleMenu} />
        </MenuContainer>
      </NavContainer>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Navbar;
