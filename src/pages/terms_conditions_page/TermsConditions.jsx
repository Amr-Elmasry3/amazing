// Import Components
import PathPage from "../../components/path_page/PathPage";
import MainHeading from "../../components/main_heading/MainHeading";
import Restriction from "../../components/terms_conditions_components/Restriction";
import Rules from "../../components/terms_conditions_components/Rules";
import NeedHelp from "../../components/terms_conditions_components/NeedHelp";

export default function TermsConditions() {
  return (
    <div className="terms-conditions">
      <PathPage path="Home Terms-Conditions" />

      <div className="content">
        <MainHeading
          title="Terms & conditions"
          subTitle="Lorem Ipsum is printing & typesetting industry's standard dummy text since texts"
        />

        <Restriction />

        <Rules />

        <NeedHelp />
      </div>
    </div>
  );
}
