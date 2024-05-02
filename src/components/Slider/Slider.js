import { SliderContainer } from "./Slider.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Slide1 from "../Slide1/Slide1";
import "./swiper.css";

const Slider = () => {
  return (
    <SliderContainer>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
