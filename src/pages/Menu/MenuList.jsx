import "./MenuList.scss";

import MenuCard from "../../components/Menu/MenuCard";

const MenuList = ({ filteredList, view }) => {
  return (
    <ul className={`menu-list menu-list--${view}`}>
      {filteredList.map((food) => {
        return (
          <li className="menu-list__item" key={food.id}>
            <MenuCard
              title={food.title}
              details={food.details}
              price={food.price}
              image={food.image_url}
              id={food.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
