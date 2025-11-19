import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import api from "../api";
export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("jwt", res.data.token);

      alert("Logged in!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Header pageMenus={[{ label: "Register", to: "/register" }]} />

      <section className="max-w-3xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <form className="space-y-4 shadow p-8 rounded-xl bg-white" onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email"
            className="w-full border p-3 rounded" onChange={handleChange} required />

          <input name="password" type="password" placeholder="Password"
            className="w-full border p-3 rounded" onChange={handleChange} required />

          <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded text-lg">
            Login
          </button>
        </form>
      </section>
    </>
  );
}
