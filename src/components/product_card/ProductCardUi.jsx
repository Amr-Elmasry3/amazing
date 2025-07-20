// Import Css File
import "./product_card.css";

// Import Components
import { Link } from "react-router-dom";
import ProductActionsLogic from "../product_actions/ProductActionsLogic";

// Import Matrial Ui Components
import Rating from "@mui/material/Rating";

export default function ProductCardUi({ item }) {
  return (
    <div className="product-card relative overflow-hidden bg-white">
      <div className="actions absolute flex flex-col gap-2 top-[50%] right-[-45px] translate-y-[-50%]">
        <ProductActionsLogic item={item} />
      </div>

      <img
        src={item.images[0]}
        alt={`img${item.id}...`}
        className="bg-[#f5f5f391] rounded-one"
        style={{ margin: "0 0 10px" }}
      />

      <span className="brand text-[12px] font-[600] text-red">
        {item.brand}
      </span>

      <Link to={`/product-details/${item.id}`}>
        <p className="title text-[15px] font-[600] text-light-navy line-clamp-1 hover:text-orange hover:underline">
          {item.title}
        </p>
      </Link>

      <Rating
        name="read-only"
        value={item.rating}
        readOnly
        style={{ fontSize: "15px" }}
      />

      <div
        className="price flex items-center gap-2"
        style={{ margin: "10px 0 0" }}
      >
        <span className="new text-[15px] font-[600] text-gray">
          $
          {(item.price - (item.discountPercentage / 100) * item.price).toFixed(
            2
          )}
        </span>

        <span className="old text-[12px] text-red line-through">
          ${item.price}
        </span>
      </div>
    </div>
  );
}
