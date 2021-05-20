import React from "react";
//importoing Images
import mobileApplicationFeatures from "../../../../../assets/img/service/webdevelopcorp-mobile-application-features.png";
//importing CSS
import "./MobileApplicationSection1.css";
function MobileApplicationSection1() {
  return (
    <div className="mobileApplications--section1--wrapper">
      <h1>MOBILE APPLICATIONS</h1>
      <p>
        At webdevelopcorps we develop secure, user friendly and optimal
        performing mobile applications which are useful in every sense. We
        develop enterprise applications which enables enterprise to maximise
        their reach to their targeted audience in a way that generates long
        lasting benefits. We follow a very systematic approach while designing
        and developing the application. We understand all the requirements very
        deeply and present a viable solution to the client which fulfils all the
        current requirements and has a scope of integrating futuristic
        requirements.
      </p>
      <br></br>
      <p>
        We use state of at the art technology such as React Native, Flutter to
        develop hybrid native applications which run efficiently on both mobile
        platforms i.e iOS and Android. We follow a never failing approach of
        developing an application which starts with a consultation session.
        During consultation we understand clients technical, budgetary and
        design related requirements. Such a session is followed up with a quick
        demo in which we are able to demonstrate a glimpse on how the
        application will look like and perform. Once approved, the we use our
        core strengths and technical expertise to develop a solid architecture
        consisting of a stable, secure backend combined with smooth, fluidic,
        elegant and astonishing front end.
      </p>
      <img src={mobileApplicationFeatures} alt="" />
    </div>
  );
}

export default MobileApplicationSection1;
