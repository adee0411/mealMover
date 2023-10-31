import { useSelector, useDispatch } from "react-redux";
import { setActiveFilter } from "../../store/menuFilterSlice";
import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";

import "./FilterList.scss";

import MenuLink from "./MenuLink";

const FilterList = ({ categoryList }) => {
  //const activeFilter = useSelector((state) => state.menuFilter.activeFilter);
  const activeFilter = useParams().filter;
  //const dispatch = useDispatch();

  /*const handleFilterChange = (e) => {
    const linkName = e.target.name;
    dispatch(setActiveFilter(linkName));
  };*/

  return (
    <ul className="filter-list">
      <li className="filter-list__item">
        <NavLink
          to="/menu/osszes"
          className={`filter-list__link ${
            activeFilter === undefined ? "filter-list__link--active" : ""
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
