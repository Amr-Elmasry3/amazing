// Import Components
import Button from "../../button/Button";

export default function PaymentFormUi({
  payments,
  handlePayments,
  formInfo,
  handleFormInfo,
}) {
  return (
    <div className="payment-form col-span-4 min-lg:col-span-2">
      <h1 className="font-[600] text-light-navy">Billing Details</h1>

      <form className="grid grid-cols-4 gap-2" style={{ margin: "10px 0 0" }}>
        <div className="box flex flex-col gap-[7px] col-span-4 min-xs:col-span-2">
          <label className="text-[14px] text-gray">Name*</label>

          <input
            type="text"
            placeholder="Name"
            className="bg-white! rounded-one shadow-one"
            value={formInfo.name}
            onChange={(eve) => {
              handleFormInfo("name", eve.target.value);
            }}
          />
        </div>

        <div className="box flex flex-col gap-[7px] col-span-4 min-xs:col-span-2">
          <label className="text-[14px] text-gray">Email*</label>

          <input
            type="email"
            placeholder="Email"
            className="bg-white! rounded-one shadow-one"
            value={formInfo.email}
            onChange={(eve) => {
              handleFormInfo("email", eve.target.value);
            }}
          />
        </div>

        <div className="box flex flex-col gap-[7px] col-span-4 min-xs:col-span-2">
          <label className="text-[14px] text-gray">Phone*</label>

          <input
            type="number"
            placeholder="Phone"
            className="bg-white! rounded-one shadow-one"
            value={formInfo.phone}
            onChange={(eve) => {
              handleFormInfo("phone", eve.target.value);
            }}
          />
        </div>

        <div className="box flex flex-col gap-[7px] col-span-4 min-xs:col-span-2">
          <label className="text-[14px] text-gray">Address*</label>

          <input
            type="text"
            placeholder="Address"
            className="bg-white! rounded-one shadow-one"
            value={formInfo.address}
            onChange={(eve) => {
              handleFormInfo("address", eve.target.value);
            }}
          />
        </div>

        <div className="box flex flex-col gap-[7px] col-span-4 min-xs:col-span-2">
          <label className="text-[14px] text-gray">Country*</label>

          <input
            type="text"
            placeholder="Country"
            className="bg-white! rounded-one shadow-one"
            value={formInfo.country}
            onChange={(eve) => {
              handleFormInfo("country", eve.target.value);
            }}
          />
        </div>

        <div className="box flex flex-col gap-[7px] col-span-4 min-xs:col-span-2">
          <label className="text-[14px] text-gray">City*</label>

          <input
            type="text"
            placeholder="City"
            className="bg-white! rounded-one shadow-one"
            value={formInfo.city}
            onChange={(eve) => {
              handleFormInfo("city", eve.target.value);
            }}
          />
        </div>

        <div
          className="payments col-span-4 flex flex-col gap-2 bg-white rounded-one shadow-one"
          style={{ margin: "20px 0 15px", padding: "10px" }}
        >
          <h2
            className="text-[15px] font-[600] text-light-navy"
            style={{ margin: "0 0 10px" }}
          >
            Payment
          </h2>

          {payments.map((item) => {
            return (
              <div
                className="payment flex items-center gap-2 w-fit cursor-pointer"
                key={item.id}
                onClick={() => {
                  handlePayments(item.id);
                  handleFormInfo("payment", item.title);
                }}
              >
                <p
                  className={`w-[14px] h-[14px] rounded-[50%] border-2 border-solid ${
                    item.active ? "border-orange" : "border-border-one"
                  } flex items-center justify-center`}
                  style={{ transition: "var(--transition)" }}
                >
                  <span
                    className={`w-[8px] h-[8px] rounded-[50%] bg-orange  ${
                      item.active ? "scale-100" : "scale-0"
                    }`}
                    style={{ transition: "var(--transition)" }}
                  ></span>
                </p>

                <h4 className="text-[15px] text-gray">{item.title}</h4>
              </div>
            );
          })}
        </div>

        <div className="btn-box col-span-4">
          <Button link="" btnTitle="Place Order" />
        </div>
      </form>
    </div>
  );
}
