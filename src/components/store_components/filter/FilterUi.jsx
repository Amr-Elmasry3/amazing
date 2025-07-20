// Import Matrial Ui Components
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

export default function Filter({
  inputValue,
  handleInputValue,
  priceValue,
  handlePriceValue,
  rate,
  handleRateState,
  categories,
  handleCategories,
}) {
  return (
    <div
      className="filter-section w-[100%] min-md:w-[220px] flex flex-col gap-4 bg-white rounded-one border border-solid border-border-one"
      style={{ padding: "12px 10px 20px" }}
    >
      <div className="serach border-b border-b-solid border-b-gray">
        <input
          type="text"
          placeholder="Search Product"
          value={inputValue}
          onChange={(eve) => {
            handleInputValue(eve.target.value);
          }}
        />
      </div>

      <div className="categories">
        <div className="categories-content">
          <Accordion defaultExpanded className="shadow-none!">
            <AccordionSummary
              expandIcon={
                <AddIcon className="icon text-[17px]! text-light-navy!" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Categories</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ul className="list flex flex-col gap-2">
                {categories ? (
                  categories.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="flex items-center gap-2 text-[15px] font-[600] text-gray cursor-pointer"
                        onClick={() => {
                          handleCategories(item.id);
                        }}
                      >
                        <p
                          className={`w-[14px] h-[14px] rounded-[2px] border border-solid ${
                            item.active
                              ? "border-light-navy"
                              : "border-border-one"
                          } flex items-center justify-center`}
                          style={{ transition: "var(--transition)" }}
                        >
                          <span
                            className={`w-[8px] h-[8px] bg-light-navy rounded-[2px] ${
                              item.active ? "scale-100" : "scale-0"
                            }`}
                            style={{ transition: "var(--transition)" }}
                          ></span>
                        </p>
                        {item.category}
                      </li>
                    );
                  })
                ) : (
                  <span>Loading...</span>
                )}
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="price">
        <h2
          className="title text-[15px] font-[600] text-light-navy border-b border-b-solid border-b-border-one"
          style={{ padding: "0 0 10px", margin: "10px 0 18px" }}
        >
          Products Price
        </h2>

        <div className="price-content flex flex-col gap-2">
          <div className="price-box flex items-center justify-between">
            <span className="low-price text-[14px] font-[600] text-gray">
              ${priceValue[0]}
            </span>

            <span className="high-price text-[14px] font-[600] text-gray">
              ${priceValue[1]}
            </span>
          </div>

          <Box className="range">
            <Slider
              className="slide"
              value={priceValue}
              onChange={handlePriceValue}
              min={0}
              max={80000}
              step={1}
              defaultValue={[20000, 60000]}
            />
          </Box>
        </div>
      </div>

      <div className="rate">
        <h2
          className="title text-[15px] font-[600] text-light-navy border-b border-b-solid border-b-border-one"
          style={{ padding: "0 0 10px", margin: "10px 0 18px" }}
        >
          Products Rated
        </h2>

        <div className="rate-content flex flex-col gap-4">
          {rate.map((item) => {
            return (
              <li
                key={item.id}
                className="flex items.center gap-2 cursor-pointer"
                onClick={() => {
                  handleRateState(item.id);
                }}
              >
                <p
                  className={`w-[14px] h-[14px] rounded-[2px] border border-solid ${
                    item.active ? "border-light-navy" : "border-border-one"
                  } flex items-center justify-center`}
                  style={{ transition: "var(--transition)" }}
                >
                  <span
                    className={`w-[8px] h-[8px] bg-light-navy rounded-[2px] ${
                      item.active ? "scale-100" : "scale-0"
                    }`}
                    style={{ transition: "var(--transition)" }}
                  ></span>
                </p>

                <span className="flex-1 text-[15px] text-gray">More than</span>

                <Rating
                  className="rating"
                  name="half-rating-read"
                  defaultValue={item.rate}
                  precision={0.5}
                  readOnly
                  style={{ fontSize: "16px" }}
                />
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}
