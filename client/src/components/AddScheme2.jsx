import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AddScheme2 = ({ onNext }) => {
    const location = useLocation();
    const firstPageData = location.state || {};

    const [formData, setFormData] = useState({
        ...firstPageData,
        selectedTagDocuments: [],
        benefits: "", // For Benefits input
        stepsForApplying: [], // For dynamic Steps input
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTagAdd = (e) => {
        const tag = e.target.value.trim();
        if (tag && !formData.selectedTagDocuments.includes(tag)) {
            setFormData({
                ...formData,
                selectedTagDocuments: [...formData.selectedTagDocuments, tag],
            });
        }
        e.target.value = ""; // Clear input field after adding
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleTagAdd(e);
        }
    };

    const handleTagRemove = (tag) => {
        setFormData({
            ...formData,
            selectedTagDocuments: formData.selectedTagDocuments.filter(
                (doc) => doc !== tag
            ),
        });
    };

    // Handle adding steps
    const handleAddStep = () => {
        if (formData.currentStep) {
            setFormData({
                ...formData,
                stepsForApplying: [...formData.stepsForApplying, formData.currentStep],
                currentStep: "", // Reset current step input
            });
        }
    };

    const handleRemoveStep = (step) => {
        setFormData({
            ...formData,
            stepsForApplying: formData.stepsForApplying.filter((s) => s !== step),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/admin/add-scheme", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            console.log("Scheme created successfully:", data);
            alert("Scheme Added Successfully!");

            // You can also navigate to another page if you want
            navigate("/add-scheme");
        } catch (error) {
            console.error("Error submitting scheme:", error.message);
            alert(error.message);
        }
    };

    const handleReset = () => {
        setFormData({
            ...firstPageData,
            selectedTagDocuments: [],
            benefits: "",
            stepsForApplying: [],
        });
    };

    const handleBack = () => {
        navigate("/add-scheme");
    };

    return (
        <>
            <Navbar />
            <div className="h-fit bg-gray-100 py-8 px-4 pt-[100px] pb-[50px]">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold mb-6 text-center text-customBlue">
                        Add Scheme
                    </h1>

                    <form id="schemeForm" className="schemeForm" onSubmit={handleSubmit}>
                        {/* Required Documents (Tag Input) */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Required Documents (Tag Input)
                            </label>

                            <input
                                type="text"
                                name="tagInput"
                                value={formData.tagInput || ""} // Controlled input
                                onChange={(e) =>
                                    setFormData({ ...formData, tagInput: e.target.value })
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault(); // prevent form submit
                                        const tag = formData.tagInput.trim();
                                        if (tag && !formData.selectedTagDocuments.includes(tag)) {
                                            setFormData({
                                                ...formData,
                                                selectedTagDocuments: [
                                                    ...formData.selectedTagDocuments,
                                                    tag,
                                                ],
                                                tagInput: "", // Clear input after adding
                                            });
                                        }
                                    }
                                }}
                                className="border border-gray-300 rounded-md p-2 w-full"
                                placeholder="Type a document name and press Enter..."
                            />

                            <div className="mt-2">
                                {formData.selectedTagDocuments.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="inline-block bg-blue-100 text-blue-800 py-1 px-3 rounded-full mr-2 mb-2"
                                    >
                                        {tag}{" "}
                                        <span
                                            onClick={() => {
                                                setFormData({
                                                    ...formData,
                                                    selectedTagDocuments:
                                                        formData.selectedTagDocuments.filter(
                                                            (t) => t !== tag
                                                        ),
                                                });
                                            }}
                                            className="cursor-pointer text-red-500 ml-2"
                                        >
                                            ✕
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <div className="mb-4">
                            <label
                                htmlFor="benefits"
                                className="block text-sm font-semibold mb-2"
                            >
                                Benefits of the Scheme
                            </label>
                            <textarea
                                id="benefits"
                                name="benefits"
                                rows="4"
                                className="border border-gray-300 rounded-md p-2 w-full"
                                placeholder="Describe the benefits of the scheme..."
                                value={formData.benefits}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Steps for Applying Section */}
                        <div className="mb-4">
                            <label
                                htmlFor="stepsForApplying"
                                className="block text-sm font-semibold mb-2"
                            >
                                Steps for Applying
                            </label>
                            <div className="flex">
                                <input
                                    type="text"
                                    id="currentStep"
                                    name="currentStep"
                                    value={formData.currentStep}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    placeholder="Type a step and press Enter..."
                                />
                                <button
                                    type="button"
                                    onClick={handleAddStep}
                                    className="bg-customBlue text-white px-4 py-2 ml-2 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <div className="mt-2">
                                {formData.stepsForApplying.map((step, index) => (
                                    <div key={index} className="flex items-center mb-1">
                                        <span className="mr-2">
                                            {index + 1}. {step}
                                        </span>
                                        <span
                                            onClick={() => handleRemoveStep(step)}
                                            className="cursor-pointer text-red-500"
                                        >
                                            ✕
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Actions */}
                        <div className="flex justify-evenly mt-6">
                            <button
                                className="bg-customBlue text-white px-4 py-2 rounded hover:bg-customYellow hover:text-customBlue"
                                type="button"
                                onClick={handleBack}
                            >
                                ← Back
                            </button>
                            <button
                                className="btn reset-btn bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-customBlue hover:text-gray-200"
                                type="button"
                                onClick={handleReset}
                            >
                                ⟳ Reset
                            </button>
                            <button
                                className="bg-customBlue text-white px-4 py-2 rounded hover:bg-customYellow hover:text-customBlue"
                                type="submit"
                                onClick={onNext}
                            >
                                Add →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddScheme2;