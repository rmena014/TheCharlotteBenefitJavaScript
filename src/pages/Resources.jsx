import React, { useState, useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import "./pages.css";

function Resources() {
  const [materials, setMaterials] = useState([]);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    fetch(
      "http://ec2-54-144-144-29.compute-1.amazonaws.com/api/training-materials"
    )
      .then((response) => response.json())
      .then((data) => setMaterials(data));
  }, []);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredMaterials =
    selectedType === "all"
      ? materials
      : materials.filter((material) => material.type === selectedType);

  return (
    <div>
      <SideNavBar />
      <div className="resources-main">
        <div className="select-type">
          <label htmlFor="type-select">Filter by type:</label>
          <select
            id="type-select"
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="all">All</option>
            <option value="video">Video</option>
            <option value="document">Document</option>
            <option value="assessment">Assessment</option>
            <option value="quiz">Quiz</option>
          </select>
        </div>
        <div className="materials">
          {filteredMaterials.map((material) => (
            <div key={material.material_id} className="material-card">
              <div className="material-card-content">
                <h3>{material.title}</h3>
                <p>Type: {material.type}</p>
                <a
                  href={material.url}
                  target="_blank"
                  className="material-link"
                >
                  View Resource
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;
