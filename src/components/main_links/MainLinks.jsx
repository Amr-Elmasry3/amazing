// Import React Memo
import { memo } from "react";

// Import Link
import { Link } from "react-router-dom";

// Import Image
import arrow from "../../assets/images/arrow.svg";

// Import Hooks
import { useState } from "react";

function MainLinks({ handleMenu }) {
  const [pagesState, setPagesState] = useState(false);

  return (
    <div className="main-links flex flex-col items-start gap-4 md:flex-row md:items-center md:border-b border-b-light-navy border-b-solid">
      <Link
        to="/"
        className="link text-[12px] text-dark-navy uppercase md:text-white"
        onClick={() => {
          handleMenu ? handleMenu() : null;
        }}
      >
        Home
      </Link>

      <Link
        to="/our-store"
        className="link text-[12px] text-dark-navy uppercase md:text-white"
        onClick={() => {
          handleMenu ? handleMenu() : null;
        }}
      >
        Our Store
      </Link>

      <Link
        to="/blogs"
        className="link text-[12px] text-dark-navy uppercase md:text-white"
        onClick={() => {
          handleMenu ? handleMenu() : null;
        }}
      >
        Blogs
      </Link>

      <Link
        to="/contact-us"
        className="link text-[12px] text-dark-navy uppercase md:text-white"
        onClick={() => {
          handleMenu ? handleMenu() : null;
        }}
      >
        Contact Us
      </Link>

      <div className="relative max-md:w-[100%]">
        <Link
          className="link flex items-center max-md:justify-between gap-4 text-[12px] text-dark-navy uppercase md:text-white"
          onClick={() => {
            setPagesState(!pagesState);
          }}
        >
          Pages
          <img
            src={arrow}
            alt=""
            className="max-md:brightness-50"
            style={{ width: "10px" }}
          />
        </Link>

        <ul
          className={`relative overflow-hidden ${
            pagesState ? "h-initial" : "h-[0]"
          } min-md:absolute z-10 w-[100%] top-[0] min-md:top-[27px] min-md:w-[150px] bg-transparent min-md:bg-light-navy rounded-one shadow-none min-md:shadow-one`}
        >
          <Link
            to="/about-us"
            className="block text-[13px] text-dark-navy  min-md:text-white border-0 min-md:border-b border-b-solid border-b-border-one"
            style={{ padding: "8px" }}
            onClick={() => {
              setPagesState(!pagesState);
              handleMenu ? handleMenu() : null;
            }}
          >
            About Us
          </Link>

          <Link
            to="/faqs"
            className="block text-[13px] text-dark-navy  min-md:text-white border-0 min-md:border-b border-b-solid border-b-border-one"
            style={{ padding: "8px" }}
            onClick={() => {
              setPagesState(!pagesState);
              handleMenu ? handleMenu() : null;
            }}
          >
            Faqs
          </Link>

          <Link
            to="/privacy-policy"
            className="block text-[13px] text-dark-navy  min-md:text-white border-0  min-md:border-b border-b-solid border-b-border-one"
            style={{ padding: "8px" }}
            onClick={() => {
              setPagesState(!pagesState);
              handleMenu ? handleMenu() : null;
            }}
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms-conditions"
            className="block text-[13px] text-dark-navy  min-md:text-white "
            style={{ padding: "8px" }}
            onClick={() => {
              setPagesState(!pagesState);
              handleMenu ? handleMenu() : null;
            }}
          >
            Terms & Conditions
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default memo(MainLinks);
