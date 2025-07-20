// Import Blog Card Component
import BlogCard from "../blog_card/BlogCard";

// Import Use Selector
import { useSelector } from "react-redux";

export default function BlogsSection({ headTitle, start, end }) {
  const blogs = useSelector((choose) => {
    return choose.blogsDetails.data;
  });

  return (
    <div className="blogs-section" style={{ margin: "50px 0 0" }}>
      <div>
        <h2
          className="heading font-[600] text-light-navy w-fit"
          style={{ margin: "0 0 15px" }}
        >
          {headTitle}
        </h2>

        <div
          className="content grid gap-y-6 gap-x-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {blogs.slice(start, end).map((item) => {
            return <BlogCard data={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
