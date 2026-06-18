import "./index.css";
import React, { lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
// import About from "./src/components/About";
// import Contact from "./src/components/Contact";
// import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import useNetworkConnection from "./src/utils/useNetworkConnection";
import UserContext from "./src/utils/UserContext";

const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));
const Cart = lazy(() => import("./src/components/Cart"));
const AppLayout = () => {
    const { networkConnection } = useNetworkConnection();
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [newUser, setNewUser] = useState("");
    // const changeLoggedInUser = () => {
    //     setNewUser(loggedInUser);
    // }
    // const inputFunction = (e) => {
    //     setLoggedInUser(e.target.value);
    // }
    return (
        <UserContext.Provider value={{ userName: newUser, setNewUser }}>
            <div className="app">
                <Header networkConnection={networkConnection} />
                <Outlet context={{networkConnection}} />
                <Footer />
            </div>
        </UserContext.Provider>
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

