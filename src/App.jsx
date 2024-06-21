import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <SpeedInsights /> {/* Add SpeedInsights component here */}
      </div>
    </BrowserRouter>
  )
}

export default App
