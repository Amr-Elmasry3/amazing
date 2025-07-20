export default function Restriction() {
  return (
    <div className="restriction" style={{ padding: "40px 0 0" }}>
      <div className="my-container flex max-md:flex-col items-center gap-8">
        <div className="picture w-[100%] min-md:w-[50%] rounded-one overflow-hidden">
          <img
            src="https://electrolyte1-store.myshopify.com/cdn/shop/files/Terms-_-conditions.jpg?v=1633945217"
            alt="img..."
          />
        </div>

        <div className="box w-[100%] min-md:w-[50%]">
          <h2
            className="title text-[20px] text-light-navy border-b border-b-solid border-b-border-one"
            style={{ margin: "0 0 30px", padding: "0 0 20px" }}
          >
            Restriction
          </h2>

          <ul className="flex flex-col gap-4">
            <p
              className="text-[15px] text-dark-gray"
              style={{ lineHeight: "1.4" }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>

            <p
              className="text-[15px] text-dark-gray"
              style={{ lineHeight: "1.4" }}
            >
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>

            <p
              className="text-[15px] text-dark-gray"
              style={{ lineHeight: "1.4" }}
            >
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain, but because
              occasionally circumstances occur in which toil and pain can
              procure him some great pleasure.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}
