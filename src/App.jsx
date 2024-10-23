import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";

function App() {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
        <section></section>
      </div>
    </>
  );
}

export default App;
