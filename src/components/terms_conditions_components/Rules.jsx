// Import Data
import { ourRules } from "../../Data";

export default function Rules() {
  return (
    <div
      className="rules bg-white"
      style={{ padding: "50px 0", margin: "80px 0 40px" }}
    >
      <div
        className="my-container grid gap-y-[17px] gap-x-[70px]"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))" }}
      >
        {ourRules.map((item) => {
          return (
            <div
              className="box border-b border-b-solid border-b-border-one"
              key={item.id}
              style={{ padding: "0 0 17px" }}
            >
              <h2
                className="title text-[18px] text-light-navy"
                style={{ margin: "0 0 10px" }}
              >
                {item.title}
              </h2>

              <p
                className="sub-title text-[15px] text-dark-gray"
                style={{ lineHeight: "1.4", paddingLeft: "7px" }}
              >
                {item.subTitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
