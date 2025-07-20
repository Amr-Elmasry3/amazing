// Import Components Ui
import SearchBoxUi from "./SearchBoxUi";

// Import Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import Custom Hook
import { useFetch } from "../../hooks/useFetch";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Search Slice Reducers
import { setSearchValue, handleResultsBox } from "../../features/searchSlice";

// Import Toatify Slice Reducers
import { setMessage, setType, notify } from "../../features/toastifySlice";

// Import Menu Slice Reducers
import { handleMenuToggle } from "../../features/menuSlice";

export default function SearchBoxLogic() {
  const [inputValue, setInputValue] = useState("");
  const { values, isLoading } = useFetch(
    `https://dummyjson.com/products/search?q=${inputValue}`
  );

  const searchInfo = useSelector((choose) => {
    return choose.search;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInputValue(value) {
    setInputValue(value);
  }

  function handleSearchValue(value) {
    dispatch(setSearchValue(value));
  }

  function handleResultsState(value) {
    dispatch(handleResultsBox(value));
  }

  function handleClickSearch() {
    if (inputValue) {
      navigate("/our-store");
    } else {
      dispatch(setMessage("Please enter value to search"));
      dispatch(setType("warning"));
      dispatch(notify());
    }
  }

  function handleMenu() {
    dispatch(handleMenuToggle());
  }

  return (
    <>
      <SearchBoxUi
        values={values}
        isLoading={isLoading}
        searchValue={inputValue}
        handleInputValue={handleInputValue}
        handleSearchValue={handleSearchValue}
        searchInfo={searchInfo}
        handleResultsState={handleResultsState}
        handleClickSearch={handleClickSearch}
        handleMenu={window.scrollX <= 767 ? handleMenu : null}
      />
    </>
  );
}
