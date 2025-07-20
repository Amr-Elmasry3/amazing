// Import Matrial Ui Components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Import Components
import Button from "../button/Button";

// Import Icons
import { MdDeleteForever } from "react-icons/md";

// Import Images
import noData from "../../assets/images/No data.gif";

export default function WishlistTable({
  products,
  handleRemoveProduct,
  addProduct,
  removeProduct,
  checkProduct,
}) {
  return (
    <div
      className={`wishlist-table ${
        products === "no data" ? "flex justify-center" : ""
      }`}
    >
      {products !== "no data" ? (
        <TableContainer component={Paper} className="shadow-none! rounded-one!">
          <Table sx={{ minWidth: 950 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  className="border-y border-l border-solid border-border-one bg-light-navy text-[14px] font-[600] text-white!"
                >
                  Image
                </TableCell>

                <TableCell
                  align="center"
                  className="border-y border-l border-solid border-border-one bg-light-navy text-[14px] font-[600] text-white!"
                >
                  Brand / Name
                </TableCell>

                <TableCell
                  align="center"
                  className="border-y border-l border-solid border-border-one bg-light-navy text-[14px] font-[600] text-white!"
                >
                  Price
                </TableCell>

                <TableCell
                  align="center"
                  className="border-y border-l border-solid border-border-one bg-light-navy text-[14px] font-[600] text-white!"
                >
                  Stock Status
                </TableCell>

                <TableCell
                  align="center"
                  className="border border-solid border-border-one bg-light-navy text-[14px] font-[600] text-white!"
                >
                  Action
                </TableCell>

                <TableCell
                  align="center"
                  className="border border-solid border-border-one bg-light-navy text-[14px] font-[600] text-white!"
                >
                  Remove
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell
                      align="center "
                      className="border-b border-l border-solid border-border-one"
                    >
                      <div className="product-img w-[100%] bg-section rounded-one flex justify-center">
                        <img
                          src={item.images[0]}
                          alt={`img${item.id}...`}
                          style={{ width: "70px" }}
                        />
                      </div>
                    </TableCell>

                    <TableCell
                      align="center"
                      className="border-b border-l border-solid border-border-one"
                    >
                      <span
                        className="brand block text-[15px] font-[600] text-light-navy"
                        style={{ margin: "0 0 7px" }}
                      >
                        {item.brand}
                      </span>

                      <span className="name block text-[13px] text-dark-gray line-clamp-1">
                        {item.title}
                      </span>
                    </TableCell>

                    <TableCell
                      align="center"
                      className="text-[14px]! text-dark-gray! border-b border-l border-solid border-border-one"
                    >
                      ${item.price}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="text-[14px]! font-[600]! text-light-navy! border-b border-l border-solid border-border-one"
                    >
                      {item.availabilityStatus}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="border-b border-x border-solid border-border-one"
                    >
                      <Button
                        btnTitle={`${
                          checkProduct(item.id, "cart")
                            ? "Remove From Cart"
                            : "Add To Cart"
                        }`}
                        func={() => {
                          if (checkProduct(item.id, "cart")) {
                            removeProduct(item);
                          } else {
                            addProduct(item);
                          }
                        }}
                      />
                    </TableCell>

                    <TableCell align="center">
                      <MdDeleteForever
                        className="icon text-[22px] text-red w-[100%] cursor-pointer"
                        onClick={() => {
                          handleRemoveProduct(item.id);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <img src={noData} alt="NO Data..." style={{ width: "340px" }} />
      )}
    </div>
  );
}
