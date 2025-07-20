// Import Components
import CommentsFormLogic from "../comments_section/comment_form/CommentFormLogic";

// Import Function
import NameAbbreviation from "../../../util/NameAbbreviation";

export default function Comments({ blog }) {
  return (
    <div className="comments-section ">
      <h1 className="heading font-[600] text-light-navy">
        Comments ({blog.comments.count})
      </h1>

      <div className="content flex flex-col gap-6 border-b-1 border-b-solid border-b-border-one max-h-[400px] overflow-y-scroll">
        {blog.comments.count ? (
          blog.comments.data.map((item) => {
            return (
              <div
                className="box bg-white rounded-one shadow-one"
                key={item.id}
              >
                <div className="head flex items-center gap-4">
                  <span className="pic w-[45px] h-[45px] text-[14px] font-[600] text-light-navy uppercase bg-orange rounded-one flex items-center justify-center">
                    {NameAbbreviation(item.name)}
                  </span>

                  <div className="details flex flex-col gap-2">
                    <span className="name text-[15px] font-[600] capitalize text-light-navy">
                      {item.name}
                    </span>

                    <span className="date text-[13px] text-dark-gray">
                      {item.date}
                    </span>
                  </div>
                </div>

                <p className="comment text-[15px] text-dark-gray">
                  {item.comment}
                </p>
              </div>
            );
          })
        ) : (
          <span>Not Found</span>
        )}
      </div>

      <CommentsFormLogic />
    </div>
  );
}
