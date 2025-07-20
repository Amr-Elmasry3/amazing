// Import Components
import PathPage from "../path_page/PathPage";
import Button from "../button/Button";
import MainHeading from "../main_heading/MainHeading";
import { Link } from "react-router-dom";

export default function LoginUi({ formData, handleFormData, handleClickBtn }) {
  return (
    <>
      <PathPage path="Home Login" />

      <div className="my-container flex justify-center">
        <div className="content w-[340px] min-xs:w-[380px] bg-white rounded-one shadow-one">
          <MainHeading
            title="Login Account"
            subTitle="Please login account details"
          />

          <form className="flex flex-col gap-4">
            <div className="box flex flex-col gap-[7px]">
              <label className="text-[14px] text-gray">Email</label>

              <input
                className="border! border-solid! border-border-one! rounded-one"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(eve) => {
                  handleFormData("email", eve.target.value);
                }}
              />
            </div>

            <div className="box flex flex-col gap-[7px]">
              <label className="text-[14px] text-gray">Password</label>

              <input
                className="border! border-solid! border-border-one! rounded-one"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(eve) => {
                  handleFormData("password", eve.target.value);
                }}
              />
            </div>

            <div className="btn-box flex items-center justify-between">
              <Button link="" btnTitle="Login" func={handleClickBtn} />

              <Link to="">
                <p className="forget-password text-[14px] text-light-navy underline decoration-light-navy hover:text-orange hover:decoration-orange">
                  Forgot your password?
                </p>
              </Link>
            </div>
          </form>

          <p className="register-link bg-light-navy text-center rounded-one  text-[14px] text-white">
            Don't have account?
            <Link
              to="/register"
              className="underline decoration-gray-light text-gray-light hover:text-orange hover:decoration-orange"
            >
              Create acouunt
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
