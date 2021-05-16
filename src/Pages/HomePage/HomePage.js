import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";

import { Link } from "react-router-dom";

// Importing counter-up TP library
import CountUp from "react-countup";

// Importing Custom Button Component
import CustomButton from "../../Components/CustomButton/CustomButton";

// Importing CSS
import "./homePage.css";

// Importing Images
import sShape2 from "../../assets/img/shape/s-shape2.png";
import AmazingWebDevelopCompany from "../../assets/img/slider/Amazing-web-development-company.png";

//Importing images for section2
import webDevelopCorpFeatures from "../../assets/img/banner/WebDevelopmentCorp-Solutions-offered.png";
//Importing Images - Section 3
import lookLikeAnExpert1 from "../../assets/img/about/Look-like-an-expert-from-start-1.jpg";
import lookLikeAnExpert2 from "../../assets/img/about/Look-like-an-expert-from-start-2.jpg";
// Importing Images for section5
import furnitureEcommerceStoreWebdevelopcorp from "../../assets/img/portfolio/Furniture-ecommerce-store-webdevelopcorp.jpg";
import restaurantWebsiteTemplateDesign from "../../assets/img/portfolio/Restaurant-website-template-design.jpg";
import furnitureEcommerceApplication from "../../assets/img/portfolio/furniture-e-commerce-webapplication.jpg";
import danceAcademyWebsite from "../../assets/img/portfolio/Dance-academy-website-template.jpg";
import fashionClothingEcommerceApp from "../../assets/img/portfolio/fashion-clothing-accessories-ecommerce-webapp.jpg";
import onlineFoodDeliveryMobileApplication from "../../assets/img/portfolio/Online-food-delivery-mobile-application-webdevelopcorp.jpg";
import ecommerceClothingStoreApplication from "../../assets/img/portfolio/E-commerce-clothing-store-webapplication-webdevelopcorp.jpg";
//Importing images for section 6
import frequentlyAskedQuestionsWebdevelopcorp from "../../assets/img/misc/Frequently-asked-questions-webdevelopcorp.jpg";
//Shapes for Animatio
import ps1 from "../../assets/img/shape/ps1.png";
import ps3 from "../../assets/img/shape/ps3.png";

// import SVG
import CircleSvgComponent from "../../assets/Test/CircleSvgComponent";

//Importing FontIcons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBuilding,
  faMobile,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

