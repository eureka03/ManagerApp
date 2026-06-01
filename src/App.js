import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Heading from "./components/Heading.jsx";
import Contact from "./pages/Contact.jsx";
import { useState } from "react";
import './App.css';
import { AuthProvider } from "./context/AuthProvider.jsx";

function App() {
    const [isLoggedIn,setIsLoggedIn] = useState(false);


  return (
    <AuthProvider>
      <Router>
        <Heading/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
