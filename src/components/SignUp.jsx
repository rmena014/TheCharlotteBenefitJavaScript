import React, { useState } from "react";
import "./SignUp.css";
import SignUpModal from "./SignUpModal";

function SignUp() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  return (
    <div>
      <button
        className="bg-blue-600 text-white rounded-lg py-2 px-4 transition duration-1000 ease-in-out hover:bg-blue-900"
        onClick={openModal}
      >
        Get Started
      </button>
      {showModal ? (
        <SignUpModal closeModal={() => setShowModal(false)} />
      ) : null}
    </div>
  );
}

export default SignUp;
