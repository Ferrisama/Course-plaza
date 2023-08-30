import CourseImg from "../../assets/Course.png";

const LandingSection = () => {
  return (
    <section
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url('${CourseImg.src}')` }}
    >
      <div className="mt-16 h-screen w-full absolute top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-90">
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <div className="w-full md:w-1/2 md:mr-8">
            <h2 className="text-4xl font-bold mb-4 text-cyan-500">
              <span className="text-cyan">C</span>ourses
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eget eros malesuada, ullamcorper enim tincidunt,
              pellentesque neque. Cras tincidunt tellus elit, in ornare sem
              pellentesque id. Proin diam magna, accumsan eu purus quis,
              vulputate hendrerit velit. Phasellus convallis elit vel quam
              imperdiet imperdiet et id leo.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="/keyboards"
                className="border border-cyan-400 bg-cyan-900 hover:border-blue-900 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg md:mb-0 transition duration-300 ease-in-out"
              >
                Home
              </a>
              <a
                href="/register"
                className="border border-gray-400 hover:border-gray-900 text-blue-200 py-3 px-6 rounded-md font-bold text-lg transition duration-300 ease-in-out"
              >
                Progress
              </a>
            </div>
            <div className="flex flex-col items-center mt-10">
              <input
                type="text"
                placeholder="Search courses"
                className="rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LandingSection };
