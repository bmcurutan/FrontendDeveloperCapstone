import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

const updateTimes = (state, action) => {
  switch (action.type) {
    case "initialize":
      return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
      ];
    case "remove":
      return state.filter((time) => time !== action.payload);
    default:
      return state;
  }
};

const initializeTimes = () => updateTimes([], { type: 'initialize' });

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <section className="booking">
      <div className="booking-content">
        <div className="booking-text">
          <h1>Reservations</h1>
        </div>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </section>
    </main>
  );
};

export default BookingPage;
