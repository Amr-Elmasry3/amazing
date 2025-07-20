// Import Css File
import "./button.css";

// Import Link
import { Link } from "react-router-dom";

export default function Button({ link, btnTitle, func }) {
  return link ? (
    <button
      className="btn bg-light-navy uppercase rounded-one text-[12px] text-white cursor-pointer"
      onClick={(eve) => {
        eve.preventDefault();
        func ? func() : null;
      }}
    >
      <Link to={link}>{btnTitle}</Link>
    </button>
  ) : (
    <button
      className="btn bg-light-navy uppercase rounded-one text-[12px] text-white cursor-pointer"
      onClick={(eve) => {
        eve.preventDefault();
        func ? func() : null;
      }}
    >
      {btnTitle}
    </button>
  );
}
