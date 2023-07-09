import type { Review } from "../types";

export const RatingAverage = ({ reviews }: { reviews: Review[] }) => {
  if (!reviews.length)
    return <p className="italic whitespace-nowrap">No reviews yet</p>;
  const avgRating =
    reviews.map((r) => r.rating).reduce((a, b) => a + b) / reviews.length;
  return (
    <div className="flex items-center gap-3">
      <Stars rating={Math.round(avgRating)} />
      <p className="whitespace-nowrap">
        {avgRating.toFixed(2)} ({reviews.length})
      </p>
    </div>
  );
};

export const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  return reviews.map((r, i) => (
    <div
      className="w-full border-b-2 px-2 py-4 last-of-type:border-b-0"
      key={i}
    >
      <div className="flex justify-between">
        <Stars rating={r.rating} />
        <span className="text-sm text-gray-dark">
          {new Date(r.date).toDateString()}
        </span>
      </div>
      <div>{r.text ? <p className="pt-3">{r.text}</p> : null}</div>
    </div>
  ));
};

export const Stars = ({ rating }: { rating: number }) => {
  return (
    <svg
      width="80"
      height="16"
      viewBox="0 0 80 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Stars">
        <path
          id="Star 1"
          d="M8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0Z"
          fill={1 <= rating ? "#FFC328" : "#D9D9D9"}
        />
        <path
          id="Star 2"
          d="M24 0L26.3511 4.76393L31.6085 5.52786L27.8042 9.23607L28.7023 14.4721L24 12L19.2977 14.4721L20.1958 9.23607L16.3915 5.52786L21.6489 4.76393L24 0Z"
          fill={2 <= rating ? "#FFC328" : "#D9D9D9"}
        />
        <path
          id="Star 3"
          d="M40 0L42.3511 4.76393L47.6085 5.52786L43.8042 9.23607L44.7023 14.4721L40 12L35.2977 14.4721L36.1958 9.23607L32.3915 5.52786L37.6489 4.76393L40 0Z"
          fill={3 <= rating ? "#FFC328" : "#D9D9D9"}
        />
        <path
          id="Star 4"
          d="M56 0L58.3511 4.76393L63.6085 5.52786L59.8042 9.23607L60.7023 14.4721L56 12L51.2977 14.4721L52.1958 9.23607L48.3915 5.52786L53.6489 4.76393L56 0Z"
          fill={4 <= rating ? "#FFC328" : "#D9D9D9"}
        />
        <path
          id="Star 5"
          d="M72 0L74.3511 4.76393L79.6085 5.52786L75.8042 9.23607L76.7023 14.4721L72 12L67.2977 14.4721L68.1958 9.23607L64.3915 5.52786L69.6489 4.76393L72 0Z"
          fill={5 <= rating ? "#FFC328" : "#D9D9D9"}
        />
      </g>
    </svg>
  );
};
