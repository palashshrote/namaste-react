import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import useNetworkConnection from "./src/utils/useNetworkConnection";

const AppLayout = () => {
    const {networkConnection} = useNetworkConnection();
    return (
        <div className="app">
            <Header networkConnection={networkConnection}/>
            <Outlet context={[networkConnection]}/>
            <Footer />
        </div>
    );
}


const appRoute = createBrowserRouter([
    {
        "path": "/",
        "element": <AppLayout />,
        "errorElement": <Error />,
        "children": [
            {
                "path": "/",
                "element": <Body />
            },
            {
                "path": "/about",
                "element": <About />
            },
            {
                "path": "/contact",
                "element": <Contact />
            },
            {
                "path": "/cart",
                "element": <Cart />
            },
            {
                "path": "/restaurant/:id/:lat/:lng",
                "element": <RestaurantMenu />
            }
        ]
    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);

