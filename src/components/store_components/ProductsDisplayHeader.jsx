export default function ProductsDisplayHeader({
  gridStyle,
  handleGridStyle,
  ourStore,
}) {
  const { displayDetails } = ourStore;

  return (
    <div
      className="products-display-headr bg-white rounded-one border border-solid border-border-one flex items-center justify-between"
      style={{ padding: "10px" }}
    >
      <p className="text-[14px] font-[600] text-light-navy flex items-center gap-[3px]">
        Showing <span className="text-orange">{displayDetails.to}</span> to{" "}
        <span className="text-orange">{displayDetails.from}</span> of{" "}
        <span className="text-orange">{displayDetails.total}</span> products
      </p>

      <div className="style flex gap-2 max-md:hidden">
        {gridStyle.map((item) => {
          return (
            <div
              className={`${
                item.active
                  ? "bg-light-navy text-white"
                  : "bg-section text-light-navy hover:bg-light-navy hover:text-white"
              } rounded-one cursor-pointer`}
              key={item.id}
              style={{ transition: "var(--transition)" }}
              onClick={() => {
                handleGridStyle(item.id);
              }}
            >
              {item.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
}
