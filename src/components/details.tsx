import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import type { Cart, User } from "../types";

export function CartDetails({ cart }: { cart: Cart }) {
  return (
    <>
      <div className="absolute -top-2 right-[0.7rem] bg-white rotate-45 w-4 h-4 border-t-[1px] border-l-[1px] rounded-tl-md border-gray-med z-10"></div>
      {cart.length ? (
        <>
          <ul className="px-4 py-2">
            {cart.map((item, i) => (
              <li key={i} className="flex justify-between items-baseline gap-3">
                <div className="flex gap-2 justify-left items-baseline">
                  <span className="w-[2ch] text-left">{item.quantity}</span>
                  <span>
                    {item.product.name} ({item.size})
                  </span>
                </div>
                <span>${item.product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <hr className="my-2 w-full" />
          <p className="flex justify-between items-baseline gap-3 px-4 py-2">
            <span>Subtotal</span>
            <span>
              $
              {cart
                .map(({ product, quantity }) => product.price * quantity)
                .reduce((a, b) => a + b)
                .toFixed(2)}
            </span>
          </p>
          <NavigationMenu.Link
            href="/checkout"
            className="px-4 flex w-full justify-end"
          >
            <button className="bg-yellow rounded py-2 px-4">Checkout</button>
          </NavigationMenu.Link>
        </>
      ) : (
        <p className="px-4 py-2">No items</p>
      )}
    </>
  );
}

export function UserDetails({ user }: { user?: User }) {
  return (
    <>
      <div className="absolute -top-2 right-[0.7rem] bg-white rotate-45 w-4 h-4 border-t-[1px] border-l-[1px] rounded-tl-md border-gray-med z-1"></div>
      {user ? (
        <>
          <p className="pb-3">{user.name}</p>
          <NavigationMenu.Link href="/logout">
            <button className="bg-yellow rounded py-2 px-[19px]">
              Log out
            </button>
          </NavigationMenu.Link>
        </>
      ) : (
        <NavigationMenu.Link href="/login">
          <button className="bg-yellow rounded py-2 px-[19px]">Log in</button>
        </NavigationMenu.Link>
      )}
    </>
  );
}
