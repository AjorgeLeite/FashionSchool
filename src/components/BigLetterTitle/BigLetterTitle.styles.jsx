import styled from "styled-components";
import { fadeIn, fadeInTwist } from "../Style/AnimationsCss";
import { Breakpoints } from "../Style/Breakpoints";
import "../Style/vars.css"

export const BigLetterTitleContainer = styled.div`
  position: relative;
  width: 80%;
  height: 200px;
  display: flex;
  align-items: center;
  animation: ${({ inView }) => (inView ? fadeInTwist : "none")} 1s ease forwards;
  @media screen and (max-width: ${Breakpoints.m}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BigLetter = styled.h1`
  font-size: var(--superlarge-font-size);
  font-weight: var(--bold-font-weight);
  line-height: 200px;
  color: #e3e3e3;
  position: absolute;
  left: 0;
  top: 0;
  width: 128px;
  height: 200px;
  margin: 0;
  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: 99px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;

  margin: 0;
  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: var(--large-font-size);
  }
`;

export const Divider = styled.div`
  border-bottom: 2px solid black;
  width: 170px;
  height: 1px;
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 111px;
  }
`;

export const Text = styled.p`
  width: 200px;
  font-size: var(--large-font-size);
  z-index: 10;
  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: var(--medium-font-size);
    margin: 5px 30px;
  }
`;

export const ContentContainer = styled.div`
  width: 650px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const TitleAndDividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10%;
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 100%;
    justify-content: start;
    align-items: center;
    margin-left: 30px;
  }
`;

export const SeeAllBtn = styled.button`
  width: 166px;
  height: 53px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--medium-font-size);
  font-weight: var(--bold-font-weight);
  animation: ${({ inView }) => (inView ? fadeIn : "none")} 3s ease forwards;
  cursor: pointer;
  @media screen and (max-width: ${Breakpoints.xl}) {
    display: none;
  }
`;