import "./Schedule.scss";

import { RiMapPinTimeFill } from "react-icons/ri/index";
import { RiTimeLine } from "react-icons/ri/index";
const Schedule = () => {
  return (
    <section className="section">
      <header className="section__header">
        <h1 className="section__title-wrapper">
          <div className="section__icon">
            <RiTimeLine />
          </div>
          <div className="section__title">
            <span>Truck Schedule</span>
          </div>
        </h1>
        <p className="section__description">
          Indulge in mouthwatering dishes bursting with savory flavors. Our
          tempting assortment of street food is sure to satisfy your every
          craving.
        </p>
      </header>
      <div className="section__content">
        <div className="schedule-card">
          <header className="schedule-card__header">
            <h2 className="schedule-card__title">Today</h2>
            <span className="schedule-card__current-date">
              Thursday 20 April
            </span>
          </header>
          <div className="schedule-card__date-list-wrapper">
            <ul className="schedule-card__date-list">
              <li className="schedule-card__date-list-item">
                <div className="place-wrapper">
                  <div className="place-wrapper__city">
                    Koretown, Los Angeles
                  </div>
                  <div className="place-wrapper__street">
                    3624 Wilshire Blvd, 90010
                  </div>
                </div>
                <div className="open-hours">9:00–11:00</div>
              </li>
              <li className="schedule-card__date-list-item">
                <div className="place-wrapper">
                  <div className="place-wrapper__city">Woodland Hills</div>
                  <div className="place-wrapper__street">
                    3624 Wilshire Blvd, 90816
                  </div>
                </div>
                <div className="open-hours">9:00–14:00</div>
              </li>
              <li className="schedule-card__date-list-item">
                <div className="place-wrapper">
                  <div className="place-wrapper__city">GrandHild</div>
                  <div className="place-wrapper__street">
                    1920 Luca Street, 1840
                  </div>
                </div>
                <div className="open-hours">9:00–18:00</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
