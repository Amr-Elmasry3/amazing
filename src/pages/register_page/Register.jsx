// Import Component Ui
import RegisterUi from "../../components/register_component/RegisterUi";

// Import Hooks
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Toastify Slice Reducers
import { setMessage, setType, notify } from "../../features/toastifySlice";

// Import User Info Slice Reducers
import { setInfo, setInStorage } from "../../features/userInfoSlice";

// Import Functions
import ValidateCredentials from "../../util/ValidateCredentials";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeTerms: false,
  });
  const accounts = useSelector((choose) => {
    return choose.userInfo.accounts;
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validateEmail = useMemo(() => {
    return ValidateCredentials(
      formData.email,
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
  }, [formData.email]);

  const validatePassword = useMemo(() => {
    return ValidateCredentials(
      formData.password,
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!#$%^&*]{8,}$/
    );
  }, [formData.password]);

  const isRepeatAccount = noRepeatedAccount(accounts, formData);

  function handleFormData(key, value) {
    setFormData({ ...formData, [key]: value });
  }

  function handleClickBtn() {
    let message = "",
      type = "";

    // First Possibility
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      !formData.agreeTerms
    ) {
      message = "Please fill all inputs";
      type = "error";
    }
    // Second Possibility
    else if (!validateEmail) {
      message = "Email is inavalid";
      type = "error";
    }
    // Third Posibility
    else if (!validatePassword) {
      message = "Password is weak";
      type = "warning";
    }
    // Fourth Posibility
    else if (
      formData.name &&
      validateEmail &&
      validatePassword &&
      formData.agreeTerms
    ) {
      // Check If The Account Info Is Not Found Exists
      if (isRepeatAccount) {
        message = "This account is aleardy exists";
        type = "error";
      } else {
        message = "Account successfully created";
        type = "success";

        dispatch(setInfo(formData));
        dispatch(setInStorage(formData));
        navigate("/login");
      }
    }

    dispatch(setMessage(message));
    dispatch(setType(type));
    dispatch(notify());
  }

  return (
    <div className="register-page">
      <RegisterUi
        formData={formData}
        handleFormData={handleFormData}
        handleClickBtn={handleClickBtn}
      />
    </div>
  );
}

function noRepeatedAccount(accounts, newAccount) {
  let result = false;

  for (let x = 0; x < [...accounts].length; x++) {
    if (JSON.stringify(accounts[x]) === JSON.stringify(newAccount)) {
      result = true;
      break;
    }
  }

  return result;
}
