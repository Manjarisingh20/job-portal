import React from 'react';
import '../../App.css';
import { FaSeedling } from 'react-icons/fa'; 

function CategoryCard({ title = "Agriculture", jobs = 1254 }) {
  return (
    <div className="category-card">
      <FaSeedling className="category-icon " />
      <h5 className="category-title ">{title}</h5>
      <span className="category-jobs">{jobs} jobs</span>
    </div>
  );
}

export default CategoryCard;
