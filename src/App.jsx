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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import HeaderRouter from "./Components/HeaderRouter";

// client-side rendering:
// server-side rendering: SEO tốt hơn

function App() {
    return (
        <BrowserRouter>
            <HeaderRouter />

            <Routes>
                {/* cài đặt khi để chạy ra trang chủ mặc định  */}
                <Route path="" element={<Home />} />
                <Route index element={<Home />} />

                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="service" element={<Service />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
