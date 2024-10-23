const Footer = () => {
  return (
    <div>
      <footer className="bg-green-100 py-10 mt-10 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between items-center w-11/12 mx-auto text-center lg:text-start">
          <div>
            <div>
              <h3 className="text-3xl font-bold">Recipe Calories</h3>
            </div>
            <p className="mt-4 text-Beige">
              Recipe Calories is a tool that provides quick insights into the
              total caloric content of your favorite recipes. It helps you
              manage your dietary intake by calculating calories per serving for
              a healthier meal plan.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <a className="text-3xl  font-extrabold font-lobster mb-4" href="">
              Contact
            </a>
            <div className="flex justify-center items-center gap-2 mb-2">
              <i className="fa-solid fa-phone-volume text-Yellow"></i>
              <p>(BD) 01760558908</p>
            </div>
            <div className="flex justify-center items-center gap-2 mb-2">
              <i className="fa-regular fa-envelope text-Yellow"></i>
              <p>recipecalories@gmail.com</p>
            </div>
            <div className="flex justify-center items-center gap-2 mb-2">
              <i className="fa-solid fa-location-arrow text-Yellow"></i>
              <p>Cumilla Bangladesh</p>
            </div>
            <div className="flex justify-center items-center gap-2 mb-2">
              <i className="fa-solid fa-globe text-Yellow"></i>
              <p>www.recipecalories.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a
              className="text-3xl text-Beige font-extrabold font-lobster mb-4"
              href=""
            >
              Links
            </a>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Menu</a>
            <a href="">Contact</a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a
              className="text-3xl text-Beige font-extrabold font-lobster"
              href=""
            >
              Follow Us
            </a>
            <p className="text-Beige mt-4">
              Follow Us for the latest updates, healthy tips, and delicious
              low-calorie recipes!
            </p>
            <div className="flex justify-center items-center gap-3 mt-3">
              <i className="fa-brands fa-linkedin text-green-600 hover:text-green-400 ease-linear duration-200 text-xl border py-1 px-2 border-Yellow rounded-md"></i>
              <i className="fa-brands fa-x-twitter text-green-600 hover:text-green-400 ease-linear duration-200 text-xl border py-1 px-2 border-Yellow rounded-md"></i>
              <i className="fa-brands fa-instagram text-green-600 hover:text-green-400 ease-linear duration-200 text-xl border py-1 px-2 border-Yellow rounded-md"></i>
              <i className="fa-brands fa-youtube text-green-600 hover:text-green-400 ease-linear duration-200 text-xl border py-1 px-2 border-Yellow rounded-md"></i>
              <i className="fa-brands fa-facebook text-green-600 hover:text-green-400 ease-linear duration-200 text-xl border py-1 px-2 border-Yellow rounded-md"></i>
            </div>
          </div>
        </div>

        <div className="border border-dotted border-green-500 w-11/12 mx-auto my-4"></div>
        <p className="text-sm text-center text-Beige" href="">
          © 2024 <span className="text-green-500">recipecalories</span>. All
          Rights Reserved by Rakib Hossen
        </p>
      </footer>
    </div>
  );
};

export default Footer;
