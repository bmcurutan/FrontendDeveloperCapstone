import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
