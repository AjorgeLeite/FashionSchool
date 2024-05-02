import { KnowMoreLink } from "../HeadSlide/HeadSlide.styles";
import {
  ErasmusContainer,
  ErasmusTextKnowMoreContainer,
  ErasmusContentContainer,
  ErasmusImg,
  ErasmusText,
} from "./Erasmus.styles";
import { useInView } from "react-intersection-observer";

const Erasmus = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <ErasmusContainer ref={ref}>
      <ErasmusContentContainer inView={inView}>
        <ErasmusText inView={inView}>
          Unleash your creativity and refine your fashion sense at [Name of
          Fashion School]! We are a fashion education powerhouse, igniting the
          talents of aspiring designers and industry leaders. Our comprehensive
          curriculum blends technical skills like draping and patternmaking with
          the visionary guidance you need to develop your unique style. In our
          collaborative studios, you'll gain hands-on experience while learning
          from renowned fashion professionals. Join our vibrant community and
          transform your passion for fashion into a thriving career.
        </ErasmusText>
        <ErasmusTextKnowMoreContainer>
          <ErasmusText inView={inView}>
            Choose from our specialized programs in Fashion Design, Fashion
            Business, or Fashion Marketing to tailor your education to your
            specific goals. Benefit from our extensive industry network, with
            opportunities for internships, guest lectures, and potential job
            placements with leading fashion houses.
          </ErasmusText>
          <KnowMoreLink>
            Know More
            <img
              src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/textarrow.png?raw=true"
              alt="Know More"
            />
          </KnowMoreLink>
        </ErasmusTextKnowMoreContainer>
      </ErasmusContentContainer>
      <ErasmusImg src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/erasmus.png?raw=true" />
    </ErasmusContainer>
  );
};
export default Erasmus;
