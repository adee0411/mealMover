import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router";
import { useInView } from "react-intersection-observer";

import "./MenuFilter.scss";

import FilterList from "./FilterList";
import MenuList from "./MenuList";
import BottomFilter from "./BottomFilter";

import { GiFullPizza } from "react-icons/gi/index";
import { AiOutlineUnorderedList } from "react-icons/ai/index";
import { CiGrid41 } from "react-icons/ci/index";

import { categoryNames } from "../../data/utils";

const MenuFilter = () => {
  const [isMenuLoading, setIsMenuLoading] = useState(true);
  const [activeView, setActiveView] = useState("list");
  const activeFilter = useParams().filter;

  const [ref, inView, entry] = useInView({
    threshold: 0,
  });

  const menuList = useSelector((state) => state.menuFilter.allMenu);
  const filteredList =
    activeFilter === "osszes"
      ? Object.values(menuList).flat()
      : menuList[activeFilter];

  // Faking fetch delay
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredList);
    }, 500);
  }).then(() => {
    setIsMenuLoading(false);
  });

  const handleViewChange = (e) => {
    const buttonName = e.target.closest("button").id;
    setActiveView(buttonName);
  };

  return (
    <div className="menu-filter">
      {/* Filter Link list */}
      <div className="filter" ref={ref}>
        <FilterList />
      </div>
      {/* Filtered Menu List */}
      <div className="menu">
        <div className="menu__header">
          <h2 className="menu__category-name">
            <span>{categoryNames[activeFilter]}</span>
          </h2>
          <div className="menu__view-options-wrapper">
            <button
              className={`view-btn view-btn--list ${
                activeView === "list" ? "active" : ""
              }`}
              id="list"
              onClick={handleViewChange}
            >
              <AiOutlineUnorderedList />
            </button>
            <button
              className={`view-btn view-btn--grid ${
                activeView === "grid" ? "active" : ""
              }`}
              id="grid"
              onClick={handleViewChange}
            >
              <CiGrid41 />
            </button>
          </div>
        </div>
        {isMenuLoading && (
          <div className="loading">
            {<GiFullPizza className="loading__icon" />}
            <p className="loading__text">Loading...</p>
          </div>
        )}
        {!isMenuLoading && filteredList && (
          <MenuList filteredList={filteredList} view={activeView} />
        )}
      </div>
      <BottomFilter isVisible={!inView} />
    </div>
  );
};

export default MenuFilter;
