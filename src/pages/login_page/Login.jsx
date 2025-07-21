// Import Component Ui
import LoginUi from "../../components/login_component/LoginUi";

// Import Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Toastify Slice Reducers
import { setMessage, setType, notify } from "../../features/toastifySlice";

// Import User Info Slice Reducers
import {
  handleLogin,
  setInStorage,
  setAccountNow,
} from "../../features/userInfoSlice";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const accounts = useSelector((choose) => {
    return choose.userInfo.accounts;
  });
  const pageName = useSelector((choose) => {
    return choose.navigation.pageName;
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleFormData(key, value) {
    setFormData({ ...formData, [key]: value });
  }

  function handleClickBtn() {
    let message = "",
      type = "";

    if (formData.email === "" || formData.password === "") {
      message = "Please fill all inputs";
      type = "error";
    } else {
      for (let x = 0; x < [...accounts].length; x++) {
        // First Possibility
        if (
          accounts[x].email === formData.email &&
          accounts[x].password === formData.password
        ) {
          message = "Successfully logged in";
          type = "success";
          dispatch(handleLogin());
          dispatch(setAccountNow(x));
          dispatch(setInStorage());

          navigate(`/${pageName}`);

          break;
        }
        // Second Possibility
        else if (
          accounts[x].email !== formData.email &&
          accounts[x].password !== formData.password
        ) {
          // Third Possibility
          message = "Incorrect email and password";
          type = "error";
        }
        // Fourth Possibility
        else if (
          accounts[x].email === formData.email &&
          accounts[x].password !== formData.password
        ) {
          message = "Incorrect password entered";
          type = "error";
        }
        // Fivth Possilbilty
        else if (
          accounts[x].email !== formData.email &&
          accounts[x].password === formData.password
        ) {
          message = "Incorrect email entered";
          type = "error";
        }
      }
    }

    dispatch(setMessage(message));
    dispatch(setType(type));
    dispatch(notify());
  }

  return (
    <div className="login-page">
      <LoginUi
        formData={formData}
        handleFormData={handleFormData}
        handleClickBtn={handleClickBtn}
      />
    </div>
  );
}
