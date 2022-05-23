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
import ManageOrders from "./Pages/Admin/ManageOrders";
import AddProduct from "./Pages/Admin/AddProduct";
import AdminManagement from "./Pages/Admin/AdminManagement";
import ManageProducts from "./Pages/Admin/ManageProducts";
import RequireAdmin from "./Auth/RequireAdmin";
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
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/dashboard" element={<Dashboard/>}> 
            <Route index element={<Profile/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="my-orders" element={<MyOrders/>}/>
            <Route path="add-review" element={<AddReview/>}/>

            <Route path="manage-orders" element={<ManageOrders/>}/>
            <Route path="add-product" element={<AddProduct/>}/>
            <Route path="admin-management" element={<RequireAdmin><AdminManagement/></RequireAdmin>}/>
            <Route path="manage-products" element={<ManageProducts/>}/>

        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
