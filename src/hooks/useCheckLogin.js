// Import Redux Hooks
import { useSelector } from "react-redux";

export function useCheckLogin() {
  const isLogin = useSelector((choose) => {
    return choose.userInfo.isLogin;
  });

  return isLogin;
}
