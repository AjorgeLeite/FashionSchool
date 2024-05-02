import { LinkContainer, MenuContainer } from "./Menu.styles";
import { StyledButton } from "../Nav/Nav.styles";
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
      <StyledButton onClick={onClose}>Close</StyledButton>
    </MenuContainer>
  );
};

export default Menu;
