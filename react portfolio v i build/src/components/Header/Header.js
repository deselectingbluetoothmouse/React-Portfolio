import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faCompactDisc, faArchive } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header>
            <nav className="nav-wrapper">
                
                <FontAwesomeIcon icon={faCompactDisc} color="#0a84bd" className="nav-logo"/>
                 <h3 className="nav-logo-text">Menno Zimmer Development</h3>
                
                           
                 <div className="nav-container">
                        <ul>
                            
                            
                            <li>
                                <NavLink exact="true" activeclassname="active" to="/">
                                    <FontAwesomeIcon icon={faHome} color="#f5f5f5" />
                                </NavLink>
                            </li>

                            <li>
                                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                                    <FontAwesomeIcon icon={faUser} color="#f5f5f5" />
                                </NavLink>
                                
                            </li>
                            <li>
                            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                                     <FontAwesomeIcon icon={faEnvelope} color="#f5f5f5" />
                                </NavLink>
                                
                            </li>
                            <li>
                            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                                     <FontAwesomeIcon icon={faArchive} color="#f5f5f5" />
                                </NavLink>
                                
                            </li>
                            
                           
                           
                            
                        </ul>

                 </div>

               


            </nav>
        </header>
        
    )
}

export default Header