import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import FeaturedPets from "./FeaturedPets";
import PetCategories from "./PetCategories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>POWTOPIA | Home</title>
      </Helmet>
      <Banner />
      <PetCategories />
      <FeaturedPets />
      <CallToAction />
    </div>
  );
};

export default Home;
