import React, { useState } from "react";

const SchemesForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    state: '',
    schemeCategory: '',
    schemeName: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData); // Pass form data to parent component
  };

  return (
    <div className="bg-white rounded-md p-6 pt-[120px]">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {/* State Dropdown */}
          <div>
            <label htmlFor="state" className="block text-sm font-semibold">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
            >
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="All">All</option>
            </select>
          </div>

          {/* Scheme Category Dropdown */}
          <div>
            <label htmlFor="schemeCategory" className="block text-sm font-semibold">Scheme Category</label>
            <select
              id="schemeCategory"
              name="schemeCategory"
              value={formData.schemeCategory}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
            >
              <option value="">Select Scheme Category</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Employment">Employment</option>
              <option value="Housing">Housing</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Business">Business</option>
              <option value="Women Empowerment">Women Empowerment</option>
              <option value="Child Welfare">Child Welfare</option>
              <option value="Senior Citizen Welfare">Senior Citizen Welfare</option>
              <option value="Skill Development">Skill Development</option>
              <option value="Social Welfare">Social Welfare</option>
              <option value="Financial Assistance">Financial Assistance</option>
              <option value="Sports">Sports</option>
              <option value="Environment">Environment</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Scheme Name Input */}
          <div>
            <label htmlFor="schemeName" className="block text-sm font-semibold">Scheme Name</label>
            <input
              type="text"
              id="schemeName"
              name="schemeName"
              value={formData.schemeName}
              onChange={handleChange}
              placeholder="Enter Scheme Name"
              className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
            />
          </div>

          {/* Date Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue p-2"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-8 text-center">
          <button type="submit" className="bg-customBlue text-white px-6 py-2 rounded-md hover:bg-customYellow hover:text-customBlue">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchemesForm;
