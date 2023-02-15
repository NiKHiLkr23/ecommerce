import React from "react";
import Product from "../Product";

function Bakery({ products }) {
  return (
    <>
      <div className="flex p-2 space-x-2 items-center">
        <p className="text-lg font-bold">Bakery </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 20"
          strokeWidth={3}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>

        <button className="md:hidden flex text-cyan-700 font-sans font-semibold text-sm grow justify-end ">
          View all
        </button>
      </div>
      <div className="product">
        {products.map(({ id, title, price, stock, thumbnail }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            quantity={stock}
            image={thumbnail}
          />
        ))}
      </div>
    </>
  );
}

export default Bakery;
