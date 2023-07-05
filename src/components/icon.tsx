import { ReactComponent as OneStar } from "../assets/icons/Stars-1.svg";
import { ReactComponent as TwoStar } from "../assets/icons/Stars-2.svg";
import { ReactComponent as ThreeStar } from "../assets/icons/Stars-3.svg";
import { ReactComponent as FourStar } from "../assets/icons/Stars-4.svg";
import { ReactComponent as FiveStar } from "../assets/icons/Stars-5.svg";

export const Icon = ({ amount }: { amount: number }) => {
  switch (amount) {
    case 1:
      return <OneStar />;
    case 2:
      return <TwoStar />;
    case 3:
      return <ThreeStar />;
    case 4:
      return <FourStar />;
    case 5:
      return <FiveStar />;
    default:
      throw new Error("Invalid amount of stars");
  }
};
