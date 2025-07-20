// Import Components
import TopFooter from "./top_footer/TopFooter";
import BodyFooter from "./body_footer/BodyFooter";
import BottomFooter from "./bottom_footer/BottomFooter";

export default function Footer() {
  return (
    <div className="footer">
      <TopFooter />

      <BodyFooter />

      <BottomFooter />
    </div>
  );
}
