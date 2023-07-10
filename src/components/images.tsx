import type { Image } from "../types";

export const Images = ({ images }: { images: Image[] }) => {
  const activeIndex = 0;
  const activeImage = images[activeIndex];
  const findNextIndex = () =>
    activeIndex + 1 >= images.length ? 0 : activeIndex + 1;
  const findPrevIndex = () =>
    activeIndex - 1 < 0 ? images.length - 1 : activeIndex - 1;

  return (
    <div className="relative w-full">
      <img
        className="h-full bg-gray-med object-cover"
        src={activeImage.url}
        alt={activeImage.alt}
      />
    </div>
  );
};
