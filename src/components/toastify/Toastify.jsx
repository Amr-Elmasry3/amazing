// Import Toast Components
import { ToastContainer } from "react-toastify";

export default function Toastify() {
  return (
    <div className="my-toastify" style={{ position: "fixed", zIndex: "20" }}>
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </div>
  );
}
