import { useState } from "react";

import "./FilterList.scss";

import MenuLink from "./MenuLink";

const FilterList = ({ categoryList }) => {
  const [activeLink, setActiveLink] = useState("All");

  const handleLinkChange = (e) => {
    e.preventDefault();
    const linkName = e.target.name;
    console.log(linkName);

    setActiveLink(linkName);
  };

  return (
    <ul className="filter-list">
      <li className="filter-list__item">
        <a
          href="#"
          className={`filter-list__link ${
            activeLink === "All" ? "filter-list__link--active" : ""
          }`}
          name="All"
          onClick={handleLinkChange}
        >
          All
        </a>
      </li>
      {categoryList.map((category) => {
        const capitalizedCategoryName =
          category[0].toUpperCase() + category.slice(1);
        return (
          <li className="filter-list__item">
            <MenuLink
              categoryName={capitalizedCategoryName}
              activeLink={activeLink}
              onHandleLinkChange={handleLinkChange}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FilterList;
