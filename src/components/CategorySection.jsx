import React from "react";
import CategoryBtn from "./CategoryBtn";
import Container from "./Container";
import useCategoryStore from "../store/useCategoryStore";

const CategorySection = () => {
  const title = "Product Categories";
  const { categories } = useCategoryStore();

  return (
    <section id="category-section" className="p-5">
      <Container>
        <p className="text-sm text-gray-500 mb-2">{title}</p>
        <div className="category-button-group flex overflow-scroll">
          {/* <CategoryBtn categoryName="all" current={true} /> */}
          {/* <CategoryBtn categoryName="electronics" current={false} />
        <CategoryBtn categoryName="jewelery" current={false} /> */}

          {categories.map((category) => (
            <CategoryBtn
              key={category.id}
              category={category}
             
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
