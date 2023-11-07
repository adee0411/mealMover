import { useSelector } from "react-redux";

import "./Menu.scss";
import Section from "../UI/Section";
import MenuCard from "./MenuCard";

import { MdOutlineRestaurantMenu } from "react-icons/md/index";

const Menu = () => {
  const foods = Object.values(useSelector((state) => state.menuFilter.allMenu));
  console.log(foods);

  return (
    <Section
      variant="light"
      title="Our menu"
      description="Our signature dishes are prepared on-site by our experienced chefs, who bring their unique flair and expertise to every meal."
      icon={<MdOutlineRestaurantMenu />}
    >
      <ul className="menu">
        {foods.map((category) => {
          const firstOfCategory = category[0];
          return (
            <li key={firstOfCategory.id}>
              <MenuCard
                title={firstOfCategory.title}
                details={firstOfCategory.details}
                price={firstOfCategory.price}
                image_url={firstOfCategory.image_url}
                id={firstOfCategory.id}
              />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Menu;
