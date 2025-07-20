// Import Components
import MainHeading from "../main_heading/MainHeading";
import AccordionComponent from "./AccordionComponent";

// Import Data
import { accordionInfo2 } from "../../Data";

export default function ReturnPolicy() {
  return (
    <div className="return-policy" style={{ padding: "40px 0 0" }}>
      <div className="my-container">
        <MainHeading
          title="Return policy"
          subTitle="Lorem Ipsum is printing & typesetting industry's standard dummy text since texts"
        />

        <AccordionComponent data={accordionInfo2} type="two" />
      </div>
    </div>
  );
}
