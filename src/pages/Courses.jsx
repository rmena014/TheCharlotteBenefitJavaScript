import React, { useState, useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import "./pages.css";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/api/courses", {
        params: { name: searchTerm },
      });
      setCourses(result.data);
    };

    fetchData();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEnroll = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
  };

  return (
    <div>
      <SideNavBar />
      <div className="courses-main">
        <input
          type="text"
          placeholder="Search by course name"
          value={searchTerm}
          onChange={handleChange}
          class="search-bar bg-gray-200 rounded-lg mt-2 ml-2 p-2 w-89 focus:outline-none focus:shadow-outline"
        />
        <div className="course-cards">
          {courses.map((course) => {
            const startDate = new Date(course.start_date).toLocaleDateString();
            const endDate = new Date(course.end_date).toLocaleDateString();

            return (
              <div key={course.course_id} className="course-card">
                <h2 className="course-name">{course.name}</h2>
                <p className="course-info">{course.description}</p>
                <p className="course-date">
                  Course dates: {startDate} - {endDate}
                </p>
                <p className="course-instructor">
                  Instructor: {course.instructor}
                </p>
                <button
                  className="enroll-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
                  onClick={() => handleEnroll(course)}
                >
                  Enroll
                </button>
              </div>
            );
          })}
        </div>{" "}
      </div>
      {showModal && (
        <div className="modal-overlay ">
          <div className="modal-content bg-green-500 rounded-lg p-5 text-white text-center ">
            <p className="success-message text-green-500 ">
              You are successfully enrolled!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
