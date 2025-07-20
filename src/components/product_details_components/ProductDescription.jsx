// Import Matrial Ui Components
import Skeleton from "@mui/material/Skeleton";

export default function ProductDescription({ product, isLoading }) {
  return (
    <div className="product-description" style={{ margin: "25px 0 0" }}>
      <h1
        className="title font-[600] text-light-navy"
        style={{ margin: "0 0 15px" }}
      >
        Description
      </h1>

      {isLoading ? (
        <p
          className="description bg-white border border-solid border-border-one rounded-one"
          style={{ padding: "15px" }}
        >
          <Skeleton variant="rounded" animation="wave" height={20} />
        </p>
      ) : (
        <p
          className="description bg-white border border-solid border-border-one rounded-one text-[15px] text-dark-gray"
          style={{ padding: "15px", lineHeight: "1.4" }}
        >
          {product.description}
        </p>
      )}
    </div>
  );
}
