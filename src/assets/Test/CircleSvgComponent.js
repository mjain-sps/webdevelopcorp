import React from "react";

function CircleSvgComponent({ className, trigger, text }) {
  return (
    <>
      <svg
        className={className}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="#eef2f5" />
        {trigger ? (
          <>
            <path
              fill="none"
              strokeLinecap="round"
              strokeWidth="5"
              stroke="#ffaea1"
              strokeDasharray="251.2,0"
              d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80"
            >
              <animate
                attributeName="stroke-dasharray"
                from="0,251.2"
                to="251.2,0"
                dur="5s"
              />
            </path>
            <text
              id="count"
              x="50"
              y="50"
              text-anchor="middle"
              dy="7"
              font-size="20"
            >
              {text}
            </text>
          </>
        ) : (
          ""
        )}
      </svg>
    </>
  );
}

export default CircleSvgComponent;