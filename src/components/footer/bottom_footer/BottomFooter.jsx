// Import Cards
import visa from "../../../assets/images/visa.png";
import paypal from "../../../assets/images/paypal.png";
import amex from "../../../assets/images/amex.png";
import mastercard from "../../../assets/images/card.png";

export default function BottomFooter() {
  return (
    <div className="bottom-footer bg-dark-navy" style={{ padding: "12px 0" }}>
      <div className="my-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text text-[12px] text-white">
          © 2025 Amazing. All rights reserved. | Designed by {"3MR"}
        </p>

        <div className="card flex items-center gap-2">
          <img src={visa} alt="visa..." style={{ width: "30px" }} />

          <img src={paypal} alt="paypal..." style={{ width: "30px" }} />

          <img src={amex} alt="amex..." style={{ width: "30px" }} />

          <img src={mastercard} alt="mastercard..." style={{ width: "30px" }} />
        </div>
      </div>
    </div>
  );
}
