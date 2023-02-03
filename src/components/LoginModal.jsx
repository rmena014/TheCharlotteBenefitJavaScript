import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./Login.css";
import { AiFillCloseSquare } from "react-icons/ai";

function LoginModal({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email,
        password,
      });
      console.log(response);
      setSubmitted(true);
      localStorage.setItem("email", email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (submitted) {
      navigate(`/profile`);
    }
  }, [submitted, navigate]);
  return (
    <div className="modal-overlay">
      <div className="modal-content p-6 rounded-lg shadow-md">
        <button onClick={closeModal} className="close-button">
          <AiFillCloseSquare />
        </button>
        <form onSubmit={handleLogin} className="w-full flex flex-col ">
          <label className="block font-medium text-lg mb-2">Email:</label>
          <input
            className="border rounded-lg p-2 w-full"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block font-medium text-lg mb-2">Password:</label>
          <input
            className="border rounded-lg p-2 w-full"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button className="bg-blue-800 text-white rounded-lg py-2 px-4 transition duration-1000 ease-in-out hover:bg-blue-500 mt-5 ">
            Login
          </button>{" "}
        </form>{" "}
      </div>
    </div>
  );
}

export default LoginModal;
