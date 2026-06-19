import { Link } from "react-router";
import { HeaderLogo } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
const Header = ({ networkConnection }) => {
    const userData = useContext(UserContext);
    // console.log(userData);
    const cartItems = useSelector((store) => store.cart.items.length);

    return (
        <div className="header flex bg-pink-100 items-center justify-between px-4 shadow-md" >
            <div className="logo-container">
                <img className="logo w-20" src={HeaderLogo} />
            </div>
            <div className="nav-items">
                <ul className="flex">
                    <li className="px-4 font-bold">
                        Online Status:  {networkConnection ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link className="dec-none" to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link className="dec-none" to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link className="dec-none" to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link className="dec-none" to="/cart">Cart - {cartItems}</Link>

                    </li>
                    <li className="italic">
                        {userData.userName}
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;