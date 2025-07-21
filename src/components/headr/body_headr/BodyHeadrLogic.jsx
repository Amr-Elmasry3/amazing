// Import Ui Component
import BodyHeadrUi from "./BodyHeadrUi";

// Import Redux Hooks
import { useDispatch, useSelector } from "react-redux";

// Import Sidebar Slice Reducers
import { handleMenuToggle } from "../../../features/menuSlice";

// Import Cart Sidebar Slice Reducers
import { handleCartToggle } from "../../../features/cartSidebarSlice";

export default function BodyHeadrLogic() {
  const cartInfo = useSelector((choose) => {
    return choose.cart;
  });

  const dispatch = useDispatch();

  function handleMenu() {
    dispatch(handleMenuToggle());
  }

  function handleCartSidebar() {
    dispatch(handleCartToggle());
  }

  return (
    <>
      <BodyHeadrUi
        handleMenu={handleMenu}
        handleCartSidebar={handleCartSidebar}
        countOfCartPro={cartInfo.count}
        subTotalOfCartPro={cartInfo.subTotal}
      />
    </>
  );
}
