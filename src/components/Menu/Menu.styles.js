import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isOpen ? "40vh" : "0")};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  gap: 10%;
  transition: height 1.3s ease-in-out;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & a {
    text-decoration: none;
    color: black;
  }
`;
