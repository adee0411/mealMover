import "./MenuLink.scss";

const MenuLink = ({ categoryName, activeLink, onHandleLinkChange }) => {
  return (
    <a
      href="#"
      className={`filter-list__link ${
        activeLink === "all" ? "filter-list__link--active" : ""
      }`}
      name={categoryName}
      onClick={onHandleLinkChange}
    >
      {categoryName}
    </a>
  );
};

export default MenuLink;
