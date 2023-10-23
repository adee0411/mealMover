import { useEffect } from "react";

import "./Schedule.scss";

import { RiMapPinTimeFill } from "react-icons/ri/index";
import { RiTimeLine } from "react-icons/ri/index";

import Section from "../UI/Section";
import ScheduleCard from "./ScheduleCard";

import scheduleData from "../../data/schedule";

const Schedule = () => {
  return (
    <Section
      variant="colored"
      icon={<RiTimeLine />}
      title="Truck Schedule"
      description="Indulge in mouthwatering dishes bursting with savory flavors. Our
          tempting assortment of street food is sure to satisfy your every
          craving."
    >
      {Object.entries(scheduleData).map((el) => (
        <ScheduleCard day={el[0]} scheduleData={el[1]} key={el[0]} />
      ))}
    </Section>
  );
};

export default Schedule;
