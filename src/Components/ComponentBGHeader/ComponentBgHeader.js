import React from "react";
import "./componentBg.css";
function ComponentBgHeader({ bg, title }) {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bgHeader--wrapper"
    >
      <div className="bgHeader--title">{title}</div>
    </div>
  );
}

export default ComponentBgHeader;
