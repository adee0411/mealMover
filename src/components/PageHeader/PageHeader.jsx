import "./PageHeader.scss";

const PageHeader = ({ children, title, description }) => {
  return (
    <div className="page-header">
      <div className="page-header__bg"></div>
      <div className="page-header__content">
        {" "}
        <h1 className="page-header__title">
          <span className="page-header__title">{title}</span>
        </h1>
        <p className="page-header__description">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
