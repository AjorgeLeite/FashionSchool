import styled from "styled-components";
import { Breakpoints } from "../Style/Breakpoints";

export const Slider2Container = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${Breakpoints.m}) {
    height: auto;
  }
`;
