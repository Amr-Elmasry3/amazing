// Import Hooks
import { useState, useEffect } from "react";

// Import Skelton
import ProductImagesSkeleton from "../skeleton_components/ProductImagesSkeleton";

export default function ProductImages({ images, isLoading }) {
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (!isLoading) {
      setMainImage(images[0]);
    }
  }, [images, isLoading]);

  return (
    <div className="product-images col-span-4 min-md:col-span-2">
      {isLoading ? (
        <ProductImagesSkeleton />
      ) : (
        <>
          <div className="main-img flex justify-center bg-section rounded-one ">
            <img
              src={mainImage === "" ? images[0] : mainImage}
              alt="main-img..."
              style={{ maxWidth: "360px" }}
            />
          </div>

          {[...images].length > 1 ? (
            <ul
              className="images flex flex-wrap justify-center gap-2"
              style={{ margin: "15px 0 0" }}
            >
              {images.map((item, index) => {
                return (
                  <li
                    className="w-[90px]  bg-section rounded-one cursor-pointer"
                    key={index}
                  >
                    <img
                      src={item}
                      alt={`img${index + 1}...`}
                      onClick={(eve) => {
                        if (mainImage !== eve.target.src) {
                          setMainImage(eve.target.src);
                        }
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
