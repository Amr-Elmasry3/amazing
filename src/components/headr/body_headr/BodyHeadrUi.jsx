// Import Link
import { Link } from "react-router-dom";

// Import Imgs
import logo from "../../../assets/images/logo.png";

// Import Icons
import { CgMenuRightAlt } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";

// Import Components
import UserLinks from "../../user_links/UserLinks";
import SearchBoxLogic from "../../search-box/SearchBoxLogic";

export default function BodyHeadr({
  handleMenu,
  handleCartSidebar,
  isLogin,
  countOfCartPro,
  subTotalOfCartPro,
}) {
  return (
    <div className="body-headr bg-dark-navy" style={{ padding: "10px 0" }}>
      <div className="my-container flex justify-between items-center gap-6">
        <Link to="" className="picture">
          <img
            src={logo}
            alt="logo..."
            className="logo"
            style={{ width: "140px" }}
          />
        </Link>

        <SearchBoxLogic />

        <div className="flex items-center gap-4">
          <UserLinks isLogin={isLogin} />

          <div className="menu-icon flex md:hidden flex-1 justify-end cursor-pointer">
            <CgMenuRightAlt
              className="icon text-[24px] text-orange"
              onClick={() => {
                handleMenu();
              }}
            />
          </div>

          <div
            className="link flex items-center gap-2 cursor-pointer"
            onClick={() => {
              handleCartSidebar();
            }}
          >
            <TiShoppingCart className="icon text-orange text-[23px]" />

            <div className="details flex flex-col items-center gap-2">
              <span
                className="count text-dark-navy bg-white text-[12px] rounded-[8px]"
                style={{ padding: "3px 9px" }}
              >
                {countOfCartPro}
              </span>
              <span className="price text-white text-[12px]">
                ${subTotalOfCartPro}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-container hidden">
        <SearchBoxLogic />
      </div>
    </div>
  );
}
