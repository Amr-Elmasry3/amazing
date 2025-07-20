// Import Matrial Ui Components
import Skeleton from "@mui/material/Skeleton";

export default function ProductCardSkeleton() {
  return (
    <div style={{ padding: "10px" }}>
      <Skeleton variant="rounded" animation="wave" height={160} />
      <Skeleton
        variant="rounded"
        animation="wave"
        width={60}
        height={12}
        style={{ margin: "30px 0 0" }}
      />
      <Skeleton
        variant="rounded"
        animation="wave"
        width={150}
        height={16}
        style={{ margin: "15px 0" }}
      />
      <Skeleton variant="rounded" animation="wave" width={130} height={12} />
      <div className="flex gap-2" style={{ margin: "15px 0 0" }}>
        <Skeleton variant="rounded" animation="wave" width={40} height={15} />
        <Skeleton variant="rounded" animation="wave" width={40} height={15} />
      </div>
    </div>
  );
}
