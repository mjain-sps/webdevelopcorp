import React from "react";
import Layout from "../../../Components/Layout/Layout";
import GetInTouch from "../../../Components/GetInTouch/GetInTouch";
import ComponentBgHeader from "../../../Components/ComponentBGHeader/ComponentBgHeader";
//import Images
import enterpriseBackGround from "../../../assets/img/banner/Web-application-development-background-image.jpg";
//import CSS
import "./EnterpriseSol.css";
//importing Sections
import EnterpriseSection2 from "./Sections/Section2/EnterpriseSection2";

function EnterpriseSol() {
  return (
    <Layout>
      <ComponentBgHeader
        bg={enterpriseBackGround}
        title="WEB APPLICATION DEVELOPMENT & ENTERPRISE SOLUTIONS"
      />
      <div className="enterprise-sol--wrapper">
        <div className="enterprise-sol__section1">
          <h1>WEB APPLICATION DEVELOPMENT & ENTERPRISE SOLUTIONS</h1>
          <h4>Web Applications:</h4>
          <p>
            A Web application is a step above a traditional website. It is more
            functional and more useful and has all the benefits of a traditional
            website. It has broadly two components one if for user and other is
            for admin/owner. With the help you a web application you can
            practically start or accelerate an existing business. They allow
            users to access your application from anywhere and also the admin
            can perform most critical operations of a business on the go.
          </p>
          <h4>Enterprise Solutions</h4>
          <p>
            Looking for a comprehensive, dynamic sturdy and secure web-based
            solution for your enterprise, we have it all. Starting from school
            management, hospital management, or a solution which is custom made
            to cater all the crux issues of your enterprise and generate a solid
            solution we can help you out. Our solutions create an atmosphere for
            the enterprise where they can concentrate on their business and
            grow.
          </p>
          {/* Section 2 */}
          <EnterpriseSection2 />
        </div>
      </div>
      <GetInTouch />
    </Layout>
  );
}

export default EnterpriseSol;
