import CountUp from "react-countup";

export default function OurInformationUi({ countUp, myRef }) {
  return (
    <div
      className="our-information"
      ref={myRef}
      style={{ margin: "70px 0 20px" }}
    >
      <div
        className="my-container grid gap-y-8 gap-x-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {countUp.info.map((item) => {
          return (
            <div
              className="box relative z-0 bg-white shadow-one rounded-one"
              key={item.id}
              style={{ padding: "15px" }}
            >
              <span
                className={`shape absolute z-[-1] w-[100%] ${
                  countUp.state ? "h-[50%]" : "h-[0]"
                } left-0 bottom-0 bg-orange`}
                style={{ transition: "all 1s ease" }}
              ></span>

              <div className="icon absolute w-[40px] h-[40px] bg-white rounded-one shadow-one flex items-center justify-center bottom-0 left-[50%] translate-x-[-50%] translate-y-[30%]">
                {item.icon}
              </div>

              <div
                className="info bg-white shadow-one rounded-one flex flex-col items-center gap-4 text-center"
                style={{ padding: "30px 20px" }}
              >
                <div
                  className="count-box border-2 border-solid border-orange w-fit flex items-center gap-[3px]"
                  style={{ padding: "5px 10px", lineHeight: "1" }}
                >
                  <CountUp
                    className="count text-[30px] font-[600] text-orange"
                    start={item.start}
                    end={countUp.state ? item.end : 0}
                    duration={4}
                  />
                  <span className="mark text-[28px] font-[600] text-orange">
                    {item.mark}
                  </span>
                </div>

                <h3 className="text-[18px] font-[600] text-dark-gray">
                  {item.category}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
