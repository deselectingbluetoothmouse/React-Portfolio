import Header from '../Header/Header.js';
import Footer from "../Footer/Footer.js";
import CarSoundIntro from "../CarSoundIntro/CarSoundIntro";
import SpotifyEmbed from '../Spotify/Spotify.js';


function Portfolio() {
    return (
    <>
     <Header />
     <div className='portfolio-archive'>
        <h1 className='portfolio-archive-header-text'>
            Portfolio archive 
        </h1>
     </div>

     <CarSoundIntro />

     <SpotifyEmbed/>

     <Footer />
    </>
    )
}
export default Portfolio