import "./MenuFilter.scss";

import FilterList from "./FilterList";

const MenuFilter = ({ categoryList }) => {
  return (
    <div className="menu-filter">
      <div className="menu-filter__filter">
        <FilterList categoryList={categoryList} />
      </div>
      <div className="menu-filter__menu">
        <ul></ul>
      </div>
    </div>
  );
};

export default MenuFilter;
