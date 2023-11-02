import { Outlet } from "react-router";

import "./RootLayout.scss";

import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
