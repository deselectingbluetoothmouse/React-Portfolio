import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import YoutubeIcon from "../../assets/images/youtube-brands.png";
import SpotifyIcon from "../../assets/images/spotify-brands.png";
import TwitterIcon from "../../assets/images/twitter-brands.png";
import InstagramIcon from "../../assets/images/instagram-brands.png";
import SoundcloudIcon from "../../assets/images/soundcloud-brands.png";


function Footer() {
    return (
            
            <footer>
                <div className="footer-icons">
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCzBYPvVjqVCYmB8VCgUzFPA/">
                        <img src={YoutubeIcon}
                            className="footer-icon"
                            alt="youtubeIcon"
                        />

                    </a>

                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/mennozimmermusic/">
                         <img src={SpotifyIcon}
                            className="footer-icon"
                            alt="SpotifyIcon"
                        />

                    </a>

                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/MennoZimmer/">
                          <img src={TwitterIcon}
                            className="footer-icon"
                            alt="TwitterIcon"
                        />

                    </a>

                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/mennozimmermusic/">
                       <img src={InstagramIcon}
                            className="footer-icon"
                            alt="InstagramIcon"
                        />

                    </a>

                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://soundcloud.com/menno-zimmer-music/">
                      <img src={SoundcloudIcon}
                            className="footer-icon"
                            alt="SoundcloudIcon"
                        />

                    </a>
                
                
             
               
             
                 
             
                 

                </div>
                
             
                
               <small className="footer-text">
                   <FontAwesomeIcon icon={faCopyright} color="#918e9b" className="copyright-logo"/> 2022 Zimmer Development. All rights reserved. </small>

            </footer>
        

       
        
    )
}

export default Footer