// Import Components
import Button from "../../button/Button";

export default function Address() {
  return (
    <div className="address">
      <h1
        className="head bg-gray-light text-[16px] font-[600] text-light-navy"
        style={{ padding: "15px" }}
      >
        Shipping Address
      </h1>

      <div className="address-content" style={{ padding: "15px" }}>
        <div
          className="addresses flex flex-col gap-2"
          style={{ margin: "0 0 20px" }}
        >
          <span className="text-[14px] text-dark-gray">4522 Interstate</span>

          <span className="text-[14px] text-dark-gray">75 Business spur</span>

          <span className="text-[14px] text-dark-gray">Maric, MI 45678</span>

          <span className="text-[14px] text-dark-gray">New York</span>
        </div>

        <Button btnTitle="Edit" />
      </div>
    </div>
  );
}
