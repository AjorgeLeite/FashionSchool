import "./App.css";
import BigLetterTitle from "./components/BigLetterTitle/BigLetterTitle";
import Navbar from "./components/Nav/Nav";
import Slider from "./components/Slider/Slider";
import Fashion from "./components/Fashion/Fashion";
import Footer from "./components/Footer/Footer";
import SewMore from "./components/SewMore/SewMore";
import Erasmus from "./components/Erasmus/Erasmus";
import Blog from "./components/Blog/Blog";
import { SeeAllBtn } from "./components/BigLetterTitle/BigLetterTitle.styles";
import { useInView } from "react-intersection-observer";
function App() {

  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  
  return (
    <div className="App" ref={ref}>
      <Navbar />
      <Slider></Slider>
      <BigLetterTitle letter="C" title="COURSES" text="Our offers" />
      <Fashion/>
      <BigLetterTitle
        letter="E"
        title="ERASMUS+"
        text="International courses"
      />
      <Erasmus />
      <div className="BlogTitle">
        <BigLetterTitle letter="B" title="BLOG" text="Latest news" />
        <SeeAllBtn inView={inView}>SEE ALL</SeeAllBtn>
      </div>
      <Blog />
      <SewMore />
      <Footer />
    </div>
  );
}

export default App;
