// Import Components
import Dashboard from "./categories_components/Dashboard";
import Orders from "./categories_components/Orders";
import Address from "./categories_components/Address";
import AccountDetails from "./categories_components/AccountDetails";

// Import Hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import User Info Slice Reducers
import { handleLogout, setInStorage } from "../../features/userInfoSlice";

// Import Naviagation Slice Reducers
import { setPageName, setPageInStorage } from "../../features/navigationSlice";

export default function RightComponent({ category }) {
  const userInfo = useSelector((choose) => {
    return choose.userInfo.accountNow;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (category === "Logout") {
      dispatch(handleLogout());

      dispatch(setInStorage());

      dispatch(setPageName("/"));
      dispatch(setPageInStorage());

      navigate("/login");
    }
  }, [category, dispatch, navigate]);

  return (
    <div className="user-right-component w-[100%] min-md:w-[70%] rounded-one overflow-hidden bg-white border border-solid border-border-one">
      {category === "Dashboard" ? (
        <Dashboard userInfo={userInfo} />
      ) : category === "Orders" ? (
        <Orders />
      ) : category === "Address" ? (
        <Address />
      ) : category === "Account Details" ? (
        <AccountDetails />
      ) : (
        ""
      )}
    </div>
  );
}
