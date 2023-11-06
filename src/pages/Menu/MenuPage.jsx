import "./MenuPage.scss";

import PageHeader from "../../components/PageHeader/PageHeader";
import MenuFilter from "./MenuFilter";

const MenuPage = () => {
  return (
    <>
      <PageHeader
        title="Menü"
        description="Welcome to our mouthwatering blog, where we take you on a journey through the vibrant and delectable world of street food."
      />
      <MenuFilter />
    </>
  );
};

export default MenuPage;
