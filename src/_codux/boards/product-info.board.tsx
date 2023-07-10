import { createBoard } from "@wixc3/react-board";
import { ProductInfo } from "../../components/product-info";
import { RUBBER_DUCKY } from "../../data";

export default createBoard({
  name: "Product info",
  Board: () => (
    <div>
      <ProductInfo product={RUBBER_DUCKY} addToCart={console.log} />
    </div>
  ),
});
