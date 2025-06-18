import React from "react";
import CategoryCard from "./common/CategoryCard";
import "../App.css";

function BrowseByCategory() {
  return (
    <div>
      <div className="browse-by-category mt-10">
        <h1 className="text-5xl font-semibold text-center ">
          Browse by Category
        </h1>
        <p className="mt-3 text-xs text-center">
          At eu labortis pretium tincidunt amet lacus ut aenean aliquet. Blandit
          a massa elementum is scel...
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-7 px-20 py-10">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}<CategoryCard />

export default BrowseByCategory;
