import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // const refreshPage = () => {
  //   window.location.reload();
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://ec2-54-144-144-29.compute-1.amazonaws.com/api/contact",
        formData
      )
      .then((response) => {
        console.log(response);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-medium mb-4">Contact Us</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            id="name"
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            id="email"
            type="email"
            name="email"
            placeholder="email@goeshere.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="bg-gray-200 p-2 rounded-lg w-full"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-900">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
