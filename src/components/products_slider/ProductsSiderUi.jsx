// Import Css File
import "./products_slider.css";

// Import Components
import ProductCardLogic from "../product_card/ProductCardLogic";

// Import Matrial Ui Components
import HeadingSkeleton from "../skeleton_components/HeadingSkeleton";
import ProductCardSkeleton from "../skeleton_components/ProductCardSkeleton";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function ProductsSiderUi({ title, values, isLoading }) {
  return (
    <div className="products-slider" style={{ margin: "50px 0" }}>
      <div className="relative">
        {isLoading ? (
          <HeadingSkeleton />
        ) : (
          <div
            className="main-heading border-b border-b-light-navy border-b-solid"
            style={{ margin: "0 0 30px" }}
          >
            <h2
              className="title relative w-fit bg-light-navy text-[14px] font-[600] text-white"
              style={{ padding: "7px 18px" }}
            >
              {title}
            </h2>
          </div>
        )}

        <Swiper
          breakpoints={{
            1116: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 4,
            },
            590: {
              slidesPerView: 3,
            },
            475: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          navigation={isLoading ? false : true}
          modules={[Navigation]}
          spaceBetween={15}
          className="mySwiper"
          style={{ padding: "7px 2px" }}
        >
          {isLoading ? (
            <>
              <SwiperSlide>
                <ProductCardSkeleton />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCardSkeleton />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCardSkeleton />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCardSkeleton />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCardSkeleton />
              </SwiperSlide>
            </>
          ) : (
            values.products.map((item) => {
              return (
                <SwiperSlide
                  className="slide relative overflow-hidden bg-white rounded-one shadow-one"
                  key={item.id}
                  style={{ padding: "10px" }}
                >
                  <ProductCardLogic product={item} />
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </div>
  );
}
