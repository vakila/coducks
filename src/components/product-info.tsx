import { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as Accordion from "@radix-ui/react-accordion";
import { DownIcon } from "./icons";
import { RatingAverage, ReviewList } from "./reviews";
import type { CartItem, Product } from "../types";

export const ProductInfo = ({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (item: CartItem) => void;
}) => {
  const [size, setSize] = useState("");
  const item = { product, size: size, quantity: 1 };

  return (
    <div className="flex flex-col gap-5 p-5 pr-10">
      <h2 className="flex justify-between text-3xl font-normal">
        <span className="w-2/3">{product.name}</span>
        <span>${product.price}</span>
      </h2>
      <RatingAverage reviews={product.reviews} />

      <div className="flex justify-between items-end">
        <SizeToggle sizes={product.sizes} onChange={(s) => setSize(s)} />
        <button
          className="bg-black disabled:bg-gray-dark text-white px-5 py-2 rounded font-medium"
          disabled={!size}
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>

      <InfoAccordion product={product} />
    </div>
  );
};

export const SizeToggle = ({
  sizes,
  onChange,
}: {
  sizes: Product["sizes"];
  onChange: (s: string) => void;
}) => {
  return (
    <div className="flex flex-col items-start gap-1 w-40  font-medium">
      <label className="leading-tight">Size</label>
      <ToggleGroup.Root
        type="single"
        aria-label="Product size"
        onValueChange={onChange}
        className="w-full grid grid-flow-col bg-gray-light rounded"
      >
        {sizes.map((size, i) => (
          <ToggleGroup.Item
            className="bg-gray-light data-[state=on]:bg-yellow px-5 py-2 rounded cursor-pointer"
            key={i}
            value={size}
            title={`Size ${size}`}
            aria-label={`Size ${size}`}
          >
            {size}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  );
};

export const InfoAccordion = ({ product }: { product: Product }) => {
  return (
    <Accordion.Root
      type="multiple"
      defaultValue={["description", "features"]}
      className="w-full rounded mt-5"
    >
      <Accordion.Item
        value="description"
        className="mb-2 border-gray-med border-[1px] rounded-lg"
      >
        <Accordion.Trigger className="font-medium flex w-full items-center justify-between bg-gray-light px-4 py-3 rounded-lg [&>img]:data-[state=open]:rotate-180">
          Description <DownIcon />
        </Accordion.Trigger>
        <Accordion.Content className="px-4 py-3">
          {product.description}
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item
        value="features"
        className="mb-2 border-gray-med border-[1px] rounded-lg"
      >
        <Accordion.Trigger className="font-medium flex w-full items-center justify-between bg-gray-light px-4 py-3 rounded-lg [&>img]:data-[state=open]:rotate-180">
          Features <DownIcon />
        </Accordion.Trigger>
        <Accordion.Content className="px-4 py-3">
          <ul className="pl-4">
            {product.features.map((f, i) => (
              <li className="list-disc" key={i}>
                {f}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item
        value="reviews"
        className="mb-2 border-gray-med border-[1px] rounded-lg"
      >
        <Accordion.Trigger className="font-medium flex w-full items-center justify-between bg-gray-light px-4 py-3 rounded-lg [&>img]:data-[state=open]:rotate-180">
          Reviews <DownIcon />
        </Accordion.Trigger>
        <Accordion.Content className="px-4 py-3">
          <div className="w-100 ">
            <ReviewList reviews={product.reviews} />
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
