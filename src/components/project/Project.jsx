import React from "react";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./project.css";
import web1 from "/image/web1.png";
import web2 from "/image/web2.png";
import web3 from "/image/web3.png";
import web4 from "/image/web4.png";
 

const Project = () => {
  useEffect(() => {
    duration: 1800,
    AOS.init();
  }, []);

  return (
    <div className="project" data-color="green">
 

      <div className="pro-container">
      <h1 className="heading">all project</h1>
      {/* <button>
	all project
</button> */}
        <div className="pro-container1">
          <div className="container" data-aos="fade-right">
            <div className="web_images">
                <a href="https://vinyasaresidency.com/">
              <img src={web1} alt="" />
              </a>
            </div>
            <div className="webcontent">
              <h1>vinyasa residency</h1>

              <div className="category">
                <span>development</span>
                <span>Design</span>
                <span>Static</span>
                <span>SMM</span>
              </div>
              <h4>
                visit now
                <span className="arrow">→</span>
              </h4>
            </div>
          </div>

          <div className="container"data-aos="fade-left">
            <div className="web_images">
            <a href="https://sach2212.github.io/core11/">
              <img src={web3} alt="" />
              </a>
            </div>
            <div className="webcontent">
              <h1>Core Fitness</h1>

              <div className="category">
                <span>Development</span>
                <span>Design</span>
                <span>Static</span>
                <span>SMM</span>
              </div>
              <h4>
                visit now
                <span className="arrow">→</span>
              </h4>
            </div>
          </div>
        </div>

        <div className="pro-container2">
          <div className="container" data-aos="fade-right">
            <div className="web_images">
            <a href="https://hilltoneresort.netlify.app/">
              <img src={web2} alt="" />
              </a>
            </div>
            <div className="webcontent">
              <h1>Hilltone resort</h1>

              <div className="category">
                <span>development</span>
                <span>Design</span>
                <span>Static</span>
                <span>SMM</span>
              </div>
              <h4>
                visit now
                <span className="arrow">→</span>
              </h4>
            </div>
          </div>

          <div className="container" data-aos="fade-left">
            <div className="web_images">
            <a href="https://sach2212.github.io/rsy3/#home">
              <img src={web4} alt="" />
              </a>
            </div>
            <div className="webcontent">
              <h1>Rsy Automobile</h1>

              <div className="category">
                <span>Development</span>
                <span>Design</span>
                <span>Static</span>
                <span>SMM</span>
              </div>
              <h4>
                visit now
                <span className="arrow">→</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
