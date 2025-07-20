// Import Icons
import { IoIosArrowDown } from "react-icons/io";

// Import Link
import { Link } from "react-router-dom";

export default function TopHeadrUi({
  languages,
  currency,
  handleLanguagesState,
  handleCurrencyState,
}) {
  return (
    <div className="top-headr bg-dark-navy text-gray-light border-b border-border-one">
      <div
        className="my-container flex flex-col gap-2 justify-between items-center sm:flex-row"
        style={{ padding: "10px 0" }}
      >
        <p className="text-[12px]">Free Shipping Over $100 & Free Returns</p>

        <div className="flex items-center gap-6">
          <Link to="" className="text-[12px]">
            Hotline: (888) 43444 6000
          </Link>

          <div className="relative">
            <span
              className="language text-[12px] flex items-center gap-1 cursor-pointer"
              onClick={() => {
                handleLanguagesState("status", !languages.status);
              }}
            >
              {languages.valueNow} <IoIosArrowDown className="text-[14px]" />
            </span>

            <ul
              className="language-list absolute bg-gray-light rounded-[6px] overflow-hidden left-0 top-[30px]"
              style={{ display: languages.status ? "block" : "none" }}
            >
              {languages.data.map((lang) => (
                <li
                  key={lang.id}
                  className={
                    lang.active
                      ? "text-[13px] font-[600] cursor-pointer bg-dark-navy text-gray-light active"
                      : "text-dark-navy text-[13px] font-[600] cursor-pointer"
                  }
                  style={{ padding: "7px" }}
                  onClick={() => {
                    handleLanguagesState("changeLanguage", {
                      id: lang.id,
                      newValue: lang.language,
                    });
                    handleLanguagesState("status", false);
                  }}
                >
                  {lang.language}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center relative">
            <span
              className="language text-[12px] flex items-center gap-1 cursor-pointer"
              onClick={() => {
                handleCurrencyState("status", !currency.status);
              }}
            >
              {currency.valueNow} <IoIosArrowDown className="text-[14px]" />
            </span>

            <ul
              className="currency-list absolute bg-gray-light rounded-[6px] overflow-hidden left-0 top-[30px]"
              style={{ display: currency.status ? "block" : "none" }}
            >
              {currency.data.map((curr) => (
                <li
                  key={curr.id}
                  className={
                    curr.active
                      ? "text-[13px] font-[600] cursor-pointer bg-dark-navy text-gray-light active"
                      : "text-dark-navy text-[13px] font-[600] cursor-pointer"
                  }
                  style={{ padding: "7px" }}
                  onClick={() => {
                    handleCurrencyState("changeCurrency", curr.id);
                    handleCurrencyState("status", false);
                  }}
                >
                  {curr.currency}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
