import { LinkContainer, MenuContainer } from "./Menu.styles";
import Btn from "../Btn/Btn";
const Menu = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <MenuContainer isOpen={isOpen}>
      <LinkContainer>
        <a href="#">Example 1</a>
        <a href="#">Example 2</a>
        <a href="#">Example 3</a>
      </LinkContainer>
      <Btn text="SIGN UP" onClick={onClose} ></Btn>
    </MenuContainer>
  );
};

export default Menu;
