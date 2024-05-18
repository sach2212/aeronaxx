import React from 'react'
import "./socialservices.css"
import s1 from "/image/s1.png";
import s2 from "/image/s2.png";
import s3 from "/image/s3.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialservices = () => {
  return (
    <div className='socialservices-container'>
      <div className="service-content2">
          <div className="sopcialservices">
            
            <div className="instabox" data-aos="fade-right"  data-aos-duration="2000">
             <div className="instabox-content">
             <h1>social media <br /> marketing</h1>
              <p>
             We can develop a social media strategy to promote content <br /> and engage with potential customers on relevant platforms. 
              </p>
                </div> 
             
              <div className="simage">
                <img src={s2} alt="" />
              </div>
            </div>

            <div className="websitebox" data-aos="fade-right"  data-aos-duration="2000">
            <div className="websitebox-content">
            <h1>website <br /> development</h1>
              <p>
              we specialize in crafting bespoke websites that captivate <br /> audiences and drive results. 
                
                </p>
                </div> 
 
              <div className="simage" >
                <img src={s3} alt="" />
              </div>
            
            </div>

            <div className="contentcreation" data-aos="fade-right"  data-aos-duration="2000">

            <div className="contentcreation-content">
            <h1>content <br /> creation</h1>
              <p>
              We can help startups to identify their ideal customer and <br />  that resonates with their  specific needs  and pain points.
              </p>  </div>
 
              <div className="simage">
                <img src={s1} alt="" />
              </div>
             
            </div>


            <div className="consult">
            <a href="">
                free consultation
            </a>
          </div>
          </div>

         
        </div>
    </div>
  )
}

export default socialservices