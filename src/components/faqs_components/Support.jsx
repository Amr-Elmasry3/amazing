// Import Icons
import { BsTelephoneInbound } from "react-icons/bs";
import { GoPeople } from "react-icons/go";

export default function Support() {
  return (
    <div
      className="support bg-white"
      style={{ padding: "50px 0", margin: "80px 0 40px" }}
    >
      <div className="my-container flex max-md:flex-col items-center justify-between gap-8">
        <div className="box flex flex-col items-center text-center gap-4">
          <div className="icon-box bg-section w-[90px] h-[90px] rounded-[50%] flex items-center justify-center">
            <BsTelephoneInbound className="icon text-[36px] text-orange" />
          </div>

          <h1 className="title font-[600] text-light-navy">
            Help desk support
          </h1>

          <p
            className="text-[15px] text-dark-gray"
            style={{ lineHeight: "1.4", padding: "0" }}
          >
            Lorem ipsum is simply dummy text of the simply dummy typesetting
            industry ipsum.
          </p>
        </div>

        <div className="box flex flex-col items-center text-center gap-4">
          <div className="icon-box bg-section w-[90px] h-[90px] rounded-[50%] flex items-center justify-center">
            <GoPeople className="icon text-[38px] text-orange" />
          </div>

          <h1 className="title font-[600] text-light-navy">
            Live chat support
          </h1>

          <p
            className="text-[15px] text-dark-gray"
            style={{ lineHeight: "1.4", padding: "0" }}
          >
            Lorem ipsum is simply dummy text of the simply dummy typesetting
            industry ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
