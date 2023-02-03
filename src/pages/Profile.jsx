import React, { useState, useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import "./pages.css";

const Profile = () => {
  const [user, setData] = useState({});
  const [error, setError] = useState(null);
  const [aboutText, setAboutText] = useState("About Me");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      setError("No email found in local storage.");
      return;
    }

    fetch(`http://ec2-54-144-144-29.compute-1.amazonaws.com/api/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <SideNavBar />
      <div className="profile-main">
        {/* <h2>Hello {user.name}! Welcome to your profile page</h2>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p> */}

        <div className="p-16 bg-gray-200">
          <div className="p-8 bg-white rounded shadow mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div className="px-2 border-r border-gray-400">
                  <p className="font-bold text-gray-700 text-xl">0</p>
                  <p className="text-gray-400">Courses</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-48 h-48 bg-blue-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <img
                    className="rounded-full"
                    src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Message
                </button>
              </div>
            </div>
            <div className="mt-20 text-center rounded bg-gray-200 border-b pb-12">
              <h1 className="text-4xl font-medium text-gray-700">
                {user.name}
              </h1>
              <p className="font-light text-gray-600 mt-3">
                Email: <b>{user.email}</b>
              </p>

              <p className="mt-2 text-gray-500">Role: {user.role}</p>
            </div>
            <div className="mt-12 flex flex-col justify-center">
              {isEditing ? (
                <textarea
                  className="text-gray-600 text-center font-light lg:px-16"
                  value={aboutText}
                  onChange={(e) => setAboutText(e.target.value)}
                />
              ) : (
                <p className="text-gray-600 text-center font-light lg:px-16">
                  {aboutText}
                </p>
              )}
              <div className="mt-4 text-center">
                {isEditing ? (
                  <button
                    className="text-indigo-500 py-2 px-4 font-medium"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="text-indigo-500 py-2 px-4 font-medium"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
