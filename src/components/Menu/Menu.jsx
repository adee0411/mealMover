import "./Menu.scss";
import Section from "../UI/Section";
import MenuCard from "./MenuCard";

import { MdOutlineRestaurantMenu } from "react-icons/md/index";

import Image from "../../assets/images/pexels-engin-akyurt-1437267.jpg";

import menu from "../../data/menu";

const Menu = () => {
  const foods = Object.values(menu);

  return (
    <Section
      variant="light"
      title="Our menu"
      description="Our signature dishes are prepared on-site by our experienced chefs, who bring their unique flair and expertise to every meal."
      icon={<MdOutlineRestaurantMenu />}
    >
      <ul className="menu">
        {foods.map((category, index) => {
          const firstOfCategory = category[0];
          return (
            <li key={index}>
              <MenuCard
                title={firstOfCategory.title}
                details={firstOfCategory.details}
                price={firstOfCategory.price}
                image={firstOfCategory.image_url}
              />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Menu;
