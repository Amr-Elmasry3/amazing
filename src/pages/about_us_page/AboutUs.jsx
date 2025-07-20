// Import Components
import PathPage from "../../components/path_page/PathPage";
import MainHeading from "../../components/main_heading/MainHeading";
import WhoUs from "../../components/about_us_components/WhoUs";
import WhatWeDo from "../../components/about_us_components/WhatWeDo";
import OurInformationLogic from "../../components/about_us_components/our_information/OurInformationLogic";

export default function AboutUs() {
  return (
    <div className="about-us">
      <PathPage path="Home About-Us" />

      <div className="content">
        <MainHeading
          title="About Us"
          subTitle="Lorem Ipsum is printing & typesetting industry's standard dummy text since texts"
        />

        <WhoUs />

        <WhatWeDo />

        <OurInformationLogic />
      </div>
    </div>
  );
}
