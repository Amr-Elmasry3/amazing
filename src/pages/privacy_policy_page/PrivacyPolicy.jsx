// Import Components
import PathPage from "../../components/path_page/PathPage";
import MainHeading from "../../components/main_heading/MainHeading";
import OurSecured from "../../components/privacy_policy_components/OurSecured";
import OurLiability from "../../components/privacy_policy_components/OurLiability";
import PopularMethods from "../../components/privacy_policy_components/PopularMethods";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <PathPage path="Home Privacy-Policy" />

      <div className="content">
        <MainHeading
          title="Privacy policy"
          subTitle="Lorem Ipsum is printing & typesetting industry's standard dummy text since texts"
        />

        <OurSecured />

        <OurLiability />

        <PopularMethods />
      </div>
    </div>
  );
}
