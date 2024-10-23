import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Recipes = ({ addRecipeToQueue }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("../../public/recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        {recipes.map((recipe) => (
          <div
            key={recipe.recipe_id}
            className="card bg-base-100  shadow-xl border rounded-lg p-2"
          >
            <figure>
              <img
                className="w-full lg:h-56 h-72 rounded-2xl p-3"
                src={recipe.recipe_image}
                alt="Shoes"
              />
            </figure>
            <div className="px-2 py-5 space-y-2">
              <h2 className="card-title">{recipe.recipe_name}</h2>
              <p className="text-gray-500">{recipe.short_description}</p>
              <hr />
              <h3 className="text-lg font-medium">
                Ingredients : {recipe.ingredients.length}
              </h3>

              <ul>
                {recipe.ingredients.map((item, idx) => (
                  <li className="list-disc ml-8 text-gray-500" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>

              <hr />
              <div className="flex justify-between items-center py-2 text-gray-500">
                <p className="flex justify-center items-center gap-1">
                  <i className="fa-regular fa-clock"></i>
                  <span>{recipe.preparing_time} minutes </span>
                </p>
                <p className="flex justify-center items-center gap-1">
                  <i className="fa-solid fa-fire-flame-curved"></i>
                  <span>{recipe.calories}</span>
                  calories
                </p>
              </div>
              <div className="card-actions">
                <button
                  onClick={() => addRecipeToQueue(recipe)}
                  className="px-6 py-2 rounded-full bg-green-500 font-medium hover:bg-green-400 ease-linear duration-200"
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
Recipes.propTypes = {
  addRecipeToQueue: PropTypes.func,
};
export default Recipes;
