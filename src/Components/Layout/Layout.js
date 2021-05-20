import React from "react";
import Header from "../Header/Header";
import "./layout.css";
import Footer from "../Footer/Footer";
function Layout(props) {
  return (
    <div>
      <Header />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
