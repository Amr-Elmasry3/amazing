// Import Components
import MainLinks from "../../main_links/MainLinks";

// Import Link
import { Link } from "react-router-dom";

// Import Imgs
import menu from "../../../assets/images/menu.svg";
import arrow from "../../../assets/images/arrow.svg";

export default function BottomHeadr({
  categories,
  isLoading,
  openCategories,
  handleCategoriesState,
  handleSearchCategory,
}) {
  return (
    <div className="bottom-headr bg-light-navy" style={{ padding: "10px 0" }}>
      <div className="my-container flex items-center justify-center md:justify-normal gap-4">
        <div
          className="categories relative z-10 flex items-center gap-2 cursor-pointer border-0 md:border-r border-r-border-one border-r-solid"
          style={{ paddingRight: "10px" }}
          onClick={() => {
            handleCategoriesState();
          }}
        >
          <img
            src={menu}
            alt="menu..."
            className="menu"
            style={{ width: "19px" }}
          />

          <span className="text text-[14px] text-white">Shop Categories</span>

          <img
            src={arrow}
            alt="arrow..."
            className="arrow"
            style={{ width: "9px", marginLeft: "10px" }}
          />

          <ul
            className="list custom-scrollbar absolute bg-light-navy rounded-[6px] h-[200px] w-[100%] overflow-y-scroll top-[30px] shadow-one"
            style={{ display: openCategories ? "block" : "none" }}
          >
            {isLoading ? (
              <span>Is Loading</span>
            ) : (
              categories.map((category, index) => {
                return (
                  <li
                    key={index}
                    className="item text-[14px] font-[500]  text-white border-b border-b-border-one border-b-solid"
                    style={{ padding: "8px" }}
                    onClick={() => {
                      handleSearchCategory(category.slug);
                    }}
                  >
                    <Link to="" className="link">
                      {category.name}
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </div>

        <MainLinks />
      </div>
    </div>
  );
}
