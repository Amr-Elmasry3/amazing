// Import Button
import Button from "../../../button/Button";

export default function CommentFormUi({
  comment,
  handleComment,
  handleClickBtn,
}) {
  return (
    <div className="comments-form">
      <h1 className="heading font-[600] text-light-navy">Leave a comment</h1>

      <form className="flex flex-col gap-6">
        <div className="box flex flex-col gap-[7px]">
          <label className="text-[14px] text-gray">Name*</label>

          <input
            className="bg-white! rounded-one shadow-one"
            type="text"
            value={comment.name}
            placeholder="Name"
            required
            onChange={(eve) => {
              handleComment("name", eve.target.value);
            }}
            style={{ padding: "6px 8px" }}
          />
        </div>

        <div className="box flex flex-col gap-[7px]">
          <label className="text-[14px] text-gray">Message*</label>

          <textarea
            className="bg-white! rounded-one shadow-one resize-none h-[100px]"
            placeholder="Meassage"
            value={comment.message}
            required
            onChange={(eve) => {
              handleComment("message", eve.target.value);
            }}
          />
        </div>

        <Button link="" btnTitle="Post Message" func={handleClickBtn} />
      </form>
    </div>
  );
}
