import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Homepage from "./pages/Homepage";
import Registerpage from"./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/register" element={<Registerpage/>}/>
        <Route path="/login" element={<LoginPage/>}/>

      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
