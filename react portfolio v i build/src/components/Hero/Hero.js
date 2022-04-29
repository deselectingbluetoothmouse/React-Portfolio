import React from "react";
import GreetingRealtime from "./GreetingRealtime/GreetingRealtime.js"
// import heroImage from "./images/wide 1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Hero() {
    return (
           
            <div className="hero-container">
                  
                 
                   <div className="hero-img"></div>
                    {/* <img src={heroImage}
                            className="hero-img"
                            alt="hero-img"
                        /> */}
                        

                              
                <div className="hero-header-text greeting">
                   <GreetingRealtime />
                
                </div>
                <div className="hero-text-block-position">
                <div className="hero-text-block">
                <h3 >Look below to see my projects and skills <span className="arrow-down"><FontAwesomeIcon icon={faArrowDown} color="#f5f5f5"/></span></h3> 

                </div>

                </div>

                
               

              
               


            </div>
        

       
        
    )
}

export default Hero