import React from "react";

const SchemesForm = () => {
  return (
    <div className="bg-white rounded-md p-6 pt-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* State Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">State</label>
          <select className="w-full border-gray-300 border rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue p-2">
            <option value="" disabled selected>
              Select State
            </option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
            <option value="state3">State 3</option>
          </select>
        </div>

        {/* City Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">City</label>
          <select className="w-full border-gray-300 border rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue p-2">
            <option value="" disabled selected>
              Select City
            </option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
            <option value="city3">City 3</option>
          </select>
        </div>

        {/* Scheme Type Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Scheme</label>
          <select className="w-full border-gray-300 border rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue p-2">
            <option value="" disabled selected>
              Select Scheme
            </option>
            <option value="scheme1">Scheme 1</option>
            <option value="scheme2">Scheme 2</option>
            <option value="scheme3">Scheme 3</option>
          </select>
        </div>

        {/* Date Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            className="w-full border-gray-300 border rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue p-2"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-8 text-center">
        <button className="bg-customBlue text-white px-6 py-2 rounded-md hover:bg-customYellow hover:text-customBlue">
          Search
        </button>
      </div>
    </div>
  );
};

export default SchemesForm;
