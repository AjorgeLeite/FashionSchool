import styled from "styled-components";
import { slideFromBottom } from "../Style/AnimationsCss";
import { Breakpoints } from "../Style/Breakpoints";
import "../Style/vars.css"

export const ErasmusContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 364px;
  position: relative;
  animation-delay: 10ms;
  @media screen and (max-width: ${Breakpoints.xl}) {
   height: 500px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    align-items: start;
    height: 650px;
  }
`;

export const ErasmusContentContainer = styled.div`
  width: 70%;
  height: 274px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  position: relative;
  animation: ${({ inView }) => (inView ? slideFromBottom : "none")} 2s ease
    backwards;
  @media screen and (max-width: ${Breakpoints.xl}) {
    gap: 10%;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    gap: 5%;
    flex-direction: column;
    max-width: 500px;
  }
`;

export const ErasmusText = styled.p`
  height: 275px;
  width: 606px;
  font-size: var(--medium-font-size);
  font-weight: var(--regular-font-weight);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 100%;
    height: auto;
  }
`;

export const ErasmusImg = styled.img`
  position: absolute;
  right: 60px;
  top: 90px;
  display: flex;
  @media screen and (max-width: ${Breakpoints.m}) {
    display: none;
  }
`;

export const ErasmusTextKnowMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 606px;
  height: 204px;
  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 100%;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    height: auto;
  }
`;
