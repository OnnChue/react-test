import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const { carts } = useCartStore();
  return (
    <header className="px-5 py-5">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-3xl font-bold text-stone-600">Online Shop</Link>
          <Link to={"/MyCart"} className="border border-stone-500 px-5 py-2 relative hover:bg-stone-500 transition-all duration-300 hover:text-white rounded-lg">
            My Cart
            <span
              className="inline-block bg-stone-950 rounded-full text-white text-xs px-3 py-1.5 absolute top-0 right-0 
            translate-x-1/2 -translate-y-1/2"
            >
              {carts.length}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
