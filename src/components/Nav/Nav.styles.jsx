import styled from "styled-components";
import { Breakpoints } from "../Style/Breakpoints";
import "../Style/vars.css";

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
  @media screen and (max-width: ${Breakpoints.s}) {
    gap: 0;
    padding-left: 5px;
    padding-right: 5px;
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
  gap: 48px;
  @media screen and (max-width: ${Breakpoints.m}) {
    gap: 10px;
    width: 149px;
    height: 41px;
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
  font-size: var(--medium-font-size);
  font-weight: var(--bold-font-weight);
  cursor: pointer;
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 101px;
    height: 41px;
    font-size: var(--small-font-size);
  }
  @media screen and (max-width: ${Breakpoints.s}) {
    font-size: 12px;
  }
`;

export const HamburgerMenu = styled.img`
  cursor: pointer;
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 40px;
  }
`;
