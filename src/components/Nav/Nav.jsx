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
        <LogoContainer src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/Logo.png?raw=true" />
        <MenuContainer>
          <StyledButton>SIGN UP</StyledButton>
          <HamburgerMenu
            src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/Hamburger.png?raw=true"
            onClick={toggleMenu}
          />
        </MenuContainer>
      </NavContainer>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Navbar;
