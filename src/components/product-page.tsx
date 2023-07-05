import { Images } from "./images";
import type { Product } from "../types";

export const ProductPage = ({ product }: { product: Product }) => {
  return (
    <main className="grid grid-cols-2 grid-rows-auto gap-2">
      <Images images={product.images} />
      <h2 className="text-[28px] p-5">{product.name}</h2>
    </main>
  );
};
