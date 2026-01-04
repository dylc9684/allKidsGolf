import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/UserPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
     </Routes>
  );
}
