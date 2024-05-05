import React, { useState } from "react";
import {
  LogoContainer,
  NavContainer,
  MenuContainer,
  HamburgerMenu,
} from "./Nav.styles";
import Menu from "../Menu/Menu";
import Btn from "../Btn/Btn";

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
          <Btn text="SIGN UP" ></Btn>
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
