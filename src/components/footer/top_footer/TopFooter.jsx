// Import Button Component
import Button from "../../button/Button";

// Import Icons
import { RiMailSendLine } from "react-icons/ri";

export default function TopFooter() {
  return (
    <div className="top-footer bg-light-navy" style={{ padding: "30px 0" }}>
      <div className="my-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="title flex items-center gap-2 text-[15px] text-white">
          <RiMailSendLine className="icon text-[18px]" /> Sign Up For Newsletter
        </p>

        <div
          className="subscribe flex bg-white rounded-one"
          style={{ padding: "4px", maxWidth: "330px" }}
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1"
            style={{ padding: "0 4px" }}
          />

          <Button link="" btnTitle="Subscribe" />
        </div>
      </div>
    </div>
  );
}
