import React from "react";
import { FaSeedling, FaIndustry, FaShoppingBag, FaHardHat, FaHotel, FaGraduationCap, FaMoneyBillWave, FaBus } from "react-icons/fa";
import CategoryCard from "./common/CategoryCard";

function BrowseByCategory() {
  const categories = [
    { title: "Agriculture", jobs: 1254, icon: FaSeedling },
    { title: "Metal Production", jobs: 816, icon: FaIndustry },
    { title: "Commerce", jobs: 2082, icon: FaShoppingBag },
    { title: "Construction", jobs: 1520, icon: FaHardHat },
    { title: "Hotels & Tourism", jobs: 1022, icon: FaHotel },
    { title: "Education", jobs: 1496, icon: FaGraduationCap },
    { title: "Financial Services", jobs: 1529, icon: FaMoneyBillWave },
    { title: "Transport", jobs: 1244, icon: FaBus },
  ];

  return (
    <section className="container  py-16">
      <div className="text-center mb-12 ">
        <h2 className="text-4xl font-bold mb-2">Browse by Category</h2>
        <p className="mt-3 text-xs text-center text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
  At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scel...
</p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {categories.map((cat, index) => (
          <CategoryCard key={index} title={cat.title} jobs={cat.jobs} icon={cat.icon} />
        ))}
      </div>
    </section>
  );
}

export default BrowseByCategory;
