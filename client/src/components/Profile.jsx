import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    birthDate: "",
    category: "",
    familyIncome: "",
    state: "",
    degree: "",
    course: "",
    disabilityStatus: "",
    minorityStatus: "",
    maritalStatus: "",
    occupation: "",
    alreadyAvailed: "",
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      loadUserData(userId);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const loadUserData = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/get-profile/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setUser(data);
    } catch (error) {
      console.error("Error loading profile:", error.message);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(`http://localhost:5000/api/update-profile/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Update failed");
      }

      alert("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6 pt-[100px]">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-10">

        {/* Top section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Edit Profile</h2>
            <p className="text-gray-500 mt-2">Update your personal information</p>
          </div>
        </div>

        {/* Form */}
        <form id="edit-profile-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Inputs */}
          <FormField label="First Name" name="firstName" value={user.firstName} onChange={handleChange} />
          <FormField label="Last Name" name="lastName" value={user.lastName} onChange={handleChange} />
          <FormField label="Email" name="email" value={user.email} onChange={handleChange} />
          <DropdownField
            label="Gender"
            name="gender"
            value={user.gender}
            onChange={handleChange}
            options={["Male", "Female", "Other"]}
          />
          <FormField label="Birth Date" name="birthDate" type="date" value={user.birthDate?.slice(0, 10)} onChange={handleChange} />
          <DropdownField
            label="Category"
            name="category"
            value={user.category}
            onChange={handleChange}
            options={["General", "OBC", "SC", "ST", "Other"]}
          />
          <FormField label="Family Income" name="familyIncome" value={user.familyIncome} onChange={handleChange} />
          <FormField label="State" name="state" value={user.state} onChange={handleChange} />
          <FormField label="Degree" name="degree" value={user.degree} onChange={handleChange} />
          <FormField label="Course" name="course" value={user.course} onChange={handleChange} />
          <DropdownField
            label="Disability Status"
            name="disabilityStatus"
            value={user.disabilityStatus}
            onChange={handleChange}
            options={["Yes", "No"]}
          />

          <DropdownField
            label="Minority Status"
            name="minorityStatus"
            value={user.minorityStatus}
            onChange={handleChange}
            options={["Yes", "No"]}
          />

          <DropdownField
            label="Marital Status"
            name="maritalStatus"
            value={user.maritalStatus}
            onChange={handleChange}
            options={["Single", "Married", "Divorced", "Widowed"]}
          />

          <FormField
            label="Occupation"
            name="occupation"
            value={user.occupation}
            onChange={handleChange}
          />

          <DropdownField
            label="Already Availed Any Government Scheme"
            name="alreadyAvailed"
            value={user.alreadyAvailed}
            onChange={handleChange}
            options={["Yes", "No"]}
          />

        </form>

        {/* Submit button */}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            form="edit-profile-form"
            className="bg-customBlue hover:bg-customYellow hover:text-customBlue text-white font-semibold px-12 py-4 rounded-[10px] text-lg transition-all duration-300 transform hover:scale-105"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const FormField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 font-semibold mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50"
      required
    />
  </div>
);

const DropdownField = ({ label, name, value, onChange, options }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 font-semibold mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50"
      required
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default Profile;
