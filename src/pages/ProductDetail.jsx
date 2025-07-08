import React from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { productId } = useParams();

  const { products } = useProductStore();
  // console.log(productId);

  const { carts, addCart } = useCartStore();

  const handleAddCart = () => {
    const newCart = { id: Date.now(), productId: productId, quantity: 1 };
    addCart(newCart);
  };
  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.error("Product already added to cart");
  };

  const currentProduct = products.find((product) => product.id == productId);

  return (
    <>
      <Container className="px-5">
        <BreadCrumb currentPageTitle="Product Detail" />
        <div className="border border-stone-500 p-10 shadow-md rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1">
              <img
                src={currentProduct.image}
                className=" h-[180px] md:h-auto md:w-2/4 md:mx-auto mb-5 md:mb-0"
                alt=""
              />
            </div>
            <div className="col-span-1 flex flex-col gap-5 items-start">
              <h3 className="text-3xl font-bold text-stone-900">{currentProduct.title}</h3>
              <p className="bg-gray-300 text-gray-700 inline-block px-4 py-2 rounded-full">
                {currentProduct.category}
              </p>
              <p className="">{currentProduct.description}</p>
              <div>
                <Rating rate={currentProduct.rating.rate} />
              </div>
              <div className="flex justify-between items-center w-full">
                <p>Price: ${currentProduct.price}</p>
                {carts.find((cart) => cart.productId == currentProduct.id) ? (
                  <button
                    onClick={handleAddedBtn}
                    className="border border-stone-500 bg-stone-500  text-white px-6 text-sm py-2 rounded-full"
                  >
                    Added
                  </button>
                ) : (
                  <button
                    onClick={handleAddCart}
                    className="border border-stone-500 rounded-full hover:bg-stone-500 hover:text-white transition-all duration-300 px-5 text-sm py-2"
                  >
                    Add Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
