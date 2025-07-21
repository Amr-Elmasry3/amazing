// Import Components
import Button from "../button/Button";

// Import Hooks
import { useLocation } from "react-router-dom";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Model Slice Reducers
import { handleModel } from "../../features/modelSlice";

// Import  Navigation Slice Reducers
import { setPageName, setPageInStorage } from "../../features/navigationSlice";

export default function MyModel() {
  const isOpen = useSelector((choose) => {
    return choose.model.isOpen;
  });

  const message = useSelector((choose) => {
    return choose.model.message;
  });

  const isLogin = useSelector((choose) => {
    return choose.userInfo.isLogin;
  });

  const dispatch = useDispatch();
  const location = useLocation();

  function handleModelState() {
    dispatch(handleModel());
  }

  return (
    <div
      className={`my-model ${
        isOpen ? "block" : "hidden"
      } fixed z-50 w-[100%] h-[100%] left-0 top-0 bg-[#ffffff54] flex items-center justify-center`}
    >
      <div
        className="model-box bg-white rounded-one shadow-one flex flex-col gap-8 w-[330px]"
        style={{ padding: "20px" }}
      >
        <h1 className="message text-[17px] font-[500] text-dark-navy">
          {message}
        </h1>

        <div className="btns-box flex justify-end gap-2">
          <Button
            link="/login"
            btnTitle="Login"
            func={() => {
              handleModelState();

              if (
                !isLogin &&
                location.pathname !== "/login" &&
                location.pathname !== "/register"
              ) {
                const pageName = location.pathname.slice(1);

                dispatch(setPageName(pageName));
                dispatch(setPageInStorage());
              }
            }}
          />

          <Button btnTitle="Cancel" func={handleModelState} />
        </div>
      </div>
    </div>
  );
}
