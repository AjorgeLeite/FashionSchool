import {
  KnowMoreLink,
  RectangleContainer,
  TextContainer,
  TextContent,
  Title,
  RectangleTextContainer,
  PersonContainer,
} from "./Slide1.styles";
import {
  Rectangle,
  Slide1Container,
  RectangleImg,
  PersonImg,
  GradientOnPerson,
} from "./Slide1.styles";
import { useInView } from "react-intersection-observer";

const Slide1 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Slide1Container ref={ref}>
      <RectangleContainer>
        <TextContainer>
          <Title inView={inView}>FROM SKETCH TO SUCCESS</Title>
          <TextContent inView={inView}>
            Unleash your creativity and refine your fashion sense at [Name of
            Fashion School]! We are a fashion education powerhouse, igniting the
            talents of aspiring designers and industry leaders.
          </TextContent>
          <KnowMoreLink inView={inView}>
            Know more
            <img src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/textarrow.png?raw=true" alt="Arrow Icon" />
          </KnowMoreLink>
        </TextContainer>
        <RectangleTextContainer>
          <PersonContainer>
            <GradientOnPerson src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/Rectangle%2022.png?raw=true" />
            <PersonImg src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/Person2.png?raw=true" alt="Person" />
          </PersonContainer>

          <Rectangle inView={inView}>
            <RectangleImg src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/Frame%2043.png?raw=true" alt="Rectangle Image" />
          </Rectangle>
        </RectangleTextContainer>
      </RectangleContainer>
    </Slide1Container>
  );
};

export default Slide1;
