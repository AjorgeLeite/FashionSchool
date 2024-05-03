import styled from "styled-components";
import { Breakpoints } from "../Style/Breakpoints";

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
