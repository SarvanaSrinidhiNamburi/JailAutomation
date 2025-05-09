/*import "../styles/style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PrisonerDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    age: "",
    job: "",
    assignedTask: "",
    aadhaar: "",
    crime: "",
    hasLawyer: "",
    crimeHistory: [],
  });

  const [emailStatus, setEmailStatus] = useState("");

  useEffect(() => {
    const fetchAssignedTask = async () => {
      if (formData.job.trim() !== "") {
        try {
          const res = await axios.post("http://localhost:5000/assign-task", {
            job: formData.job,
          });
          setFormData((prev) => ({
            ...prev,
            assignedTask: res.data.assigned_task,
          }));
        } catch {
          setFormData((prev) => ({
            ...prev,
            assignedTask: "Error assigning task",
          }));
        }
      }
    };

    fetchAssignedTask();
  }, [formData.job]);

  const calculateAge = (dob) => {
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleDobChange = (e) => {
    const dob = e.target.value;
    setFormData((prev) => ({
      ...prev,
      dob,
      age: calculateAge(dob),
    }));
  };

  const handleAadhaarChange = async (e) => {
    const aadhaar = e.target.value;
    setFormData((prev) => ({ ...prev, aadhaar }));

    if (aadhaar.length === 12) {
      try {
        const res = await axios.post("http://localhost:5000/crime-history", {
          aadhaar,
        });
        setFormData((prev) => ({
          ...prev,
          crimeHistory: res.data.crimes,
        }));
      } catch {
        setFormData((prev) => ({ ...prev, crimeHistory: [] }));
      }
    } else {
      setFormData((prev) => ({ ...prev, crimeHistory: [] }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/save-prisoner",
        formData
      );
      const { message, case_id, email_status } = res.data;
      alert(`${message}\nCase ID: ${case_id}\n${email_status}`);
      setEmailStatus(email_status);
    } catch (err) {
      alert("Error saving prisoner details");
      setEmailStatus("Error sending details or email.");
    }
  };

  return (
    <div className="form-container">
      <h2>Enter Prisoner Details</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Date of Birth:</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleDobChange}
      />

      <label>Calculated Age:</label>
      <input type="text" value={formData.age} readOnly />

      <label>Previous Job:</label>
      <input
        type="text"
        name="job"
        value={formData.job}
        onChange={handleChange}
      />

      <label>Assigned Jail Task:</label>
      <input type="text" value={formData.assignedTask} readOnly />

      <label>Aadhaar Number:</label>
      <input
        type="text"
        name="aadhaar"
        value={formData.aadhaar}
        onChange={handleAadhaarChange}
        maxLength={12}
      />

      {formData.crimeHistory.length > 0 && (
        <div className="crime-history">
          <h4>Past Crime History:</h4>
          <ul>
            {formData.crimeHistory.map((crime, index) => (
              <li key={index}>{crime}</li>
            ))}
          </ul>
        </div>
      )}

      <label>Crime Committed:</label>
      <input
        type="text"
        name="crime"
        value={formData.crime}
        onChange={handleChange}
      />

      <label>Does the prisoner have a lawyer?</label>
      <select
        name="hasLawyer"
        value={formData.hasLawyer}
        onChange={handleChange}
        className="styled-select"
      >
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {emailStatus && (
        <p>
          <strong>Status:</strong> {emailStatus}
        </p>
      )}

      <br />
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default PrisonerDetails;
*/

import "../styles/style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PrisonerDetails = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    age: "",
    job: "",
    assignedTask: "",
    aadhaar: "",
    crime: "",
    hasLawyer: "",
    crimeHistory: [],
  });

  const [emailStatus, setEmailStatus] = useState("");

  useEffect(() => {
    const fetchAssignedTask = async () => {
      if (formData.job.trim() !== "") {
        try {
          const res = await axios.post("http://localhost:5000/assign-task", {
            job: formData.job,
          });
          setFormData((prev) => ({
            ...prev,
            assignedTask: res.data.assigned_task,
          }));
        } catch {
          setFormData((prev) => ({
            ...prev,
            assignedTask: "Error assigning task",
          }));
        }
      }
    };

    fetchAssignedTask();
  }, [formData.job]);

  const calculateAge = (dob) => {
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleDobChange = (e) => {
    const dob = e.target.value;
    setFormData((prev) => ({
      ...prev,
      dob,
      age: calculateAge(dob),
    }));
  };

  const handleAadhaarChange = async (e) => {
    const aadhaar = e.target.value;
    setFormData((prev) => ({ ...prev, aadhaar }));

    if (aadhaar.length === 12) {
      try {
        const res = await axios.post("http://localhost:5000/crime-history", {
          aadhaar,
        });
        setFormData((prev) => ({
          ...prev,
          crimeHistory: res.data.crimes,
        }));
      } catch {
        setFormData((prev) => ({ ...prev, crimeHistory: [] }));
      }
    } else {
      setFormData((prev) => ({ ...prev, crimeHistory: [] }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/save-prisoner",
        formData
      );
      const { message, case_id, email_status } = res.data;
      alert(`${message}\nCase ID: ${case_id}\n${email_status}`);
      setEmailStatus(email_status);
    } catch (err) {
      alert("Error saving prisoner details");
      setEmailStatus("Error sending details or email.");
    }
  };

  return (
    <div className="form-container">
      {/* ✅ Back Button */}
      <button className="back" onClick={onBack}>
        ← Back to Dashboard
      </button>

      <h2>Enter Prisoner Details</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Date of Birth:</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleDobChange}
      />

      <label>Calculated Age:</label>
      <input type="text" value={formData.age} readOnly />

      <label>Previous Job:</label>
      <input
        type="text"
        name="job"
        value={formData.job}
        onChange={handleChange}
      />

      <label>Assigned Jail Task:</label>
      <input type="text" value={formData.assignedTask} readOnly />

      <label>Aadhaar Number:</label>
      <input
        type="text"
        name="aadhaar"
        value={formData.aadhaar}
        onChange={handleAadhaarChange}
        maxLength={12}
      />

      {formData.crimeHistory.length > 0 && (
        <div className="crime-history">
          <h4>Past Crime History:</h4>
          <ul>
            {formData.crimeHistory.map((crime, index) => (
              <li key={index}>{crime}</li>
            ))}
          </ul>
        </div>
      )}

      <label>Crime Committed:</label>
      <input
        type="text"
        name="crime"
        value={formData.crime}
        onChange={handleChange}
      />

      <label>Does the prisoner have a lawyer?</label>
      <select
        name="hasLawyer"
        value={formData.hasLawyer}
        onChange={handleChange}
        className="styled-select"
      >
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {emailStatus && (
        <p>
          <strong>Status:</strong> {emailStatus}
        </p>
      )}

      <br />
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default PrisonerDetails;
