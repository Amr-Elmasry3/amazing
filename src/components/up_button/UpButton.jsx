// Import Icons
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

// Import Hooks
import { useState, useEffect } from "react";

export default function UpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBtn = () => {
      if (window.scrollY >= 230 && !isVisible) {
        setIsVisible(true);
      } else if (window.scrollY < 230) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleBtn);

    return () => window.removeEventListener("scroll", handleBtn);
  }, [isVisible]);

  return (
    <div
      className={`up-button fixed w-[30px] h-[30px] rounded-[50%] bg-orange bottom-[20px] ${
        isVisible ? "right-[20px]" : "right-[-50px]"
      } flex items-center justify-center border-2 border-solid border-light-navy cursor-pointer`}
      style={{ transition: "var(--transition)" }}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <MdOutlineKeyboardArrowUp className="icon text-[40px] text-light-navy" />
    </div>
  );
}
