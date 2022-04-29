import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'


function SkillCard(props) {
    return (
           
            <div>
             <a href={props.item.link} target={props.item.target}>
             <div className="skill-card">
                {/* <img src={`./images/${props.item.coverImg}`} */}
                 <img src={props.item.coverImg}
                    className="skillcard-img"
                    alt="skillcard-img"
                 />
                <div className="skillcard-stats">
                        {/* <img src={smallLogo}
                            className="competence-card-icon"
                            alt="competence-card-icon"
                        /> */}
                        <FontAwesomeIcon icon={faCompactDisc} color="#0a84bd" />
                        <span>{props.item.stats.yearOfFinish}</span>
                        <span className="gray">({props.item.stats.yearOfStart}) *  </span>
                        <span className="gray">{props.item.location}</span>

                 </div>
                 <p>{props.item.title}</p>
                 {/* <p><span className="bold">{props.item.mainCourse}</span> / {props.item.secundairyCourse}</p> */}
                
               
             </div>
             </a>

            </div>
            
        

       
        
    )
}

export default SkillCard