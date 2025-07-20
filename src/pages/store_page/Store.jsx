// Import Components
import PathPage from "../../components/path_page/PathPage";
import MainHeading from "../../components/main_heading/MainHeading";
import FilterLogic from "../../components/store_components/filter/FilterLogic";
import ProductsDisplay from "../../components/store_components/ProductsDisplay";

// Import Hooks
import { useEffect, useCallback, useMemo } from "react";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Our Store Slice Reducers
import {
  fetchData,
  handleGridStyle,
  handleDisplayDetails,
  handleFilter,
  handleFilteredProducts,
  resetDisplayDetails,
} from "../../features/ourStoreSlice";

export default function Store() {
  const ourStore = useSelector((choose) => {
    return choose.ourStore;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const isLoading = useMemo(() => {
    return ourStore.isLoading;
  }, [ourStore.isLoading]);
  const filterData = useMemo(() => {
    return ourStore.filter;
  }, [ourStore.filter]);

  function handleStyle(num) {
    dispatch(handleGridStyle(num));
  }

  function setDisplayDetails(page) {
    dispatch(handleDisplayDetails(page));
  }

  const setFilter = useCallback(
    (key, value, category) => {
      dispatch(handleFilter({ key, value, category }));
    },
    [dispatch]
  );

  const setFilteredProducts = useCallback(() => {
    dispatch(handleFilteredProducts());
    dispatch(resetDisplayDetails());
  }, [dispatch]);

  return (
    <div className="store-page">
      <PathPage path="Home Our-Shop" />

      <div className="content my-container">
        <MainHeading
          title="Our Shop"
          subTitle="This is where all of products are displayed with the ability to filter them"
        />

        <div className="flex items-start flex-col min-md:flex-row gap-2">
          <FilterLogic
            setFilter={setFilter}
            setFilteredProducts={setFilteredProducts}
            isLoadingData={isLoading}
            filterData={filterData}
          />

          <ProductsDisplay
            ourStore={ourStore}
            handleStyle={handleStyle}
            setDisplayDetails={setDisplayDetails}
          />
        </div>
      </div>
    </div>
  );
}
