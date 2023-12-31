
import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for styling
import { HouseContext } from "../../context/HouseContext";

const MoveInDateFilter = () => {
  const { setMoveInDate, moveInDate } = useContext(HouseContext);

  const dateHandler = (date) => {
    setMoveInDate(date);
  };

  const CustomInput = ({ value, onClick }) => (
    <input
      type="text"
      value={value}
      onClick={onClick}
      placeholder="Select Move In date"
      readOnly // Set the input as read-only to prevent manual text input
    />
  );

  return (
    <div className="date-picker">
      <DatePicker
        selected={moveInDate}
        onChange={dateHandler}
        placeholderText="Select Move In date"
        customInput={<CustomInput />}
      />
    </div>
  );
};

export default MoveInDateFilter;
