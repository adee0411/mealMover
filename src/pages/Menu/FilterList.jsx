import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";

import "./FilterList.scss";

import MenuLink from "./MenuLink";
import { useSelector } from "react-redux";

const FilterList = () => {
  const activeFilter = useParams().filter;

  const categoryList = Object.keys(
    useSelector((state) => state.menuFilter.allMenu)
  );

  return (
    <ul className={`filter-list`}>
      <li className="filter-list__item">
        <NavLink
          to="/menu/osszes"
          className={`filter-list__link ${
            activeFilter === "osszes" ? "filter-list__link--active" : ""
          }`}
          name="osszes"
        >
          Összes
        </NavLink>
      </li>
      {categoryList.map((category) => {
        return (
          <li className="filter-list__item" key={category}>
            <MenuLink categoryName={category} activeFilter={activeFilter} />
          </li>
        );
      })}
    </ul>
  );
};

export default FilterList;
