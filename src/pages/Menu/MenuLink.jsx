import "./MenuLink.scss";

const MenuLink = ({ categoryName, activeFilter, onHandleFilterChange }) => {
  return (
    <a
      href="#"
      className={`filter-list__link ${
        activeFilter === categoryName ? "filter-list__link--active" : ""
      }`}
      name={categoryName}
      onClick={onHandleFilterChange}
    >
      {categoryName[0].toUpperCase() + categoryName.slice(1)}
    </a>
  );
};

export default MenuLink;
