// Import Components
import MainHeading from "../main_heading/MainHeading";

// Import Data
import { popularMethods } from "../../Data";

export default function PopularMethods() {
  return (
    <div className="popular-methods" style={{ padding: "40px 0 0" }}>
      <div className="my-container">
        <MainHeading
          title="Popular methods"
          subTitle="Lorem Ipsum is printing & typesetting industry's standard dummy text since texts"
        />

        <div
          className="content grid max-xl:gap-2"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            padding: "40px 0 0",
          }}
        >
          {popularMethods.map((item) => {
            return (
              <div
                className={`box ${
                  item.id % 2 === 0 ? "max-xl:bg-white" : "bg-white"
                } text-center flex flex-col items-center gap-2 rounded-one`}
                key={item.id}
                style={{ padding: "20px" }}
              >
                <img
                  src={item.img}
                  alt={`img${item.id}...`}
                  style={{ width: "40px", margin: "0 0 7px" }}
                />

                <h2 className="title font-[600] text-light-navy">
                  {item.title}
                </h2>

                <p
                  className="text-[15px] text-dark-gray"
                  style={{ lineHeight: "1.4" }}
                >
                  {item.subTitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
