import "./Section.scss";

const Section = ({ children, variant, icon, title, description }) => {
  return (
    <section className={`section section--${variant}`}>
      <header className="section__header">
        <h1 className="section__title-wrapper">
          <div className="section__icon">{icon}</div>
          <div className="section__title">
            <span>{title}</span>
          </div>
        </h1>
        <p className="section__description">{description}</p>
      </header>
      <div className="section__content">{children}</div>
    </section>
  );
};

export default Section;
