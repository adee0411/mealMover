import "./ContactFooter.scss";
import Section from "../UI/Section";
import Button from "../UI/Button";
//import bgVideo from "../../assets/video/pexels-rodnae-productions-5780696 (2160p).mp4";
import Poster from "../../assets/images/pexels-james-frid-2227960.jpg";
import { MdLocationPin } from "react-icons/md/index";

const ContactFooter = () => {
  return (
    <section className="video-footer">
      <video playsinline autoplay muted loop poster="">
        <source
          src="../../assets/video/pexels-rodnae-productions-5780696 (2160p).mp4"
          type="video/mp4"
        />
      </video>

      <div></div>
      <header className="video-footer__header">
        <h2 className="video-footer__title">
          Let’s Taste Delicious Street Food
        </h2>
        <p className="video-footer__text">
          So what are you waiting for? Come taste the magic of Food Truck today!
        </p>
      </header>
      <div className="video-footer__content">
        <div className="video-footer__cta-container">
          <Button
            variant="primary"
            title="Visit Today"
            icon={<MdLocationPin />}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
