import React from "react";

export default function MainHeading({ title, subTitle }) {
  return (
    <div className="main-heading">
      <div
        className="flex flex-col items-center gap-2 text-center"
        style={{ margin: "0 0 30px" }}
      >
        <h1 className="title text-[24px] text-light-navy">{title}</h1>

        <h2
          className="subTitle text-[14px] text-dark-gray max-w-[330px]"
          style={{ lineHeight: "1.4" }}
        >
          {subTitle}
        </h2>
      </div>
    </div>
  );
}
