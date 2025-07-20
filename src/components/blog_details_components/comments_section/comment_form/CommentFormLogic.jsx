// Import Component Ui
import CommentFormUi from "./CommentFormUi";

// Import Hooks
import { useState } from "react";

// Import Custom Hooks
import { useCheckLogin } from "../../../../hooks/useCheckLogin";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Toastify Slice Reducers
import {
  setMessage,
  setType,
  notify,
} from "../../../../features/toastifySlice";

// Import Model slice Reducers
import { handleModel, setModelMessage } from "../../../../features/modelSlice";

// Import Blogs Details Slice Reducers
import {
  addComment,
  setInStorage,
} from "../../../../features/blogsDetailsSlice";

export default function CommentFormLogic() {
  const [comment, setComment] = useState({ name: "", message: "" });
  const isLogin = useCheckLogin();
  const blogId = useSelector((choose) => {
    return choose.blogsDetails.idNow;
  });

  const dispatch = useDispatch();

  function handleComment(key, value) {
    setComment({ ...comment, [key]: value });
  }

  function handleClickBtn() {
    let message = "",
      type = "";

    // First Possibility
    if (comment.name === "" || comment.message === "") {
      message = "Please fill all inputs";
      type = "error";

      dispatch(setMessage(message));
      dispatch(setType(type));
      dispatch(notify());
    }
    // Second Possibility
    else if (comment.name && comment.message && isLogin) {
      message = "Comment added successfully";
      type = "success";

      // Add new Comment
      dispatch(
        addComment({
          name: comment.name,
          message: comment.message,
          commentId: blogId,
        })
      );
      dispatch(setInStorage());

      // Add Toastify
      dispatch(setMessage(message));
      dispatch(setType(type));
      dispatch(notify());

      // Return Inputs Values To Initial Values
      setComment({ name: "", message: "" });
    }
    // Third Posibility
    else if (comment.name && comment.message && !isLogin) {
      dispatch(setModelMessage("Please login to continue"));
      dispatch(handleModel());
    }
  }

  return (
    <>
      <CommentFormUi
        comment={comment}
        handleComment={handleComment}
        handleClickBtn={handleClickBtn}
      />
    </>
  );
}
