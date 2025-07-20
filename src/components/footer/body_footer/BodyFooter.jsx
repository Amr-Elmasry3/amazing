// Import Css File
import "./body_footer.css";

// Import Icons
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// Import Link
import { Link } from "react-router-dom";

export default function BodyFooter() {
  return (
    <div
      className="body-footer bg-dark-navy border-y border-y-border-one border-y-solid"
      style={{ padding: "40px 0" }}
    >
      <div
        className="my-container grid gap-x-4 gap-y-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      >
        <div className="contact-us">
          <span
            className="title relative text-[15px] font-[600] text-white"
            style={{ padding: "0 0 10px" }}
          >
            Contact Us
          </span>

          <ul className="flex flex-col gap-4" style={{ margin: "30px 0 0" }}>
            <li className="flex items-center gap-2">
              <IoLocationOutline className="icon text-[18px] text-orange" />

              <span className="text text-[14px] text-white">
                123 Main St, City, Country
              </span>
            </li>

            <li className="flex items-center gap-2">
              <MdOutlineLocalPhone className="icon text-[18px] text-orange" />

              <span className="text text-[14px] text-white">
                +1 234 567 890
              </span>
            </li>

            <li className="flex items-center gap-2">
              <FaRegEnvelope className="icon text-[18px] text-orange" />

              <span className="text text-[14px] text-white">
                amazing@gmail.com
              </span>
            </li>
          </ul>

          <ul
            className="social-links flex items-center gap-2"
            style={{ margin: "20px 0 0" }}
          >
            <Link
              to=""
              className="facebook bg-[#3b5998] rounded-[50%] flex items-center justify-center"
              style={{ width: "26px", height: "26px" }}
            >
              <FaFacebookF className="icon text-[14px] text-white" />
            </Link>

            <Link
              to=""
              className="twitter bg-[#1da1f2] rounded-[50%] flex items-center justify-center"
              style={{ width: "26px", height: "26px" }}
            >
              <FaTwitter className="icon icon text-[14px] text-white" />
            </Link>

            <Link
              to=""
              className="youtube bg-[#ff0000] rounded-[50%] flex items-center justify-center"
              style={{ width: "26px", height: "26px" }}
            >
              <FaYoutube className="icon icon text-[14px] text-white" />
            </Link>

            <Link
              to=""
              className="linkedin bg-[#0077b5] rounded-[50%] flex items-center justify-center"
              style={{ width: "26px", height: "26px" }}
            >
              <FaLinkedinIn className="icon icon text-[14px] text-white" />
            </Link>
          </ul>
        </div>

        <div className="information">
          <span
            className="title relative text-[15px] font-[600] text-white"
            style={{ padding: "0 0 10px" }}
          >
            Information
          </span>

          <ul className="flex flex-col gap-2" style={{ margin: "30px 0 0" }}>
            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Privacy Policy
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Refund Policy
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Shipping Policy
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Terms Of Srvices
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Blogs
            </Link>
          </ul>
        </div>

        <div className="quick-links">
          <span
            className="title relative text-[15px] font-[600] text-white"
            style={{ padding: "0 0 10px" }}
          >
            Quick Links
          </span>

          <ul className="flex flex-col gap-2" style={{ margin: "30px 0 0" }}>
            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Search
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              About Us
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Fag
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Contact
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Cart
            </Link>
          </ul>
        </div>

        <div className="categories">
          <span
            className="title relative text-[15px] font-[600] text-white"
            style={{ padding: "0 0 10px" }}
          >
            Categories
          </span>

          <ul className="flex flex-col gap-2" style={{ margin: "30px 0 0" }}>
            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Accessories
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Laptops
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Headphones
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Smart Watches
            </Link>

            <Link
              to=""
              className="flex items-center gap-[4px] text-[13px] text-white"
            >
              <MdKeyboardDoubleArrowRight className="icon text-[18px] text-orange" />{" "}
              Tablets
            </Link>
          </ul>
        </div>

        <div className="our-app">
          <span
            className="title relative text-[15px] font-[600] text-white"
            style={{ padding: "0 0 10px" }}
          >
            Our App
          </span>

          <p
            className="description text-[12px] text-white leading-[1.3]!"
            style={{ margin: "30px 0 0" }}
          >
            Download our App and get extra 15% discount on yout first order
          </p>

          <ul
            className="flex flex-wrap item-center gap-[5px]"
            style={{ margin: "15px 0" }}
          >
            <Link
              to=""
              className="bg-white flex items-center gap-[8px] rounded-one"
              style={{ padding: "7px 14px" }}
            >
              <FaGooglePlay className="icon text-[20px] color-light-navy" />

              <div className="flex flex-col gap-[5px]">
                <span className="text-[11px] font-[500] text-light-navy">
                  Get it on
                </span>

                <span className="text-[13px] font-[800] text-light-navy">
                  Google Play
                </span>
              </div>
            </Link>

            <Link
              to=""
              className="bg-white flex items-center gap-[8px] rounded-one"
              style={{ padding: "7px 14px" }}
            >
              <FaApple className="icon text-[20px] color-light-navy" />

              <div className="flex flex-col gap-[5px]">
                <span className="text-[11px] font-[500] text-light-navy">
                  Download on the
                </span>

                <span className="text-[13px] font-[800] text-light-navy">
                  App Store
                </span>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
