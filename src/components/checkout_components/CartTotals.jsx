export default function CartTotals({ cartInfo }) {
  const samePadding = "10px";

  return (
    <div
      className="cart-totals bg-white col-span-4 min-lg:col-span-2 border border-solid border-border-one rounded-one"
      style={{ padding: samePadding }}
    >
      <h1 className="font-[600] text-light-navy">Cart Totals</h1>

      <div
        className="cart-totals-content border border-solid border-border-one rounded-one"
        style={{ margin: "15px 0 0" }}
      >
        <div className="cart-totals-head flex items-center justify-between">
          <span
            className="flex-1 text-center text-[14px] font-[600] text-gray border-r boder-r-solid border-r-border-one"
            style={{ padding: samePadding }}
          >
            Products
          </span>

          <span
            className="text-[14px]  font-[600] text-gray text-center min-w-[90px]"
            style={{ padding: samePadding }}
          >
            Total
          </span>
        </div>

        <div className="cart-totals-body h-[270px] overflow-y-scroll border-y border-y-solid border-y-border-one">
          {cartInfo.products.map((item, index) => {
            return (
              <div
                className={`flex  ${
                  index ? "border-t border-t-solid border-t-border-one" : ""
                }`}
                key={item.id}
              >
                <div
                  className="product-img w-fit bg-section rounded-one flex justify-center"
                  style={{ margin: samePadding }}
                >
                  <img
                    src={item.images[0]}
                    alt={`img${item.id}...`}
                    style={{ width: "69px" }}
                  />
                </div>

                <div
                  className="info flex-1 text-center flex flex-col justify-center gap-2 border-x border-x-solid border-x-border-one"
                  style={{ padding: samePadding }}
                >
                  <span className="title text-[14px] text-light-navy line-clamp-1">
                    {item.title}
                  </span>

                  <span className="count text-[13px] font-[600] text-orange">
                    x{item.count}
                  </span>
                </div>

                <span
                  className="total text-[14px] text-gray min-w-[90px] flex items-center justify-center"
                  style={{ padding: samePadding }}
                >
                  ${item.count * item.price}
                </span>
              </div>
            );
          })}
        </div>

        <div className="cart-totals-footer">
          <div className="flex items-center border-b border-b-solid border-b-border-one">
            <span
              className="key min-w-[90px] text-center border-r border-r-solid border-r-border-one text-[15px] font-[600] text-gray"
              style={{ padding: samePadding }}
            >
              SubTotal
            </span>

            <span
              className="value flex-1 text-center text-[15px] font-[600] text-orange"
              style={{ padding: samePadding }}
            >
              ${cartInfo.subTotal}
            </span>
          </div>

          <div className="flex items-center border-b border-b-solid border-b-border-one">
            <span
              className="key min-w-[90px] text-center border-r border-r-solid border-r-border-one text-[15px] font-[600] text-gray"
              style={{ padding: samePadding }}
            >
              Shipping
            </span>

            <span
              className="value flex-1 text-center text-[15px] font-[600] text-orange"
              style={{ padding: samePadding }}
            >
              $0
            </span>
          </div>

          <div className="flex items-center border-b border-b-solid border-b-border-one">
            <span
              className="key min-w-[90px] text-center border-r border-r-solid border-r-border-one text-[15px] font-[600] text-gray"
              style={{ padding: samePadding }}
            >
              Total
            </span>

            <span
              className="value flex-1 text-center text-[15px] font-[600] text-orange"
              style={{ padding: samePadding }}
            >
              ${cartInfo.subTotal - 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
