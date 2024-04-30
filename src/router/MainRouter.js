import { createBrowserRouter,Route,createRoutesFromElements } from "react-router-dom";
import React from "react";
// import Dashboard from "../component/user/dashboard/Dashboard";
// import SignUpp from "../component/auth/SignUpp";
// import Home from "../component/Home"
// import PageNotFound from "../component/PageNotFound";
// import UserLayout from "../layout/UserLayout";
// import Information from "../component/user/dashboard/Information";
// import AdminLayout from "../layout/AdminLayout";
// import AdminDashboard from "../component/admin/AdminDashboard";
const PageNotFound = React.lazy(()=>import('../component/PageNotFound'));
const AdminDashboard = React.lazy(()=>import('../component/admin/AdminDashboard'));
const UserLayout = React.lazy(()=>import('../layout/UserLayout'));
// const Information = React.lazy(()=>import('../component/user/dashboard/Information'));
const AdminLayout = React.lazy(()=>import('../layout/AdminLayout'));
const AuthLayout = React.lazy(()=>import('../layout/AuthLayout'));
const Login = React.lazy(()=>import('../component/auth/Login'));
// const SignUp = React.lazy(()=>import('../component/auth/SignUp'));
const SignUpp = React.lazy(()=>import('../component/auth/SignUpp'));
// const HotProduct = React.lazy(()=>import('../component/user/dashboard/Information'))
const Dashboard = React.lazy(()=>import('../component/user/dashboard/Dashboard'))
const About = React.lazy(()=>import('../component/About'));
const Contact = React.lazy(()=>import('../component/Contact'));
const Details = React.lazy(()=>import('../component/user/Details'));
const Cart = React.lazy(()=>import ('../component/user/dashboard/Cart'));
const PaymentMethod = React.lazy(()=>import('../component/user/PaymentMethod'));
const Customer = React.lazy(()=>import('../component/admin/Customers'));
const Profile = React.lazy(()=>import('../component/admin/Profile'));
const Product = React.lazy(()=>import('../component/admin/Product'));
const UserProfile = React.lazy(()=>import("../component/user/dashboard/UserProfile"));
const SearchProduct = React.lazy(()=>import("../component/user/dashboard/SearchProduct"))
const Sort = React.lazy(()=>import("../component/user/dashboard/Sort"));





export const MainRoute = createBrowserRouter(
    createRoutesFromElements(
        <Route>'
            {/* <Route path = "/" element = {<Home/>}/> */}
            <Route path = "/" element ={<UserLayout/>}>
                <Route index element = {<Dashboard/>}/>
                <Route path = "about" element = {<About/>}/>
                <Route path = "contact" element = {<Contact/>}/>
                <Route path = "details" element = {<Details/>}/>
                <Route path = "cart" element = {<Cart/>}/>
                <Route path = "payment" element = {<PaymentMethod/>}/>
                <Route path = "user/profile" element = {<UserProfile/>}/>
                <Route path = "/searchproduct/:id" element = {<SearchProduct/>}/>
                <Route path = "sort" element = {<Sort/>}/>
                
                
            </Route>
                
            <Route path = "/admin" element = {<AdminLayout/>}>
                {/* <Route index element = {<AdminDashboard/>}/> */}
                <Route path = "dashboard" element = {<AdminDashboard/>}/>
                <Route path = "customer" element = {<Customer/>}/>
                <Route path = "profile" element = {<Profile/>}/>
                <Route path = "hotproduct" element = {<Product/>}/>
            </Route>

            <Route path = "/auth" element = {<AuthLayout/>}>
                <Route path = "login" element = {<Login/>}/>
                <Route path = "signup" element = {<SignUpp/>}/>
            </Route>


            <Route path = "*" element = {<PageNotFound/>}/>

        </Route>
    )
)