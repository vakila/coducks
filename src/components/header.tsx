import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Icon } from "./icon";
import type { Cart, User } from "../types";

export const Header = ({ cart, user }: { cart: Cart; user?: User }) => {
  return (
    <header className="bg-blue p-5 w-100 flex justify-between items-center">
      <h1 className="text-yellow text-4xl font-bold leading-[28px]">
        <span className="text-white">co</span>ducks
      </h1>
      <NavigationMenu.Root className="">
        <NavigationMenu.List className="flex gap-[10px] items-center justify-between text-xl">
          <NavigationMenu.Item key="about" className="">
            <NavigationMenu.Link
              className="flex items-center pr-5 text-white hover:text-yellow"
              href="https://codux.com"
            >
              About us
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item key="cart" className="relative">
            <NavigationMenu.Trigger className="">
              <Icon name="Cart" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="w-max absolute right-0 top-10 py-[10px] px-4 bg-white border-[1px] border-gray-med rounded-lg">
              <div className="absolute -top-2 right-[0.7rem] bg-white rotate-45 w-4 h-4 border-t-[1px] border-l-[1px] rounded-tl-md border-gray-med z-10"></div>
              {cart.length ? (
                <>
                  <ul>
                    {cart.map((item, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-baseline gap-3"
                      >
                        <div className="flex gap-2 justify-left items-baseline">
                          <span className="w-[2ch] text-right">
                            {item.quantity}
                          </span>
                          <span>
                            {item.product.name} ({item.size})
                          </span>
                        </div>
                        <span>${item.product.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <hr className="my-2" />
                  <p className="flex justify-between items-baseline gap-3">
                    {" "}
                    <span>Subtotal</span>{" "}
                    <span>
                      $
                      {cart
                        .map(
                          ({ product, quantity }) => product.price * quantity
                        )
                        .reduce((a, b) => a + b)
                        .toFixed(2)}
                    </span>{" "}
                  </p>
                  <NavigationMenu.Link href="/checkout">
                    <button className="bg-yellow rounded py-2 px-[19px]">
                      Checkout
                    </button>
                  </NavigationMenu.Link>
                </>
              ) : (
                <p>No items</p>
              )}
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item key="account" className="relative">
            <NavigationMenu.Trigger className="">
              <Icon name="User" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="w-max absolute right-0 top-10 py-[10px] px-4 bg-white border-[1px] border-gray-med rounded-lg">
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
                  <button className="bg-yellow rounded py-2 px-[19px]">
                    Log in
                  </button>
                </NavigationMenu.Link>
              )}
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
};
