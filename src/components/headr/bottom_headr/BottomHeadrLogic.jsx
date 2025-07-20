// Import Components
import BottomHeadr from "./BottomHeadrUi";

// Import Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import Custom Hook
import { useFetch } from "../../../hooks/useFetch";

// Import Redux Hooks
import { useDispatch } from "react-redux";

// Import Search Slice Reducers
import { setSearchCategory } from "../../../features/searchSlice";

export default function BottomHeadrLogic() {
  const { values, isLoading } = useFetch(
    "https://dummyjson.com/products/categories"
  );

  const [openCategories, setOpenCategories] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCategoriesState() {
    setOpenCategories(!openCategories);
  }

  function handleSearchCategory(category) {
    dispatch(setSearchCategory(category));
    navigate("/our-store");
  }

  return (
    <>
      <BottomHeadr
        categories={values}
        isLoading={isLoading}
        openCategories={openCategories}
        handleCategoriesState={handleCategoriesState}
        handleSearchCategory={handleSearchCategory}
      />
    </>
  );
}
