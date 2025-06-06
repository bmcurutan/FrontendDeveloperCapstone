import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Routes, Route } from "react-router";
import { fireEvent } from '@testing-library/react';
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { initializeTimes, updateTimes } from "./components/BookingPage";

describe("Booking form", () => {
  test("Renders BookingForm label", () => {
      render(
        <MemoryRouter>
          <BookingPage />
        </MemoryRouter>
      );
      const headingElement = screen.getByText("Occasion");
      expect(headingElement).toBeInTheDocument();
  })

  test("initializeTimes returns non-empty array of available booking times.", () => {
      const times = initializeTimes();

      expect(times.length).toBeGreaterThan(0);
  });

  test("updateTimes include expected times for selected date ", () => {
    const dateString = "2025-06-05";
    const result = updateTimes([], { type: "update", date: dateString });
    expect(result).toEqual([
      "17:00",
      "17:30",
      "18:00",
      "19:30",
      "20:30",
      "21:00",
      "21:30",
    ]);
  });
});

describe("Input attributes", () => {
  test('Date input has correct attributes', () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/choose date/i);

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min');
  });

  test('Guests input has correct attributes', () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    const guestsInput = screen.getByLabelText(/number of guests/i); 

    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });
});

describe("Form submission", () => {
  test("Form submits with valid inputs", async () => {
    render(
      <MemoryRouter initialEntries={['/reservations']}>
        <Routes>
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </MemoryRouter>
    );

    const dateString = "2025-06-05";
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeInput = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    fireEvent.change(dateInput, { target: { value: dateString } });
    fireEvent.change(timeInput, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });

    fireEvent.click(submitButton);

    expect(await screen.findByText(/booking confirmed/i)).toBeInTheDocument();
  });

  test("Form doesn't submit with invalid inputs", async () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    const dateString = "2025-06-05";
    const dateInput = screen.getByLabelText(/choose date/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    fireEvent.change(dateInput, { target: { value: dateString } });
    fireEvent.change(guestsInput, { target: { value: '0' } });

    fireEvent.click(submitButton);

    expect(screen.queryByText(/booking confirmed/i)).not.toBeInTheDocument();
  });
});
