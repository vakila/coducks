import imgUrl1 from "./assets/duckies_1.png";
import imgUrl2 from "./assets/duckies_2.jpg";
import imgUrl3 from "./assets/duckies_3.jpg";
import imgUrl4 from "./assets/duckies_4.jpg";
import imgUrl5 from "./assets/duckies_5.jpg";

export const RUBBER_DUCKY = {
  id: "1234",
  name: "Rubber Ducky Debugging Buddy",
  description:
    "Never code alone when you've got this rubber ducky on your desk!",
  features: [
    "Always listens to you",
    "Never judges you",
    "Helps you become the best coder you can be",
    "Floats",
  ],
  images: [
    {
      url: imgUrl1,
      title: "The most loyal & helpful coworker you will ever have",
      alt: "sitting on a laptop keyboard",
    },
    {
      url: imgUrl2,
      title: "No matter how big the bug, ducky is there for you",
      alt: "sitting next to another ducky, both facing the camera",
    },
    {
      url: imgUrl3,
      alt: "sitting next to another ducky, both in profile facing left",
    },
    {
      url: imgUrl4,
      alt: "swimming in different directions on a blue surface",
    },
    {
      url: imgUrl5,
      alt: "sitting in profile facing another ducky sitting facing the camera",
    },
  ],
  reviews: [
    { rating: 5, text: "So impressed!", date: new Date(2023, 6, 13).valueOf() },
    { rating: 5, date: new Date(2023, 4, 10).valueOf() },
    {
      rating: 4,
      text: "Pretty good duck. I just wish it came with sunglasses.",
      date: new Date(2023, 1, 1).valueOf(),
    },
    {
      rating: 1,
      text: "Useless. Did not fix my bug :(",
      date: new Date(2022, 12, 15).valueOf(),
    },
    { rating: 4, date: new Date(2022, 11, 11).valueOf() },
    {
      rating: 3,
      text: "Meh, ok I guess",
      date: new Date(2022, 10, 30).valueOf(),
    },
  ],
  price: 29.95,
  sizes: ["S", "M", "L", "XL"],
};

export const SCROOGE = {
  name: "Scrooge McDuck",
};
