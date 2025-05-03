import React from 'react';
import happy from "../assets/happy.png";

const EligibilityModal = ({ isOpen, onClose, schemeName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md w-full">
        <img
          src={happy} // Place your image in public/images as eligible.png
          alt="Eligible"
          className="w-32 mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Yayy!</h2>
        <p className="text-gray-700 text-lg">
          You Are Eligible For <strong>{schemeName}</strong>
        </p>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EligibilityModal;
