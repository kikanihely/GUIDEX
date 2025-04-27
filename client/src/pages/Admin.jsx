import React, { useState, useEffect } from "react";
import AdminSchemeCard from "../components/AdminSchemeCard";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [schemes, setSchemes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSchemes();
  }, []);

  const fetchSchemes = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/schemes");
      if (!response.ok) {
        throw new Error("Failed to fetch schemes");
      }
      const data = await response.json();
      setSchemes(data.schemes);
    } catch (error) {
      console.error("Error fetching schemes:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-scheme/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this scheme?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/api/admin/delete-scheme/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete scheme");
      }

      // After successful delete, refresh the list
      fetchSchemes();
    } catch (error) {
      console.error("Error deleting scheme:", error);
    }
  };

  const handleAddScheme = () => {
    navigate("/add-scheme");
  };

  // Function to limit description to 4 lines (approximated to 120 characters)
  const limitDescription = (description) => {
    return description.length > 120 ? description.substring(0, 120) + "..." : description;
  };

  return (
    <>
      <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <div className="min-h-screen pt-[120px] bg-gray-100 px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {schemes.map((scheme) => (
            <AdminSchemeCard
              key={scheme._id}
              schemeName={scheme.schemeName}
              description={limitDescription(scheme.schemeDescription)} // Apply the limit here
              onEdit={() => handleEdit(scheme._id)}
              onDelete={() => handleDelete(scheme._id)}
            />
          ))}
        </div>

        {/* Add Schemes Button */}
        <div className="fixed bottom-8 flex items-center justify-center w-full">
          <button
            className="bg-customBlue px-5 py-3 rounded text-white hover:bg-customYellow hover:text-customBlue"
            onClick={handleAddScheme}
          >
            Add Schemes
          </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
