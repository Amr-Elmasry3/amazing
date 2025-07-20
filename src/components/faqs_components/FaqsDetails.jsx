// Import Components
import AccordionComponent from "./AccordionComponent";

// Import Data
import { accordionInfo1 } from "../../Data";

export default function FaqsDetails() {
  return (
    <div className="faqs-details" style={{ padding: "40px 0 0" }}>
      <div className="my-container flex max-md:flex-col items-center gap-6">
        <div className="picture w-[100%] min-md:w-[50%] rounded-one overflow-hidden">
          <img
            src="https://electrolyte1-store.myshopify.com/cdn/shop/files/faq_s.jpg?v=1633944239"
            at="img..."
          />
        </div>

        <AccordionComponent data={accordionInfo1} type="one" />
      </div>
    </div>
  );
}
