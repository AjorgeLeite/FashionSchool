import styled from "styled-components";
import { Breakpoints } from "../Style/Breakpoints";
import "../Style/vars.css"

export const FooterContainer = styled.div`
  width: 80%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 100%;
    flex-direction: column;
    height: auto;
  }
`;

export const FooterColumnsContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;

  @media screen and (max-width: ${Breakpoints.xl}) {
    flex: none;
    width: 90%;
    align-items: center;
  }
`;

export const FooterColumn = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  text-align: left;
  & img {
    margin-top: 12%;
  }

  @media screen and (max-width: ${Breakpoints.xl}) {
    width: 100%;
    flex-direction: row;
    align-items: start;
    gap: 10px;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    justify-content: start;
  }
`;

export const FooterMainColumn = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  text-align: left;

  & img {
    margin-top: 12%;
  }
  @media screen and (max-width: ${Breakpoints.m}) {
    width: 100%;
    margin: 10px 30px;
    & img {
      margin-top: 3%;
    }
  }
`;

export const FooterTitle = styled.h1`
  font-size: var(--large-font-size);
  width: 200px;
`;

export const FooterText = styled.p`
  font-size: var(--large-font-size);
  width: 200px;
  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: var(--medium-font-size);
  }
`;

export const FooterTextContainer = styled.div``;

export const BlackBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${Breakpoints.m}) {
    height: 106px;
  }
`;

export const BlackBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 69px;
  color: white;
  font-size: var(--medium-font-size);
  @media screen and (max-width: ${Breakpoints.m}) {
    font-size: 15px;
    height: 106px;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
`;
