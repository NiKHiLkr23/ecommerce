import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/BasketSlice";
import CartItem from "@/components/CartItem";

function Checkout() {
  const items = useSelector(selectItems);

  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <div className="flex items-center space-x-5 border-b">
              <h1 className="text-3xl  pb-4">
                {items.length === 0
                  ? "Your Shopping Basket is Empty"
                  : "Shopping Basket"}
              </h1>
              !
              <p>
                You have{" "}
                <span className="text-lg font-semibold">{items.length}</span>{" "}
                items in your Cart.
              </p>
            </div>
            {items.map(({ id, title, price, quantity, image }) => (
              <CartItem
                key={id}
                id={id}
                title={title}
                price={price}
                quantity={quantity}
                image={image}
              />
            ))}
            \
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
