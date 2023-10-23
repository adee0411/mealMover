import "./Menu.scss";
import Section from "../UI/Section";
import MenuCard from "./MenuCard";

import { MdOutlineRestaurantMenu } from "react-icons/md/index";

//import getRandomRecipes from "../../data/menu";

import Image from "../../assets/images/pexels-engin-akyurt-1437267.jpg";
const Menu = () => {
  const getRandomRecipes = (query) => {
    const recipe = fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
    )
      .then((data) => data.json())
      .then(console.log);

    return recipe;
  };

  getRandomRecipes("pasta");
  return (
    <Section
      variant="light"
      title="Our menu"
      description="Our signature dishes are prepared on-site by our experienced chefs, who bring their unique flair and expertise to every meal."
      icon={<MdOutlineRestaurantMenu />}
    >
      <ul className="menu">
        <li>
          <MenuCard
            title="Pasta Classic"
            ingredients="Two meatballs, onion, pickles, cabbage, sauce, salad, bun, onion"
            price="14.99"
            image={Image}
          />
        </li>
      </ul>
    </Section>
  );
};

export default Menu;
