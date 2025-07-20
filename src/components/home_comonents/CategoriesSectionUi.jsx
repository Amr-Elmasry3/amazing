// Import Data
import { categories } from "../../Data";

// Import Link
import { Link } from "react-router-dom";

export default function CategoriesSectionUi() {
  return (
    <div className="categories-section" style={{ margin: "40px 0 0" }}>
      <div
        className="bg-white rounded-one shadow-one flex flex-wrap justify-center gap-6"
        style={{ padding: "15px 20px" }}
      >
        {categories.map((item) => {
          return (
            <Link
              to="/our-store"
              key={item.id}
              className="category flex items-center justify-between gap-2 w-[100%] xs:w-[190px]"
            >
              <div className="details flex flex-col gap-[4px]">
                <span className="category text-[16px] font-[600] text-light-navy">
                  {item.category}
                </span>

                <span className="count text-[12px] font-[600] text-gray">
                  {item.count} items
                </span>
              </div>

              <img
                src={item.img}
                alt={`img${item.id}...`}
                style={{ width: "70px" }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
