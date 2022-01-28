// import React from "react";
import React, { useState, useEffect } from "react";

function Loader() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 1200));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  // if (isLoading) {
  //   return null;
  // }
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
