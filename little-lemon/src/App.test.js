import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import BookingPage from "./components/BookingPage";
import { initializeTimes, updateTimes } from "./components/BookingPage";

describe("Booking", () => {
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