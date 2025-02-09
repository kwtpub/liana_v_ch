import { HashRouter as Router , Route, Routes } from "react-router";
import Home from "./Home";
import ShoppingSupport from "./services/ShoppingSupport";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import OnlineShoping from "./services/OnlineShoping";
import Service from "./Service";
import LookForTheEvent from "./services/LookForTheEvent";
import All from "./services/All";
import AssemblingSuitcase from "./services/AssemblingSuitcase";
import ExpressTip from "./services/ExpressTip";
import StylizationPhotoshoots from "./services/StylizationPhotoshoots";
import WardrobeСlearance from "./services/WardrobeСlearance";




function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/onlineshoping" element={<OnlineShoping />}/>
          <Route path="/shoppingsupport" element={<ShoppingSupport />}/>
          <Route path="/lookfortheevent" element={<LookForTheEvent />}/>
          <Route path="/all" element={<All />}/>
          <Route path="/assemblingsuitcase" element={<AssemblingSuitcase />}/>
          <Route path="/expresstip" element={<ExpressTip />}/>
          <Route path="/stylizationphotoshoots" element={<StylizationPhotoshoots />}/>
          <Route path="/wardrobeclearance" element={<WardrobeСlearance />}/>
        </Routes>
      </Router>
      
  
  );
}

export default App;
