import React, { useEffect, useState } from "react";
import "../styles/global.css";

const LeaveSanction = ({ onBack }) => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("leaveRequests");
    if (stored) {
      setLeaveRequests(JSON.parse(stored));
    } else {
      const requests = [
        {
          guardName: "Ravi Kumar",
          reason: "Family Emergency",
          requestDate: "2025-05-05",
        },
        {
          guardName: "Anil Singh",
          reason: "Official Work",
          requestDate: "2025-05-15",
        },
        {
          guardName: "Suresh Das",
          reason: "Health Issue",
          requestDate: "2025-05-08",
        },
        {
          guardName: "Pooja Reddy",
          reason: "Child Care",
          requestDate: "2025-05-10",
        },
        {
          guardName: "Naveen R",
          reason: "Family Event",
          requestDate: "2025-05-01",
        },
        {
          guardName: "Lakshmi Devi",
          reason: "Court Duty",
          requestDate: "2025-05-07",
        },
        {
          guardName: "Vikram Patil",
          reason: "Medical",
          requestDate: "2025-05-11",
        },
        {
          guardName: "Radha Iyer",
          reason: "Personal Work",
          requestDate: "2025-05-12",
        },
      ];

      const priority = {
        "family emergency": 5,
        medical: 4,
        "health issue": 4,
        "court duty": 3,
        "child care": 2,
        "official work": 1,
        "family event": 0,
        "personal work": 0,
      };

      const sorted = requests.sort((a, b) => {
        const pa = priority[a.reason.toLowerCase()] || 0;
        const pb = priority[b.reason.toLowerCase()] || 0;
        const daysUntilA = getDaysUntil(a.requestDate);
        const daysUntilB = getDaysUntil(b.requestDate);

        if (pa !== pb) return pb - pa;
        return daysUntilA - daysUntilB;
      });

      localStorage.setItem("leaveRequests", JSON.stringify(sorted));
      setLeaveRequests(sorted);
    }
  }, []);

  const getDaysUntil = (dateStr) => {
    const today = new Date();
    const date = new Date(dateStr);
    return Math.floor((date - today) / (1000 * 60 * 60 * 24));
  };

  const formatDaysUntil = (days) => {
    if (days === 0) return "Today";
    if (days > 0) return `In ${days} day${days > 1 ? "s" : ""}`;
    return `${Math.abs(days)} day${Math.abs(days) > 1 ? "s" : ""} ago`;
  };

  const handleAction = (index, status) => {
    const updated = [...leaveRequests];
    updated[index].status = status;
    setLeaveRequests(updated);
    localStorage.setItem("leaveRequests", JSON.stringify(updated));
  };

  return (
    <div className="table-container">
      <button onClick={onBack} className="back">
        ⬅ Back
      </button>

      <h2>Leave Requests</h2>

      <table>
        <thead>
          <tr>
            <th>Guard Name</th>
            <th>Reason</th>
            <th>Request Date</th>
            <th>Days Until Leave</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((req, i) => (
            <tr key={i}>
              <td>{req.guardName}</td>
              <td>{req.reason}</td>
              <td>{req.requestDate}</td>
              <td>{formatDaysUntil(getDaysUntil(req.requestDate))}</td>
              <td>{req.status || "Pending"}</td>
              <td>
                <button
                  className="approve"
                  onClick={() => handleAction(i, "Approved")}
                >
                  Approve
                </button>{" "}
                <button
                  className="reject"
                  onClick={() => handleAction(i, "Rejected")}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveSanction;
