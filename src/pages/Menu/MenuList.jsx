import MenuCard from "../../components/Menu/MenuCard";

const MenuList = ({ filteredList }) => {
  return (
    <ul>
      {filteredList.map((food) => {
        return (
          <li>
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
