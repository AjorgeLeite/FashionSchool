import {
  KnowMoreLink,
  RectangleContainer,
  TextContainer,
  TextContent,
  Title,
  RectangleTextContainer,
  PersonContainer,
} from "./HeadSlide.styles";
import {
  Rectangle,
  HeadSlideContainer,
  RectangleImg,
  PersonImg,
  GradientOnPerson,
} from "./HeadSlide.styles";
import { useInView } from "react-intersection-observer";

const Slide1 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <HeadSlideContainer ref={ref}>
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
            <img
              src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/textarrow.png?raw=true"
              alt="Arrow Icon"
            />
          </KnowMoreLink>
        </TextContainer>
        <RectangleTextContainer>
          <PersonContainer>
            <GradientOnPerson src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/Rectangle%2022.png?raw=true" />
            <PersonImg
              src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/Person2.png?raw=true"
              alt="Person"
            />
          </PersonContainer>

          <Rectangle inView={inView}>
            <RectangleImg
              src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/Frame%2043.png?raw=true"
              alt="Rectangle Image"
            />
          </Rectangle>
        </RectangleTextContainer>
      </RectangleContainer>
    </HeadSlideContainer>
  );
};

export default Slide1;
