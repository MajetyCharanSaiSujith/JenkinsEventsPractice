import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddEvent from "./pages/AddEvent";
import ViewEvents from "./pages/ViewEvents"; // Combined view + update/delete page
import "./App.css";

const App = () => { 
  return (
    <Router basename="/eventfrontend">
      <Navbar />
      <div className="container mx-auto px-4 mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/view-events" element={<ViewEvents />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
