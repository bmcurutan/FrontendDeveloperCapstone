import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <>
      <section className="booking">
      <div className="booking-content">
        <div className="booking-text">
          <h1>Reservations</h1>
        </div>
        <BookingForm />
      </div>
    </section>
    </>
  );
};

export default BookingPage;
