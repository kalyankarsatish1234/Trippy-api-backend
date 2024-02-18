import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import HomePage from "./component/TrippyHomePage1/HomePage";
import Flight_Details from "./component/FlightDisplayPage2/Flight_Details";
import { Route, Routes } from "react-router-dom";
import Login  from "./component/Auth/Login";
import Signup  from "./component/Auth/Signup";
import ForgotPassword from "./component/Auth/ForgotPassword";
import UserProfile from "./component/User/UserProfile";
import Dashboard from "./component/Auth/Dashboard "
import ResetPassword from "./component/Auth/ResetPassword ";
import Home from "./component/Auth/Home";




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<HomePage/>}></Route>
        <Route path="/flights/search" element={<Flight_Details/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>
        <Route path="//user/:activepage" element={<UserProfile/>}></Route>
        <Route path="/ResetPassword/:token" element={<ResetPassword/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Home />}></Route>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
