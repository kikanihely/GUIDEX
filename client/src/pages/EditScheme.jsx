import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EditScheme = () => {
    const [formData, setFormData] = useState({
        schemeName: "",
        schemeCategory: "",
        schemeDescription: "",
        category: "",
        gender: "",
        maxFamilyIncome: "",
        maxClass: "",
        maxAge: "",
        casteCategory: "",
        nationality: "",
        state: "",
        disabilityStatus: "",
        minorityStatus: "",
        maritalStatus: "",
        occupation: "",
        alreadyAvailed: "",
        course: "",
        selectedTagDocuments: [],
        benefits: "",
        stepsForApplying: [],
    });

    const navigate = useNavigate();
    const { id } = useParams(); // Get scheme id from URL

    useEffect(() => {
        fetchScheme();
    }, []);

    const fetchScheme = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/schemes/${id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch scheme");
            }
            const data = await response.json();
            setFormData(data.scheme); // Fill form with existing data
        } catch (error) {
            console.error("Error fetching scheme:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "selectedTagDocuments" || name === "stepsForApplying") {
            setFormData({
                ...formData,
                [name]: value.split(","),
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/edit-scheme/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to update scheme");
            }

            navigate("/admin");
        } catch (error) {
            console.error("Error updating scheme:", error);
        }
    };

    return (
        <>
            <Navbar /> {/* Navbar */}

            <div className="min-h-screen pt-[120px] bg-gray-100 px-4 py-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Edit Scheme</h2>

                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    {/* 2 column grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label>Scheme Name:</label>
                            <input
                                type="text"
                                name="schemeName"
                                value={formData.schemeName}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            />
                        </div>

                        {/* Dropdown for Scheme Category */}
                        <div>
                            <label>Scheme Category:</label>
                            <select
                                name="schemeCategory"
                                value={formData.schemeCategory}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            >
                                <option value="">Select Scheme Category</option>
                                <option value="Education">Education</option>
                                <option value="Health">Health</option>
                                <option value="Social Welfare">Social Welfare</option>
                                <option value="Subsidy">Subsidy</option>
                                <option value="Loan">Loan</option>
                            </select>
                        </div>

                        <div>
                            <label>Scheme Description:</label>
                            <textarea
                                name="schemeDescription"
                                value={formData.schemeDescription}
                                onChange={handleChange}
                                className="border rounded w-full p-2 h-24"
                            />
                        </div>

                        {/* Dropdown for Category */}
                        <div>
                            <label>Category:</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            >
                                <option value="">Select Category</option>
                                <option value="General">General</option>
                                <option value="SC">Scheduled Caste</option>
                                <option value="ST">Scheduled Tribe</option>
                                <option value="OBC">Other Backward Classes</option>
                            </select>
                        </div>

                        {/* Dropdown for Gender */}
                        <div>
                            <label>Gender:</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Dropdown for Max Family Income */}
                        <div>
                            <label>Max Family Income:</label>
                            <select
                                name="maxFamilyIncome"
                                value={formData.maxFamilyIncome}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            >
                                <option value="">Select Max Family Income</option>
                                <option value="Below 1 Lakh">Below ₹1 Lakh</option>
                                <option value="1 Lakh to 3 Lakhs">₹1 Lakh to ₹3 Lakhs</option>
                                <option value="3 Lakhs to 5 Lakhs">₹3 Lakhs to ₹5 Lakhs</option>
                                <option value="5 Lakhs to 10 Lakhs">₹5 Lakhs to ₹10 Lakhs</option>
                                <option value="Above 10 Lakhs">Above ₹10 Lakhs</option>
                            </select>
                        </div>

                        {/* Dropdown for Max Class */}
                        <div>
                            <label>Max Class:</label>
                            <select
                                name="maxClass"
                                value={formData.maxClass}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            >
                                <option value="">Select Max Class</option>
                                <option value="Class 1">Class 1</option>
                                <option value="Class 2">Class 2</option>
                                <option value="Class 3">Class 3</option>
                                <option value="Class 4">Class 4</option>
                            </select>
                        </div>

                        {/* Dropdown for Max Age */}
                        <div>
                            <label>Max Age:</label>
                            <input
                                type="text"
                                name="maxAge"
                                value={formData.maxAge}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            />
                        </div>

                        {/* Dropdown for Caste Category */}
                        <div>
                            <label>Caste Category:</label>
                            <select
                                name="casteCategory"
                                value={formData.casteCategory}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            >
                                <option value="">Select Caste Category</option>
                                <option value="General">General</option>
                                <option value="SC">Scheduled Caste (SC)</option>
                                <option value="ST">Scheduled Tribe (ST)</option>
                                <option value="OBC">Other Backward Classes (OBC)</option>
                                <option value="EWS">Economically Weaker Sections (EWS)</option>
                            </select>
                        </div>


                        {/* Dropdown for Nationality */}
                        <div>
                            <label>Nationality:</label>
                            <input
                                type="text"
                                name="nationality"
                                value={formData.nationality}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            />
                        </div>

                        {/* Dropdown for State */}
                        <div>
                            <label>State:</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            />
                        </div>

                        {/* Dropdown for Disability Status */}
                        <div>
                            <label>Disability Status:</label>
                            <select
                                name="disabilityStatus"
                                value={formData.disabilityStatus}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            >
                                <option value="">Select Disability Status</option>
                                <option value="None">None</option>
                                <option value="Disabled">Disabled</option>
                            </select>
                        </div>

                        {/* Dropdown for Minority Status */}
                        <div>
                            <label>Minority Status:</label>
                            <select
                                name="minorityStatus"
                                value={formData.minorityStatus}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            >
                                <option value="">Select Minority Status</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        {/* Dropdown for Marital Status */}
                        <div>
                            <label>Marital Status:</label>
                            <select
                                name="maritalStatus"
                                value={formData.maritalStatus}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            >
                                <option value="">Select Marital Status</option>
                                <option value="Married">Married</option>
                                <option value="Single">Single</option>
                                <option value="Divorced">Divorced</option>
                            </select>
                        </div>

                        {/* Dropdown for Occupation */}
                        <div>
                            <label>Occupation:</label>
                            <select
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            >
                                <option value="">Select Occupation</option>
                                <option value="Employed">Employed</option>
                                <option value="Self-Employed">Self-Employed</option>
                                <option value="Unemployed">Unemployed</option>
                            </select>
                        </div>

                        <div>
                            <label>Already Availed:</label>
                            <input
                                type="text"
                                name="alreadyAvailed"
                                value={formData.alreadyAvailed}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            />
                        </div>

                        <div>
                            <label>Course:</label>
                            <input
                                type="text"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            />
                        </div>

                        <div>
                            <label>Required Documents (comma separated):</label>
                            <input
                                type="text"
                                name="selectedTagDocuments"
                                value={formData.selectedTagDocuments.join(",")}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            />
                        </div>

                        <div>
                            <label>Benefits:</label>
                            <textarea
                                name="benefits"
                                value={formData.benefits}
                                onChange={handleChange}
                                className="border rounded w-full p-2 h-24"
                            />
                        </div>

                        <div>
                            <label>Steps for Applying (comma separated):</label>
                            <input
                                type="text"
                                name="stepsForApplying"
                                value={formData.stepsForApplying.join(",")}
                                onChange={handleChange}
                                className="border rounded w-full p-2"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="bg-customBlue px-6 py-3 rounded text-white hover:bg-customYellow hover:text-customBlue transition"
                        >
                            Update Scheme
                        </button>
                    </div>
                </form>
            </div>

            <Footer /> {/* Footer */}
        </>
    );
};

export default EditScheme;
