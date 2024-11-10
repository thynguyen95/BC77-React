import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import BaiTap1 from "./BaiTap1/BaiTap1";
import DataBinding from "./DataBinding/DataBinding";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-red-500 text-3xl">hello world</h1>
            {/* cách sử dụng conponent  */}
            {/* <Header></Header> */}
            {/* <Header />
            <Carousel /> */}
            {/* <BaiTap1 /> */}
            <DataBinding />
        </>
    );
}

export default App;
