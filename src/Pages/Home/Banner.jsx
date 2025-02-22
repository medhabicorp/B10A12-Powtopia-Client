import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../assets/bannerImg.jpg";
import bannerImg2 from "../../assets/bannerImg2.png";
import bannerImg3 from "../../assets/bannerImg3.png";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
