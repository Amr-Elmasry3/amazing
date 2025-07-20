// Import Icons
import { BsShieldCheck } from "react-icons/bs";
import { BsWallet2 } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { BsPersonCheck } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";

export default function OurLiability() {
  const liabilities = [
    {
      id: 1,
      icon: <BsShieldCheck className="icon text-[28px] text-light-navy" />,
      title: "Secure payment",
    },
    {
      id: 2,
      icon: <BsWallet2 className="icon text-[28px] text-light-navy" />,
      title: "Money back",
    },
    {
      id: 3,
      icon: <BsEyeSlash className="icon text-[28px] text-light-navy" />,
      title: "Hidden cost",
    },
    {
      id: 4,
      icon: <BsPersonCheck className="icon text-[28px] text-light-navy" />,
      title: "Customer support",
    },
    {
      id: 5,
      icon: <BsGraphUpArrow className="icon text-[28px] text-light-navy" />,
      title: "Market purpose",
    },
  ];

  return (
    <div
      className="our-liability bg-white"
      style={{ padding: "50px 0", margin: "80px 0 40px" }}
    >
      <div className="my-container flex max-md:flex-col items-center gap-8">
        <ul className="list w-[100%] min-md:w-[50%]">
          {liabilities.map((item) => {
            return (
              <li
                className={`flex items-center gap-4 ${
                  item.id % 2 === 0 ? "bg-transparent" : "bg-section"
                } rounded-one text-[18px] text-light-navy`}
                key={item.id}
                style={{ padding: "15px" }}
              >
                {item.icon} {item.title}
              </li>
            );
          })}
        </ul>

        <div className="box w-[100%] min-md:w-[50%]">
          <h2
            className="title text-[20px] text-light-navy border-b border-b-solid border-b-border-one"
            style={{ margin: "0 0 30px", padding: "0 0 20px" }}
          >
            Liability
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
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}
