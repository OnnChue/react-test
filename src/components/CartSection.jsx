import React from "react";
import Cart from "./Cart";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import emptyCart from "../asset/emptyCart.svg";


const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find(({ id }) => id === cv.productId).price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <>
      <div className="flex flex-col gap-5 h-full px-5">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}

      {carts.length === 0 && <img src={emptyCart} alt="empty cart" className="h-[200px] mx-auto" /> }
        

        <div className=" bottom-10 left-0 w-full bg-white">
          <Container className="px-5">
            <div className="border-t border-black flex justify-end gap-20 py-4 px-2">
              <div className="text-right">
                <p className="text-gray-500">Total</p>
                <p className="font-bold">{total.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Tax (5%)</p>
                <p className="font-bold">{tax.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Net Total</p>
                <p className="font-bold text-xl">{netTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="text-end mb-5 mt-2">
              <Link className="border border-stone-500 rounded-full hover:bg-stone-500 transition-all duration-300 hover:text-white px-4 py-2">Order Now</Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CartSection;
