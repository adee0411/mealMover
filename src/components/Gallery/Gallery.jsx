import "./Gallery.scss";

import { TfiGallery } from "react-icons/tfi/index";

import Image_1 from "../../assets/images/pexels-adrian-dorobantu-2300031.jpg";
import Image_2 from "../../assets/images/pexels-james-frid-2227960.jpg";
import Image_3 from "../../assets/images/pexels-robin-stickel-70497.jpg";

const Gallery = () => {
  return (
    <section className="section">
      <header className="section__header">
        <h1 className="section__title-wrapper">
          <div className="section__icon">
            <TfiGallery />
          </div>
          <div className="section__title">
            <span>Truck Schedule</span>
          </div>
        </h1>
        <p className="section__description">
          Follow us on social media to stay up-to-date on our location and menu,
          or come visit us in person and discover your new favorite food!
        </p>
      </header>
      <div className="gallery">
        <div className="gallery__image-cont">
          <ul className="gallery__image-list">
            <li className="gallery__image-item">{/*<img src={Image_1} />*/}</li>
            <li className="gallery__image-item">{/*<img src={Image_2} />*/}</li>
            <li className="gallery__image-item">{/*<img src={Image_3} />*/}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
