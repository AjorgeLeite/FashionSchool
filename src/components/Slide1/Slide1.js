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
            <img src="/textarrow.png" alt="Arrow Icon" />
          </KnowMoreLink>
        </TextContainer>
        <RectangleTextContainer>
          <PersonContainer>
            <GradientOnPerson src="/Rectangle 22.png" />
            <PersonImg src="/Person2.png" alt="Person" />
          </PersonContainer>

          <Rectangle inView={inView}>
            <RectangleImg src="/Frame 43.png" alt="Rectangle Image" />
          </Rectangle>
        </RectangleTextContainer>
      </RectangleContainer>
    </Slide1Container>
  );
};

export default Slide1;