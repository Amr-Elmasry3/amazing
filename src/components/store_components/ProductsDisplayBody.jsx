// Import Components
import ProductCardLogic from "../product_card/ProductCardLogic";

// Import Imgs
import noData from "../../assets/images/No data.gif";

// Import Skeleton
import ProductCardSkeleton from "../skeleton_components/ProductCardSkeleton";

export default function ProductsDisplayBody({ ourStore }) {
  const { filteredProducts, isLoading, gridStyle, displayDetails } = ourStore;

  return (
    <div
      className="products-display-body grid gap-2"
      style={{
        gridTemplateColumns: ![...filteredProducts].length
          ? "repeat(1, 1fr)"
          : gridStyle === 4 && [...filteredProducts].length
          ? "repeat(auto-fill, minmax(200px, 1fr))"
          : gridStyle === 3 && [...filteredProducts].length
          ? "repeat(auto-fill, minmax(250px, 1fr))"
          : "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {isLoading ? (
        <>
          <ProductCardSkeleton />

          <ProductCardSkeleton />

          <ProductCardSkeleton />

          <ProductCardSkeleton />

          <ProductCardSkeleton />

          <ProductCardSkeleton />

          <ProductCardSkeleton />

          <ProductCardSkeleton />
        </>
      ) : (
        <>
          {[...filteredProducts].length ? (
            <>
              {filteredProducts
                .slice(displayDetails.to - 1, displayDetails.from)
                .map((item) => {
                  return (
                    <div
                      className="bg-white rounded-one border border-solid border-border-one"
                      key={item.id}
                      style={{ padding: "10px" }}
                    >
                      <ProductCardLogic product={item} />
                    </div>
                  );
                })}
            </>
          ) : (
            <>
              <img src={noData} alt="No Data..." />
            </>
          )}
        </>
      )}
    </div>
  );
}
