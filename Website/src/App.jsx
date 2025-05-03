import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cube from "./Components/Common/Testing.tsx";

import "./App.css";
import NavBar from "./Components/Common/Navbar.tsx";
import LandingPage from './Pages/LandingPage.tsx'
import { HeroScrollDemo } from "./ScrollAni/HeroScrollDemo.tsx";

function App() {
  return (
    <div className="bg-black">
     
      {/* <Chatbot/> */}
      <BrowserRouter>
      <NavBar/>
      <LandingPage/>
      <HeroScrollDemo/>
          <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}
          </Routes> 
      {/* <Footer/> */}
     </BrowserRouter>
    </div>
    
  );
}

export default App;
