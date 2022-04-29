
import Spotify from 'react-spotify-embed';


function SpotifyEmbed() {
    return (
    <>
    

            <div className="spotify-header-text">
                    <h1>Music productions:</h1>
                    
                       
       </div>

       <div className='spotify-container'>
    

       

        {/* // Displaying an album. */}
        <Spotify id="spotify" link={"https://open.spotify.com/album/4Dco3ELja57ZIsbMcZCy4J?si=pFxWKNz5Sbi0gMGuGhoKIw"} />

        {/* // Displaying an album. */}
        <Spotify link={"https://open.spotify.com/album/2rHshvHSgYxaK8zKd3RSqP?si=netJO-fZSAmM4Etm7xVbDg"} />

             {/* // Displaying a single track. */}
             <Spotify link={"https://open.spotify.com/track/6rdRf95jH3x6XUk5Ka8QWC?si=8f20240e47dd4edc"} />

        </div>       
     
    </>
    )
}
export default SpotifyEmbed