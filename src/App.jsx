import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setpreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipeToQueue = (rescipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === rescipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, rescipe]);
    } else {
      alert("Recipe already exists in the queue");
    }
  };

  const handleRemove = (id) => {
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setpreparedRecipe([...preparedRecipe, deletedRecipe]);
  };

  const calculateTimeAndCalorie = (time, calorie) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calorie);
  };

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
        <section className="flex flex-col md:flex-row gap-5">
          <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
          <Sidebar
            handleRemove={handleRemove}
            recipeQueue={recipeQueue}
            preparedRecipe={preparedRecipe}
            calculateTimeAndCalorie={calculateTimeAndCalorie}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></Sidebar>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
