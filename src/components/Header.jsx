import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ pageMenus = [] }) {
  const [open, setOpen] = useState(false);

  const defaultMenus = [];

  // Normalize menus (pageMenus may use href or link)
  const normalize = (item) => ({
    label: item.label,
    to: item.to,
    href: item.href,
    type: item.to ? "link" : "anchor"
  });

  const combinedMenus = [
    ...pageMenus.map(normalize),
    ...defaultMenus
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">
          <Link to="/">Teen Golf 2025</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          {combinedMenus.map((item, idx) =>
            item.type === "link" ? (
              <Link
                key={idx}
                to={item.to}
                className="hover:text-green-600"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={idx}
                href={item.href}
                className="hover:text-green-600"
              >
                {item.label}
              </a>
            )
          )}
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
          {combinedMenus.map((item, idx) =>
            item.type === "link" ? (
              <Link
                key={idx}
                to={item.to}
                className="block px-6 py-3 border-b hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={idx}
                href={item.href}
                className="block px-6 py-3 border-b hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
