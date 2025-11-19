// src/components/NavBar.jsx
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full p-4 bg-gray-100 flex justify-between">
      <div className="text-xl font-bold">
        <Link to="/">Golf Tournament</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/login">Login</Link> {/* ✅ New Login Menu */}
      </div>
    </nav>
  );
}
