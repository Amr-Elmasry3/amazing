// Import Matrial Ui Components
import Skeleton from "@mui/material/Skeleton";

export default function HeadingSkeleton() {
  return (
    <div
      className="flex items-center justify-between"
      style={{ margin: "0 0 30px" }}
    >
      <Skeleton variant="rounded" animation="wave" width={150} height={28} />

      <div className="navigation flex items-center gap-2">
        <Skeleton variant="rounded" animation="wave" width={32} height={24} />

        <Skeleton variant="rounded" animation="wave" width={32} height={24} />
      </div>
    </div>
  );
}
