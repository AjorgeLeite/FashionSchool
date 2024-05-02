import styled from "styled-components";
import {
  fadeIn,
  fadeInTwist,
  slideFromBottom,
  slideFromTop,
} from "../Style/AnimationsCss";
import { Breakpoints } from "../Style/Breakpoints";
import "../Style/vars.css";

export const SewMoreContainer = styled.div`
  height: 890px;
  width: 100%;
  display: flex;
  position: relative;
  @media screen and (max-width: ${Breakpoints.m}) {
    height: 274px;
  }
`;

export const Rectangle = styled.div`
  background-color: var(--Purple-color);
  width: 80%;
  height: 714px;
  position: absolute;
  bottom: 0;
  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 100%;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    height: 274px;
  }
`;

export const PersonImg = styled.img`
  width: 625px;
  height: 890px;
  z-index: 100;
  mix-blend-mode: luminosity;
  animation: ${({ inView }) => (inView ? fadeIn : "none")} 3s ease forwards;
  @media screen and (max-width: ${Breakpoints.xl}) {
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    display: none;
  }
`;

export const PersonFormContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  width: 609px;
  height: 329px;
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-direction: column;
  z-index: 200;
  margin-top: 5%;

  @media screen and (max-width: ${Breakpoints.xl}) {
    margin-top: 100px;
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: ${Breakpoints.m}) {
    margin: 0;
    height: 240px;
    width: 80%;
    max-width: 320px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const FormTitle = styled.h1`
  font-size: 60px;
  font-weight: var(--bold-font-weight);
  color: white;
  margin: 0;
  animation: ${({ inView }) => (inView ? slideFromBottom : "none")} 3s ease
    forwards;
  @media screen and (max-width: ${Breakpoints.xl}) {
    font-size: 40px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: var(--large-font-size);
    max-width: 320px;
  }
`;
export const Divider = styled.hr`
  width: 60%;
  display: block;
  border: 0;
  border-bottom: 1px solid white;
  padding: 0;
  height: 25px;
  margin: 0;
  margin-top: 8px;
  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 340px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 111px;
  }
`;

export const DividerSubscribeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5%;
  animation: ${({ inView }) => (inView ? fadeInTwist : "none")} 1s ease forwards;
  @media screen and (max-width: ${Breakpoints.xl}) {
    flex-direction: column;
    justify-content: start;
    width: 70%;
    margin: 0;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
  }
`;
export const Subscribe = styled.p`
  font-size: var(--large-font-size);
  font-weight: var(--regular-font-weight);
  color: white;
`;

export const EmailInput = styled.input`
  height: 53px;
  width: 350px;
  background-color: transparent;
  border: 0;
  color: white;
  font-size: var(--small-font-size);
  padding-left: 20px;

  &::placeholder {
    color: white;
  }
  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 300px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 250px;
  }
`;

export const EmailSendImg = styled.img`
  cursor: pointer;
`;
export const InputContainer = styled.div`
  height: 53px;
  width: 410px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  justify-content: space-around;
  animation: ${({ inView }) => (inView ? slideFromTop : "none")} 3s ease
    forwards;
  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 350px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 300px;
  }
`;