function HomePage({ history }) {
  //useStaet constants
  const [scroll, setSCroll] = useState(null);
  const [triggerSVG, setTriggerSVG] = useState(false);

  const [faqHidden1, setFaqHiden1] = useState(false);
  const [faqHidden2, setFaqHiden2] = useState(false);
  const [faqHidden3, setFaqHiden3] = useState(false);
  const [faqHidden4, setFaqHiden4] = useState(false);

  //useEffect to get the DOM elements and trigger observer
  useEffect(() => {
    //Firing a document scroll event to capture scroll
    document.addEventListener("scroll", () => {
      setSCroll(window.pageYOffset);
    });

    //Getting DOM elements for observation
    const section2DOM = document.querySelectorAll(
      ".section2-content__component"
    );

    const circleSVG = document.querySelector(".section4-circle-svg");

    //Defining observers along with callbacks and options
    let observer = new IntersectionObserver(
      (entries) => {
        const [entry1, entry2] = entries;
        if (entry1.isIntersecting || entry2.isIntersecting) {
          entry1.target.classList.add("bring-to-normal-transform");
          entry2.target.classList.add("bring-to-normal-transform");
          observer.unobserve(entry1.target);
          observer.unobserve(entry2.target);
        }
      },
      { root: null, threshold: [0] }
    );
    //2nd Observer for counter up SVG
    let observer2 = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          console.log(entry);
          setTriggerSVG(true);
          observer2.unobserve(entry.target);
        }
      },
      { root: null, threshold: [0.9] }
    );

    //Initializing observations
    section2DOM.forEach((section) => {
      observer.observe(section);
    });
    observer2.observe(circleSVG);

    // Component did unmount
    return () => {
      section2DOM.forEach((section) => {
        observer.unobserve(section);
      });

      observer2.unobserve(circleSVG);
      document.removeEventListener("scroll", () => setSCroll(null));
    };
  }, []);

  return (
    <>
      <Layout>
        {/* Section 1 */}
        <div>
          <div className="homePage_section1--wrapper">
            <img
              src={ps1}
              alt=""
              className="random-shape-animation"
              style={{ transform: `rotateY(${scroll * 1}deg)` }}
            />
            <img
              src={ps3}
              alt=""
              className="random-shape-animation-2"
              style={{ transform: `translateX(${scroll * 1}px)` }}
            />
            <div className="section1--navbar">
              <Link to="/services/websites">Web sites</Link>
              <Link to="/services/websites">Enterprise Solutions</Link>
              <Link to="/services/websites">Web Apps</Link>
              <Link to="/services/websites">Mobile Apps</Link>
            </div>

            <div className="section1--tagLine">
              <h1>
                YOU ARE ONE MINUTE AWAY FROM ROCKET LAUNCHING YOUR BUSINESS
              </h1>
            </div>

            <div className="section1--CTA">
              <CustomButton
                type="button"
                onClick={() => history.push("/services")}
              >
                LEARN MORE
              </CustomButton>
              <CustomButton
                type="button"
                onClick={() => history.push("/services")}
              >
                GET QUOTE
              </CustomButton>
            </div>

            <div className="section1--image">
              <img src={sShape2} alt="" className="section1--image__bgImage" />
              <img
                src={AmazingWebDevelopCompany}
                className="section1--image__actualImage"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Section -2 */}
        <div className="homePage_section2--wrapper">
          <div className="section-2_features--wrapper">
            <div className="section2-content">
              <div className="section2-content__component bg-white">
                <div className="section2-content__component-header">
                  <div className="content__component-logo">
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <div className="content__component-heading">
                    <span>COMPLELLING WEBSITES</span>
                  </div>
                </div>
                <p>
                  Our Static & Dynamic web pages create a powerful impact about
                  the brand at first glance. Our in-house Web development team
                  create an intelligent sitemap that binds the audience to the
                  webpage. We offer a variety of web template designs to choose
                  from or you may build your own template from scratch.
                </p>
              </div>

              <div className="section2-content__component">
                <div className="section2-content__component-header">
                  <div className="content__component-logo">
                    <FontAwesomeIcon icon={faBuilding} />
                  </div>
                  <div className="content__component-heading">
                    <span>WEB APPLICATION DEVELOPMENT</span>
                  </div>
                </div>
                <p>
                  Productive, useful, and engaging web solutions for
                  enterprises, start-ups and variety of users who wish to gain
                  control over their business by having access to critical real
                  time data on the go. Our applications are totally customised
                  and very powerful. They are built using latest technologies
                  available in the market.
                </p>
              </div>

              <div className="section2-content__component ">
                <div className="section2-content__component-header">
                  <div className="content__component-logo">
                    <FontAwesomeIcon icon={faMobile} />
                  </div>
                  <div className="content__component-heading">
                    <span>MOBILE APP DEVELOPMENT</span>
                  </div>
                </div>
                <p>
                  Functional, convenient, and user-friendly mobile apps for both
                  iOS and Android platforms. Our apps are designed to be helpful
                  in consumer facing and corporate environments.
                </p>
              </div>

              <div className="section2-content__component bg-white">
                <div className="section2-content__component-header">
                  <div className="content__component-logo">
                    <FontAwesomeIcon icon={faCog} />
                  </div>
                  <div className="content__component-heading">
                    <span>CUSTOM SOFTWARE SOLUTIONS</span>
                  </div>
                </div>
                <p>
                  All possible kinds of we based software solutions for
                  businesses, shops, e-commerce, etc. We help you to grow your
                  business by determining the core problematic areas and
                  building a custom solution to cater such issues.
                </p>
              </div>
            </div>

            <div className="section2-coreFeatures">
              <h2>Core Features</h2>
              <h1>LOOK WHAT WE DO</h1>
              <div className="section2-coreFeatures-separator"></div>
              <CustomButton
                type="button"
                onClick={() => history.push("/services")}
              >
                LEARN MORE
              </CustomButton>
            </div>
          </div>
          <img
            src={webDevelopCorpFeatures}
            alt=""
            className="section-2--image"
          />
        </div>

        {/* Section 3 ---> About us on Home Page */}

        <div className="homePage_section3--wrapper">
          <div className="section3-content">
            <h3>About us</h3>
            <h1>LOOK LIKE AN EXPERT RIGHT FROM THE START</h1>
            <div className="section3-separator"></div>
            <p>
              Head start your gorgeous website with us. Unleash the power of web
              solutions by integrating many dynamic tools that will accelerate
              your business by leads and bounds. We are a team of professionals
              who are passionate about what we do. Our designers create content
              that is ahead of the curve and is trendsetting. Our programmers
              intellectualize the problem, decode it, and generate
              uncompromising solutions.
            </p>
            <div className="section3-content__ourmission">
              <div>
                <h5>OUR MISSION</h5>
                <p>
                  Provide unornamented, efficacious, and modish solutions to
                  clinch end user satisfaction. To stay current in our field our
                  work and provide accurate & present-day solutions to our
                  clients. To follow customer-centric, result oriented,
                  cost-competitive and innovative approach to accomplish the
                  mission.
                </p>
              </div>
              <div>
                <h5>OUR VISSION</h5>
                <p>
                  We aim to be a Global Leader in our field of work. We strongly
                  believe that one should not create limitations and only then
                  you achieve the impossible. We believe in taking small steps,
                  but we do it with Love and Interest. We work with aspects of
                  simplicity yet creativity, astonishing yet elegant, complexity
                  yet simplicity to create a unique recipe of hard earned
                  success.
                </p>
              </div>
            </div>

            <CustomButton type="button">LEARN MORE</CustomButton>
          </div>
          <div className="section3-images">
            <img src={lookLikeAnExpert1} className="section3-images__expert1" />
            <img src={lookLikeAnExpert2} className="section3-images__expert2" />
          </div>
        </div>

        {/* Section 4 ---> Counter up */}
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
                SIMPLE, SEAMLESS AND ALIVE! WITH WEBDEVELOPCORP, YOUR
                OUTSTANDING WEB PRESENCE IS JUST ONE STEP AWAY. CREATE WITH IT
                WHAT YOU WILL
              </h1>
              <h4>MADHUR JAIN</h4>
              <h5>FOUNDER</h5>
            </div>
          </div>
        </div>

        {/* Section 5 Start here. Display all Images in a Grid */}
        <div className="homePage_section5--wrapper">
          <img src={furnitureEcommerceStoreWebdevelopcorp} alt="" />
          <img
            src={restaurantWebsiteTemplateDesign}
            alt=""
            className="restaurantApp-rowspan"
          />
          <img
            src={furnitureEcommerceApplication}
            alt=""
            className="furnitureEcommerce-col-span"
          />
          <img src={danceAcademyWebsite} alt="" />
          <img
            src={fashionClothingEcommerceApp}
            alt=""
            className="fashionClothing-col-span"
          />
          <img src={onlineFoodDeliveryMobileApplication} alt="" />
          <img src={ecommerceClothingStoreApplication} alt="" />
        </div>

        {/* Section 6 FAQ */}
        <div className="homePage_section6--wrapper">
          <div className="section6_content">
            <div className="section6-content__leftsection">
              <img src={frequentlyAskedQuestionsWebdevelopcorp} alt="" />
            </div>

            <div className="section6-content__rightsection">
              <h3>FAQ</h3>
              <h1>GET YOUR ANSWERS</h1>
              <div className="faq-questions__div">
                <div>
                  <div className="faq-questions__actual-question-div">
                    <span className="faq__actual-question">
                      HOW CAN I SETUP MY THEME?
                    </span>
                    <span
                      className="faq__toggle-button"
                      onClick={() => {
                        setFaqHiden1(!faqHidden1);
                        setFaqHiden2(false);
                        setFaqHiden3(false);
                        setFaqHiden4(false);
                      }}
                    >
                      +
                    </span>
                  </div>
                  <span
                    className={
                      faqHidden1
                        ? "faq_hiddenDescription show_hidden-faq-desscription"
                        : "faq_hiddenDescription"
                    }
                  >
                    Its easy and fast. Once you tell us your requirements, our
                    design team will get in touch with you and will show you
                    hundreds of themes that match your taste. You may select one
                    of them and we will show you how your web page will look
                    like. Of course you can always modify the theme as per your
                    own requirements.
                  </span>
                </div>

                {/*2nd Question  */}
                <div>
                  <div className="faq-questions__actual-question-div">
                    <span className="faq__actual-question">
                      HOW CAN I SETUP MY THEME?
                    </span>
                    <span
                      className="faq__toggle-button"
                      onClick={() => {
                        setFaqHiden1(!faqHidden1);
                        setFaqHiden2(false);
                        setFaqHiden3(false);
                        setFaqHiden4(false);
                      }}
                    >
                      +
                    </span>
                  </div>
                  <span
                    className={
                      faqHidden1
                        ? "faq_hiddenDescription show_hidden-faq-desscription"
                        : "faq_hiddenDescription"
                    }
                  >
                    Its easy and fast. Once you tell us your requirements, our
                    design team will get in touch with you and will show you
                    hundreds of themes that match your taste. You may select one
                    of them and we will show you how your web page will look
                    like. Of course you can always modify the theme as per your
                    own requirements.
                  </span>
                </div>

                {/* 3rd Question */}
                <div>
                  <div className="faq-questions__actual-question-div">
                    <span className="faq__actual-question">
                      HOW CAN I SETUP MY THEME?
                    </span>
                    <span
                      className="faq__toggle-button"
                      onClick={() => {
                        setFaqHiden1(!faqHidden1);
                        setFaqHiden2(false);
                        setFaqHiden3(false);
                        setFaqHiden4(false);
                      }}
                    >
                      +
                    </span>
                  </div>
                  <span
                    className={
                      faqHidden1
                        ? "faq_hiddenDescription show_hidden-faq-desscription"
                        : "faq_hiddenDescription"
                    }
                  >
                    Its easy and fast. Once you tell us your requirements, our
                    design team will get in touch with you and will show you
                    hundreds of themes that match your taste. You may select one
                    of them and we will show you how your web page will look
                    like. Of course you can always modify the theme as per your
                    own requirements.
                  </span>
                </div>

                {/* 4th Question */}
                <div>
                  <div className="faq-questions__actual-question-div">
                    <span className="faq__actual-question">
                      HOW CAN I SETUP MY THEME?
                    </span>
                    <span
                      className="faq__toggle-button"
                      onClick={() => {
                        setFaqHiden1(!faqHidden1);
                        setFaqHiden2(false);
                        setFaqHiden3(false);
                        setFaqHiden4(false);
                      }}
                    >
                      +
                    </span>
                  </div>
                  <span
                    className={
                      faqHidden1
                        ? "faq_hiddenDescription show_hidden-faq-desscription"
                        : "faq_hiddenDescription"
                    }
                  >
                    Its easy and fast. Once you tell us your requirements, our
                    design team will get in touch with you and will show you
                    hundreds of themes that match your taste. You may select one
                    of them and we will show you how your web page will look
                    like. Of course you can always modify the theme as per your
                    own requirements.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HomePage;
