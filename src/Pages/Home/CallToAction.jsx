import SectionTitle from "../../components/sectionTitle";
import dogImg from "../../assets/bannerGirlPet2.png";

const CallToAction = () => {
  return (
    <div className="w-[90%] mx-auto">
      <SectionTitle
        heading={"Adopt a Companion"}
        subHeading={"Find a Friend, Love Your Life"}
      />
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-gray-200 lg:pr-24">
        <div className="flex flex-col gap-4 items-center lg:items-start px-8 lg:pl-12 justify-start">
          <h1 className="text-2xl font-bold">Adopt Love, Give Hope</h1>
          <p className="text-base text-gray-500">
            Adopting a pet means giving them a future filled with love, joy, and
            a forever home. Be their hero today.
          </p>
          <button className="my-2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition cursor-pointer">
            Adopt a Pet
          </button>
        </div>
        <img src={dogImg} alt="" className="h-[300px] lg:h-[500px]" />
      </div>
    </div>
  );
};

export default CallToAction;
