import { create } from "zustand";

const useCartStore = create((set) => ({
    carts: [
   
  ],

  addCart : (newCart) =>set((state) => ({
    carts: [...state.carts, newCart]
  })),

  increaseQuantity: (id) => set((state) => ({
    carts: state.carts.map((el) => 
    el.id === id? {...el, quantity: el.quantity + 1} : el
    ),
  })),

  decreaseQuantity: (id) => set((state) => ({
    carts: state.carts.map((el) => 
    el.id === id? {...el, quantity: el.quantity - 1} : el
    ),
  })),

  removeCart: (id) => set((state) => ({
    carts: state.carts.filter((el) => el.id !== id)
  }))
}))

export default useCartStore