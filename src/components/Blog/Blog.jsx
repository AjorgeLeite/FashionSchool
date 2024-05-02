import { StyledButton } from "../Nav/Nav.styles";
import {
  Text,
  TextFrame,
  Title,
  Date,
  BlogContainer,
  Image1Container,
  Image2Container,
  Image3Container,
  BlogBg,
  SeeAllBtnBottom,
} from "./Blog.styles";
import { useInView } from "react-intersection-observer";

const Blog = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <BlogContainer ref={ref}>
      <BlogBg src="/blogbg.png" />
      <Image1Container inView={inView}>
        <img src="/img1.jpg" />
        <TextFrame inView={inView}>
          <Date>20 jun 2024</Date>
          <Title>Specialization Options</Title>
          <Text>Choose from our specialized programs in Fashion Design</Text>
        </TextFrame>
      </Image1Container>
      <Image2Container inView={inView}>
        <img src="/img2.png" />
        <TextFrame inView={inView}>
          <Date>20 jun 2024</Date>
          <Title>Fashion Partnership</Title>
          <Text>Meet our students at this new fashion event in Barcelona</Text>
        </TextFrame>
      </Image2Container>
      <Image3Container inView={inView}>
        <img src="/img3.png" />
        <TextFrame inView={inView}>
          <Date>20 jun 2024</Date>
          <Title>Beyond the Classroom</Title>
          <Text>Expand your horizons with workshops, fashion shows</Text>
        </TextFrame>
      </Image3Container>
      <SeeAllBtnBottom>
        <StyledButton>SEE ALL</StyledButton>
      </SeeAllBtnBottom>
    </BlogContainer>
  );
};

export default Blog;
