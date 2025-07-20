// Import Icons
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

// Import Link
import { Link } from "react-router-dom";

export default function UserLinks({ isLogin, handleMenu }) {
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
