import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./TravelBookingForm.module.css";

/**
 * TravelBookingDate
 * Контрольований пікер діапазону дат.
 * Приймає startDate, endDate (Date | null) і onChange(start, end).
 */
const TravelBookingDate = ({ startDate, endDate, onChange }) => {
  // Локальний стейт лише для плавності UX; синхронізуємося з пропсами
  const [range, setRange] = useState([startDate, endDate]);

  useEffect(() => {
    setRange([startDate, endDate]);
  }, [startDate, endDate]);

  return (
    <DatePicker
      selectsRange
      startDate={range[0]}
      endDate={range[1]}
      onChange={(dates) => {
        const [start, end] = dates;
        setRange([start, end]);
        onChange?.(start || null, end || null);
      }}
      placeholderText="Booking dates*"
      dateFormat="dd.MM.yyyy"
      className={style.field}
      minDate={new Date()}
      isClearable
    />
  );
};

export default TravelBookingDate;
