import { render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";
import { initializeTimes, updateTimes } from "./components/BookingPage";

describe("Booking", () => {
  test("Renders BookingForm label", () => {
      render(<BookingPage />);
      const headingElement = screen.getByText("Occasion");
      expect(headingElement).toBeInTheDocument();
  })

  test("initializeTimes returns expected times", () => {
      const times = initializeTimes();

      expect(times).toEqual([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
      ])
  });

  test("updateTimes returns same value provided in state", () => {
    const currentState = ["17:00", "18:00"];
    const result = updateTimes(currentState, { type: "same" });

    expect(result).toEqual(currentState);
  });
});