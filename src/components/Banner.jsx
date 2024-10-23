const Banner = () => {
  return (
    <div
      className="bg-cover bg-center lg:h-screen h-[500px] rounded-xl flex flex-col  justify-center items-center"
      style={{ backgroundImage: "url('/Images/image.png')" }}
    >
      <div className=" lg:w-2/3 w-11/12 text-center mx-auto  space-y-8">
        <h3 className="lg:text-5xl text-3xl text-white font-bold">
          Discover an exceptional cooking class tailored for you!
        </h3>
        <p className="text-white">
          Experience a premium cooking class tailored to your individual
          culinary preferences and expertise. Master advanced techniques with
          personalized instruction, designed to elevate your skills to the next
          level.
        </p>
        <div className="flex justify-center items-center gap-5">
          <button className="py-3 px-6 bg-green-500 rounded-full  font-medium">
            Explore Now
          </button>
          <button className="py-3 px-6 rounded-full border text-white font-medium">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
