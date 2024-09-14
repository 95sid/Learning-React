import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Title = () => (
  <div className="text-2xl p-4">
    <h2>Food Villa</h2>
  </div>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between font-bold bg-pink-50">
      <Title />
      <div className="">
        <ul className="flex py-4">
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"/About"}>About Us</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
          <li className="px-2">
            <Link to={"/Instamart"}>Instamart</Link>
          </li>
          <li className="px-2 text-xl">
            <Link to={"/Cart"}>Cart - {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      <h1 className="p-4 font-bold text-red-500">{user?.name || "Guest"}</h1>
      {isLoggedIn ? (
        <button
          aria-label="Log out"
          className="bg-red-100 rounded-lg px-2 my-2 min-w-24"
          onClick={() => setIsLoggedIn(false)}
        >
          LogOut
        </button>
      ) : (
        <button
          aria-label="Log in"
          className="bg-red-100 rounded-lg px-2 my-2 min-w-24"
          onClick={() => setIsLoggedIn(true)}
        >
          LogIn
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
