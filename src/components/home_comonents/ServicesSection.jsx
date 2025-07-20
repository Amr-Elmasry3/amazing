// Import Services Data
import { services } from "../../Data";

export default function ServicesSection() {
  return (
    <div className="services-section">
      <div className="flex max-xs:flex-col flex-wrap items-flex-start min-sm:items-center justify-center xl:justify-between gap-8">
        {services.map((item) => {
          return (
            <div className="service-item flex items-center gap-4" key={item.id}>
              <img src={item.img} alt={item.title} style={{ width: "24px" }} />

              <div className="details flex flex-col gap-[4px]">
                <h3 className="title text-[14px] font-[600] text-dark-navy">
                  {item.title}
                </h3>

                <p className="subTitle text-[13px] text-dark-gray">
                  {item.subTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
