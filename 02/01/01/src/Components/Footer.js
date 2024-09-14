import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return <h4 className="p-8 font-bold">This website is developed by {user.name} - {user.email}</h4>;
};
export default Footer;