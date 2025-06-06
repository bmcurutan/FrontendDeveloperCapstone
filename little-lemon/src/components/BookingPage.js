import { useReducer } from "react";
import BookingForm from "./BookingForm";

const updateTimes = (state, action) => {
  switch (action.type) {
    case "initialize":
      return window.fetchAPI(new Date());
    case "update":
      return window.fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

const initializeTimes = () => {
  return window.fetchAPI(new Date());
};

const submitForm = (formData) => {
  const result = window.submitAPI(formData); 
  return result;
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <section className="booking">
      <div className="booking-content">
        <div className="booking-text">
          <h1>Reservations</h1>
        </div>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </div>
    </section>
    </main>
  );
};

export default BookingPage;
export { initializeTimes, updateTimes };