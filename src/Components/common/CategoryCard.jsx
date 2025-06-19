import React from 'react';

function CategoryCard({ title, jobs, icon: Icon }) {
  return (
    <div className="bg-white ml-6 mr-6 mt-2 mb-2 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition h-64 flex flex-col justify-center">
      {Icon && <Icon className="text-emerald-600 text-4xl mx-auto mb-4" />}
      <h3 className="text-base font-bold text-black">{title}</h3>
      <span className="w-fit mx-auto mt-3 text-xs text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
        {jobs} jobs
      </span>
    </div>
  );
}

export default CategoryCard;
