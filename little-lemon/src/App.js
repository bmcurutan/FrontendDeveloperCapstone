import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import Footer from "./components/Footer";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
