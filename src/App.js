import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Auth/Login";
import Footer from "./Pages/Footer";
import NotFound from "./Pages/NotFound";
import { useEffect } from "react";
import AOS from 'aos';
import Services from "./Pages/Services";
import SignUp from "./Auth/SignUp";
import RequireAuth from "./Auth/RequireAuth";
import Dashboard from "./Pages/Dashboard";
import MyOrders from "./Pages/MyOrders";
import AddReview from "./Pages/AddReview";
import Profile from "./Pages/Profile";
// import 'react-icons/all'
function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<RequireAuth><Services/></RequireAuth>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="/dashboard/my-orders" element={<MyOrders/>}/>
        <Route path="/dashboard/add-review" element={<AddReview/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
