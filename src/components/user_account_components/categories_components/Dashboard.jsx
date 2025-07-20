export default function Dashboard({ userInfo }) {
  return (
    <div className="dashboard">
      <h1
        className="head bg-gray-light text-[16px] font-[600] text-light-navy"
        style={{ padding: "15px" }}
      >
        Hello <span className="text-orange capitalize">{userInfo.name}</span>!
      </h1>

      <div className="dashboard-content" style={{ padding: "15px" }}>
        <p
          className="sub-title text-[15px] text-dark-gray"
          style={{ lineHeight: "1.4" }}
        >
          From your account dashboard, you can easiky check & vies your recent
          orders, manage your shopping and billing address and edit your
          password and account details
        </p>
      </div>
    </div>
  );
}
