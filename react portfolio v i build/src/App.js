import Home from "./components/Home/Home.js"
import About from "./components/About/About.js"
import Contact from "./components/Contact/Contact.js"
import Portfolio from "./components/Portfolio/Portfolio.js"
import { Routes, Route } from 'react-router-dom'


function App() {

    return (
        <>
           <Routes>
            
               <Route path="/" index element={<Home/>}/>
               <Route path="/About" index element={<About/>}/>
               <Route path="/Contact" index element={<Contact/>}/>
               <Route path="/Portfolio" index element={<Portfolio/>}/>
              
           </Routes>
       
        </>

    )
}

export default App