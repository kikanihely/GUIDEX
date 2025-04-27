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
              <div className="mb-4">
                <label htmlFor="schemeCategory" className="block text-sm font-semibold">Scheme Category</label>
                <input
                  type="text"
                  id="schemeCategory"
                  name="schemeCategory"
                  value={formData.schemeCategory}
                  onChange={handleChange}
                  placeholder="Enter Scheme Category"
                  className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  required
                />
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
                    <option value="UpTo100000">Up to 100,000</option>
                    <option value="UpTo500000">Up to 500,000</option>
                    <option value="UpTo1000000">Up to 1,000,000</option>
                    <option value="Above1000000">Above 1,000,000</option>
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
                <div className="w-1/2">
                  <label htmlFor="state" className="block text-sm font-semibold">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 text-gray-800"
                  />
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