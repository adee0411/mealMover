import { useDispatch, useSelector } from "react-redux";
import { toggleNavigation } from "../../store/navigationSlice";

import { MdRestaurantMenu } from "react-icons/md/index";
import { CiPizza, CiBurger } from "react-icons/ci/index";
import { PiBowlFoodLight } from "react-icons/pi/index";
import { GiTacos, GiBarbecue } from "react-icons/gi/index";

import "./NavMenu.scss";
import { AiOutlineClose } from "react-icons/ai/index";
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

  const toggleNavMenu = () => {
    dispatach(toggleNavigation());
  };

  return (
    <div
      className={`menu-wrapper ${isNavMenuOpen ? "menu-wrapper--open" : ""}`}
    >
      <header className="menu-wrapper__header">
        <Logo />
        <div className="btn-wrapper">
          <button onClick={toggleNavMenu}>
            <AiOutlineClose />
          </button>
        </div>
      </header>
      <div>
        <ul>
          <li>
            <button>
              <span>
                <MdRestaurantMenu />
              </span>
              <span>Menu</span>
            </button>
            <ul>
              {menuCategories.map((category) => {
                return (
                  <li>
                    <span>{MENU_ICONS[category]}</span>
                    <span>{category}</span>
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
