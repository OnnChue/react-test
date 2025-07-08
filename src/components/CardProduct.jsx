import React from "react";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const CardProduct = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  const { carts, addCart } = useCartStore();
  const  navigate  = useNavigate();

  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.error("Product already added to cart");
  }

  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = { id: Date.now(), productId: id, quantity: 1 };
    addCart(newCart);
  };

const handleOpenDetail = () => {
  navigate(`/product-detail/${id}`);
}


  return (
    <div
      onClick={handleOpenDetail}
      to={`/product-detail/${id}`}
      className="border border-stone-300 p-5 rounded-lg shadow-lg flex flex-col gap-5 items-start"
    >
      <img src={image} alt="" className="h-40" />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end mt-auto">
        <p>{price}</p>
        {carts.find((cart) => cart.productId == id) ? (
          <button onClick={handleAddedBtn}
           className="border border-stone-300 drop-shadow-md bg-stone-500 rounded-full text-white px-4 text-sm py-1">
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCart}
            
            className="border border-stone-300 shadow-md rounded-full px-4 text-sm py-1 hover:bg-stone-300  transition-all duration-300"
          >
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
