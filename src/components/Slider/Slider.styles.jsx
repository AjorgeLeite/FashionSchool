import styled from "styled-components";
import { Breakpoints } from "../Style/Breakpoints";
export const SliderContainer = styled.div`
  width: 100%;
  height: 900px;
  @media screen and (max-width: ${Breakpoints.m}) {
    height:800px;
  }
`;
