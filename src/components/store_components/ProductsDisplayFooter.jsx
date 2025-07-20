// Import React Memo
import { memo } from "react";

// Import Matrial Ui Compoents
import Pagination from "@mui/material/Pagination";

function ProductsDisplayFooter({ ourStore, handlePage }) {
  const { filteredProducts, count, isLoading } = ourStore;

  return (
    <div
      className="products-display-footer bg-white rounded-one border border-solid border-border-one"
      style={{ padding: "10px" }}
    >
      <Pagination
        count={isLoading ? 0 : Math.ceil([...filteredProducts].length / count)}
        color="primary"
        onChange={handlePage}
      />
    </div>
  );
}

export default memo(ProductsDisplayFooter);
