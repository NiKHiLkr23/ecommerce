function CartItem({ title, price, quantity, image }) {
  return (
    <div className="flex flex-col space-y-2 z-30 p-5">
      <div className="w-28">
        <img src={image} alt="" className="h-20 object-cover" />
      </div>
      <div className="text-md font-bold">${price}</div>
      <p className="text-sm font-semibold text-justify">{title}</p>
      <p className="text-xs text-gray-400">{quantity}</p>
    </div>
  );
}

export default CartItem;
