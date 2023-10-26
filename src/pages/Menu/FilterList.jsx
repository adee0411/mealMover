import { useSelector, useDispatch } from "react-redux";
import { setActiveFilter } from "../../store/menuFilterSlice";

import "./FilterList.scss";

import MenuLink from "./MenuLink";

const FilterList = ({ categoryList }) => {
  const activeFilter = useSelector((state) => state.menuFilter.activeFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    e.preventDefault();
    const linkName = e.target.name;
    dispatch(setActiveFilter(linkName));
  };

  return (
    <ul className="filter-list">
      <li className="filter-list__item">
        <a
          href="#"
          className={`filter-list__link ${
            activeFilter === "all" ? "filter-list__link--active" : ""
          }`}
          name="all"
          onClick={handleFilterChange}
        >
          All
        </a>
      </li>
      {categoryList.map((category) => {
        return (
          <li className="filter-list__item" key={category}>
            <MenuLink
              categoryName={category}
              activeFilter={activeFilter}
              onHandleFilterChange={handleFilterChange}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FilterList;
