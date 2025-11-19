import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import api from "../api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    password_confirm: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.password_confirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register", form);

      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <Header pageMenus={[{ label: "Login", to: "/login" }]} />

      <section className="max-w-3xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>

        <form className="space-y-4 shadow p-8 rounded-xl bg-white" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Full Name" className="w-full border p-3 rounded"
            onChange={handleChange} required />

          <input name="email" type="email" placeholder="Email" className="w-full border p-3 rounded"
            onChange={handleChange} required />

          <input name="age" type="number" placeholder="Age" className="w-full border p-3 rounded"
            onChange={handleChange} required />

          <input name="password" type="password" placeholder="Password" className="w-full border p-3 rounded"
            onChange={handleChange} required />

          <input name="password_confirm" type="password" placeholder="Confirm Password" className="w-full border p-3 rounded"
            onChange={handleChange} required />

          <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded text-lg">
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
}
