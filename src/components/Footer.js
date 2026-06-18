import {useContext} from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
    const userData = useContext(UserContext);
    return (
        <h1>This is footer, logged in user {userData.userName}</h1>
    );
}
export default Footer;