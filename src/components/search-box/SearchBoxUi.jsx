// Import Icons
import { FaSearch } from "react-icons/fa";

// Import Img
import noData from "../../assets/images/No data.gif";

// Import Components
import { Link } from "react-router-dom";

export default function SearchBoxUi({
  values,
  isLoading,
  searchValue,
  handleInputValue,
  handleSearchValue,
  searchInfo,
  handleResultsState,
  handleClickSearch,
  handleMenu,
}) {
  return (
    <div className="search relative flex items-center bg-white rounded-one flex-1 max-w-[360px] justify-between h-[30px]">
      <input
        type="text"
        value={searchValue}
        placeholder="Search Product Here..."
        className="flex-1"
        style={{ padding: "4px 8px" }}
        onChange={(eve) => {
          handleInputValue(eve.target.value);
          handleSearchValue(eve.target.value);
          handleResultsState(eve.target.value);
        }}
      />

      <div
        className="search-icon bg-orange flex items-center justify-center cursor-pointer h-[100%] rounded-tr-one rounded-br-one"
        style={{ padding: "4px 13px" }}
        onClick={() => {
          handleClickSearch();
          handleInputValue("");
          handleResultsState("");
          handleMenu ? handleMenu() : null;
        }}
      >
        <FaSearch className="icon text-[13px] text-dark-navy" />
      </div>

      <div
        className={`results absolute z-[100] bg-white top-[40px] w-[100%] ${
          searchInfo.resultsIsOpen
            ? "h-[260px] border border-solid border-border-one"
            : "h-0 border-0"
        } overflow-y-scroll rounded-one flex flex-col`}
        style={{ transition: "var(--transition)" }}
      >
        {isLoading ? (
          <span>isLoading</span>
        ) : (
          <>
            {[...values.products].length ? (
              <>
                {values.products.map((item, index) => {
                  return (
                    <Link
                      to={`/product-details/${item.id}`}
                      key={item.id}
                      className={`flex items-center gap-2 ${
                        index
                          ? "border-t border-t-solid border-t-border-one"
                          : ""
                      } hover:bg-section`}
                      style={{
                        padding: "10px",
                        transition: "var(--transition)",
                      }}
                      onClick={() => {
                        handleInputValue("");
                        handleSearchValue("");
                        handleResultsState("");
                        handleMenu ? handleMenu() : null;
                      }}
                    >
                      <div className="product-img w-[70px] bg-section rounded-one">
                        <img src={item.images[0]} alt={`img${item.id}...`} />
                      </div>

                      <p
                        className="title text-[15px] text-light-navy hover:text-orange line-clamp-1"
                        style={{ transition: "var(--transition)" }}
                      >
                        {item.title}
                      </p>
                    </Link>
                  );
                })}
              </>
            ) : (
              <img
                src={noData}
                alt="No Data"
                className="relative left-[50%] translate-x-[-50%]"
                style={{ width: "260px" }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
