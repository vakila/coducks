import { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Images } from "./images";
import { Icon } from "./icon";
import type { CartItem, Product, Review } from "../types";

export const ProductPage = ({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (item: CartItem) => void;
}) => {
  const [size, setSize] = useState("");
  const item = { product, size: size, quantity: 1 };

  return (
    <main className="grid grid-cols-2 grid-rows-auto gap-2">
      <Images images={product.images} />

      <div className="flex flex-col gap-5 p-5 pr-10">
        <h2 className="flex justify-between text-3xl font-normal">
          <span className="w-1/2">{product.name}</span>
          <span>${product.price}</span>
        </h2>
        <RatingAverage reviews={product.reviews} />

        <div className="flex justify-between items-end">
          <SizeToggle sizes={product.sizes} onChange={(s) => setSize(s)} />
          <button
            className="bg-black disabled:bg-gray-dark text-white px-5 py-2 rounded font-medium"
            disabled={!size}
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
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

export const SizeToggle = ({
  sizes,
  onChange,
}: {
  sizes: Product["sizes"];
  onChange: (s: string) => void;
}) => {
  return (
    <div className="flex flex-col items-start gap-1 w-40  font-medium">
      <label className="leading-tight">Size</label>
      <ToggleGroup.Root
        type="single"
        aria-label="Product size"
        onValueChange={onChange}
        className="w-full grid grid-flow-col bg-gray-light rounded"
      >
        {sizes.map((size, i) => (
          <ToggleGroup.Item
            className="bg-gray-light data-[state=on]:bg-yellow px-5 py-2 rounded"
            key={i}
            value={size}
            title={`Size ${size}`}
            aria-label={`Size ${size}`}
          >
            {size}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  );
};
