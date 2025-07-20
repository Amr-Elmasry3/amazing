// Import Components
import Button from "../../button/Button";

export default function AccountDetails() {
  return (
    <div className="account-details">
      <h1
        className="head bg-gray-light text-[16px] font-[600] text-light-navy"
        style={{ padding: "15px" }}
      >
        Account Details
      </h1>

      <div className="account-details-content" style={{ padding: "15px" }}>
        <form className="grid grid-cols-4 gap-4" style={{ margin: "0 0 20px" }}>
          <input
            className="border! border-solid! border-border-one! rounded-one col-span-4 min-md:col-span-2"
            type="text"
            placeholder="Name"
          />

          <input
            className="border! border-solid! border-border-one! rounded-one col-span-4 min-md:col-span-2"
            type="email"
            placeholder="Email"
          />

          <input
            className="border! border-solid! border-border-one! rounded-one col-span-4"
            type="password"
            placeholder="Current Password"
          />

          <input
            className="border! border-solid! border-border-one! rounded-one col-span-4"
            type="password"
            placeholder="New Password"
          />
        </form>

        <Button btnTitle="Save Change" />
      </div>
    </div>
  );
}
