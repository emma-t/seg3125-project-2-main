import React from 'react';

function SortByDropdown({ sortBy, handleSortChange }) {
  return (
    <select value={sortBy} onChange={handleSortChange}>
      <option value="default" disabled>
        Sort by:
      </option>
      <option value="default">Default</option>
      <option value="az">A-Z (Alphabetically)</option>
      <option value="za">Z-A (Reverse Alphabetical)</option>
      <option value="mostStock">Most Stock</option>
      <option value="leastStock">Least Stock</option>
    </select>
  );
}

export default SortByDropdown;
