// Import Icons
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

// Import Link
import { Link } from "react-router-dom";

// Import Hooks
import { useLocation } from "react-router-dom";

// Import Redux Hooks
import { useDispatch } from "react-redux";

// Import  Navigation Slice Reducers
import { setPageName, setPageInStorage } from "../../features/navigationSlice";

export default function UserLinks({ isLogin, handleMenu }) {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className="user-links flex flex-col md:flex-row items-start md:center gap-4">
      <Link
        to="/compare"
        className="link flex items-center gap-2"
        onClick={() => {
          handleMenu ? handleMenu() : null;
        }}
      >
        <FaCodeCompare className="icon hidden md:block text-white text-[19px]" />

        <span className="text text-dark-navy md:text-white text-[14px]">
          Compare
        </span>
      </Link>

      <Link
        to="/whishlist"
        className="link flex items-center gap-2"
        onClick={() => {
          handleMenu ? handleMenu() : null;
        }}
      >
        <FaRegHeart className="icon hidden md:block text-white text-[19px]" />

        <span className="text text-dark-navy md:text-white text-[14px]">
          Wishlist
        </span>
      </Link>

      <Link
        to={isLogin ? "/user-account" : "/login"}
        className="link flex items-center gap-2"
        onClick={() => {
          handleMenu ? handleMenu() : null;
          if (
            !isLogin &&
            location.pathname !== "/login" &&
            location.pathname !== "/register"
          ) {
            const pageName = location.pathname.slice(1);

            dispatch(setPageName(pageName));
            dispatch(setPageInStorage());
          }
        }}
      >
        <FaRegUser className="icon hidden md:block text-white text-[19px]" />

        <span className="text text-dark-navy md:text-white text-[14px]">
          {isLogin ? "My Account" : "Login"}
        </span>
      </Link>
    </div>
  );
}
