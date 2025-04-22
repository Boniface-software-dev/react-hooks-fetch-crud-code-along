import React from "react";

function Filter({ category, onCategoryChange }) {
  const categories = ["All", "Produce", "Dairy", "Dessert"];

  return (
    <div className="Filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={cat === category ? "selected" : ""}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filter;