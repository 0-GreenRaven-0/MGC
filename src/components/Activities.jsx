import { useState, useRef, useEffect } from "react";
import Slider from "../Utility/Slider";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const images = [
  "https://ik.imagekit.io/greenraven/MGC/Taekwondo.jpg?updatedAt=1752482570952",
  "https://ik.imagekit.io/greenraven/MGC/black-professional-black-basketball-player-action-basketball-court.jpg?updatedAt=1760015843000",
  "https://ik.imagekit.io/greenraven/MGC/Boxing.jpg?updatedAt=1752482578933",
  "https://ik.imagekit.io/greenraven/MGC/Fitness.jpg?updatedAt=1752482573273",
  "https://ik.imagekit.io/greenraven/MGC/Gym.jpg?updatedAt=1752482560391",
  "https://ik.imagekit.io/greenraven/MGC/Gymnastic.jpg?updatedAt=1752482513723",
  "https://ik.imagekit.io/greenraven/MGC/Oriantal.jpg?updatedAt=1752482522477",
  "https://ik.imagekit.io/greenraven/MGC/zumba-fatcamera-c9d4ee824a0f4fda883484f878abc8ae.jpg?updatedAt=1760017731101"
];

const activities = [
  {
    title: "Taekwondo",
    paragraph: "MGC's signature program for all ages. Learn Taekwondo for sport, fitness, and practical self-defense skills.",
    font: "taekwondo"
  },
  {
    title: "Basketball",
    paragraph: "Join our basketball classes on MGC's professional playground, taught by an experienced coach to improve skills and teamwork.",
    font: "basketball"
  },
  {
    title: "Boxing",
    paragraph: "Train with expert coaches to develop strength, agility, and technique in a fun and challenging boxing program.",
    font: 'boxing'
  },
  {
    title: "Fitness",
    paragraph: "Stay in shape, boost your energy, and meet new friends through our dynamic fitness classes suitable for all levels.",
    font: 'fitness'
  },
  {
    title: "Gym",
    paragraph: "A fully equipped gym designed to help you get in shape, build muscle, or pursue bodybuilding goals.",
    font: 'gym'
  },
  {
    title: "Gymnastics",
    paragraph: "Perfect for young learners, our gymnastics classes teach acrobatic skills, flexibility, and confidence that last a lifetime.",
    font:'gymnastic'
  },
  {
    title: "Oriental Dance",
    paragraph: "Learn graceful Middle Eastern dance with fluid hip and torso movements, expressive gestures, and intricate footwork.",
    font: 'oriental-dance'
  },
  {
    title: "Zumba",
    paragraph: "Dance, move, and have fun! Zumba combines energetic music and easy-to-follow choreography for a lively workout.",
    font: 'zumba'
  },
];


const Section3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div  id="activities" className=" relative overflow-x-hidden">

      <Swiper
        modules={[EffectFade, Autoplay, Navigation]}
        effect="fade"
        allowTouchMove={false}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-screen w-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
        
        <div className="absolute inset-0 h-full w-full grid grid-cols-1 lg:grid-cols-2 z-10 text-white text-shadow-2xs pt-25 lg:pt-0">
          <div className="row-span-2 flex flex-col justify-center activity md:w-full lg:text-[1.5rem] lg:pl-10">
            <h1 className={`title ${activities[activeIndex].font}`}>{activities[activeIndex].title}</h1>
            <br />
            <p className="description">
             {activities[activeIndex].paragraph}
            </p>
          </div>
          <div className="row-span-1 flex items-center lg:pt-20">
            <Slider activeIndex={activeIndex} setActiveIndex={setActiveIndex} images={images} />
          </div>
        </div>
      </Swiper>
 
<style>
{`
  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: white;                
    background-color: #16a34a;   /* bright green background */
    padding: 1rem;
    border-radius: 50%;
    font-weight: bold;
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }

  .swiper-button-next:hover::after,
  .swiper-button-prev:hover::after {
    background-color: #15803d;   /* darker green on hover */
  }
`}
</style>

    </div>
  );
};

export default Section3;
