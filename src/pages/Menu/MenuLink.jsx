import { NavLink } from "react-router-dom";

import "./MenuLink.scss";

const MenuLink = ({ categoryName, activeFilter }) => {
  return (
    <NavLink
      to={`/menu/${categoryName}`}
      className={`filter-list__link ${
        activeFilter === categoryName ? "filter-list__link--active" : ""
      }`}
      name={categoryName}
    >
      {categoryName[0].toUpperCase() + categoryName.slice(1)}
    </NavLink>
  );
};

export default MenuLink;
