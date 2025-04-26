import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const AdminSchemeCard = ({ schemeName, description, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between space-y-4">
      {/* Scheme Details */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">{schemeName}</h3>
        <p className="text-gray-600 mt-2 text-sm md:text-base">{description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3">
        <button
          onClick={onEdit}
          className="flex items-center space-x-2 bg-customBlue text-white py-2 px-4 rounded-lg hover:bg-white hover:text-customBlue transition duration-300 shadow-md"
        >
          <FiEdit size={18} />
        </button>
        <button
          onClick={onDelete}
          className="flex items-center space-x-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-white hover:text-red-600 transition duration-300 shadow-md"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default AdminSchemeCard;
