import React, { useEffect } from "react";

// Importing Images for section5
import furnitureEcommerceStoreWebdevelopcorp from "../../../assets/img/Compressed/Furniture-ecommerce-store-webdevelopcorp-min.jpg";
import restaurantWebsiteTemplateDesign from "../../../assets/img/Compressed/Restaurant-website-template-design-min.jpg";
import furnitureEcommerceApplication from "../../../assets/img/Compressed/furniture-e-commerce-webapplication-min.jpg";
import danceAcademyWebsite from "../../../assets/img/Compressed/Dance-academy-website-template-min.jpg";
import fashionClothingEcommerceApp from "../../../assets/img/Compressed/fashion-clothing-accessories-ecommerce-webapp-min.jpg";
import onlineFoodDeliveryMobileApplication from "../../../assets/img/Compressed/food-delivery-mobile-application-min.jpg";
import ecommerceClothingStoreApplication from "../../../assets/img/Compressed/E-commerce-clothing-store-webapplication-webdevelopcorp-min.jpg";

//Importing CSS
import "./home_section5.css";
//imporintg GIF
import loadingSpinner from "../../../assets/GIF/loading_spinner.gif";
function Section5() {
  useEffect(() => {
    //getting DOM
    const furnitureDOM = document.querySelector(".furnitureEcommerce");
    const restaurantDOM = document.querySelector(".restaurantApp-rowspan");
    const furnitureEcommerceDOM = document.querySelector(
      ".furnitureEcommerce-col-span"
    );
    const danceAcademyDOM = document.querySelector(".danceAcademy");
    const fashionClothingDOM = document.querySelector(
      ".fashionClothing-col-span"
    );
    const foodMobileDOM = document.querySelector(".foodMobileApp");
    const ecommerceMobileDOM = document.querySelector(".ecommerceMobileApp");
    //intersection observer for furniture -ecommerce image
    const furnitureObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.src = furnitureEcommerceStoreWebdevelopcorp;
          furnitureObserver.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: [0],
        rootMargin: "200px",
      }
    );

    //intersection observer for restaurantApp image
    const restaurantObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.src = restaurantWebsiteTemplateDesign;
          restaurantObserver.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: [0],
        rootMargin: "200px",
      }
    );

    //intersection observer for furnitureEcommerce-Col-Span image
    const furnitureEcommerceColSpan = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.src = furnitureEcommerceApplication;
          furnitureEcommerceColSpan.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: [0],
        rootMargin: "200px",
      }
    );

    //intersection observer for Dance Academy image
    const danceAcademyObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.src = danceAcademyWebsite;
          danceAcademyObserver.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: [0],
        rootMargin: "200px",
      }
    );

    //intersection observer for Fashion Clothing image
    const fashionClothingObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.src = fashionClothingEcommerceApp;
          fashionClothingObserver.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: [0],
        rootMargin: "200px",
      }
    );

    //intersection observer for Mobile App
    const mobileAppObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.src = onlineFoodDeliveryMobileApplication;
          mobileAppObserver.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: [0],
        rootMargin: "200px",
      }
    );

    //intersection observer for Ecommerce Mobile App
    const ecommerceMobileAppObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.src = ecommerceClothingStoreApplication;
          ecommerceMobileAppObserver.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: [0],
        rootMargin: "200px",
      }
    );

    furnitureObserver.observe(furnitureDOM);
    restaurantObserver.observe(restaurantDOM);
    furnitureEcommerceColSpan.observe(furnitureEcommerceDOM);
    danceAcademyObserver.observe(danceAcademyDOM);
    fashionClothingObserver.observe(fashionClothingDOM);
    mobileAppObserver.observe(foodMobileDOM);
    ecommerceMobileAppObserver.observe(ecommerceMobileDOM);

    return () => {
      furnitureObserver.unobserve(furnitureDOM);
      restaurantObserver.unobserve(restaurantDOM);
      furnitureEcommerceColSpan.unobserve(furnitureEcommerceDOM);
      danceAcademyObserver.unobserve(danceAcademyDOM);
      fashionClothingObserver.unobserve(fashionClothingDOM);
      mobileAppObserver.unobserve(foodMobileDOM);
      ecommerceMobileAppObserver.unobserve(ecommerceMobileDOM);
    };
  }, []);
  return (
    <div className="homePage_section5--wrapper">
      <img src={loadingSpinner} alt="" className="furnitureEcommerce" />
      <img src={loadingSpinner} alt="" className="restaurantApp-rowspan" />
      <img
        src={loadingSpinner}
        alt=""
        className="furnitureEcommerce-col-span"
      />
      <img src={loadingSpinner} alt="" className="danceAcademy" />
      <img src={loadingSpinner} alt="" className="fashionClothing-col-span" />
      <img src={loadingSpinner} alt="" className="foodMobileApp" />
      <img src={loadingSpinner} alt="" className="ecommerceMobileApp" />
    </div>
  );
}

export default Section5;
