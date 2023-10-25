import "./App.scss";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/Home/HomePage";
import MenuPage from "./pages/Menu/MenuPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/*<HomePage />*/}
      <MenuPage />
    </div>
  );
}

export default App;
