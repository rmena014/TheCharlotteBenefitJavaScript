import React, { useState } from "react";
import "./SignUp.css";
import LoginModal from "./LoginModal";

function Login() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  return (
    <div>
      <button
        className="bg-blue-600 text-white rounded-lg py-2 px-4 transition duration-1000 ease-in-out hover:bg-blue-900 mt-3"
        onClick={openModal}
      >
        Login
      </button>
      {showModal ? <LoginModal closeModal={() => setShowModal(false)} /> : null}
    </div>
  );
}

export default Login;
