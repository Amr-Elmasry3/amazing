import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import blogsDetailsSlice from "../features/blogsDetailsSlice";
import userInfoSlice from "../features/userInfoSlice";
import toastifySlice from "../features/toastifySlice";
import modelSlice from "../features/modelSlice";
import cartSidebarSlice from "../features/cartSidebarSlice";
import wishlistSlice from "../features/wishlistSlice";
import compareSlice from "../features/compareSlice";
import cartSlice from "../features/cartSlice";
import searchSlice from "../features/searchSlice";
import ourStoreSlice from "../features/ourStoreSlice";

export default configureStore({
  reducer: {
    menu: menuReducer,
    cartSidebar: cartSidebarSlice,
    blogsDetails: blogsDetailsSlice,
    userInfo: userInfoSlice,
    toastify: toastifySlice,
    model: modelSlice,
    wishlist: wishlistSlice,
    compare: compareSlice,
    cart: cartSlice,
    search: searchSlice,
    ourStore: ourStoreSlice,
  },
  devTools: true,
});
