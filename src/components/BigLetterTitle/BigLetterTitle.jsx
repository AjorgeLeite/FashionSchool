import {
  BigLetter,
  BigLetterTitleContainer,
  Title,
  Divider,
  ContentContainer,
  Text,
  TitleAndDividerContainer,
} from "./BigLetterTitle.styles";
import { useInView } from "react-intersection-observer";

const BigLetterTitle = ({ letter, title, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <BigLetterTitleContainer ref={ref} inView={inView}>
      <BigLetter>{letter}</BigLetter>
      <ContentContainer>
        <TitleAndDividerContainer>
          <Title>{title}</Title>
          <Divider></Divider>
        </TitleAndDividerContainer>
        <Text>{text}</Text>
      </ContentContainer>
    </BigLetterTitleContainer>
  );
};

export default BigLetterTitle;
