import KeyPad from "../KeyPad/KeyPad.js"
import audioclipsdata from "../../assets/data/audioclipsdata.js"

function CarSoundIntro() {

   const pads = audioclipsdata.map(item => {

      return (
          <KeyPad 
              key={item.id}
              item={item}

          />
      )
  })
 
    return (
       
       <>
          <div className="gt-header-text">
         <h1>The Grand Tour Lochdown Carsound promo:</h1>
         <div className="portfolio-bg-image"> </div>
         <section className="pads">
                    {pads}
                    </section> 
     
       </div>
       
       </>
    
    )
}

 export default CarSoundIntro