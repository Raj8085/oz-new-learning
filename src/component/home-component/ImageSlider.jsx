import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

const ImageSlider = () => {
    const data = {
        images: [
            "https://res.cloudinary.com/dhf8eyjee/image/upload/v1742633991/Avrach-Portfolio/pfhtrpa7zdvroou3zkax.png",
            "https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg",
            "https://res.cloudinary.com/dhf8eyjee/image/upload/v1742816878/Avrach-Portfolio/bhnfpxqyqnxyb31zhjm6.png",
            "https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg",
          ],
      };
  return (
    <div>
        <div className="w-full mt-10">
            <div className="px-8 md:px-14 h-60">
              <Swiper
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="h-full w-full"
              >
                {data.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={image}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-full rounded-t-md object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="bg-white w-full h-14 rounded-md"></div>
          </div>
    </div>
  )
}

export default ImageSlider