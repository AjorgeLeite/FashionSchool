import styled from "styled-components";
import { fadeIn, fadeInTwist } from "../Style/AnimationsCss";
import { Breakpoints } from "../Style/Breakpoints";
import "../Style/vars.css";

export const TextFrame = styled.div`
  width: 310px;
  height: 253px;
  background-color: white;
  z-index: 100;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
  animation: ${({ inView }) => (inView ? fadeIn : "none")} 3s ease forwards;
  animation-delay: 100ms;
`;

export const Date = styled.p`
  font-size: var(--medium-font-size);
  font-weight: var(--bold-font-weight);
`;

export const Title = styled.p`
  font-size: var(--xlarge-font-size);
  font-weight: var(--bold-font-weight);
`;

export const Text = styled.p`
  font-size: var(--large-font-size);
  font-weight: var(--regular-font-weight);
  line-height: 32px;
`;

export const BlogContainer = styled.div`
  width: 100%;
  height: 1300px;
  display: flex;
  gap: 20px;
  position: relative;
  justify-content: center;
  @media screen and (max-width: ${Breakpoints.xl}) {
    height: 900px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    height: 850px;
  }
`;

export const Image1Container = styled.div`
  width: 610px;
  height: 1200px;
  position: relative;
  display: flex;
  align-items: center;
  animation: ${({ inView }) => (inView ? fadeInTwist : "none")} 1s ease forwards;
  & img {
    width: 610px;
  }
  @media screen and (max-width: ${Breakpoints.xl}) {
    & img {
      width: 450px;
    }
    width: 450px;
    height: 790px;
    align-items: start;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    & img {
      width: 330px;
    }
    width: 330px;
  }
`;
export const Image2Container = styled.div`
  width: 450px;
  height: 777px;
  position: relative;
  animation: ${({ inView }) => (inView ? fadeInTwist : "none")} 3s ease forwards;
  @media screen and (max-width: ${Breakpoints.xl}) {
    & img {
      width: 430px;
    }
    width: 430px;
    height: 680px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    display: none;
  }
`;
export const Image3Container = styled.div`
  width: 448px;
  height: 585px;
  position: relative;
  animation: ${({ inView }) => (inView ? fadeInTwist : "none")} 3s ease forwards;
  @media screen and (max-width: 1300px) {
    display: none;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
  }
`;

export const BlogBg = styled.img`
  position: absolute;
  left: 310px;
  bottom: 0;
  @media screen and (max-width: ${Breakpoints.xl}) {
    left: 200px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    left: 100px;
  }
`;

export const SeeAllBtnBottom = styled.div`
  width: 100%;
  display: flex;
  margin: 20px;
  position: absolute;
  bottom: 0;
  right: -70%;
  @media screen and (min-width: ${Breakpoints.xl}) {
    display: none;
  }
`;
