import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryBtn = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();

  const handleClick = () => {
    activeCategory(id);
  };
  return (
    <button
      onClick={handleClick}
      className={`${
        isActive && "bg-stone-500 text-white"
      } border text-nowrap border-stone-500  px-4 py-2 me-2 category-button transition-all duration-300 rounded-full`}
    >
      {name}
    </button>
  );
};

export default CategoryBtn;
