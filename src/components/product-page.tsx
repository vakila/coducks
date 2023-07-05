import { Images } from "./images";
import type { Product } from "../types";

export const ProductPage = ({ product }: { product: Product }) => {
  return (
    <main className="grid grid-cols-2 grid-rows-auto gap-2">
      <Images images={product.images} />

      <div className="flex flex-col gap-5 p-5 pr-10">
        <h2 className="flex justify-between text-3xl font-normal">
          <span className="w-1/2">{product.name}</span>
          <span>${product.price}</span>
        </h2>
      </div>
    </main>
  );
};
