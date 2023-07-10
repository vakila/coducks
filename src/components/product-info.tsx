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
    <div className="">
      <h2 className="">
        <span className="">{product.name}</span>
        <span>${product.price}</span>
      </h2>
      <RatingAverage reviews={product.reviews} />

      <div className="">
        <p>Size {size}</p>
        <button className="" disabled={!size} onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      </div>

      <p>{product.description}</p>
    </div>
  );
};
