import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key!);

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session?.user?.email,
    });

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result?.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-red-100 to-yellow-100 h-screen">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-md items-center bg-[#ffC000] rounded-md">
          <Image
            src="/ShoppingBannerSmall.png"
            height={250}
            width={1020}
            objectFit="contain"
            alt=""
          />
          <div className="flex flex-col p-5 space-y-10 bg-white rounded-b-md">
            <h1 className="text-2xl border-b pb-4">
              {items.length === 0
                ? "Your Cart is currently empty."
                : "Shopping Cart"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                isFreeShipping={item.isFreeShipping}
              />
            ))}
          </div>
        </div>

        <div
          className={`${
            items.length === 0 && "hidden"
          } flex flex-col bg-white p-10`}
        >
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold ml-2">
                  <Currency quantity={total} />
                </span>
              </h2>
              <button
                role="link"
                onClick={createCheckoutSession}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-400 to-gray-600 border-gray-400 text-gray-300 shadow-md active:to-gray-400 cursor-not-allowed"
                }`}
                disabled={!session}
              >
                {!session ? "Sign in to Checkout" : "Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
