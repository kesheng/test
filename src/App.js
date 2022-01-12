import React, { useState, useCallback } from "react";
import API from "./services/dateAPI";
import DateButton from "./components/DateButton";
import DateDisplay from "./components/DateDisplay";

const App = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  handleButtonClick = useCallback(() => {
    API.getAPIResponse().then((res) => {
      if (res?.data) {
        const dateObj = new Date(res.data);
        setDay(dateObj.getUTCDate());
        setMonth(dateObj.getUTCMonth() + 1);
        setYear(dateObj.getUTCFullYear());
      }
    }, []);
  });

  return (
    <div>
      <center>
        <h1>Date API</h1>
      </center>
      <center>
        <DateButton handleButtonClick={handleButtonClick} />
      </center>
      <DateDisplay day={day} month={month} year={year}></DateDisplay>
    </div>
  );
};

export default App;
