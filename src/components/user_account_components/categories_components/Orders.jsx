// Import Matrial Ui Components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Import Components
import Button from "../../button/Button";

// Import Data
import { orders } from "../../../Data";

export default function Orders() {
  return (
    <div className="orders">
      <h1
        className="head bg-gray-light text-[16px] font-[600] text-light-navy"
        style={{ padding: "15px" }}
      >
        Your Orders
      </h1>

      <div className="orders-content" style={{ padding: "15px" }}>
        <TableContainer component={Paper} className="shadow-none! rounded-one!">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  className="border-y border-l border-solid border-border-one bg-light-navy text-[14px] font-[600] text-white!"
                >
                  Order
                </TableCell>

                <TableCell
                  align="left"
                  className="border-y border-l border-solid border-border-one bg-light-navy text-[14px] font-[600] text-white!"
                >
                  Date
                </TableCell>

                <TableCell
                  align="left"
                  className="border-y border-l border-solid border-border-one bg-light-navy text-[14px] font-[600] text-white!"
                >
                  Status
                </TableCell>

                <TableCell
                  align="left"
                  className="border-y border-l border-solid border-border-one bg-light-navy text-[14px] font-[600] text-white!"
                >
                  Total
                </TableCell>

                <TableCell
                  align="left"
                  className="border border-solid border-border-one bg-light-navy text-[14px] font-[600] text-white!"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {orders.map((item) => {
                return (
                  <TableRow key={item.order}>
                    <TableCell
                      align="left"
                      className="border-b border-l border-solid border-border-one text-[14px]! text-dark-gray!"
                    >
                      {item.order}
                    </TableCell>

                    <TableCell
                      align="left"
                      className="border-b border-l border-solid border-border-one text-[14px]! text-dark-gray!"
                    >
                      {item.date}
                    </TableCell>

                    <TableCell
                      align="left"
                      className="border-b border-l border-solid border-border-one text-[14px]! text-dark-gray!"
                    >
                      {item.status}
                    </TableCell>

                    <TableCell
                      align="left"
                      className="border-b border-l border-solid border-border-one text-[14px]! text-dark-gray!"
                    >
                      {item.count * item.price} for {item.count} item
                    </TableCell>

                    <TableCell
                      align="center"
                      className="border-b border-x border-solid border-border-one text-[14px]! text-dark-gray!"
                    >
                      <Button btnTitle="View" />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
