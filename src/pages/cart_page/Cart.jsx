// Import Components
import PathPage from "../../components/path_page/PathPage";
import MainHeading from "../../components/main_heading/MainHeading";
import CartTable from "../../components/cart_components/CartTable";
import CartButtons from "../../components/cart_components/CartButtons";

// Import Custom Functions
import { CheckData } from "../../util/CheckData";

// Import Custom Hooks
import { useCheckLogin } from "../../hooks/useCheckLogin";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Wishlist Slice Reducers
import {
  removeProductFromCart,
  setCount,
  calcSubTotal,
  setInStorageCart,
  increaseProductCount,
  decreaseProductCount,
} from "../../features/cartSlice";

// Import Toastify Slice Reducers
import { setMessage, setType, notify } from "../../features/toastifySlice";

// Import Modle Slice reducers
import { handleModel, setModelMessage } from "../../features/modelSlice";

export default function Cart() {
  const products = useSelector((choose) => {
    return choose.cart.products;
  });
  const isLogin = useCheckLogin();

  const dispatch = useDispatch();

  function handleRemoveProduct(product) {
    dispatch(calcSubTotal({ price: product.price, process: "subtract" }));
    dispatch(removeProductFromCart(product.id));
    dispatch(setCount("subtract"));
    dispatch(setInStorageCart());

    // Handle Toastify
    dispatch(setMessage("Product removed from cart"));
    dispatch(setType("success"));
    dispatch(notify());
  }

  function handleIncreaseCount(product) {
    dispatch(increaseProductCount(product.id));
    dispatch(calcSubTotal({ price: product.price, process: "add" }));
    dispatch(setInStorageCart());
  }

  function handleDecreaseCount(product) {
    if (product.count > 1) {
      dispatch(decreaseProductCount(product.id));
      dispatch(calcSubTotal({ price: product.price, process: "subtract" }));
      dispatch(setInStorageCart());
    } else {
      dispatch(setMessage("This is minimum number"));
      dispatch(setType("warning"));
      dispatch(notify());
    }
  }

  function handleMyModel() {
    dispatch(setModelMessage("Please login to continue"));
    dispatch(handleModel());
  }

  return (
    <div className="cart-page">
      <PathPage path="Home Cart" />

      <div className="content my-container">
        <MainHeading
          title="Your cart"
          subTitle="This is where the products that the user wants to buy are added"
        />

        <CartTable
          products={CheckData(products)}
          handleRemoveProduct={handleRemoveProduct}
          handleIncreaseCount={handleIncreaseCount}
          handleDecreaseCount={handleDecreaseCount}
        />

        <CartButtons isLogin={isLogin} handleMyModel={handleMyModel} />
      </div>
    </div>
  );
}
