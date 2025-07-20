// Import Components
import PathPage from "../../components/path_page/PathPage";
import ContactInfo from "../../components/contact_us_components/ContactInfo";
import MessageFormLogic from "../../components/contact_us_components/message_form/MessageFormLogic";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <PathPage path="Home Contact-Us" />

      <div className="my-container content">
        <ContactInfo />

        <MessageFormLogic />
      </div>
    </div>
  );
}
