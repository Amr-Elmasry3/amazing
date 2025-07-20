// Import Css File
import "./headr.css";

// Import Components
import TopHeadr from "./top_headr/TopHeadrLogic";
import BodyHeadr from "./body_headr/BodyHeadrLogic";
import BottomHeadr from "./bottom_headr/BottomHeadrLogic";

export default function Headr() {
  return (
    <div className="headr">
      <TopHeadr />

      <BodyHeadr />

      <BottomHeadr />
    </div>
  );
}
