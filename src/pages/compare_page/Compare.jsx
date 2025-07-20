// Import Components
import PathPage from "../../components/path_page/PathPage";
import MainHeading from "../../components/main_heading/MainHeading";
import CompareTable from "../../components/compare_components/CompareTable";

// Import Custom Functions
import { CheckData } from "../../util/CheckData";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Wishlist Slice Reducers
import {
  removeProductFromCompare,
  setInStorageCompare,
} from "../../features/compareSlice";

// Import Toastify Slice Reducers
import { setMessage, setType, notify } from "../../features/toastifySlice";

export default function ComparePage() {
  const products = useSelector((choose) => {
    return choose.compare.products;
  });

  const dispatch = useDispatch();

  function handleRemoveProduct(id) {
    dispatch(removeProductFromCompare(id));
    dispatch(setInStorageCompare());

    // Handle Toastify
    dispatch(setMessage("Product removed from Compare"));
    dispatch(setType("success"));
    dispatch(notify());
  }

  return (
    <div className="compare-page">
      <PathPage path="Home Compare" />

      <div className="content my-container">
        <MainHeading
          title="Compare"
          subTitle="Here are the products that have beeen added for comparsion in terms of price, shape, etc."
        />

        <CompareTable
          products={CheckData(products)}
          handleRemoveProduct={handleRemoveProduct}
        />
      </div>
    </div>
  );
}
