import React, { useEffect } from "react";
import "./self.css";
import sach from "/image/logo1.png";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Self = () => {
  const api = "https://api.github.com/users/sach2212";
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="self-container">
      <div className="main_container">
        <div className="first_box">
          <div className="image">
            <img src={data.avatar_url} alt="" srcset="" />
          </div>
          <div className="text">
            <h1>
              hello i'm, <br /> sachin sonawane
            </h1>
            <div className="frontend">
              <h3>Frontend Developer</h3>
              <p>
                Driven by a passion for coding and a thirst for knowledge. I am
                enthusiastic about exploring emerging technologies and applying
                them to create innovative solutions that address real-world
                problems.
              </p>
            </div>

            <div className="education">
              <h3>education</h3>
              <p>University of Mumbai</p>
              <p>Bsc. IT</p>
              <p>CGPI :- 7.1 </p>
            </div>
          </div>

          <div className="buttons">
            <a href="https://wa.me/+919702157195" className="book">
              contact me{" "}
            </a>
            <a href="" className="book book2">
              download cv
            </a>
          </div>
        </div>

        <div className="second_box">
          <div className="box1">
            <div className="projects_box">
              <h1>10+</h1>
              <p>Complete Projects</p>
            </div>

            <div className="projects_box">
              <h1>3+</h1>
              <p>Satisfied Clients</p>
            </div>
          </div>

          <div className="box2">
            <div className="projects_box">
              <h1>1</h1>
              <p>
                {" "}
                years of <br /> Experience
              </p>
            </div>

            <div className="projects_box">
              <h1>2 </h1>
              <p>Live Projects</p>
            </div>
          </div>
        </div>

        <div className="third_box">
          <div className="content-box">
            <div className="content-creation">
              <h1>Hobby</h1>
              <span>Content Creation</span>
              <p>
                In addition to creating content on Instagram and YouTube where I
                share insights and knowledge about websites
              </p>
            </div>
          </div>
          <div className="content-box">
            <div className="content-creation">
              <h1>Skills</h1>
              <p>React.js , JavaScript , HTML , CSS , Git <br />
        
                GitHub , Deployment , Problem-solving , Creativity
              
               </p> <br /> <br />
             
               
            </div>
          </div>
        </div>
      </div>
      <div className="social-icons">
             <p> <a href="https://github.com/settings/profile"> < FaGithub /></a>  </p>
             <p> <a href="https://www.youtube.com/channel/UCa8cUd102XGRqW0uNnIMIvw"> < IoLogoYoutube /></a>  </p>
             <p> <a href="https://www.linkedin.com/in/sachin-sonawane-a0a0a9265/"> < FaLinkedin /></a>  </p>
             <p> <a href="https://www.instagram.com/grow_with_sach/"> < FaInstagram /></a>  </p>
        
              

      </div>
    </div>
  );
};

export default Self;
