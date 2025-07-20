export default function UserSidebar({ categories, handleCategoryNow }) {
  return (
    <div className="user-sidebar w-[100%] min-md:w-[30%] rounded-one overflow-hidden border border-solid border-border-one">
      {categories.map((item) => {
        return (
          <li
            className={`category flex items-center gap-4 ${
              item.active
                ? "bg-light-navy text-white"
                : "bg-white text-light-navy"
            } cursor-pointer text-[15px]`}
            style={{ padding: "15px 20px", transition: "var(--transition)" }}
            key={item.id}
            onClick={() => {
              handleCategoryNow(item.category, item.id);
            }}
          >
            {item.icon} {item.category}
          </li>
        );
      })}
    </div>
  );
}
