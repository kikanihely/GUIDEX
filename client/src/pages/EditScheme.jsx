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
                                <option value="Open">Open</option>
                                <option value="Reserved">Reserved</option>
                                <option value="Both">Both</option>
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
                                <option value="Transgender">Transgender</option>
                                <option value="All">All</option>
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
                                <option value="">Select Income</option>
                                <option value="Up To 1 lakh">Up to 100,000</option>
                                <option value="Up To 5 lakh">Up to 500,000</option>
                                <option value="Up To 10 lakh">Up to 1,000,000</option>
                                <option value="Above 10 lakh">Above 1,000,000</option>
                                <option value="No limit">All</option>
                            </select>
                        </div>

                        {/* Dropdown for Max Class */}
                        <div>
                            <label htmlFor="maxClass" className="block text-sm font-semibold">Maximum Class</label>
                            <input
                                type="text"
                                id="maxClass"
                                name="maxClass"
                                value={formData.maxClass}
                                onChange={handleChange}
                                placeholder="Enter Max Class"
                                className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                            />
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
                                <option value="">Select Caste</option>
                                <option value="General">General</option>
                                <option value="OBC">OBC</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                                <option value="Other">Other</option>
                                <option value="All">All</option>
                                <option value="SC / ST / OBC">SC / ST / OBC</option>
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
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
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
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                                <option value="All">All</option>
                            </select>
                        </div>

                        {/* Dropdown for Occupation */}
                        <div>
                            <label htmlFor="occupation" className="block text-sm font-semibold">Occupation (Candidate/Parent)</label>
                            <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                                placeholder="Occupation"
                                className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                            />
                        </div>

                        <div>
                            <label htmlFor="alreadyAvailed" className="block text-sm font-semibold">Already Availed another Scholarship?</label>
                            <select
                                id="alreadyAvailed"
                                name="alreadyAvailed"
                                onChange={handleChange}
                                value={formData.alreadyAvailed}
                                className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                            >
                                <option value="">Select Option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
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
