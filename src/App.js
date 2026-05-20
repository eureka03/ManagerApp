import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Login from "./Pages/Login.jsx";
import About from "./Pages/About.jsx";
import Heading from "./Components/Heading.jsx";
import Contact from "./Pages/Contact.jsx";
import { useState } from "react";
import './App.css';

function App() {
    const [isLoggedIn,setIsLoggedIn] = useState(false);


  return (
    <Router>
      <Heading isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}
export default App;
