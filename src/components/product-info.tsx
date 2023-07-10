import { RatingAverage } from "./reviews";
import type { CartItem, Product } from "../types";

export const ProductInfo = ({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (item: CartItem) => void;
}) => {
  const size = product.sizes[0];
  const item = { product, size: size, quantity: 1 };

  return (
    <div className="flex flex-col gap-5 p-5">
      <h2 className="flex justify-between text-3xl font-normal">
        <span className="w-2/3">{product.name}</span>
        <span>${product.price}</span>
      </h2>
      <RatingAverage reviews={product.reviews} />

      <div className="flex justify-between items-end">
        <p>Size {size}</p>
        <button
          className="bg-black disabled:bg-gray-dark text-white px-5 py-2 rounded font-medium"
          disabled={!size}
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>

      <p>{product.description}</p>
    </div>
  );
};
