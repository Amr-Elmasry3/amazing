// Import Component Ui
import CartSidebarUi from "./CartSidebarUi";

// Import Custom Hooks
import { useCheckLogin } from "../../hooks/useCheckLogin";

// Import useSelector , useDispatch
import { useSelector, useDispatch } from "react-redux";

// Import Cart Sidebar Slice Function
import { handleCartToggle } from "../../features/cartSidebarSlice";

// Import Cart Slice Reducers
import {
  removeProductFromCart,
  setCount,
  calcSubTotal,
  setInStorageCart,
} from "../../features/cartSlice";

// Import Toastify Slice Reducers
import { setMessage, setType, notify } from "../../features/toastifySlice";

// Import Model Slice Reducers
import { handleModel, setModelMessage } from "../../features/modelSlice";

export default function CartSidebarLogic() {
  const cartState = useSelector((choose) => {
    return choose.cartSidebar.isOpen;
  });

  const cartInfo = useSelector((choose) => {
    return choose.cart;
  });

  const isLogin = useCheckLogin();

  const dispatch = useDispatch();

  function handleCartSidebar() {
    dispatch(handleCartToggle());
  }

  function removeProduct(product) {
    dispatch(calcSubTotal({ price: product.price, process: "subtract" }));
    dispatch(removeProductFromCart(product.id));
    dispatch(setCount("subtract"));
    dispatch(setInStorageCart());

    dispatch(setMessage("Product removed from cart"));
    dispatch(setType("success"));
    dispatch(notify());
  }

  function handleMyModel() {
    dispatch(setModelMessage("Please login to continue"));
    dispatch(handleModel());
  }

  return (
    <>
      <CartSidebarUi
        cartState={cartState}
        handleCartSidebar={handleCartSidebar}
        cartProducts={
          [...cartInfo.products].length ? cartInfo.products : "no data"
        }
        countOfCartPro={cartInfo.count}
        subTotalOfCartPro={cartInfo.subTotal}
        removeProduct={removeProduct}
        isLogin={isLogin}
        handleMyModel={handleMyModel}
      />
    </>
  );
}
