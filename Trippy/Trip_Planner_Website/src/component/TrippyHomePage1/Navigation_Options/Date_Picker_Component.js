import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Date_Picker_Component.css';

const Date_Picker_Component = ({disabled}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="datepicker-container">
      <DatePicker className="datepicker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="d MMM yyyy"
        placeholderText="Select a date"
        disabled={disabled}
      />
    </div>
  );
};

export default Date_Picker_Component;