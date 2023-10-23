import "./ScheduleItem.scss";

const ScheduleItem = ({ city, street, open_hour, close_hour }) => {
  return (
    <li className="schedule-card__date-list-item">
      <div className="place-wrapper">
        <div className="place-wrapper__city">{city}</div>
        <div className="place-wrapper__street">{street}</div>
      </div>
      <div className="open-hours">
        {open_hour}–{close_hour}
      </div>
    </li>
  );
};

export default ScheduleItem;
