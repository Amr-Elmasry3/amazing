// Import Matrial Ui Components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Import Icons
import { MdDeleteForever } from "react-icons/md";

// Import Images
import noData from "../../assets/images/No data.gif";

export default function CompareTable({ products, handleRemoveProduct }) {
  const samePadding = "10px";
  const sameWidth = "270px";

  return (
    <div
      className={`compare-table ${
        products === "no data" ? "flex justify-center" : ""
      }`}
    >
      {products !== "no data" ? (
        <div className="table-cover overflow-x-scroll">
          <div className="my-table bg-white rounded-one w-fit border border-solid border-border-one">
            <div className="img-box flex items-center border-b border-solid border-border-one">
              <span
                className="title min-w-[103px] text-center text-[15px] font-[600] text-light-navy "
                style={{ padding: samePadding }}
              >
                Img
              </span>

              <ul className="flex flex-1">
                {products.map((item) => {
                  return (
                    <div
                      className="product-img border-l border-l-solid border-l-border-one"
                      key={item.id}
                      style={{ padding: samePadding, width: sameWidth }}
                    >
                      <img
                        src={item.images[0]}
                        alt={`img${item.id}...`}
                        className="bg-section rounded-one"
                      />
                    </div>
                  );
                })}
              </ul>
            </div>

            <div className="category-box flex items-center border-b border-solid border-border-one">
              <span
                className="title min-w-[103px] text-center text-[15px] font-[600] text-light-navy "
                style={{ padding: samePadding }}
              >
                Category
              </span>

              <ul className="flex flex-1">
                {products.map((item) => {
                  return (
                    <span
                      className="category text-center border-l border-l-solid border-l-border-one text-[14px] text-dark-gray capitalize"
                      key={item.id}
                      style={{ padding: samePadding, width: sameWidth }}
                    >
                      {item.category}
                    </span>
                  );
                })}
              </ul>
            </div>

            <div className="title-box flex items-center border-b border-solid border-border-one">
              <span
                className="title min-w-[103px] text-center text-[15px] font-[600] text-light-navy"
                style={{ padding: samePadding }}
              >
                Name
              </span>

              <ul className="flex flex-1">
                {products.map((item) => {
                  return (
                    <span
                      className="name text-center border-l border-l-solid border-l-border-one text-[14px] text-dark-gray"
                      key={item.id}
                      style={{ padding: samePadding, width: sameWidth }}
                    >
                      {item.title}
                    </span>
                  );
                })}
              </ul>
            </div>

            <div className="price-box flex items-center border-b border-solid border-border-one">
              <span
                className="title min-w-[103px] text-center text-[15px] font-[600] text-light-navy "
                style={{ padding: samePadding }}
              >
                Price
              </span>

              <ul className="flex flex-1">
                {products.map((item) => {
                  return (
                    <span
                      className="price text-center border-l border-l-solid border-l-border-one text-[15px] font-[600] text-orange"
                      key={item.id}
                      style={{ padding: samePadding, width: sameWidth }}
                    >
                      ${item.price}
                    </span>
                  );
                })}
              </ul>
            </div>

            <div className="description-box flex items-center border-b border-solid border-border-one">
              <span
                className="title min-w-[103px] text-center text-[15px] font-[600] text-light-navy "
                style={{ padding: samePadding }}
              >
                Description
              </span>

              <ul className="flex flex-1">
                {products.map((item) => {
                  return (
                    <span
                      className="desctiption text-center border-l border-l-solid border-l-border-one text-[14px] text-dark-gray"
                      key={item.id}
                      style={{
                        padding: samePadding,
                        width: sameWidth,
                        lineHeight: "1.3",
                      }}
                    >
                      {item.description}
                    </span>
                  );
                })}
              </ul>
            </div>

            <div className="weight-box flex items-center border-b border-solid border-border-one">
              <span
                className="title min-w-[103px] text-center text-[15px] font-[600] text-light-navy "
                style={{ padding: samePadding }}
              >
                Weight
              </span>

              <ul className="flex flex-1">
                {products.map((item) => {
                  return (
                    <span
                      className="weight text-center border-l border-l-solid border-l-border-one text-[14px] text-dark-gray"
                      key={item.id}
                      style={{ padding: samePadding, width: sameWidth }}
                    >
                      {item.weight} gram
                    </span>
                  );
                })}
              </ul>
            </div>

            <div className="remove-box flex items-center border-b border-solid border-border-one">
              <span
                className="title min-w-[103px] text-center text-[15px] font-[600] text-light-navy "
                style={{ padding: samePadding }}
              >
                Remove
              </span>

              <ul className="flex fex-1">
                {products.map((item) => {
                  return (
                    <div
                      className="icon-box flex justify-center border-l border-l-solid border-l-border-one"
                      key={item.id}
                      style={{ padding: samePadding, width: sameWidth }}
                    >
                      <MdDeleteForever
                        className="icon text-[22px] text-red cursor-pointer"
                        onClick={() => {
                          handleRemoveProduct(item.id);
                        }}
                      />
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <img src={noData} alt="NO Data..." style={{ width: "340px" }} />
      )}
    </div>
  );
}
