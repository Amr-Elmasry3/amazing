// Import Images
import brand1 from "../../assets/images/brand-01.png";
import brand2 from "../../assets/images/brand-02.png";
import brand3 from "../../assets/images/brand-03.png";
import brand4 from "../../assets/images/brand-04.png";
import brand5 from "../../assets/images/brand-05.png";
import brand6 from "../../assets/images/brand-06.png";
import brand7 from "../../assets/images/brand-07.png";
import brand8 from "../../assets/images/brand-08.png";

// Import Marguee Component
import Marquee from "react-fast-marquee";

export default function BrandsSection() {
  return (
    <div className="brands-section">
      <div className="bg-white shadow-one rounded-one">
        <Marquee speed={40} play={true}>
          <img
            src={brand1}
            alt="brand1..."
            style={{ width: "120px", height: "100px" }}
          />

          <img
            src={brand2}
            alt="brand2..."
            style={{ width: "120px", height: "100px" }}
          />

          <img
            src={brand3}
            alt="brand3..."
            style={{ width: "120px", height: "100px" }}
          />

          <img
            src={brand4}
            alt="brand4..."
            style={{ width: "120px", height: "100px" }}
          />

          <img
            src={brand5}
            alt="brand5..."
            style={{ width: "120px", height: "100px" }}
          />

          <img
            src={brand6}
            alt="brand6..."
            style={{ width: "120px", height: "100px" }}
          />

          <img
            src={brand7}
            alt="brand7..."
            style={{ width: "120px", height: "100px" }}
          />

          <img
            src={brand8}
            alt="brand8..."
            style={{ width: "120px", height: "100px" }}
          />
        </Marquee>
      </div>
    </div>
  );
}
