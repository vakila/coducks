import type { Cart } from "../types";

export const DownIcon = () => (
  <svg
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector 1"
      d="M1 1L7.58579 7.58579C8.36684 8.36684 9.63317 8.36684 10.4142 7.58579L17 1"
      stroke="black"
      strokeWidth="2"
    />
  </svg>
);

export const LeftIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Arrow">
      <circle
        id="Ellipse 3"
        opacity="0.7"
        cx="16"
        cy="16"
        r="16"
        transform="matrix(-1 0 0 1 32 0)"
        fill="white"
      />
      <path
        id="Vector 1"
        d="M19 24L12.4142 17.4142C11.6332 16.6332 11.6332 15.3668 12.4142 14.5858L19 8"
        stroke="black"
        strokeWidth="2"
      />
    </g>
  </svg>
);

export const RightIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Arrow">
      <circle
        id="Ellipse 3"
        opacity="0.7"
        cx="16"
        cy="16"
        r="16"
        fill="white"
      />
      <path
        id="Vector 1"
        d="M13 24L19.5858 17.4142C20.3668 16.6332 20.3668 15.3668 19.5858 14.5858L13 8"
        stroke="black"
        strokeWidth="2"
      />
    </g>
  </svg>
);

export const UpIcon = () => (
  <svg
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector 1"
      d="M1 9L7.58579 2.41421C8.36684 1.63316 9.63317 1.63316 10.4142 2.41421L17 9"
      stroke="black"
      strokeWidth="2"
    />
  </svg>
);

export const UserIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="User">
        <circle id="Ellipse 1" cx="20" cy="20" r="20" fill="white" />
        <g id="User Icon">
          <circle
            id="Ellipse 287"
            cx="20"
            cy="14"
            r="7"
            stroke="#495CEF"
            strokeWidth="2"
          />
          <path
            id="Rectangle 15"
            d="M9 34L9 32C9 25.9249 13.9249 21 20 21V21C26.0751 21 31 25.9249 31 32V34"
            stroke="#495CEF"
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  );
};

export const CartIcon = ({ cart }: { cart: Cart }) => {
  return (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Cart">
          <circle id="Ellipse 2" cx="20" cy="20" r="20" fill="white" />
          <g id="Cart Icon">
            <g id="Rectangle 13">
              <mask id="path-2-inside-1_1506_161889" fill="white">
                <path d="M14 10C14 7.79086 15.7909 6 18 6H22C24.2091 6 26 7.79086 26 10V17H14V10Z" />
              </mask>
              <path
                d="M12 10C12 6.68629 14.6863 4 18 4H22C25.3137 4 28 6.68629 28 10H24C24 8.89543 23.1046 8 22 8H18C16.8954 8 16 8.89543 16 10H12ZM26 17H14H26ZM12 17V10C12 6.68629 14.6863 4 18 4V8C16.8954 8 16 8.89543 16 10V17H12ZM22 4C25.3137 4 28 6.68629 28 10V17H24V10C24 8.89543 23.1046 8 22 8V4Z"
                fill="#495CEF"
                mask="url(#path-2-inside-1_1506_161889)"
              />
            </g>
            <path
              id="Rectangle 14"
              d="M10.9082 14.9524C10.9336 14.4192 11.3732 14 11.907 14H28.093C28.6268 14 29.0665 14.4192 29.0918 14.9524L29.8016 29.8573C29.8831 31.5682 28.5179 33 26.805 33H13.195C11.4821 33 10.1169 31.5682 10.1984 29.8573L10.9082 14.9524Z"
              stroke="#495CEF"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
      {cart.length ? (
        <div className="bg-yellow p-2 w-[18px] h-[18px] flex items-center justify-center font-bold rounded-full absolute -top-[5px] -right-[5px] text-xs">
          {cart.map((i) => i.quantity).reduce((a, b) => a + b)}
        </div>
      ) : null}
    </>
  );
};
