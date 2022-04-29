import Header from '../Header/Header.js';
import Footer from "../Footer/Footer.js";
import Profileimg from '../../assets/images/profile 3.jpg';


function About() {
    return (
    <>
     <Header />
    
     <div className='about-me'>
     <h1 className='about-me-header-text'>
         About Me
     </h1>
     <div className="profile-container">
     <div className="two-column-wrapper">
     <div className="profile-image-wrapper">
            <img src={Profileimg} alt="" />
          </div>
          <div className='profile-text-wrapper'>
          <p>
     Hi, thanks for visiting my site.
       I am a Netherlands based webdeveloper and musician with a passion for cars and guitars.
       <br/>
       <br/>
        All too often developers rarely communicate to clients throughout the development stage, resulting in a final product that fails to reach the goal sought by the customer and end user.
       <br/>
       <br/>

       For this reason I decided to utilize a completely different
              development pattern that is highly focused on communication
              and transparent design patterns. When I take on a project not only
              do I work to craft the application according to the client's
              specifications, I give daily updates to ensure that the project is
              aligning properly with the client's goals. The end result is the
              right product, delivered on time, and on budget.
     </p>

          </div>
    
     

     </div>
 

     </div>

     </div>
     
    
     <Footer />
     
    </>
    )
}
export default About

