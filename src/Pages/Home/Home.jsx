import Banner from "./Banner";
import CallToAction from "./CallToAction";
import FeaturedPets from "./FeaturedPets";
import PetCategories from "./PetCategories";

const Home = () => {
  return (
    <div>
      <Banner />
      <PetCategories />
      <FeaturedPets />
      <CallToAction />
    </div>
  );
};

export default Home;
