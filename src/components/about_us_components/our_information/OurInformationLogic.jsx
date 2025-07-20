// Import Component Ui
import OurInformationUi from "./OurInformationUi";

// Import Icons
import { BsBriefcase } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { BsShop } from "react-icons/bs";
import { BsTags } from "react-icons/bs";

// Import Hooks
import { useState, useRef, useEffect } from "react";

export default function OurInformationLogic() {
  const [countUpState, setCountUpState] = useState({
    info: [
      {
        id: 1,
        icon: <BsBriefcase className="icon text-[24px] text-orange" />,
        start: 0,
        end: 10,
        mark: "+",
        category: "Years",
      },

      {
        id: 2,
        icon: <GoPeople className="icon text-[24px] text-orange" />,
        start: 0,
        end: 50,
        mark: "+",
        category: "Clients",
      },

      {
        id: 3,
        icon: <BsShop className="icon text-[24px] text-orange" />,
        start: 0,
        end: 100,
        mark: "+",
        category: "Shops",
      },

      {
        id: 4,
        icon: <BsTags className="icon text-[24px] text-orange" />,
        start: 0,
        end: 17,
        mark: "M+",
        category: "Sales",
      },
    ],
    state: false,
  });
  const section = useRef(null);

  useEffect(() => {
    const element = section.current;

    if (!element) return;

    window.addEventListener("scroll", () => {
      try {
        if (
          window.scrollY >= element.offsetTop &&
          countUpState.state === false
        ) {
          setCountUpState({ ...countUpState, state: true });
        }
      } catch {
        console.log(Error);
      }
    });
  }, [countUpState]);

  return (
    <>
      <OurInformationUi countUp={countUpState} myRef={section} />
    </>
  );
}
