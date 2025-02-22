const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="my-4 md:my-8 border-y-2 border-gray-400 w-1/2 mx-auto p-2">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-3">
        {heading}
      </h1>
      <p className="text-md font-md text-center text-gray-500">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
