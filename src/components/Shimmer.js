import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
        <div key={id} className="shimmer-card"></div>
      ))}
    </div>
  );
};

export default Shimmer;