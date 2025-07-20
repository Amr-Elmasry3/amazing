// Import Components
import Button from "../button/Button";

// Import imgs
import mainBanner1 from "../../assets/images/main-banner-1.jpg";
import mainBanner2 from "../../assets/images/main-banner.jpg";
import catBanner1 from "../../assets/images/catbanner-01.jpg";
import catBanner2 from "../../assets/images/catbanner-02.jpg";
import catBanner3 from "../../assets/images/catbanner-03.jpg";
import catBanner4 from "../../assets/images/catbanner-04.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="my-container grid grid-rows-0 sm:grid-rows-4 grid-cols-[1fr] sm:grid-cols-4 gap-4">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper row-span-2 lg:row-span-4 col-span-4 lg:col-span-2 h-[300px] sm:h-[360px]"
          style={{ width: "100%" }}
        >
          <SwiperSlide className="slide">
            <div
              className="box bg-cover bg-center bg-no-repeat h-[100%] rounded-one flex flex-col justify-center"
              style={{
                backgroundImage: `url(${mainBanner1})`,
              }}
            >
              <span className="title text-[12px] text-red uppercase">
                Supercharged For Pros
              </span>

              <h1
                className="sub-title text-[26px] font-[600] text-light-navy"
                style={{ margin: "7px 0 15px" }}
              >
                Special Scale
              </h1>

              <Button link="/our-store" btnTitle="Shop Now" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <div
              className="box bg-cover bg-center bg-no-repeat h-[100%] rounded-one flex flex-col justify-center"
              style={{
                backgroundImage: `url(${mainBanner2})`,
              }}
            >
              <span className="title text-[12px] text-red uppercase">
                Supercharged For Pros
              </span>

              <h1 className="sub-title text-[26px] font-[600] text-light-navy">
                iPad S13+ Pro
              </h1>

              <Button link="/our-store" btnTitle="Shop Now" />
            </div>
          </SwiperSlide>
        </Swiper>

        <div
          className="box row-span-1 lg:row-span-2 col-span-4 sm:col-span-2 lg:col-span-1 max-sm:h-[180px] bg-cover bg-center bg-no-repeat rounded-one flex flex-col justify-center"
          style={{
            backgroundImage: `url(${catBanner1})`,
          }}
        >
          <span className="title text-[12px] text-red uppercase">
            Best Sale
          </span>

          <h1 className="sub-title text-[16px] font-[600] text-light-navy">
            Laptops Max
          </h1>

          <Button link="/our-store" btnTitle="Shop Now" />
        </div>

        <div
          className="box row-span-1 lg:row-span-2 col-span-4 sm:col-span-2 lg:col-span-1 max-sm:h-[180px] bg-cover bg-center bg-no-repeat rounded-one flex flex-col justify-center"
          style={{
            backgroundImage: `url(${catBanner3})`,
          }}
        >
          <span className="title text-[12px] text-red uppercase">15% Off</span>

          <h1 className="sub-title text-[16px] font-[600] text-light-navy">
            Smartwatch 7
          </h1>

          <Button link="/our-store" btnTitle="Shop Now" />
        </div>

        <div
          className="box row-span-1 lg:row-span-2 col-span-4 sm:col-span-2 lg:col-span-1 max-sm:h-[180px] bg-cover bg-center bg-no-repeat rounded-one flex flex-col justify-center"
          style={{
            backgroundImage: `url(${catBanner2})`,
          }}
        >
          <span className="title text-[12px] text-red uppercase">
            New Arrival
          </span>

          <h1 className="sub-title text-[16px] font-[600] text-light-navy">
            Buy iPad Air
          </h1>

          <Button link="/our-store" btnTitle="Shop Now" />
        </div>

        <div
          className="box row-span-1 lg:row-span-2 col-span-4 sm:col-span-2 lg:col-span-1 max-sm:h-[180px] bg-cover bg-center bg-no-repeat rounded-one flex flex-col justify-center"
          style={{
            backgroundImage: `url(${catBanner4})`,
          }}
        >
          <span className="title text-[12px] text-red uppercase">
            Free Engvraving
          </span>

          <h1 className="sub-title text-[16px] font-[600] text-light-navy">
            AirPods Max
          </h1>

          <Button link="/our-store" btnTitle="Shop Now" />
        </div>
      </div>
    </div>
  );
}
