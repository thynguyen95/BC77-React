import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import BaiTap1 from "./BaiTap1/BaiTap1";
import DataBinding from "./DataBinding/DataBinding";
import Event from "./Event/Event";
import RenderCondition from "./RenderCondition/RenderCondition";
import DemoState from "./State/DemoState";
import DemoChangeFontSize from "./State/DemoChangeFontSize";
import ChangeColorCard from "./State/ChangeColorCard";
import DemoCss from "./DemoCss/DemoCss";
import DemoProps from "./Props/DemoProps";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import ShoeShop from "./Props/BaiTap/ShoeShop";
import LiftingStateUp from "./LiftingStateUp/LiftingStateUp";
import ExCarStore from "./LiftingStateUp/ExCarStore/ExCarStore";
import ShoeShopAPI from "./DemoAPI/ShoeShopAPI";
import DemoLoginForm from "./DemoForm/DemoLoginForm";
import DemoFormik from "./DemoForm/DemoFormik";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import HeaderRouter from "./Components/HeaderRouter";
import HomeMasterPage from "./MasterPage/HomeMasterPage";
import UserMasterPage from "./MasterPage/UserMasterPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminMasterPage from "./MasterPage/AdminMasterPage";
import UserManagement from "./pages/UserManagement";
import MovieManagement from "./pages/MovieManagement";
import Page404 from "./pages/Page404";
import ForgotPass from "./pages/ForgotPass";
import DetailProduct from "./pages/DetailProduct";
import Search from "./pages/Search";
import ProductManagement from "./pages/ProductManagement";
import AddProduct from "./pages/ProductManagement/AddProduct";
import EditProduct from "./pages/ProductManagement/EditProduct";
import Product from "./pages/ProductManagement/Product";

// client-side rendering:
// server-side rendering: SEO tốt hơn

function App() {
    return (
        <BrowserRouter>
            {/* <HeaderRouter /> */}

            <Routes>
                {/* route basic */}
                {/* cài đặt khi để chạy ra trang chủ mặc định  */}
                {/* <Route path="" element={<Home />} />
                <Route index element={<Home />} />

                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} /> */}
                <Route path="service" element={<Service />} />

                {/* nested router  */}
                <Route path="/" element={<HomeMasterPage />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="detail">
                        <Route path=":prodId" element={<DetailProduct />} />
                    </Route>
                    <Route path="/search" element={<Search />} />
                </Route>

                {/* user */}
                <Route path="user" element={<UserMasterPage />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="forgot-pass" element={<ForgotPass />} />

                    {/* <Route path="*" element={<Page404 />} /> */}
                    {/* navigate: chuyển hướng tự động */}
                    <Route path="*" element={<Navigate to={"/user"} />} />
                </Route>

                {/* admin */}
                <Route path="admin" element={<AdminMasterPage />}>
                    <Route index element={<ProductManagement />} />
                    <Route path="user" element={<UserManagement />} />
                    <Route path="movie" element={<MovieManagement />} />
                    <Route
                        path="product-management"
                        element={<ProductManagement />}
                    />
                    <Route path="add-product" element={<AddProduct />} />
                    <Route
                        path="edit-product/:prodID"
                        element={<EditProduct />}
                    />
                    <Route path="product" element={<Product />} />
                    <Route path="product/:id" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
