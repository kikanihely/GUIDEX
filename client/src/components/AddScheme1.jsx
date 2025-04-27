import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AddScheme = () => {
  const navigate = useNavigate();

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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted abc", formData);
  };

  const handleReset = () => {
    setFormData({
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
    });
  };

  const handleNext = () => {
    navigate("/add-scheme-2", { state: formData });
  };

  return (
    <>
      <Navbar />
      <div className="h-fit bg-gray-100 py-8 px-4 pt-[100px] pb-[50px]">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center text-customBlue">Add Scheme</h1>

          <form onSubmit={handleSubmit}>
            {/* Scheme Basic Details */}
            <div className="mb-6">
              {/* Scheme Name */}
              <div className="mb-4">
                <label htmlFor="schemeName" className="block text-sm font-semibold">Scheme Name</label>
                <input
                  type="text"
                  id="schemeName"
                  name="schemeName"
                  value={formData.schemeName}
                  onChange={handleChange}
                  placeholder="Enter Scheme Name"
                  className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  required
                />
              </div>

              {/* Scheme Category */}
              {/* Scheme Category */}
              <div className="mb-4">
                <label htmlFor="schemeCategory" className="block text-sm font-semibold">Scheme Category</label>
                <select
                  id="schemeCategory"
                  name="schemeCategory"
                  value={formData.schemeCategory}
                  onChange={handleChange}
                  className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  required
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


              {/* Scheme Description */}
              <div className="mb-4">
                <label htmlFor="schemeDescription" className="block text-sm font-semibold">Scheme Description</label>
                <textarea
                  id="schemeDescription"
                  name="schemeDescription"
                  value={formData.schemeDescription}
                  onChange={handleChange}
                  placeholder="Enter Scheme Description"
                  rows="4"
                  className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  required
                ></textarea>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="mb-6">
              <div className="flex mb-4 space-x-6">
                {/* Category */}
                <div className="w-1/2">
                  <label htmlFor="category" className="block text-sm font-semibold">Category</label>
                  <select
                    id="category"
                    name="category"
                    onChange={handleChange}
                    value={formData.category}
                    className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  >
                    <option value="">Select Category</option>
                    <option value="Open">Open</option>
                    <option value="Reserved">Reserved</option>
                    <option value="Both">Both</option>
                  </select>
                </div>

                {/* Gender */}
                <div className="w-1/2">
                  <label htmlFor="gender" className="block text-sm font-semibold">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    value={formData.gender}
                    className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="All">All</option>
                  </select>
                </div>
              </div>

              <div className="flex mb-4 space-x-6">
                {/* Max Family Income */}
                <div className="w-1/2">
                  <label htmlFor="maxFamilyIncome" className="block text-sm font-semibold">Maximum Family Income</label>
                  <select
                    id="maxFamilyIncome"
                    name="maxFamilyIncome"
                    onChange={handleChange}
                    value={formData.maxFamilyIncome}
                    className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  >
                    <option value="">Select Income</option>
                    <option value="Up To 1 lakh">Up to 100,000</option>
                    <option value="Up To 5 lakh">Up to 500,000</option>
                    <option value="Up To 10 lakh">Up to 1,000,000</option>
                    <option value="Above 10 lakh">Above 1,000,000</option>
                    <option value="No limit">All</option>
                  </select>
                </div>

                {/* Max Class */}
                <div className="w-1/2">
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
              </div>

              <div className="flex mb-4 space-x-6">
                {/* Max Age */}
                <div className="w-1/2">
                  <label htmlFor="maxAge" className="block text-sm font-semibold">Maximum Age</label>
                  <input
                    type="number"
                    id="maxAge"
                    name="maxAge"
                    value={formData.maxAge}
                    onChange={handleChange}
                    placeholder="Maximum Age"
                    className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  />
                </div>

                {/* Course */}
                <div className="w-1/2">
                  <label htmlFor="course" className="block text-sm font-semibold">Course</label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    placeholder="Enter Course"
                    className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  />
                </div>
              </div>

              {/* New Fields */}
              <div className="flex mb-4 space-x-6">
                {/* Caste/Category */}
                <div className="w-1/2">
                  <label htmlFor="casteCategory" className="block text-sm font-semibold">Caste/Category</label>
                  <select
                    id="casteCategory"
                    name="casteCategory"
                    onChange={handleChange}
                    value={formData.casteCategory}
                    className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
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

                {/* Nationality */}
                <div className="w-1/2">
                  <label htmlFor="nationality" className="block text-sm font-semibold">Nationality</label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    placeholder="e.g., Indian"
                    className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  />
                </div>
              </div>

              <div className="flex mb-4 space-x-6">
                {/* State */}
                {/* State */}
                <div className="w-1/2">
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


                {/* Disability Status */}
                <div className="w-1/2">
                  <label htmlFor="disabilityStatus" className="block text-sm font-semibold">Disability Status</label>
                  <select
                    id="disabilityStatus"
                    name="disabilityStatus"
                    onChange={handleChange}
                    value={formData.disabilityStatus}
                    className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  >
                    <option value="">Select Disability Status</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="flex mb-4 space-x-6">
                {/* Minority Status */}
                <div className="w-1/2">
                  <label htmlFor="minorityStatus" className="block text-sm font-semibold">Minority Status</label>
                  <select
                    id="minorityStatus"
                    name="minorityStatus"
                    onChange={handleChange}
                    value={formData.minorityStatus}
                    className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  >
                    <option value="">Select Minority Status</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                {/* Marital Status */}
                <div className="w-1/2">
                  <label htmlFor="maritalStatus" className="block text-sm font-semibold">Marital Status</label>
                  <select
                    id="maritalStatus"
                    name="maritalStatus"
                    onChange={handleChange}
                    value={formData.maritalStatus}
                    className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  >
                    <option value="">Select Marital Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                    <option value="All">All</option>
                  </select>
                </div>
              </div>

              <div className="flex mb-4 space-x-6">
                {/* Occupation */}
                <div className="w-1/2">
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

                {/* Already Availed */}
                <div className="w-1/2">
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
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-evenly mt-6">
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
                onClick={handleNext}
              >
                Next →
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddScheme;