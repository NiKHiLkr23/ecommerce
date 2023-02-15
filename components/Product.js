import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/BasketSlice";
import { useState } from "react";

function Product({ id, title, price, quantity, image }) {
  const [toggle, setToggle] = useState(true);

  const dispatch = useDispatch();

  const toggleItem = () => {
    setToggle(!toggle);
  };

  const addItemToBasket = () => {
    toggleItem();
    const product = {
      id,
      title,
      price,
      quantity,
      image,
    };
    //push item into redux store
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    toggleItem();
    //Remove item from redux
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="flex flex-col space-y-2 z-30 p-5">
      <div className="relative w-28">
        <img src={image} alt="" className="h-20 object-cover" />
        {toggle ? (
          <button
            onClick={addItemToBasket}
            className="absolute bottom-0 right-0 text-white rounded-full p-2 bg-[#40D589]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={removeItemFromBasket}
            className="absolute bottom-0 right-0 text-white rounded-full p-2 bg-[#40D589]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="text-md font-bold">${price}</div>
      <p className="text-sm font-semibold text-justify">{title}</p>
      <p className="text-xs text-gray-400">{quantity}</p>
    </div>
  );
}

export default Product;
