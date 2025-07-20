// Import Css File
import "./sidebar.css";

// Import Components
import SearchBoxLogic from "../search-box/SearchBoxLogic";
import MainLinks from "../main_links/MainLinks";
import UserLinks from "../user_links/UserLinks";

// Import Logo
import logo from "../../assets/images/logo.png";

// Import Icons
import { FaX } from "react-icons/fa6";

export default function SidebarUi({ menuOpen, handleMenu }) {
  return (
    <div
      className="sidebar fixed top-0 left-0 w-[320px] h-[100%] bg-white shadow-one z-[100] md:hidden"
      style={{
        padding: "20px",
        left: menuOpen ? "0" : "-325px",
        transition: "left 0.4s ease-in-out",
      }}
    >
      <div className="head flex items-center justify-between">
        <img src={logo} alt="logo..." style={{ width: "110px" }} />

        <div
          className="bg-orange w-[24px] h-[22px] flex items-center justify-center rounded-[3px] cursor-pointer"
          onClick={handleMenu}
        >
          <FaX className="icon text-[10px] text-dark-navy" />
        </div>
      </div>

      <div style={{ padding: "0 12px" }}>
        <SearchBoxLogic />

        <MainLinks handleMenu={handleMenu} />

        <UserLinks handleMenu={handleMenu} />
      </div>
    </div>
  );
}
