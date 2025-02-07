import { HashRouter as Router , Route, Routes } from "react-router";
import Home from "./Home";
import ShoppingSupport from "./ShoppingSupport";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import OnlineShoping from "./OnlineShoping";
import Service from "./Service";




function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/shoppingsupport" element={<ShoppingSupport />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/onlineshoping" element={<OnlineShoping />}/>
        </Routes>
      </Router>
      
  
  );
}

export default App;
