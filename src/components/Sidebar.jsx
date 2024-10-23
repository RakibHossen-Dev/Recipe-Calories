import PropTypes from "prop-types";

const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalorie,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="md:w-1/3 border rounded p-2 text-gray-600">
      {/* Want to cook */}
      <div>
        <h3 className="text-center font-bold text-2xl mb-3 mt-1 text-gray-800">
          Want to cook : {recipeQueue.length}
        </h3>
        <hr className="w-11/12 mx-auto" />
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recipeQueue.map((recipe, idx) => (
                <tr key={idx} className="hover">
                  <th>{idx + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(recipe.recipe_id);
                        calculateTimeAndCalorie(
                          recipe.preparing_time,
                          recipe.calories
                        );
                      }}
                      className="py-1 px-3 bg-green-400 text-black rounded-2xl"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* current coking */}
      <div className="mt-5">
        <h3 className="text-center font-bold text-2xl mb-3 mt-1 text-gray-800">
          Currently cooking : {preparedRecipe.length}
        </h3>
        <hr className="w-11/12 mx-auto" />
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {preparedRecipe.map((recipe, idx) => (
                <tr key={idx} className="hover">
                  <th>{idx + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                </tr>
              ))}

              <tr>
                <th></th>
                <th></th>
                <th>Total Time = {totalTime}</th>
                <th>Total Calories = {totalCalories}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array,
  handleRemove: PropTypes.func,
  preparedRecipe: PropTypes.array,
  calculateTimeAndCalorie: PropTypes.func,
  totalTime: PropTypes.func,
  totalCalories: PropTypes.func,
};

export default Sidebar;
