import styled from "styled-components";
import { fadeIn, slideFromBottom, slideFromTop } from "../Style/AnimationsCss";
import { Breakpoints } from "../Style/Breakpoints";
import "../Style/vars.css";

export const Slide2Container = styled.div`
  position: relative;
  width: 100%;
  height: 996px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  overflow: hidden;
  @media screen and (max-width: ${Breakpoints.xl}) {
    justify-content: center;
    width: 100%;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    height: 500px;
  }
`;

export const OvalContainer = styled.img`
  width: 921px;
  height: 921px;
  position: absolute;
  left: calc(50% - 460px);
  top: calc(50% - 460px);

  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 800px;
    height: 800px;
    left: calc(50% - 400px);
    top: calc(50% - 400px);
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 350px;
    height: 350px;
    left: calc(50% - 175px);
    top: calc(50% - 210px);
  }
`;

export const VerticalText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  z-index: 100;
  transform: rotate(-90deg);
  margin-top: 100px;
  min-width: 200px;
  margin-left: 70px;
  animation: ${({ inView }) => (inView ? fadeIn : "none")} 3s ease forwards;
  @media screen and (max-width: ${Breakpoints.xl}) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: var(--large-font-size);
  font-weight: var(--bold-font-weight);
  margin: 0;
  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: var(--small-font-size);
  }
`;
export const TitleBig = styled.h1`
  font-size: 60px;
  font-weight: var(--bold-font-weight);
  margin: 0;
  text-align: left;
  animation: ${({ inView }) => (inView ? slideFromBottom : "none")} 3s ease
    forwards;
  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: 24px;
    width: 300px;
  }
`;

export const Text = styled.p`
  font-size: var(--medium-font-size);
  font-weight: 400;
`;

export const Divider = styled.div`
  width: 40%;
  border-bottom: 2px solid black;
`;

export const Text2 = styled.p`
  font-size: var(--large-font-size);
  font-weight: var(--regular-font-weight);
`;

export const FashionImg = styled.img`
  z-index: 100;
  width: 449px;
  height: 996px;
  animation: ${fadeIn} 3s ease forwards;
  @media screen and (max-width: ${Breakpoints.xl}) {
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    animation: none;
    opacity: 0.2;
    width: 160px;
    height: auto;
    position: absolute;
    bottom: 0%;
    left: calc(50% - 200px);
  }
`;

export const TextContent = styled.p`
  font-size: var(--large-font-size);
  font-weight: var(--regular-font-weight);
  text-align: left;
  width: 400px;
  animation: ${({ inView }) => (inView ? slideFromTop : "none")} 3s ease
    forwards;
  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 350px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: var(--medium-font-size);
    width: 250px;
  }
`;

export const TextContainer = styled.div`
  width: 30%;
  height: 720px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 50%;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    height: 400px;
    width: 160px;
  }
`;

export const ImageTextContainer = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 52%;
  transform: translateX(-50%);
`;

export const SeeAllButton = styled.button`
  width: 166px;
  height: 54px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--medium-font-size);
  font-weight: var(--bold-font-weight);
  cursor: pointer;
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 100px;
    height: 40px;
    font-size: var(--small-font-size);
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  width: 356px;
  height: 54px;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2000;
  gap: 10px;
  margin-right: 100px;
  @media screen and (max-width: ${Breakpoints.xl}) {
    margin-right: 50px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    margin-right: 0;
    bottom: 0;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 90%;
  @media screen and (max-width: ${Breakpoints.xl}) {
    justify-content: space-around;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
  }
`;

export const PrevNextButton = styled.button`
  background-color: white;
  border: 0px;
  cursor: pointer;
  & img {
    width: 54px;
    height: 54px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    & img {
      width: 34px;
      height: 34px;
    }
  }
`;
export const PrevNextButtonContainer = styled.div`
  height: 41px;
`;
