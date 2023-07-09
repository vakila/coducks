import { useState } from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { LeftIcon, RightIcon } from "./icons";
import type { Image } from "../types";

export const Images = ({ images }: { images: Image[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];
  const findNextIndex = () =>
    activeIndex + 1 >= images.length ? 0 : activeIndex + 1;
  const findPrevIndex = () =>
    activeIndex - 1 < 0 ? images.length - 1 : activeIndex - 1;
  return (
    <div className="relative w-full">
      <AspectRatio.Root className="relative" key="active" ratio={1 / 1}>
        <button
          className=" absolute right-0 top-1/2 z-10 mr-2 h-8 w-8"
          onClick={() => setActiveIndex(findNextIndex())}
        >
          <RightIcon />
        </button>
        <button
          className=" absolute left-0 top-1/2 z-10 ml-2 h-8 w-8"
          onClick={() => setActiveIndex(findPrevIndex())}
        >
          <LeftIcon />
        </button>

        <img
          className="h-full bg-gray-med object-cover"
          src={activeImage.url}
          alt={activeImage.alt || activeImage.title}
        />
      </AspectRatio.Root>
      <div className="my-[10px] mx-5 grid auto-rows-auto grid-cols-5 gap-0">
        {images.map(({ url, title, alt }, i) => (
          <AspectRatio.Root
            className={
              "h-full border-4 rounded p-1 " +
              (i === activeIndex ? "border-yellow" : "border-white")
            }
            key={i}
            ratio={1 / 1}
          >
            <img
              role="button"
              onClick={() => setActiveIndex(i)}
              className="h-full bg-gray-med object-cover"
              alt={
                alt
                  ? `Photo of product ${alt}`
                  : `Product photo titled ${title}`
              }
              src={url}
            />
          </AspectRatio.Root>
        ))}
      </div>
    </div>
  );
};
