import SectionTitle from "../../components/sectionTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PetCard from "../../components/PetCard";

const FeaturedPets = () => {
  const [pets, setpets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/pets")
      .then((res) => res.json())
      .then((data) => {
        setpets(data.slice(0, 8));
      });
  }, []);

  return (
    <div>
      <SectionTitle
        heading={"Featured Pets"}
        subHeading={"Choose Your Beloved Pets from the list below."}
      />
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet}></PetCard>
        ))}
      </div>
      <div className="flex justify-center py-10" data-aos="fade-in">
        <Link to="/petListing">
          <button className="bg-red-500 py-2 px-3 text-white text-lg font-bold rounded-lg transform transition duration-300 ease-in-out  hover:scale-105 cursor-pointer">
            All Pets
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPets;
