import { useSelector } from "react-redux";

import "./MenuFilter.scss";

import FilterList from "./FilterList";
import MenuList from "./MenuList";

const MenuFilter = ({ categoryList }) => {
  const filteredList = Object.values(
    useSelector((state) => state.menuFilter.filteredMenu)
  ).flat();
  console.log(filteredList);

  return (
    <div className="menu-filter">
      <div className="menu-filter__filter">
        <FilterList categoryList={categoryList} />
      </div>

      <div className="menu-filter__menu">
        <MenuList filteredList={filteredList} />
      </div>
    </div>
  );
};

export default MenuFilter;
