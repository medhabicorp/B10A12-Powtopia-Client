// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import catImg from "../../assets/cat.png";
import dogImg from "../../assets/dog.png";
import rabbitImg from "../../assets/rabbit.png";
import fishImg from "../../assets/fish.png";
import SectionTitle from "../../components/sectionTitle";

const PetCategories = () => {
  return (
    <div className="w-[90%] mx-auto">
      <SectionTitle
        heading={"Explore Pet Categories"}
        subHeading={
          "Explore pet categories- Cats, Dogs, Rabbits, Birds, and more to adopt your love."
        }
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide className="cursor-pointer">
          <img src={catImg} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-12 text-white">
            cat
          </h3>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img src={dogImg} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-12 text-white">
            dog
          </h3>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img src={rabbitImg} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-12 text-white">
            rabbit
          </h3>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img src={fishImg} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-12 text-white">
            fish
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PetCategories;
