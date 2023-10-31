import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import "./MenuFilter.scss";

import FilterList from "./FilterList";
import MenuList from "./MenuList";

import { GiFullPizza } from "react-icons/gi/index";

const MenuFilter = ({ categoryList }) => {
  const [isMenuLoading, setIsMenuLoading] = useState(true);
  const activeFilter = useParams().filter;

  /*const filteredList = Object.values(
    useSelector((state) => state.menuFilter.filteredMenu)
  ).flat();*/

  const menuList = useSelector((state) => state.menuFilter.allMenu);
  console.log(activeFilter);
  const filteredList =
    activeFilter === "osszes"
      ? Object.values(menuList).flat()
      : menuList[activeFilter];

  // Faking fetch delay
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredList);
    }, 2000);
  }).then(() => {
    setIsMenuLoading(false);
  });

  return (
    <div className="menu-filter">
      {/* Filter Link list */}
      <div className="menu-filter__filter">
        <FilterList categoryList={categoryList} />
      </div>
      {/* Filtered Menu List */}
      <div className="menu-filter__menu">
        {isMenuLoading && (
          <div className="loading">
            {<GiFullPizza className="loading__icon" />}
            <p className="loading__text">Loading...</p>
          </div>
        )}
        {!isMenuLoading && filteredList && (
          <MenuList filteredList={filteredList} />
        )}
      </div>
    </div>
  );
};

export default MenuFilter;
