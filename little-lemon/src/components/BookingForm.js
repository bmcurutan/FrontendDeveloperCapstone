import { useState } from "react";
import { useNavigate } from 'react-router';
import "../css/Booking.css";

const ReservationForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "update", date: selectedDate });
  };

  const formData = {
    date,
    time,
    guests,
    occasion
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });

    if (submitForm(formData)) {
      const navigate = useNavigate();
      navigate("/confirmation")
    } else {
      alert("Error: Please try again.");
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="" />
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="" />
        <option value="Birthday">Birthday</option>
        <option value="Engagement">Engagement</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        disabled={!time}
      />
    </form>
  );
};

export default ReservationForm;
