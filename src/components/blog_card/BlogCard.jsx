// Import Css File
import "./blog_card.css";

// Import Button
import Button from "../button/Button";

// Import Link
import { Link } from "react-router-dom";

export default function BlogCard({ data }) {
  return (
    <div
      className="blog-card bg-white shadow-one rounded-one overflow-hidden"
      key={data.id}
    >
      <img src={data.img} alt={`img${data.id}...`} />

      <div className="cover" style={{ padding: "15px" }}>
        <div className="flex items-center">
          <span className="date text-[13px] text-dark-gray border-r-1 border-r-solid border-r-border-one">
            {data.date}
          </span>

          <span className="auther text-[14px] font-[600] text-orange">
            {data.auther}
          </span>
        </div>

        <Link to="">
          <p className="title font-[600] text-light-navy hover:text-orange">
            {data.title}
          </p>
        </Link>

        <p className="description text-[14px] text-light-navy line-clamp-3">
          {data.description}
        </p>

        <Button
          link={`/blog-details/${data.id}`}
          btnTitle="Read More"
          func={() => {}}
        />
      </div>
    </div>
  );
}
