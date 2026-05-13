import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Login from "./Pages/Login.jsx";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}
export default App;
