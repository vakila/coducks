import { Header } from "./components/header";
import { ProductPage } from "./components/product-page";
import { useCart } from "./hooks";
import type { Product, User } from "./types";

function App({ product, user }: { product: Product; user: User }) {
  const [cart, addToCart] = useCart();

  return (
    <div>
      <Header cart={cart} user={user} />

      <ProductPage product={product} addToCart={addToCart} />

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
