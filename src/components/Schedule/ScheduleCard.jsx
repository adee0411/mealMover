import "./ScheduleCard.scss";

import ScheduleItem from "./ScheduleItem";

const ScheduleCard = ({ day, scheduleData }) => {
  const upperCasedDay = day[0].toUpperCase() + day.slice(1);
  return (
    <div className="schedule-card">
      <header className="schedule-card__header">
        <h2 className="schedule-card__title">{upperCasedDay}</h2>
        <span className="schedule-card__current-date">
          {new Date(scheduleData.date).toLocaleDateString("en")}
        </span>
      </header>
      <div className="schedule-card__date-list-wrapper">
        <ul className="schedule-card__date-list">
          {Object.entries(scheduleData.data).map((el, index) => {
            return <ScheduleItem {...el[1]} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ScheduleCard;
