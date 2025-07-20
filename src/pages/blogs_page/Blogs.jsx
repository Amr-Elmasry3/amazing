// Import Components
import PathPages from "../../components/path_page/PathPage";
import BlogCard from "../../components/blog_card/BlogCard";

// Import UseSelector
import { useSelector } from "react-redux";

export default function Blogs() {
  const blogs = useSelector((choose) => {
    return choose.blogsDetails.data;
  });

  return (
    <div className="blogs-page">
      <PathPages path="Home Blogs" />

      <div
        className="my-container grid gap-x-4 gap-y-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {blogs.map((item) => {
          return <BlogCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
