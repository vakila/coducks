import { Header } from "./components/header";
import { Images } from "./components/images";
import { ProductInfo } from "./components/product-info";
import { useCart } from "./hooks";
import type { Product, User } from "./types";

function App({ product, user }: { product: Product; user: User }) {
  const [cart, addToCart] = useCart();

  return (
    <div>
      <Header cart={cart} user={user} />

      <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-2">
        <Images images={product.images} />
        <ProductInfo product={product} addToCart={addToCart} />
      </main>

      <footer className="text-center text-sm p-5">
        Made with ♥ in&nbsp;
        <a href="https://codux.com">Codux</a>
        &nbsp;with&nbsp;
        <a href="https://radix-ui.com">RadixUI</a>
        &nbsp;and&nbsp;
        <a href="https://tailwindcss.com">TailwindCSS</a>
      </footer>
    </div>
  );
}

export default App;
