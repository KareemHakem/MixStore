import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./style.css";

const SwiperForm = () => {
  return (
    <Swiper
      className="swiper_page"
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="swiper_slider">
        <img
          className="img_swiper_page"
          src="https://food-fanatic-res.cloudinary.com/iu/s--uzDDmSC6--/c_thumb,f_auto,g_auto,h_3086,q_auto,w_3086/v1486327268/chocolate-strawberry-milkshakes-photo"
          alt="img"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper_slider">
        <img
          className="img_swiper_page"
          src="https://live.staticflickr.com/65535/48962119157_79048a6f1b_b.jpg"
          alt="img"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper_slider">
        <img
          className="img_swiper_page"
          src="https://aseasyasapplepie.com/wp-content/uploads/2017/01/avocado-strawberry-layered-smoothie-500x500.jpg"
          alt="img"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper_slider">
        <img
          className="img_swiper_page"
          src="https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Ginger-Juice-1-of-1.jpeg"
          alt="img"
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default SwiperForm;
