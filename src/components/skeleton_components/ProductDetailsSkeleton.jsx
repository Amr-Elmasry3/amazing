// Import Matrial Ui Components
import Skeleton from "@mui/material/Skeleton";

export default function ProductDetailsSkeleton() {
  return (
    <>
      <div
        className="top flex flex-col  gap-[8px] border-b border-b-solid border-b-border-one"
        style={{ margin: "0 0 10px", padding: "0 0 10px" }}
      >
        <Skeleton variant="rounded" animation="wave" height={18} />

        <div className="price flex items-center gap-2">
          <Skeleton variant="rounded" animation="wave" height={16} width={60} />

          <Skeleton variant="rounded" animation="wave" height={16} width={60} />
        </div>

        <div className="rating-reviews flex items-center gap-2">
          <Skeleton variant="rounded" animation="wave" height={16} width={85} />

          <Skeleton variant="rounded" animation="wave" height={16} width={70} />
        </div>
      </div>

      <p className="flex items-center gap-[3px] ">
        <Skeleton variant="rounded" animation="wave" height={16} width={50} />

        <Skeleton
          variant="rounded"
          animation="wave"
          height={16}
          className="w-[60%]"
        />
      </p>

      <p className="flex items-center gap-[3px] ">
        <Skeleton variant="rounded" animation="wave" height={16} width={55} />

        <Skeleton
          variant="rounded"
          animation="wave"
          height={16}
          className="w-[65%]"
        />
      </p>

      <p className="flex items-center gap-[3px] ">
        <Skeleton variant="rounded" animation="wave" height={16} width={60} />

        <Skeleton
          variant="rounded"
          animation="wave"
          height={16}
          className="w-[55%]"
        />
      </p>

      <p className="flex items-center gap-[3px] ">
        <Skeleton variant="rounded" animation="wave" height={16} width={50} />

        <Skeleton
          variant="rounded"
          animation="wave"
          height={16}
          className="w-[60%]"
        />
      </p>

      <p className="flex items-center gap-[3px] ">
        <Skeleton variant="rounded" animation="wave" height={16} width={50} />

        <Skeleton
          variant="rounded"
          animation="wave"
          height={16}
          className="w-[65%]"
        />
      </p>

      <Skeleton
        variant="rounded"
        animation="wave"
        height={16}
        className="w-[80%]"
      />

      <div className="flex flex-col gap-[4px]">
        <p className="return-policy flex items-center gap-2 ">
          <Skeleton
            variant="circular"
            animation="wave"
            height={16}
            width={16}
          />

          <Skeleton
            variant="rounded"
            animation="wave"
            height={16}
            className="w-[60%]"
          />
        </p>

        <p className="available-cash flex items-center gap-2">
          <Skeleton
            variant="circular"
            animation="wave"
            height={16}
            width={16}
          />

          <Skeleton
            variant="rounded"
            animation="wave"
            height={16}
            className="w-[70%]"
          />
        </p>
      </div>

      <div className="actions flex gap-2" style={{ margin: "10px 0 0" }}>
        <Skeleton variant="circular" animation="wave" height={28} width={28} />

        <Skeleton variant="circular" animation="wave" height={28} width={28} />

        <Skeleton variant="circular" animation="wave" height={28} width={28} />
      </div>
    </>
  );
}
