export default function WhoUs() {
  return (
    <div
      className="who-us flex flex-col gap-[70px]"
      style={{ padding: "50px 0 0" }}
    >
      <div className="my-container">
        <div className="box flex max-md:flex-col-reverse items-center gap-8">
          <div className="w-[100%] min-md:w-[50%]">
            <img
              src="https://electrolyte1-store.myshopify.com/cdn/shop/files/our-company_c6a1cd32-274a-4b12-89ae-fcdb06e17bd5.png?v=1633591432"
              alt="img..."
            />
          </div>

          <div className="info w-[100%] min-md:w-[50%] max-md:text-center">
            <h2
              className="text-[20px] text-light-navy"
              style={{ margin: "0 0 20px" }}
            >
              Our company
            </h2>

            <p
              className="text-[15px] text-dark-gray"
              style={{ lineHeight: "1.4" }}
            >
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur
              adipisicing elit.
            </p>
          </div>
        </div>

        <div className="box flex max-md:flex-col items-center gap-8">
          <div className="info w-[100%] min-md:w-[50%] max-md:text-center">
            <h2
              className="text-[20px] text-light-navy"
              style={{ margin: "0 0 20px" }}
            >
              Team work
            </h2>

            <p
              className="text-[15px] text-dark-gray"
              style={{ lineHeight: "1.4" }}
            >
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur
              adipisicing elit.
            </p>
          </div>

          <div className="w-[100%] min-md:w-[50%]">
            <img
              src="https://electrolyte1-store.myshopify.com/cdn/shop/files/Team-work.png?v=1633595865"
              alt="img..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
