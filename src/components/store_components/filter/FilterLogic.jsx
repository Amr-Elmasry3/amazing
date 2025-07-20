// Import React Memo
import { memo } from "react";

// Import Component Ui
import FilterUi from "./FilterUi";

// Import Hooks
import { useState, useEffect } from "react";

// Import Custom Hooks
import { useFetch } from "../../../hooks/useFetch";

// Import Redux Hooks
import { useSelector } from "react-redux";

function FilterLogic({
  setFilter,
  setFilteredProducts,
  isLoadingData,
  filterData,
}) {
  const search = useSelector((choose) => {
    return choose.search;
  });
  const [inputValue, setInputValue] = useState("");
  const [priceValue, setPriceValue] = useState([0, 80000]);
  const [rateState, setRateState] = useState([
    { id: 1, rate: 5, active: false },
    { id: 2, rate: 4, active: false },
    { id: 3, rate: 3, active: false },
  ]);
  const [categories, setCategories] = useState([]);
  const { values, isLoading } = useFetch(
    "https://dummyjson.com/products/category-list"
  );

  useEffect(() => {
    if (!isLoading) {
      const newCategories = [];

      for (let x = 0; x < [...values].length; x++) {
        if ([...filterData.categories].length) {
          filterData.categories.includes(values[x])
            ? newCategories.push({
                id: x + 1,
                category: values[x],
                active: true,
              })
            : newCategories.push({
                id: x + 1,
                category: values[x],
                active: false,
              });
        } else {
          newCategories.push({ id: x + 1, category: values[x], active: false });
        }
      }

      setCategories(newCategories);
    }
  }, [isLoading, values, filterData]);

  useEffect(() => {
    if (!isLoadingData) {
      handleInputValue(search.searchValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.searchValue, isLoadingData]);

  useEffect(() => {
    if (!isLoadingData && !isLoading && search.searchCategory) {
      const newCategories = [];

      for (let x = 0; x < [...values].length; x++) {
        newCategories.push({
          id: x + 1,
          category: values[x],
          active: values[x] === search.searchCategory ? true : false,
        });
      }

      setCategories(newCategories);

      setFilter("categories", search.searchCategory, "categories");

      setFilteredProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingData, isLoading, search.searchCategory]);

  function handleInputValue(value) {
    setInputValue(value);
    setFilter("searchValue", value, "searchInput");
    setFilteredProducts();
  }

  function handlePriceValue(event, newValue) {
    setPriceValue(newValue);
    setFilter("price", newValue, "price");
    setFilteredProducts();
  }

  function handleRateState(id) {
    const newRateState = [...rateState];

    newRateState.map((item) => {
      return item.id === id
        ? (item.active = !item.active)
        : (item.active = false);
    });

    setRateState(newRateState);
    const item = newRateState[id - 1];

    setFilter("rate", item.active ? item.rate : 0, "rate");

    setFilteredProducts();
  }

  function handleCategories(id) {
    const newCategories = [...categories];

    newCategories[id - 1].active = !newCategories[id - 1].active;

    setCategories(newCategories);

    setFilter("categories", newCategories[id - 1].category, "categories");

    setFilteredProducts();
  }

  return (
    <>
      <FilterUi
        inputValue={inputValue}
        handleInputValue={handleInputValue}
        priceValue={priceValue}
        handlePriceValue={handlePriceValue}
        rate={rateState}
        handleRateState={handleRateState}
        categories={categories}
        handleCategories={handleCategories}
      />
    </>
  );
}

export default memo(FilterLogic);
