// Import Matrial Ui Components
import Skeleton from "@mui/material/Skeleton";

export default function ProductReviewsSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="box flex flex-col gap-4">
          <div className="head flex items-center gap-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              height={45}
              width={45}
            />

            <div className="details flex flex-col gap-2">
              <Skeleton
                variant="rounded"
                animation="wave"
                height={15}
                width={90}
              />

              <Skeleton
                variant="rounded"
                animation="wave"
                height={15}
                width={100}
              />

              <Skeleton
                variant="rounded"
                animation="wave"
                height={15}
                width={75}
              />
            </div>
          </div>

          <Skeleton
            variant="rounded"
            animation="wave"
            height={18}
            className="w-[50%]"
          />
        </div>

        <div className="box flex flex-col gap-4">
          <div className="head flex items-center gap-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              height={45}
              width={45}
            />

            <div className="details flex flex-col gap-2">
              <Skeleton
                variant="rounded"
                animation="wave"
                height={15}
                width={90}
              />

              <Skeleton
                variant="rounded"
                animation="wave"
                height={15}
                width={100}
              />

              <Skeleton
                variant="rounded"
                animation="wave"
                height={15}
                width={75}
              />
            </div>
          </div>

          <Skeleton
            variant="rounded"
            animation="wave"
            height={18}
            className="w-[75%]"
          />
        </div>

        <div className="box flex flex-col gap-4">
          <div className="head flex items-center gap-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              height={45}
              width={45}
            />

            <div className="details flex flex-col gap-2">
              <Skeleton
                variant="rounded"
                animation="wave"
                height={15}
                width={90}
              />

              <Skeleton
                variant="rounded"
                animation="wave"
                height={15}
                width={100}
              />

              <Skeleton
                variant="rounded"
                animation="wave"
                height={15}
                width={75}
              />
            </div>
          </div>

          <Skeleton
            variant="rounded"
            animation="wave"
            height={18}
            className="w-[60%]"
          />
        </div>
      </div>
    </>
  );
}
