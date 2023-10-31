import { useDispatch, useSelector } from "react-redux";
import { toggleNavigation } from "../../store/navigationSlice";
import { useState } from "react";

import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai/index";
import { MdRestaurantMenu } from "react-icons/md/index";
import { CiPizza, CiBurger } from "react-icons/ci/index";
import { PiBowlFoodLight } from "react-icons/pi/index";
import { GiTacos, GiBarbecue } from "react-icons/gi/index";
import { BiChevronDown } from "react-icons/bi/index";

import "./NavMenu.scss";

import Logo from "../UI/Logo";

const MENU_ICONS = {
  pizza: <CiPizza />,
  hamburger: <CiBurger />,
  tészta: <PiBowlFoodLight />,
  taco: <GiTacos />,
  bbq: <GiBarbecue />,
};

const NavMenu = () => {
  const dispatach = useDispatch();
  const isNavMenuOpen = useSelector((state) => state.navigation.isNavOpen);
  const menuCategories = Object.keys(
    useSelector((state) => state.menuFilter.allMenu)
  );

  const [isMenuAccordionOpen, setIsMenuAccordionOpen] = useState(false);

  const toggleMenuAccordion = () => {
    setIsMenuAccordionOpen((prevState) => !prevState);
  };

  const toggleNavMenu = () => {
    dispatach(toggleNavigation());
  };

  const closeToggles = () => {
    toggleMenuAccordion();
    toggleNavMenu();
  };

  return (
    <div
      className={`nav-menu-wrapper ${
        isNavMenuOpen ? "nav-menu-wrapper--open" : ""
      }`}
    >
      <header className="nav-menu-wrapper__header">
        <Logo />
        <div className="close-btn-wrapper">
          <button className="close-btn-wrapper__btn" onClick={toggleNavMenu}>
            <AiOutlineClose />
          </button>
        </div>
      </header>
      <div className="nav-menu-wrapper__menu">
        <ul className="nav-menu-wrapper__menu-list">
          <li className="nav-menu-wrapper__menu-item">
            {/** Accordion Button */}
            <div className="accordion-btn-wrapper">
              {" "}
              <button className="accordion-btn" onClick={toggleMenuAccordion}>
                <span className="accordion-btn__start-icon">
                  <MdRestaurantMenu />
                </span>
                <span className="accordion-btn__title">Menü</span>
                <span
                  className={`accordion-btn__state-icon ${
                    isMenuAccordionOpen ? "accordion-btn__state-icon--open" : ""
                  }`}
                >
                  <BiChevronDown />
                </span>
              </button>
            </div>
            {/* Accordion Sub-menu */}
            <ul
              className={`accordion-sub-menu ${
                isMenuAccordionOpen ? "accordion-sub-menu--open" : ""
              }`}
            >
              {menuCategories.map((category) => {
                return (
                  <li className="accordion-sub-menu__item" key={category}>
                    <Link
                      to={`/menu/${category}`}
                      className="accordion-sub-menu__link"
                      onClick={closeToggles}
                    >
                      <span className="accordion-sub-menu__start-icon">
                        {MENU_ICONS[category]}
                      </span>
                      <span className="accordion-sub-menu__title">
                        {category[0].toUpperCase() + category.slice(1)}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
