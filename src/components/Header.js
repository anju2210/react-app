import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 sm:bg-yellow-50  lg:bg-indigo-100">
      <div className="logo-container">
        <img className="w-60" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-2 lg:px-4 md:mx-2  text-xl font-medium leading-tight text-primary">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 text-xl font-medium leading-tight text-primary">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 text-xl font-medium leading-tight text-primary">
            <Link to="/about">About</Link>
          </li>
          {/* <li className="p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 text-xl font-medium leading-tight text-primary">
            <Link to="/contact">Contact Us</Link>
          </li> */}
          {/* <li className="p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className=" font-medium text-xl leading-tight text-primary p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          {/* <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button> */}

          {/* <li className=" font-bold p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            {loggedInUser}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
