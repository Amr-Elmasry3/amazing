// Import Component Ui
import ProductActionsUi from "./ProductActionsUi";

// Import Custom Functions
import { CheckProduct } from "../../util/CheckProduct";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Wishlist Slice Reducers
import {
  addProductToWishlist,
  removeProductFromWishlist,
  setInStorageWishlist,
} from "../../features/wishlistSlice";

// Import Compare Slice Reducers
import {
  addProductToCompare,
  removeProductFromCompare,
  setInStorageCompare,
} from "../../features/compareSlice";

// Import Cart Slice Reducers
import {
  addProductToCart,
  removeProductFromCart,
  setCount,
  calcSubTotal,
  setInStorageCart,
} from "../../features/cartSlice";

// Import Toastify Slice Reducers
import { setMessage, setType, notify } from "../../features/toastifySlice";

export default function ProductActionsLogic({ item }) {
  const wishlistProducts = useSelector((choose) => {
    return choose.wishlist.products;
  });
  const compareProducts = useSelector((choose) => {
    return choose.compare.products;
  });
  const cartProducts = useSelector((choose) => {
    return choose.cart.products;
  });

  const dispatch = useDispatch();

  const checkProduct = (id, type) => {
    const value = CheckProduct(
      id,
      type,
      wishlistProducts,
      compareProducts,
      cartProducts
    );

    return value;
  };

  // Function => Add Product To Wishlist Or Compare Or Cart
  function addProduct(product, type) {
    let message = "";

    if (type === "wishlist") {
      message = "Product added to wishlist";

      dispatch(addProductToWishlist(product));
      dispatch(setInStorageWishlist());
    } else if (type === "compare") {
      message = "Product added to comparsion";

      dispatch(addProductToCompare(product));
      dispatch(setInStorageCompare());
    } else if (type === "cart") {
      message = "Product added to cart";

      dispatch(addProductToCart(product));
      dispatch(setCount("add"));
      dispatch(calcSubTotal({ price: product.price, process: "add" }));
      dispatch(setInStorageCart());
    }

    // Handle Toastify
    dispatch(setMessage(message));
    dispatch(setType("success"));
    dispatch(notify());
  }

  // Function => Remove Product To Wishlist Or Compare Or Cart
  function removeProduct(product, type) {
    let message = "";

    if (type === "wishlist") {
      message = "Product removed from wishlist";

      dispatch(removeProductFromWishlist(product.id));
      dispatch(setInStorageWishlist());
    } else if (type === "compare") {
      message = "Product removed from comparsion";

      dispatch(removeProductFromCompare(product.id));
      dispatch(setInStorageCompare());
    } else if (type === "cart") {
      message = "Product removed from cart";

      dispatch(calcSubTotal({ price: product.price, process: "subtract" }));
      dispatch(removeProductFromCart(product.id));
      dispatch(setCount("subtract"));
      dispatch(setInStorageCart());
    }

    // Handle Toastify
    dispatch(setMessage(message));
    dispatch(setType("success"));
    dispatch(notify());
  }

  return (
    <>
      <ProductActionsUi
        item={item}
        checkProduct={checkProduct}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
    </>
  );
}
