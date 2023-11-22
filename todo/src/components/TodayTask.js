import React from "react";
import { DateRangePicker } from "rsuite";
import subDays from "date-fns/subDays";
import Header from "./Header";

const ranges = [
  {
    label: "today",
    value: [new Date(), new Date()],
  },
  {
    label: "yesterday",
    value: [subDays(new Date(), 1), subDays(new Date(), 1)],
  },
];
const TodayTask = () => {
  return (
    <div>
      <Header />
      <div className="field">
        <DateRangePicker oneTap showOneCalendar ranges={ranges} />
      </div>
    </div>
  );
};

export default TodayTask;
