// Import Button
import Button from "../button/Button";

// Import Matrial Ui Components
import Rating from "@mui/material/Rating";

// Import Hooks
import { useState } from "react";

export default function AddYourReview() {
  const [value, setValue] = useState(3);

  return (
    <div className="add-your-review" style={{ margin: "25px 0 0" }}>
      <h1
        className="title font-[600] text-light-navy"
        style={{ margin: "0 0 15px" }}
      >
        Add Your Review
      </h1>

      <form className="flex flex-col gap-6">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          style={{ fontSize: "17px" }}
        />

        <div className="box flex flex-col gap-[7px]">
          <label className="text-[14px] text-gray">Name*</label>

          <input
            className="bg-white! rounded-one shadow-one"
            type="text"
            placeholder="Name"
            required
            style={{ padding: "6px 8px" }}
          />
        </div>

        <div className="box flex flex-col gap-[7px]">
          <label className="text-[14px] text-gray">Message*</label>

          <textarea
            className="bg-white! rounded-one shadow-one resize-none h-[100px]"
            placeholder="Meassage"
            required
          />
        </div>

        <Button link="" btnTitle="Post Review" />
      </form>
    </div>
  );
}
