import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* HERO */}
      <section
        className="h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d')" }}
      >
        <div className="bg-black/40 p-8 rounded-xl">
          <h1 className="text-5xl font-bold mb-4 text-center">2025 Teen Golf Championship</h1>
          <p className="text-xl text-center">June 12–14 • Redwood Valley Golf Club</p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Tournament Details</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow rounded-xl bg-white">
            <h3 className="font-bold text-xl mb-2">Who Can Play?</h3>
            <p>Ages 13–18. All skill levels welcome.</p>
          </div>
          <div className="p-6 shadow rounded-xl bg-white">
            <h3 className="font-bold text-xl mb-2">Prizes</h3>
            <p>Trophies, scholarships, and sponsor gifts.</p>
          </div>
          <div className="p-6 shadow rounded-xl bg-white">
            <h3 className="font-bold text-xl mb-2">Entry Fee</h3>
            <p>$25 (includes shirt, lunch, and drinks).</p>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Location</h2>
        <div className="max-w-4xl mx-auto px-6">
          <iframe
            title="Golf Course Map"
            className="w-full h-96 rounded-xl shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.867..."
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Register Now</h2>

        <form className="space-y-4 shadow p-8 rounded-xl bg-white">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
          />
          <input
            type="number"
            placeholder="Age"
            className="w-full border p-3 rounded"
          />
          <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded text-lg">
            Submit Registration
          </button>
        </form>
      </section>

      {/* VIDEO */}
      <section className="bg-gray-900 text-white py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Highlights From Last Year</h2>
        <div className="max-w-4xl mx-auto px-6">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow"
              src="https://www.youtube.com/embed/5KJ__06kyxs"
              title="Golf Highlight Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Sponsors</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl shadow bg-white text-center font-bold">Nike</div>
          <div className="p-6 rounded-xl shadow bg-white text-center font-bold">Callaway</div>
          <div className="p-6 rounded-xl shadow bg-white text-center font-bold">Titleist</div>
          <div className="p-6 rounded-xl shadow bg-white text-center font-bold">USGA</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        © 2025 Teen Golf Championship • All Rights Reserved
      </footer>
    </div>
  );
}
