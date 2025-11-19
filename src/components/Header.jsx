import React, {useState} from "react";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-2xl font-bold text-green-700">
          Teen Golf 2025
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <a href="#details" className="hover:text-green-600">Details</a>
          <a href="#location" className="hover:text-green-600">Location</a>
          <a href="#register" className="hover:text-green-600">Register</a>
          <a href="#videos" className="hover:text-green-600">Highlights</a>
          <a href="#sponsors" className="hover:text-green-600">Sponsors</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t shadow">
          <a
            href="#details"
            className="block px-6 py-3 border-b hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Details
          </a>
          <a
            href="#location"
            className="block px-6 py-3 border-b hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Location
          </a>
          <a
            href="#register"
            className="block px-6 py-3 border-b hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Register
          </a>
          <a
            href="#videos"
            className="block px-6 py-3 border-b hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Highlights
          </a>
          <a
            href="#sponsors"
            className="block px-6 py-3 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Sponsors
          </a>
        </div>
      )}
    </header>
  );
}


export default Header