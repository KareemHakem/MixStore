import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { swiperID } from "../../assets/swiperImg";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { styleSwiper } from "./style";
import Button from "../../commons/Button";
import "./style.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperHome = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        style={styleSwiper}
      >
        {swiperID.map((swiper) => (
          <SwiperSlide
            key={swiper.id}
            style={{
              opacity: " 0.90",
              backgroundImage: `url(${swiper.image})`,
            }}
            className="swiper_slider"
          >
            <div className="btn_text_swiper">
              <h1>Hello to My Website</h1>
              <Button margin={10} text="See More" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default SwiperHome;
