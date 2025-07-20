import SidebarUi from "./SidebarUi";

// Import Hooks
import { useCallback } from "react";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Menu Slice Reducers
import { handleMenuToggle } from "../../features/menuSlice";

export default function SidebarLogic() {
  const menuOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  const handleMenu = useCallback(() => {
    dispatch(handleMenuToggle());
  }, [dispatch]);

  return (
    <>
      <SidebarUi menuOpen={menuOpen} handleMenu={handleMenu} />
    </>
  );
}
