// Import Components
import Button from "../button/Button";

// Import Icons
import { FaX } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

// Import Images
import noData from "../../assets/images/No data.gif";

export default function CartSidebarUi({
  cartState,
  handleCartSidebar,
  cartProducts,
  countOfCartPro,
  subTotalOfCartPro,
  removeProduct,
  isLogin,
  handleMyModel,
}) {
  return (
    <div
      className="cart-sidebar fixed top-0 right-0 w-[320px] h-[100%] bg-white shadow-one z-[100] flex flex-col justify-between"
      style={{
        padding: "20px",
        right: cartState ? "0" : "-325px",
        transition: "right 0.4s ease-in-out",
      }}
    >
      <div
        className="cart-sidebar-head flex items-center justify-between border-b border-b-solid border-b-border-one"
        style={{ margin: "0 0 15px", padding: "0 0 10px" }}
      >
        <p className="count text-[14px] font-[600] text-light-navy">
          Count Items: {countOfCartPro}
        </p>

        <div
          className="bg-orange w-[24px] h-[22px] flex items-center justify-center rounded-[3px] cursor-pointer"
          onClick={() => {
            handleCartSidebar();
          }}
        >
          <FaX className="icon text-[10px] text-dark-navy" />
        </div>
      </div>

      <div
        className={`cart-sidebar-body flex-1 ${
          cartProducts === "no data" ? "justify-center" : ""
        } overflow-scroll flex flex-col gap-6`}
      >
        {cartProducts !== "no data" ? (
          cartProducts.map((item) => {
            return (
              <div className="box flex items-center gap-2" key={item.id}>
                <img
                  src={item.images[0]}
                  alt={`img${item.id}...`}
                  style={{ width: "50px" }}
                />

                <div className="details flex flex-1 flex-col gap-2">
                  <p
                    className="title text-[12px] font-[600] text-light-navy line-clamp-2"
                    style={{ lineHeight: "1.2" }}
                  >
                    {item.title}
                  </p>

                  <span className="new text-[12px] font-[600] text-gray">
                    ${item.price}
                  </span>

                  <span className="count text-[12px] font-[600] text-orange">
                    x{item.count}
                  </span>
                </div>

                <MdDeleteForever
                  className="icon text-[20px] text-red cursor-pointer"
                  onClick={() => {
                    removeProduct(item);
                  }}
                />
              </div>
            );
          })
        ) : (
          <img src={noData} alt="No Data..." />
        )}
      </div>

      <div
        className="cart-sidebar-footer flex flex-col gap-4 border-t border-t-solid border-t-border-one"
        style={{ margin: "15px 0 0", padding: "10px 0 0" }}
      >
        <p className="total flex items-center justify-between text-[14px] font-[600] text-light-navy">
          Subtotal: <span className="text-orange">${subTotalOfCartPro}</span>
        </p>

        <div
          className="btns flex items-center justify-between"
          onClick={() => {
            handleCartSidebar();
          }}
        >
          <Button link="/cart" btnTitle="Veiw Cart" />

          <Button
            link={isLogin ? "/checkout" : null}
            btnTitle="Checkout"
            func={() => {
              !isLogin ? handleMyModel() : null;
            }}
          />
        </div>
      </div>
    </div>
  );
}
