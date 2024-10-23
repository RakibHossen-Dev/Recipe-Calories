const Header = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between items-center my-8 gap-4 ">
        <div>
          <h3 className="text-3xl font-bold">Recipe Calories</h3>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-5">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Recipes </a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
          </ul>
        </div>
        <div className="flex  items-center gap-3">
          <div className="flex justify-center items-center gap-1 bg-gray-100 p-2 px-4 rounded-full">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
            <input
              className="focus:outline-0 bg-transparent"
              type="search"
              name=""
              id=""
              placeholder="Search "
            />
          </div>
          <i className="fa-regular fa-circle-user bg-green-500 px-3 py-2 cursor-pointer  text-xl rounded-full"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
