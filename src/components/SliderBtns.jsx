import React from "react";
import { useSwiper } from "swiper/react";

const SliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <i className={`fa-solid fa-chevron-left ${iconsStyles}`}></i>
      </button>

      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <i className={`fa-solid fa-chevron-right ${iconsStyles}`}></i>
      </button>
    </div>
  );
};

export default SliderBtns;
