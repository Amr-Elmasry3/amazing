// Import Components
import PathPage from "../../components/path_page/PathPage";
import MainHeading from "../../components/main_heading/MainHeading";
import PaymentFormLogic from "../../components/checkout_components/payment_form/PaymentFormLogic";
import CartTotals from "../../components/checkout_components/CartTotals";

// Import Redux Hooks
import { useSelector } from "react-redux";

export default function Checkout() {
  const cartInfo = useSelector((choose) => {
    return choose.cart;
  });

  return (
    <div className="checkout-page">
      <PathPage path="Home Checkout" />

      <div className="content my-container">
        <MainHeading
          title="Checkout"
          subTitle="This is for viewing products from the cart and completing the checkout process to purchace these products"
        />

        <div className="grid grid-cols-4 gap-[60px] min-lg:gap-4">
          <PaymentFormLogic />

          <CartTotals cartInfo={cartInfo} />
        </div>
      </div>
    </div>
  );
}
