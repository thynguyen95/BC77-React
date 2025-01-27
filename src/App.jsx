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
import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
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
import ChangNumberRedux from "./pages/DemoRedux/ChangNumberRedux";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ChangeFontSizeRedux from "./pages/DemoRedux/ChangeFontSizeRedux";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { navigateHistory } from "./services/configUrl";
import Spinner from "./Components/Spinner";

// client-side rendering:
// server-side rendering: SEO tốt hơn

// cấu hình customBrowserHistory

// cấu hình react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RQMasterPage from "./MasterPage/RQMasterPage";
import ShoeShopRQ from "./ReactQueryDemo/ShoeShopRQ";
import UserManagementRQ from "./ReactQueryDemo/UserManagementRQ";
import HookMasterPage from "./MasterPage/HookMasterPage";
import UseRefDemo from "./pages/HookToiUuRender/useRefDemo";
import UseMemoDemo from "./pages/HookToiUuRender/UseMemoDemo";
import UseCallBackDemo from "./pages/HookToiUuRender/UseCallBackDemo";
import DemoCustomHook from "./pages/DemoCustomHook/DemoCustomHook";
import DemoContainerComponent from "./pages/DemoContainerComponent/DemoContainerComponent";
// tương tự store của redux
const queryClient = new QueryClient();

function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={true} />

                <Spinner />

                <HistoryRouter history={navigateHistory}>
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
                            <Route path="cart" element={<Cart />} />
                            <Route path="*" element={<Page404 />} />
                            <Route path="detail">
                                <Route
                                    path=":prodId"
                                    element={<DetailProduct />}
                                />
                            </Route>
                            <Route path="/search" element={<Search />} />

                            <Route
                                path="redux"
                                element={
                                    <>
                                        <h1 className="title">Demo Redux</h1>
                                        <Outlet />
                                    </>
                                }
                            >
                                <Route
                                    path="change-number"
                                    element={<ChangNumberRedux />}
                                />
                                <Route
                                    path="change-fontsize"
                                    element={<ChangeFontSizeRedux />}
                                />
                            </Route>
                        </Route>

                        {/* user */}
                        <Route path="user" element={<UserMasterPage />}>
                            <Route index element={<Login />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                            <Route path="profile" element={<Profile />} />
                            <Route
                                path="forgot-pass"
                                element={<ForgotPass />}
                            />

                            {/* <Route path="*" element={<Page404 />} /> */}
                            {/* navigate: chuyển hướng tự động */}
                            <Route
                                path="*"
                                element={<Navigate to={"/user"} />}
                            />
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
                            <Route
                                path="add-product"
                                element={<AddProduct />}
                            />
                            <Route
                                path="edit-product/:prodID"
                                element={<EditProduct />}
                            />
                            <Route path="product" element={<Product />} />
                            <Route path="product/:id" element={<Product />} />
                        </Route>

                        <Route path="react-query" element={<RQMasterPage />}>
                            <Route path="use-query" element={<ShoeShopRQ />} />
                            <Route
                                path="use-mutation"
                                element={<UserManagementRQ />}
                            />
                        </Route>

                        <Route path="hook" element={<HookMasterPage />}>
                            <Route path="useRef" element={<UseRefDemo />} />
                            <Route path="useMemo" element={<UseMemoDemo />} />
                            <Route
                                path="useCallback"
                                element={<UseCallBackDemo />}
                            />
                            <Route
                                path="ch-getDataAPI"
                                element={<DemoCustomHook />}
                            />
                            <Route
                                path="container-cpn"
                                element={<DemoContainerComponent />}
                            />
                        </Route>
                    </Routes>
                </HistoryRouter>
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
