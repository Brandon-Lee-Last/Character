import React, { useState } from 'react';

export default function MaterialDatePicker({setDate}) {

  const [date, setCurrentDate] = useState(new Date());

  const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setCurrentDate(e.target.value);
  };

  return (
    <input type="date" onChange={handleDateChange} value={formatDate(date)}/>
  );

}