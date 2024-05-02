import { useState } from "react";
import { Slider2Container } from "./Slider2.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Slide2 from "../Fashion/Fashion";
import {
  NavigationContainer,
  PrevNextButton,
  PrevNextButtonContainer,
  SeeAllButton,
} from "../Fashion/Fashion.styles";

const Slider2 = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <>
      <Slider2Container>
        <Swiper
          pagination={false}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>
        </Swiper>
      </Slider2Container>
      <NavigationContainer>
        <PrevNextButtonContainer onClick={goPrev}>
          <PrevNextButton>
            <img src="/arrowleft.png" width={"50px"} height={"50px"} />
          </PrevNextButton>
        </PrevNextButtonContainer>
        <PrevNextButtonContainer onClick={goNext}>
          <PrevNextButton>
            <img src="/arrowright.png" width={"50px"} height={"50px"} />
          </PrevNextButton>
        </PrevNextButtonContainer>
        <SeeAllButton>See all</SeeAllButton>
      </NavigationContainer>
    </>
  );
};

export default Slider2;
