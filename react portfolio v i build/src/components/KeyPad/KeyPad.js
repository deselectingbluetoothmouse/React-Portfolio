import React from "react";
// import certificateJavascript from "./images/Certificate JavaScript.png"
// import smallLogo from "./images/logo192.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'


function KeyPad(props) {

    const [active, setActive] = React.useState(false);


      React.useEffect(() => {
          document.addEventListener('keydown',handleKeyPress);
          return () => {
            document.removeEventListener('keydown',handleKeyPress);
          }
 
      }, [])

    
    const handleKeyPress = (e) => {
        if(e.keyCode == props.item.keyCode) {
          playSound();
        }

      };

    const playSound = () => {
        const audioTag = document.getElementById(props.item.keyTrigger);
        // setActive(true);
       
       
        audioTag.currentTime = 0;
        audioTag.play();
      
  
      };



    return (
           
            <div>
                 
                        
             <div onClick={playSound} className="pad">
            
        
             <kbd>{props.item.keyTrigger}</kbd>
        <span className="sound">{props.item.audioSample}</span>
            
           
               
             </div>
            <audio id={props.item.keyTrigger} data-key={props.item.keyCode} src={props.item.audioUrl}/>
           
           
             

            </div>
            
        

       
        
    )
}

export default KeyPad