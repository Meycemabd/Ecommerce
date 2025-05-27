import React from 'react';

const FilterSidebar = () => {
  const sizes = [34, 36, 38, 40, 42, 44];
  const categories = [
    'New arrivals',
    'Activewear',
    'Running shoes',
    'Boat shoes',
    'Hiking',
    'Electronics',
    'Accessories',
  ];

  return (
    <aside className="w-full max-w-xs p-4 space-y-6">
      <h2 className="text-blue-600 font-bold text-lg bg-blue-100 px-2 py-1 rounded">
        Search results for: <span className="text-blue-800">Bluetooth</span>
      </h2>

      <div className="border rounded p-4">
        <h3 className="text-blue-600 font-semibold mb-3">Category</h3>
        <ul className="space-y-2 text-gray-700">
          {categories.map((cat) => (
            <li key={cat} className="cursor-pointer hover:underline">
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="border rounded p-4">
        <h3 className="font-semibold mb-3">Price</h3>
        {/* Optional: Add price filter UI here */}
        <p className="text-gray-500 text-sm">Filter by price range</p>
      </div>

      <div className="border rounded p-4">
        <h3 className="font-semibold mb-3">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className="border rounded py-1 text-sm hover:bg-gray-100"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
