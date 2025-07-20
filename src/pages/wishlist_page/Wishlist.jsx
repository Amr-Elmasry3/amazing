// Import Components
import PathPage from "../../components/path_page/PathPage";
import MainHeading from "../../components/main_heading/MainHeading";
import WhishlistTable from "../../components/wishlist_components/WishlistTable";

// Import Custom Functions
import { CheckProduct } from "../../util/CheckProduct";
import { CheckData } from "../../util/CheckData";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Wishlist Slice Reducers
import {
  removeProductFromWishlist,
  setInStorageWishlist,
} from "../../features/wishlistSlice";

// Import Cart Slcie Reducers
import {
  addProductToCart,
  removeProductFromCart,
  setCount,
  calcSubTotal,
  setInStorageCart,
} from "../../features/cartSlice";

// Import Toastify Slice Reducers
import { setMessage, setType, notify } from "../../features/toastifySlice";

export default function Wishlist() {
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

  function handleRemoveProduct(id) {
    dispatch(removeProductFromWishlist(id));
    dispatch(setInStorageWishlist());

    // Handle Toastify
    dispatch(setMessage("Product removed from wishlist"));
    dispatch(setType("success"));
    dispatch(notify());
  }

  function addProduct(product) {
    dispatch(addProductToCart(product));
    dispatch(calcSubTotal({ price: product.price, process: "add" }));
    dispatch(setCount("add"));
    dispatch(setInStorageCart());

    // Handle Toastify
    dispatch(setMessage("Product added to cart"));
    dispatch(setType("success"));
    dispatch(notify());
  }

  function removeProduct(product) {
    dispatch(calcSubTotal({ price: product.price, process: "subtract" }));
    dispatch(removeProductFromCart(product.id));
    dispatch(setCount("subtract"));
    dispatch(setInStorageCart());

    // Handle Toastify
    dispatch(setMessage("Product removed from cart"));
    dispatch(setType("success"));
    dispatch(notify());
  }

  return (
    <div className="whishlist-page">
      <PathPage path="Home Wishlist" />

      <div className="content my-container">
        <MainHeading
          title="Whishlist"
          subTitle="There are all the products you have seen and liked"
        />

        <WhishlistTable
          products={CheckData(wishlistProducts)}
          handleRemoveProduct={handleRemoveProduct}
          addProduct={addProduct}
          removeProduct={removeProduct}
          checkProduct={checkProduct}
        />
      </div>
    </div>
  );
}
