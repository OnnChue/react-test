import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  const product = products.find((el) => el.id === productId);

  const cost = product.price * quantity;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Product removed from cart");
        }
      });
    }
  };

  return (
    <div className=" border border-stone-500 rounded-lg shadow-md p-5 grid sm:grid-cols-6 grid-cols-4 ">
      <div className="col-span-1">
        <img className="sm:h-20 h-16" src={product.image} alt="" />
      </div>
      <div className="col-span-3">
        <h3 className="font-bold text-sm sm:text-xl mb-2">{product.title}</h3>
        <p className="text-gray-400">Price {product.price}</p>
      </div>
      <div className="col-span-1">
        <p className="mb-2 text-sm sm:text-lg">Quantity</p>
        <div className="flex gap-3  items-center">
          <button
            onClick={handleDecreaseQuantity}
            className="bg-stone-500 rounded-md text-white px-2 py-0.5 "
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={handleIncreaseQuantity}
            className="bg-stone-500 rounded-md text-white px-2 py-0.5 "
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-end text-lg font-bold mt-5">{cost}</p>
      </div>
    </div>
  );
};

export default Cart;
