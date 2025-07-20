// Import Components
import MainHeading from "../main_heading/MainHeading";
import { Link } from "react-router-dom";

// Import Icons
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsGeo } from "react-icons/bs";

export default function ContactInfo() {
  const contactInfo = [
    {
      id: 1,
      icon: <BsGeo className="icon text-[35px] text-orange" />,
      info: "7882, Reliance GIDCChowk bazzar, New York",
    },

    {
      id: 2,
      icon: <BsTelephone className="icon text-[35px] text-orange" />,
      info: "(+33) 1 23 45 67 89",
    },

    {
      id: 3,
      icon: <BsEnvelope className="icon text-[35px] text-orange" />,
      info: "support@spacingtech.com",
    },
  ];

  return (
    <div className="contact-info">
      <MainHeading
        title="Get in touch"
        subTitle="If you’ve got great products your making or looking to work with us then drop us a line"
      />

      <div
        className="info-content grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          padding: "40px 0 0",
        }}
      >
        {contactInfo.map((item) => {
          return (
            <Link
              to=""
              className="box bg-white rounded-one shadow-one flex flex-col items-center gap-6 text-center"
              key={item.id}
              style={{ padding: "20px" }}
            >
              <div className="icon-box w-[75px] h-[75px] rounded-[50%] shadow-one flex items-center justify-center">
                {item.icon}
              </div>

              <p className="text-[15px] text-dark-gray">{item.info}</p>
            </Link>
          );
        })}
      </div>

      <div
        className="map rounded-one overflow-hidden"
        style={{ margin: "60px 0 0" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12716.33596923785!2d-7.95394164741249!3d37.17447485185171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab0215a634b73%3A0x802f2de4c2c7f396!2zQW1lbmRvZWlyYSwg2YTZiNmE2YrYjCDYp9mE2KjYsdiq2LrYp9mE!5e0!3m2!1sar!2seg!4v1752045817759!5m2!1sar!2seg"
          className="w-[100%] h-[300px] min-md:h-[450px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
