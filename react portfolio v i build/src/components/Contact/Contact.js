import { useRef } from 'react'
import Header from '../Header/Header.js';
import Footer from "../Footer/Footer.js";
import emailjs from '@emailjs/browser';
import Map from '../Map/Map.js';

function Contact() {

    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(
            `${process.env.REACT_APP_SERVICE_ID}` ,
            `${process.env.REACT_APP_TEMPLATE_ID}` ,
            refForm.current,
            `${process.env.REACT_APP_PUBLIC_KEY}` 
            )
         .then(
             () => {
                alert('Message succesfully sent!')
                window.location.reload(false)
            }, 
            () => {
                alert('Failed to send the message, please try again');
            }
        )
    };
    
    return (
    <>
     <Header />
     <div className='contact-container'>
         <div>
         <div className='contact-header-text'>
                <h1 className='contact-me'>
                    Contact me
                </h1>
            

            </div>
         <div>
         
     <div className='contact-me'>
     <p className='contact-text'>
            I am interested in freelance and remote oppertunities - especially ambitious or large projects.
            However, if you have an other request or question, don't hesitate to contact me using the form below.

        </p>

     </div>
     <div className='contact-form'>
         <form ref={refForm} onSubmit={sendEmail}>
             <ul className='contact-form-ul'>
            
                 <li className='contact-form-li half'>
                 
                     <input type='text' name='user_name' placeholder='Name' required/>

                 </li>
                 
                 <li className='contact-form-li half'>
                     <input type='email' name='user_email' placeholder='Email' required/>

                 </li>
                 <li className='contact-form-li'>
                     <input type='text' name='subject' placeholder='Subject' required/>

                 </li>
                 <li className='contact-form-li'>
                 <textarea  
                 type='text' 
                 name='message' 
                 id="message"
                 cols="30"
                 rows="10" 
                 placeholder='Message' 
                 required>

                 </textarea>

                 </li>
                 <li className='contact-form-li'>
                     <input type='submit' className='send-message-button' value='send message'/>
                 </li>
                 
             </ul>

         </form>

     </div>

         </div>
           
     

         </div>
         <div className='map'>
         
            <Map />
        </div>
     

     </div>
     
   
     
     
     <Footer />
    </>
    )
}
export default Contact