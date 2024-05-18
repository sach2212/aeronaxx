import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css";

import s1 from "/image/s1.png";
import s2 from "/image/s2.png";
import s3 from "/image/s3.png";

const Services = () => {
  useEffect(() => {
    duration: 1800, AOS.init();
  }, []);

  return (
    <div className="servces">
      <div className="services-container">
        <div className="service-content">
          <div className="content1" data-aos="fade-right">
            <h1>
              who <br /> we are
            </h1>
            <p>
              As an dominating agency within the digital jungle, AEronaaX
              transcends aesthetics, crafting your vision into a legacy that
              endures.
            </p>
          </div>
          <div className="content2">
            <div
              className="paragraph"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <p>
                From building impactful personal brands to designing seamless
                websites and executing strategic social media marketing plans,
                we're dedicated to helping you succeed <br /> in the digital
                world.
              </p>
              <a href="">
                <button className="button" type="button">
                  let's connect
                </button>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
