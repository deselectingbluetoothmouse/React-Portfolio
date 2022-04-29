import Header from '../Header/Header.js';
import Footer from "../Footer/Footer.js";
import Hero from "../Hero/Hero.js";
import Card from "../Card/Card.js"
import SkillCard from "../SkillCard/SkillCard.js"
import certificatedata from "../../assets/data/certificatedata.js"
import projectdata from "../../assets/data/projectdata.js"

function Home() {

    
        const projectcards = projectdata.map(item => {
            return (
                <Card 
                    key={item.id}
                    item={item}
    
                />
            )
        })
        const certificatecards = certificatedata.map(item => {
            return (
                <SkillCard 
                    key={item.id}
                    item={item}
    
                />
            )
        })

    return (
    <>
     <Header />
     <Hero />
         <h2>My projects</h2>
            <div className="projects-cards-list">
                    {projectcards}
                    </div> 
    
          
            <h2>Skills</h2>
                <div className="certificates-cards-list">
                    {certificatecards}
                    </div> 
     <Footer />
    </>
    )
}
export default Home
