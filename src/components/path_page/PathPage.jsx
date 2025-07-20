export default function PathPage({ path }) {
  return (
    <div
      className="path-page bg-gray-light"
      style={{ margin: "-40px 0 40px", padding: "12px 0" }}
    >
      <div className="my-container">
        <p className="path text-[13px] font-[600] text-light-navy text-center">
          {path.replace(" ", " / ")}
        </p>
      </div>
    </div>
  );
}
