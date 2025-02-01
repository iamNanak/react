import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
      >
        {/* <!-- Background Circle --> */}
        <circle cx="50" cy="50" r="45" fill="#4CAF50" />

        {/* <!-- Book Icon --> */}
        <path d="M30 35 L70 35 L70 75 L30 75 Z" fill="#FFFFFF" />
        <path d="M30 35 L70 35 L70 40 L30 40 Z" fill="#FFC107" />
        <path d="M35 40 L65 40 L65 75 L35 75 Z" fill="#FFFFFF" />
        <path d="M35 40 L65 40 L65 45 L35 45 Z" fill="#FFC107" />

        {/* <!-- Pen Icon --> */}
        <path d="M60 25 L75 40 L65 50 L50 35 Z" fill="#2196F3" />
        <path d="M50 35 L65 50 L60 55 L45 40 Z" fill="#1976D2" />
      </svg>
    </div>
  );
}

export default Logo;
