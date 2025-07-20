// Import Img
import errorImg from "../../assets/images/error_img.jpg";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="my-container content" style={{ marginTop: "35px" }}>
        <img src={errorImg} alt="404 Page" />
      </div>
    </div>
  );
}
