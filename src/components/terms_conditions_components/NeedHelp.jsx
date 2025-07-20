// Import Components
import MainHeading from "../main_heading/MainHeading";
import { Link } from "react-router-dom";

// Import Icons
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsGeo } from "react-icons/bs";

export default function NeedHelp() {
  const needHelp = [
    {
      id: 1,
      icon: <BsEnvelope className="icon text-[35px] text-orange" />,
      img: "https://electrolyte1-store.myshopify.com/cdn/shop/files/mail.jpg?v=1633945683",
      title: "Chat with us",
      subTitle: "Send us an email",
    },

    {
      id: 2,
      icon: <BsTelephone className="icon text-[35px] text-orange" />,
      img: "https://electrolyte1-store.myshopify.com/cdn/shop/files/call.jpg?v=1633945682",
      title: "Speak with us",
      subTitle: "Give us a call toady",
    },

    {
      id: 3,
      icon: <BsGeo className="icon text-[35px] text-orange" />,
      img: "https://electrolyte1-store.myshopify.com/cdn/shop/files/lication.jpg?v=1633945683",
      title: "Locate a store",
      subTitle: "Describe your project",
    },
  ];

  return (
    <div className="need-help" style={{ padding: "40px 0 0" }}>
      <div className="my-container">
        <MainHeading
          title="Need help"
          subTitle="Lorem Ipsum is printing & typesetting industry's standard dummy text since text"
        />

        <div
          className="need-help-content grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            padding: "40px 0 0",
          }}
        >
          {needHelp.map((item) => {
            return (
              <Link
                to=""
                className={`box flex flex-col ${
                  item.id === 2 ? "min-xl:flex-col-reverse" : ""
                } bg-white rounded-one shadow-one overflow-hidden`}
                key={item.id}
              >
                <img src={item.img} alt={`img${item.id}...`} />

                <div
                  className="cover flex flex-col items-center gap-2 text-center"
                  style={{ padding: "20px" }}
                >
                  <div
                    className="icon-box w-[75px] h-[75px] rounded-[50%] shadow-one flex items-center justify-center"
                    style={{ margin: "0 0 10px" }}
                  >
                    {item.icon}
                  </div>

                  <h2 className="text-[18px] text-light-navy">{item.title}</h2>

                  <p className="text-[15px] text-dark-gray">{item.subTitle}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
