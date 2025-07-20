// Import Components
import PathPage from "../../components/path_page/PathPage";
import MainHeading from "../../components/main_heading/MainHeading";
import UserSidebar from "../../components/user_account_components/UserSidebar";
import RightComponent from "../../components/user_account_components/RightComponent";

// Import Icons
import { TfiMenuAlt } from "react-icons/tfi";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

// Import Hooks
import { useState } from "react";

export default function UserAccountPage() {
  const categoriesData = [
    {
      id: 1,
      icon: <TfiMenuAlt className="icon text-[18px]" />,
      category: "Dashboard",
      active: true,
    },

    {
      id: 2,
      icon: <IoCartOutline className="icon text-[20px]" />,
      category: "Orders",
      active: false,
    },

    {
      id: 3,
      icon: <FaRegAddressBook className="icon text-[18px]" />,
      category: "Address",
      ative: false,
    },

    {
      id: 4,
      icon: <FaRegUser className="icon text-[18px]" />,
      category: "Account Details",
      active: false,
    },

    {
      id: 5,
      icon: <FiLogOut className="icon text-[18px]" />,
      category: "Logout",
      active: false,
    },
  ];

  const [categories, setCategories] = useState(categoriesData);

  const [categoryNow, setCategoryNow] = useState(categories[0].category);

  function handleCategoryNow(value, id) {
    const newCategories = [...categories];

    newCategories.map((item) => {
      return item.id === id ? (item.active = true) : (item.active = false);
    });

    setCategories(newCategories);

    setCategoryNow(value);
  }

  return (
    <div className="user-account">
      <PathPage path="Home User-Account" />

      <div className="my-container">
        <MainHeading
          title="User Account"
          subTitle="Lorem Ipsum is printing & typesetting industry's standard dummy text since texts"
        />

        <div className="user-page-content flex flex-col min-md:flex-row items-start gap-[20px]">
          <UserSidebar
            categories={categories}
            handleCategoryNow={handleCategoryNow}
          />

          <RightComponent category={categoryNow} />
        </div>
      </div>
    </div>
  );
}
