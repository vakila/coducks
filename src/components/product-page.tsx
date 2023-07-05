import { Images } from "./images";
import { Icon } from "./icon";
import type { Product, Review } from "../types";

export const ProductPage = ({ product }: { product: Product }) => {
  return (
    <main className="grid grid-cols-2 grid-rows-auto gap-2">
      <Images images={product.images} />

      <div className="flex flex-col gap-5 p-5 pr-10">
        <h2 className="flex justify-between text-3xl font-normal">
          <span className="w-1/2">{product.name}</span>
          <span>${product.price}</span>
        </h2>
        <RatingAverage reviews={product.reviews} />
      </div>
    </main>
  );
};

export const RatingAverage = ({ reviews }: { reviews: Review[] }) => {
  if (!reviews.length)
    return <p className="italic whitespace-nowrap">No reviews yet</p>;
  const avgRating =
    reviews.map((r) => r.rating).reduce((a, b) => a + b) / reviews.length;
  return (
    <div className="flex items-center gap-3">
      <Icon name={`Stars-${Math.round(avgRating)}`} />
      <p className="whitespace-nowrap">
        {avgRating.toFixed(2)} ({reviews.length})
      </p>
    </div>
  );
};
