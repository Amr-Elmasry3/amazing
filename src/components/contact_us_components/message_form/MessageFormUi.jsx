// Import Components
import MainHeading from "../../main_heading/MainHeading";
import Button from "../../button/Button";

export default function MessageFormUi({ messageInfo, handleMessageInfo }) {
  return (
    <div className="message-form" style={{ padding: "60px 0 0" }}>
      <MainHeading
        title="Drop us message"
        subTitle="If you’ve got great products your making or looking to work with us then drop us a line"
      />

      <form
        className="grid gap-4 grid-cols-4 w-[100%] min-md:w-[70%] relative left-[50%] translate-x-[-50%]"
        style={{ padding: "40px 0 0" }}
      >
        <div className="box box flex flex-col gap-[7px] col-span-2">
          <label className="text-[14px] text-gray">Name</label>

          <input
            type="text"
            placeholder="Name"
            className="bg-white! rounded-one shadow-one"
            value={messageInfo.name}
            onChange={(eve) => {
              handleMessageInfo("name", eve.target.value);
            }}
          />
        </div>

        <div className="box box flex flex-col gap-[7px] col-span-2">
          <label className="text-[14px] text-gray">Email</label>

          <input
            type="email"
            placeholder="Email"
            className="bg-white! rounded-one shadow-one"
            value={messageInfo.email}
            onChange={(eve) => {
              handleMessageInfo("email", eve.target.value);
            }}
          />
        </div>

        <div className="box box flex flex-col gap-[7px] col-span-4">
          <label className="text-[14px] text-gray">Phone Number</label>

          <input
            type="number"
            placeholder="Phone Number"
            className="bg-white! rounded-one shadow-one"
            value={messageInfo.phone}
            onChange={(eve) => {
              handleMessageInfo("phone", eve.target.value);
            }}
          />
        </div>

        <div className="box box flex flex-col gap-[7px] col-span-4">
          <label className="text-[14px] text-gray">Message</label>

          <textarea
            placeholder="Message"
            className="bg-white! rounded-one shadow-one resize-none h-[200px]"
            value={messageInfo.message}
            onChange={(eve) => {
              handleMessageInfo("message", eve.target.value);
            }}
          />
        </div>

        <div className="btn-box col-span-2">
          <Button link="" btnTitle="Send Message" />
        </div>
      </form>
    </div>
  );
}
