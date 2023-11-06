import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { NavLink } from "react-router-dom";

import "./BottomFilter.scss";

import { useSelector } from "react-redux";
import { MENU_ICONS } from "../../data/utils";
import { BiFoodMenu } from "react-icons/bi/index";

const BottomFilter = ({ isVisible }) => {
  const activeFilter = useParams().filter;

  const categoryList = Object.keys(
    useSelector((state) => state.menuFilter.allMenu)
  );

  return (
    <ul className={`filter-list--bottom ${isVisible ? "slide-up" : ""}`}>
      <li className="filter-list--bottom__item">
        <NavLink
          to="/menu/osszes"
          className={`filter-list--bottom__link ${
            activeFilter === "osszes" ? "filter-list--bottom__link--active" : ""
          }`}
          name="osszes"
        >
          <span className="icon">
            <BiFoodMenu />
          </span>
          <span className="title">Összes</span>
        </NavLink>
      </li>
      {categoryList.map((category) => {
        return (
          <li className="filter-list--bottom__item" key={category}>
            <NavLink
              to={`/menu/${category}`}
              className={`filter-list--bottom__link ${
                activeFilter === category
                  ? "filter-list--bottom__link--active"
                  : ""
              }`}
              name={category}
            >
              <span className="icon">{MENU_ICONS[category]}</span>
              <span className="title">
                {category[0].toUpperCase() + category.slice(1)}
              </span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default BottomFilter;
