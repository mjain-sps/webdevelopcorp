import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import "./layout.css";
import Footer from "../Footer/Footer";
function Layout(props) {
  const [scrollableLayout, setScrollableLayout] = useState(null);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScrollableLayout(window.pageYOffset)
    );

    return () =>
      window.removeEventListener("scroll", () => setScrollableLayout(null));
  }, []);
  return (
    <div className="">
      <Header scrollable={scrollableLayout} />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
