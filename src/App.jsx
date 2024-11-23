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

function App() {
    return (
        <>
            {/* <h1 className="text-red-500 text-3xl">hello world</h1> */}
            {/* cách sử dụng conponent  */}
            {/* <Header></Header> */}
            {/* <Header />
            <Carousel /> */}
            {/* <BaiTap1 /> */}
            {/* <DataBinding /> */}

            {/* <Event /> */}

            {/* <RenderCondition /> */}

            {/* <DemoState />

            <p className="text-4xl text-green-500 mx-4" id="number">
                10
            </p> */}

            {/* <DemoChangeFontSize /> */}

            {/* <ChangeColorCard /> */}

            {/* <DemoCss /> */}

            {/* <DemoProps /> */}

            {/* <RenderWithMap /> */}

            {/* <ShoeShop /> */}

            <LiftingStateUp />

            {/* <ExCarStore /> */}
        </>
    );
}

export default App;
