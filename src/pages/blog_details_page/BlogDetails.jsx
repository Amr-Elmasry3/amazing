// Import Css File
import "./blog_details.css";

// Import Components
import PathPage from "../../components/path_page/PathPage";
import Details from "../../components/blog_details_components/Details";
import Comments from "../../components/blog_details_components/comments_section/Comments";
import BlogsSection from "../../components/blogs_section/BlogsSection";

// Import Hooks
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Blog Details Slice Reducers
import { setId } from "../../features/blogsDetailsSlice";

export default function BlogDetails() {
  const { id } = useParams();

  const data = useSelector((choose) => {
    return choose.blogsDetails.data;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setId(id));
  }, [dispatch, id]);

  return (
    <div className="blog-details-page">
      <PathPage path="Home Blog-Details" />

      <div className="my-container">
        <Details blog={data[id - 1]} />

        <Comments blog={data[id - 1]} />

        <BlogsSection headTitle="Related Blogs" start={3} end={6} />
      </div>
    </div>
  );
}
