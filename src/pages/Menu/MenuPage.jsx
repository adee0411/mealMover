import "./MenuPage.scss";

import PageHeader from "../../components/PageHeader/PageHeader";
import MenuFilter from "./MenuFilter";

import menu from "../../data/menu";

const MenuPage = () => {
  const categoryList = Object.keys(menu);

  return (
    <>
      <PageHeader
        title="Menu"
        description="Welcome to our mouthwatering blog, where we take you on a journey through the vibrant and delectable world of street food."
      />
      <MenuFilter categoryList={categoryList} />
    </>
  );
};

export default MenuPage;
