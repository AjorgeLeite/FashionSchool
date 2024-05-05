import { StyledButton } from "./Btn.styles";

const Btn = ({ text, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Btn;