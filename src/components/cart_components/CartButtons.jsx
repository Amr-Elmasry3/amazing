// Import Components
import Button from "../button/Button";

export default function CartButtons({ isLogin, handleMyModel }) {
  return (
    <div
      className="cart-btns flex flex-wrap gap-4 justify-between"
      style={{ margin: "30px 0 0" }}
    >
      <Button link="/our-store" btnTitle="Continue Shopping" />

      <Button
        link={isLogin ? "/checkout" : null}
        btnTitle="Processed To Checkout"
        func={() => {
          if (!isLogin) {
            handleMyModel();
          }
        }}
      />
    </div>
  );
}
