import { useState } from "react";
import api from "../api";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
        age: Number(age),
      });

      setSuccess("Registration successful!");

      setName("");
      setEmail("");
      setAge("");
      setPassword("");
      setPasswordConfirm("");

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Register Now</h2>

      <form onSubmit={handleSubmit} className="space-y-4 shadow p-8 rounded-xl bg-white">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Age"
          className="w-full border p-3 rounded"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-3 rounded"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}

        <button
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded text-lg"
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </section>
  );
}
