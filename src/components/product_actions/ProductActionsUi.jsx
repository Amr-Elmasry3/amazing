// Import Icons
import { RiHeartLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { IoShuffle } from "react-icons/io5";

export default function ProductActionsUi({
  item,
  checkProduct,
  addProduct,
  removeProduct,
}) {
  return (
    <>
      <div
        className={`compare-icon box cursor-pointer ${
          checkProduct(item.id, "compare") ? "bg-orange" : "bg-light-navy"
        }  w-[28px] h-[28px] rounded-[50%] flex items-center justify-center hover:bg-orange`}
        onClick={() => {
          if (checkProduct(item.id, "compare")) {
            removeProduct(item, "compare");
          } else {
            addProduct(item, "compare");
          }
        }}
      >
        <IoShuffle className="icon text-[16px] text-white" />
      </div>

      <div
        className={`heart-icon box cursor-pointer ${
          checkProduct(item.id, "wishlist") ? "bg-orange" : "bg-light-navy"
        } w-[28px] h-[28px] rounded-[50%] flex items-center justify-center hover:bg-orange`}
        onClick={() => {
          if (checkProduct(item.id, "wishlist")) {
            removeProduct(item, "wishlist");
          } else {
            addProduct(item, "wishlist");
          }
        }}
      >
        <RiHeartLine className="icon text-[16px] text-white" />
      </div>

      <div
        className={`cart-icon box cursor-pointer ${
          checkProduct(item.id, "cart") ? "bg-orange" : "bg-light-navy"
        } w-[28px] h-[28px] rounded-[50%] flex items-center justify-center hover:bg-orange`}
        onClick={() => {
          if (checkProduct(item.id, "cart")) {
            removeProduct(item, "cart");
          } else {
            addProduct(item, "cart");
          }
        }}
      >
        <TiShoppingCart className="icon text-[16px] text-white" />
      </div>
    </>
  );
}
