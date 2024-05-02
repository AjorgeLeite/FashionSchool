import styled from "styled-components";
import { fadeInTwist } from "../Style/AnimationsCss";
import { Breakpoints } from "../Style/Breakpoints";

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
  font-size: 200px;
  font-weight: 700;
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
    font-size: 20px;
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
  font-size: 20px;
  z-index: 10;
  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: 16px;
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