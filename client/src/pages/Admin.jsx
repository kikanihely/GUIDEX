import React, { useState } from "react";
import AdminSchemeCard from "../components/AdminSchemeCard";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(true);
    const navigate = useNavigate(); // ✅ useNavigate hook

    const schemes = [
        {
            id: 1,
            name: "Health Insurance Scheme",
            description: "Provides health coverage for low-income families.",
        },
        {
            id: 2,
            name: "Education Aid Program",
            description: "Supports underprivileged students with scholarships.",
        },
        {
            id: 3,
            name: "Housing Assistance Program",
            description: "Affordable housing options for those in need.",
        },
        {
            id: 4,
            name: "Skill Development Initiative",
            description: "Training programs to enhance employability.",
        },
        // ...other repeated schemes
    ];

    const handleEdit = (id) => {
        alert(`Edit scheme with ID: ${id}`);
    };

    const handleDelete = (id) => {
        alert(`Delete scheme with ID: ${id}`);
    };

    // ✅ Handler to navigate
    const handleAddScheme = () => {
        navigate("/add-scheme"); // Replace with your actual route
    };

    return (
        <>
            <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
            <div className="min-h-screen pt-[120px] bg-gray-100 px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                    {schemes.map((scheme) => (
                        <AdminSchemeCard
                            key={scheme.id}
                            schemeName={scheme.name}
                            description={scheme.description}
                            onEdit={() => handleEdit(scheme.id)}
                            onDelete={() => handleDelete(scheme.id)}
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
