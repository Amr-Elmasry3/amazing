// Import Matrial Ui Components
import Skeleton from "@mui/material/Skeleton";

export default function ProductImagesSkeleton() {
  return (
    <>
      <Skeleton variant="rounded" animation="wave" height={360} width={360} />

      <ul
        className="images flex flex-wrap justify-center gap-2"
        style={{ margin: "15px 0 0" }}
      >
        <Skeleton variant="rounded" animation="wave" height={90} width={90} />

        <Skeleton variant="rounded" animation="wave" height={90} width={90} />

        <Skeleton variant="rounded" animation="wave" height={90} width={90} />
      </ul>
    </>
  );
}
