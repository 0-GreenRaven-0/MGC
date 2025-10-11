import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const Slider = ({ activeIndex, setActiveIndex, images }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 2.5,
          slideShadows: true,
        }}
        grabCursor={true}
        navigation={true}
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            className={`${i === activeIndex ? 'scale-100' : 'scale-85'}`}
          >
            <img
              src={src}
              className="w-full h-48 object-cover rounded-lg border-2 border-white"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            background-color: #16a34a; /* green background */
            width: 3rem;  /* slightly smaller */
            height: 3rem; /* slightly smaller */
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background-color: #15803d; /* darker green on hover */
            transform: scale(1.1);
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 1.5rem;  /* bigger arrow icons */
            color: white;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default Slider;
