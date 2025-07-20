export default function WhatWeDo() {
  return (
    <div
      className="what-we-do bg-white"
      style={{ padding: "50px 0", margin: "30px 0 0" }}
    >
      <div
        className="my-container grid gap-8"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        <div className="box flex flex-col gap-4 text-center items-center">
          <img
            src="https://electrolyte1-store.myshopify.com/cdn/shop/files/mission_75x75_crop_center.png?v=1632731305"
            alt="img..."
            style={{ width: "70px" }}
          />

          <h2 className="text-[18px] text-light-navy">Our mission</h2>

          <p
            className="text-[15px] text-dark-gray"
            style={{ lineHeight: "1.4" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry's standard dummy text ever since the 1500s
          </p>
        </div>

        <div className="box flex flex-col gap-4 text-center items-center">
          <img
            src="https://electrolyte1-store.myshopify.com/cdn/shop/files/vision_75x75_crop_center.png?v=1632731319"
            alt="img..."
            style={{ width: "70px" }}
          />

          <h2 className="text-[18px] text-light-navy">Our vision</h2>

          <p
            className="text-[15px] text-dark-gray"
            style={{ lineHeight: "1.4" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry's standard dummy text ever since the 1500s
          </p>
        </div>

        <div className="box flex flex-col gap-4 text-center items-center">
          <img
            src="https://electrolyte1-store.myshopify.com/cdn/shop/files/idea_75x75_crop_center.png?v=1632731323"
            alt="img..."
            style={{ width: "70px" }}
          />

          <h2 className="text-[18px] text-light-navy">Our idea</h2>

          <p
            className="text-[15px] text-dark-gray"
            style={{ lineHeight: "1.4" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry's standard dummy text ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
}
