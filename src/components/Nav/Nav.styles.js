import styled from "styled-components";
import { Breakpoints } from "../Style/Breakpoints";

export const NavContainer = styled.nav`
  width: 100%;
  height: 77px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 45%;

  @media screen and (max-width: ${Breakpoints.xl}) {
    gap: 10%;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    gap: 2%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const LogoContainer = styled.img`
  width: 131px;

  cursor: pointer;
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 100px;
  }
`;

export const MenuContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 40%;
  }
`;

export const StyledButton = styled.button`
  width: 166px;
  height: 53px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 100px;
    height: 40px;
    font-size: 14px;
  }
`;

export const HamburgerMenu = styled.img`
  cursor: pointer;
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 40px;
  }
`;
