// Import Components
import PathPage from "../../components/path_page/PathPage";
import MainHeading from "../../components/main_heading/MainHeading";
import FaqsDetails from "../../components/faqs_components/FaqsDetails";
import Support from "../../components/faqs_components/Support";
import ReturnPolicy from "../../components/faqs_components/ReturnPolicy";

export default function Faqs() {
  return (
    <div className="faqs-page">
      <PathPage path="Home Faqs" />

      <div className="content">
        <MainHeading
          title="Faq's"
          subTitle="Below are frequently asked questions, you may find the answer for yourself"
        />

        <FaqsDetails />

        <Support />

        <ReturnPolicy />
      </div>
    </div>
  );
}
