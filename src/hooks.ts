import { useState } from "react";
import type { Cart, CartItem } from "./types";

export function useCart() {
  const [cart, setCart] = useState<Cart>([]);

  function addToCart(newItem: CartItem) {
    const isSameItem = (i: CartItem) =>
      i.product.id === newItem.product.id && i.size === newItem.size;
    const alreadyInCart = cart.filter(isSameItem).length > 0;
    if (alreadyInCart) {
      setCart(
        cart.map((i) =>
          isSameItem(i) ? { ...i, quantity: i.quantity + newItem.quantity } : i
        )
      );
    } else {
      setCart([...cart, newItem]);
    }
  }

  return [cart, addToCart] as [Cart, (item: CartItem) => void];
}
