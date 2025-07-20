// Import Components
import ProductsDisplayHeader from "./ProductsDisplayHeader";
import ProductsDisplayBody from "./ProductsDisplayBody";
import ProductsDisplayFooter from "./ProductsDisplayFooter";

// Import Icons
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import MenuIcon from "@mui/icons-material/Menu";
import DragHandleIcon from "@mui/icons-material/DragHandle";

// Import Hooks
import { useState } from "react";

export default function ProductsDisplay({
  ourStore,
  handleStyle,
  setDisplayDetails,
}) {
  const [gridStyle, setGridStyle] = useState([
    {
      id: 1,
      icon: (
        <ViewHeadlineIcon
          className="icon rotate-90"
          style={{ transition: "var(--transition)" }}
        />
      ),
      active: true,
      count: 4,
    },
    {
      id: 2,
      icon: (
        <MenuIcon
          className="icon rotate-90"
          style={{ transition: "var(--transition)" }}
        />
      ),
      active: false,
      count: 3,
    },
    {
      id: 3,
      icon: (
        <DragHandleIcon
          className="icon rotate-90"
          style={{ transition: "var(--transition)" }}
        />
      ),
      active: false,
      count: 2,
    },
  ]);

  function handleGridStyle(id) {
    const newGridStyle = [...gridStyle];

    newGridStyle.map((item) => {
      return item.id === id ? (item.active = true) : (item.active = false);
    });

    setGridStyle(newGridStyle);

    handleStyle(newGridStyle[id - 1].count);
  }

  function handlePage(event, page) {
    setDisplayDetails(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="products-display w-[100%] min-md:flex-1 flex flex-col gap-2">
      <ProductsDisplayHeader
        gridStyle={gridStyle}
        handleGridStyle={handleGridStyle}
        ourStore={ourStore}
      />

      <ProductsDisplayBody ourStore={ourStore} />

      <ProductsDisplayFooter ourStore={ourStore} handlePage={handlePage} />
    </div>
  );
}
