import React, { useState } from "react";
import "./Calendar.css";

interface CalendarProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateClick = () => {
    setShowCalendar(true);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const date = new Date(value);
    onChange(date);
    setShowCalendar(false);
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  const formatDate = (date: Date | null): string => {
    if (date) {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      return date.toLocaleDateString("en-US", options);
    }
    return "";
  };

  return (
    <div className="calendar">
      <input
        type="text"
        value={formatDate(selectedDate)}
        onClick={handleDateClick}
        readOnly
      />
      {showCalendar && (
        <div className="calendar-popup">
          <input
            type="date"
            value={selectedDate ? selectedDate.toISOString().substr(0, 10) : ""}
            onChange={handleDateChange}
          />
          <button onClick={handleCloseCalendar}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
