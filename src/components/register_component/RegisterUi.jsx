// Import Components
import PathPage from "../path_page/PathPage";
import Button from "../button/Button";
import MainHeading from "../main_heading/MainHeading";
import { Link } from "react-router-dom";

export default function RegisterUi({
  formData,
  handleFormData,
  handleClickBtn,
}) {
  return (
    <>
      <PathPage path="Home Register" />

      <div className="my-container flex justify-center">
        <div className="content w-[340px] min-xs:w-[380px] bg-white rounded-one shadow-one">
          <MainHeading
            title="Create Account"
            subTitle="Please register account details"
          />

          <form className="flex flex-col gap-4">
            <div className="box flex flex-col gap-[7px]">
              <label className="text-[14px] text-gray">Name</label>

              <input
                className="border! border-solid! border-border-one! rounded-one"
                type="email"
                placeholder="Name"
                value={formData.name}
                onChange={(eve) => {
                  handleFormData("name", eve.target.value);
                }}
              />
            </div>

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

            <div className="agree-terms flex items-center gap-2">
              <span
                className={`checkbox ${
                  formData.agreeTerms ? "agree" : null
                } relative select-none w-[15px] h-[15px] flex items-center justify-center rounded-[3px] border border-solid border-gray cursor-pointer`}
                onClick={() => {
                  handleFormData("agreeTerms", !formData.agreeTerms);
                }}
              ></span>

              <p className="text-[14px] text-light-navy">
                I have read and agree width the{" "}
                <Link
                  to="/terms-conditions"
                  className="text-gray underline decoration-gray hover:text-orange hover:decoration-orange"
                >
                  terms & conditions
                </Link>
                .
              </p>
            </div>

            <div className="btn-box flex items-center justify-between">
              <Button link="" btnTitle="Register" func={handleClickBtn} />
            </div>
          </form>

          <p className="login-link bg-light-navy text-center rounded-one  text-[14px] text-white">
            Already have account?
            <Link
              to="/login"
              className="underline decoration-gray-light text-gray-light hover:text-orange hover:decoration-orange"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
