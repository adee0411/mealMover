import "./App.scss";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Schedule from "./components/Schedule/Schedule";
import Gallery from "./components/Gallery/Gallery";
import Menu from "./components/Menu/Menu";
import ContactFooter from "./components/ContactFooter/ContactFooter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/*<Hero />
      <Schedule />
      <Gallery />
      <Menu />
      <ContactFooter />*/}
      <Footer />
    </div>
  );
}

export default App;
