import { KnowMoreLink } from "../HeadSlide/HeadSlide.styles";
import {
  OvalContainer,
  Slide2Container,
  Title,
  VerticalText,
  Text,
  Divider,
  Text2,
  FashionImg,
  TextContent,
  TextContainer,
  TitleBig,
  ImageTextContainer,
  ContentContainer,
  NavigationContainer,
  PrevNextButton,
  PrevNextButtonContainer,
  SeeAllButton,
} from "./Fashion.styles";
import { useInView } from "react-intersection-observer";

const Fashion = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Slide2Container ref={ref}>
      <OvalContainer src="https://raw.githubusercontent.com/AjorgeLeite/FashionSchool/main/public/Oval.png"></OvalContainer>
      <ContentContainer>
        <VerticalText>
          <Title>Design Technician</Title>
          <Text>Professional course</Text>
          <Divider />
          <Text2>2 Years</Text2>
        </VerticalText>
        <ImageTextContainer>
          <FashionImg
            src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/moda.png?raw=true"
            inView={inView}
            alt="moda"
          />
          <TextContainer>
            <TitleBig inView={inView}>FASHION DESIGN</TitleBig>
            <TextContent inView={inView}>
              Our comprehensive curriculum blends technical skills like draping
              and patternmaking with the visionary guidance you need to develop
              your unique style.
            </TextContent>
            <KnowMoreLink>
              Know more
              <img
                src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/textarrow.png?raw=true"
                alt="Know More"
              ></img>
            </KnowMoreLink>
          </TextContainer>
        </ImageTextContainer>
      </ContentContainer>
      <NavigationContainer>
        <PrevNextButtonContainer>
          <PrevNextButton>
            <img
              src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/arrowleft.png?raw=true"
              alt="Prev"
            />
          </PrevNextButton>
        </PrevNextButtonContainer>
        <PrevNextButtonContainer>
          <PrevNextButton>
            <img
              src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/arrowright.png?raw=true"
              alt="Next"
            />
          </PrevNextButton>
        </PrevNextButtonContainer>
        <SeeAllButton>See all</SeeAllButton>
      </NavigationContainer>
    </Slide2Container>
  );
};

export default Fashion;
