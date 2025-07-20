// Import Css File
import "./home.css";

// Import Components
import HeroSection from "../../components/home_comonents/HeroSection";
import ServicesSection from "../../components/home_comonents/ServicesSection";
import CategoriesSectionUi from "../../components/home_comonents/CategoriesSectionUi";
import ProductsSliderLogic from "../../components/products_slider/ProductsSliderLogic";
import BrandsSection from "../../components/home_comonents/BrandsSection";
import BlogsSection from "../../components/blogs_section/BlogsSection";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />

      <div
        className="my-container"
        style={{ marginBottom: "-40px", marginTop: "40px", padding: "50px 0" }}
      >
        <ServicesSection />

        <CategoriesSectionUi />

        <ProductsSliderLogic
          title="Mobile Accessories"
          category="mobile-accessories"
        />

        <ProductsSliderLogic title="Furniture" category="furniture" />

        <ProductsSliderLogic title="Laptops" category="laptops" />

        <BrandsSection />

        <BlogsSection headTitle="Our New Blogs" start={0} end={3} />
      </div>
    </div>
  );
}
