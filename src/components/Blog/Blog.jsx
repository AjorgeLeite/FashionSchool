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
      <BlogBg src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/blogbg.png?raw=true" />
      <Image1Container inView={inView}>
        <img src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/img1.jpg?raw=true" />
        <TextFrame inView={inView}>
          <Date>20 jun 2024</Date>
          <Title>Specialization Options</Title>
          <Text>Choose from our specialized programs in Fashion Design</Text>
        </TextFrame>
      </Image1Container>
      <Image2Container inView={inView}>
        <img src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/img2.png?raw=true" />
        <TextFrame inView={inView}>
          <Date>20 jun 2024</Date>
          <Title>Fashion Partnership</Title>
          <Text>Meet our students at this new fashion event in Barcelona</Text>
        </TextFrame>
      </Image2Container>
      <Image3Container inView={inView}>
        <img src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/img3.png?raw=true" />
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
