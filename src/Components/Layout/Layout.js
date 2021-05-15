import React from "react";
import Header from "../Header/Header";
import "./layout.css";
function Layout(props) {
  return (
    <div>
      <Header />
      <div className="layout-children">{props.children}</div>
    </div>
  );
}

export default Layout;
