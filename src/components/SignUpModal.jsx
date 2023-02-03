import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { AiFillCloseSquare } from "react-icons/ai";

function SignUpModal({ closeModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://ec2-54-144-144-29.compute-1.amazonaws.com/api/signup",
        {
          name,
          email,
          password,
          role,
        }
      );
      console.log(response);
      setSubmitted(true);
      closeModal();
    } catch (error) {
      console.log(error);
    }
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      navigate(`/home`);
    }
  }, [submitted, navigate, name]);
  return (
    <div className="modal-overlay">
      <div className="modal-content p-6 rounded-lg shadow-md">
        <button onClick={closeModal} className="close-button">
          <AiFillCloseSquare />
        </button>
        <form onSubmit={handleSubmit} className="w-full flex flex-col ">
          <label className="block font-medium text-lg mb-2">Name:</label>
          <input
            className="border rounded-lg p-2 w-full"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="block font-medium text-lg mb-2">Email:</label>
          <input
            className="border rounded-lg p-2 w-full"
            type="email"
            placeholder="charlotteb@gmaill.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block font-medium text-lg mb-2">Password:</label>
          <input
            className="border rounded-lg p-2 w-full"
            type="password"
            placeholder="Secure Password Here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="block font-medium text-lg mb-2">Role:</label>
          <select
            className="border rounded-lg p-2 w-full"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select a role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <br />
          <button className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-500 mt-5 ">
            Sign Up
          </button>{" "}
        </form>{" "}
      </div>
    </div>
  );
}

export default SignUpModal;
