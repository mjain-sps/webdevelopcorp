import React, { useState, useEffect } from "react";

//Importing CSS
import "./home_section4.css";

// Importing counter-up TP library
import CountUp from "react-countup";

// import SVG
import CircleSvgComponent from "../../../assets/Test/CircleSvgComponent";

function Section4() {
  const [triggerSVG, setTriggerSVG] = useState(false);

  // useEffect to get the DOM elements and trigger observer
  useEffect(() => {
    //Getting DOM elements for observation
    const circleSVG = document.querySelector(".section4-circle-svg");
    //Defining observers along with callbacks and options
    //2nd Observer for counter up SVG
    let observer2 = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTriggerSVG(true);
          observer2.unobserve(entry.target);
        }
      },
      { root: null, threshold: [0.9] }
    );

    //Initializing observations
    observer2.observe(circleSVG);

    // Component did unmount
    return () => {
      observer2.unobserve(circleSVG);
    };
  }, []);
  return (
    <div className="homePage_section4--wrapper">
      <div className="section4-content">
        <div className="section-4__counterUp">
          <div className="circle-container">
            <div className="circle-container-flex-item1_3">
              <div className="circle-container__section">
                <CircleSvgComponent
                  className="section4-circle-svg"
                  trigger={triggerSVG ? "trigerred" : null}
                />

                <div className="countUpElement">
                  <CountUp
                    duration={7}
                    start={triggerSVG ? 0 : null}
                    end={100}
                  />
                  <span>%</span>
                </div>
              </div>
              <h3>PROFESSIONAL APPROACH</h3>
            </div>

            <div className="circle-container-separator"></div>

            <div className="circle-container-flex-item1_3">
              <div className="circle-container__section">
                <CircleSvgComponent
                  className="section4-circle-svg"
                  trigger={triggerSVG ? "trigerred" : null}
                />
                <div className="countUpElement">
                  <CountUp
                    duration={7}
                    start={triggerSVG ? 0 : null}
                    end={100}
                  />
                  <span>%</span>
                </div>
              </div>
              <h3>USEFUL SOLUTIONS</h3>
            </div>
          </div>
        </div>

        <div className="section-4__founderMessage">
          <h1>
            TURN YOUR PROJECT FROM MEDIOCRE TO REMARKABLE – DESIGN THAT IS
            SIMPLE, SEAMLESS AND ALIVE! WITH WEBDEVELOPCORP, YOUR OUTSTANDING
            WEB PRESENCE IS JUST ONE STEP AWAY. CREATE WITH IT WHAT YOU WILL
          </h1>
          <h4>MADHUR JAIN</h4>
          <h5>FOUNDER</h5>
        </div>
      </div>
    </div>
  );
}

export default Section4;
