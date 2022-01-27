import React from "react";

function Loader() {
  return (
    <div className="loading-container loader-container">
      <svg>
        <circle className="bg" cx="57" cy="57" r="52" />
        <circle className="meter-1" cx="57" cy="57" r="52" />
      </svg>
    </div>
  );
}

export default Loader;
