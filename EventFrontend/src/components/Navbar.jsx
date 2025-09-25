import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">EventExpress</h1>

      {/* Nav Links */}
      <ul className="flex space-x-6 text-lg font-medium">
        <li className="hover:text-orange-200 transition duration-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-200 transition duration-200">
          <Link to="/add-event">Add Event</Link>
        </li>
        <li className="hover:text-orange-200 transition duration-200">
          <Link to="/view-events">View All Events</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
