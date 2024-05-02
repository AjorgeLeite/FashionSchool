import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInTwist = keyframes`
   from{
     opacity: 0;
     transform: perspective(500px) translate3d(-35px, -40px, -150px) rotate3d(1, -1, 0, 35deg);
    }
    to{
      opacity: 1;
      transform: perspective(500px) translate3d(0, 0, 0);
    }
`;

export const frontToBack = keyframes`
 from {
    opacity: 0;
    text-shadow: 0px 0px 40px #fff;
    -webkit-transform: scale(1.3);
  }
  to {
    opacity: 1;
    text-shadow: 0px 0px 1px #fff;
    -webkit-transform: scale(1);
  }
`;

export const slideFromBottom = keyframes`
 from {
    opacity: 0;
    transform: translateY(80%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;
export const slideFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-80%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;
