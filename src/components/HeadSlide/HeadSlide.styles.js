import styled from "styled-components";
import { slideFromTop, slideFromBottom, fadeIn } from "../Style/AnimationsCss";
import { Breakpoints } from "../Style/Breakpoints";
import "../Style/vars.css";

export const HeadSlideContainer = styled.div`
  max-width: 100%;
  width: 100%;
  height: 920px;
  display: flex;
  @media screen and (max-width: ${Breakpoints.xl}) {
    flex-direction: column;
  }
`;
export const RectangleContainer = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  align-items: end;
  @media screen and (max-width: ${Breakpoints.xl}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const RectangleTextContainer = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: space-around;
  align-items: end;

  @media screen and (max-width: ${Breakpoints.xl}) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

export const Rectangle = styled.div`
  background-color: var(--Orange-color);
  width: 80%;
  height: 720px;
  display: flex;
  gap: 0;
  position: absolute;
  bottom: 0;
  left: 20%;
  @media screen and (max-width: ${Breakpoints.xl}) {
    left: 0;
    width: 100%;
    height: 550px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    height: 400px;
  }
`;

export const RectangleImg = styled.img`
  position: absolute;
  bottom: 0;
  @media screen and (max-width: ${Breakpoints.xl}) {
    height: 250px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    height: 150px;
  }
`;

export const PersonContainer = styled.div`
  width: 740px;
`;

export const PersonImg = styled.img`
  z-index: 10;
  position: absolute;
  right: 5%;
  bottom: 0;
  width: 740px;
  height: 970px;
  mix-blend-mode: multiply;

  animation: ${fadeIn} 2s ease forwards;

  @media screen and (max-width: ${Breakpoints.xl}) {
    right: 0;
    width: 550px;
    height: auto;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    right: -5%;
    width: 400px;
  }
  @media screen and (max-width: ${Breakpoints.s}) {
    right: -5%;
    width: 350px;
  }
`;

export const GradientOnPerson = styled.img`
  position: absolute;
  right: calc(5% + 100px);
  bottom: 0;
  width: 111px;
  height: 450px;
  z-index: 20;
  display: flex;
  align-self: flex-end;
  justify-content: end;
  @media screen and (max-width: ${Breakpoints.xl}) {
    right: calc(5% + 10px);
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    right: calc(-5% + 45px);
    height: 300px;
  }
`;

export const TextContainer = styled.div`
  width: 1500px;
  height: 660px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-left: 10%;
  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 80%;
    height: 300px;
    margin-left: 0;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 80%;
    height: auto;
    margin-top: 30px;
  }
`;

export const Title = styled.p`
  font-size: 96px;
  font-weight: var(--bold-font-weight);
  margin: 0;
  line-height: 105px;

  animation: ${slideFromBottom} 1s ease forwards;

  @media screen and (max-width: ${Breakpoints.xl}) {
    font-size: 36px;
    line-height: 39px;
  }
`;

export const TextContent = styled.p`
  width: 609px;
  font-size: var(--large-font-size);
  font-weight: var(--regular-font-size);
  text-align: left;
  animation: ${slideFromTop} 2s ease forwards;

  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 100%;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: var(--medium-font-size);
  }
`;

export const KnowMoreLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  font-size: var(--large-font-size);
  font-weight: var(--bold-font-weight);
  width: 162px;
  height: 40px;
  border-bottom: 3px solid black;
  cursor: pointer;
  animation: ${fadeIn} 5s ease forwards;

  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: var(--small-font-size);
    border-bottom: 2px solid black;
    width: 134px;
    & img {
      width: 20px;
    }
  }
`;
