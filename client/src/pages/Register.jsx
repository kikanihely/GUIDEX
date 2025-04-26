import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.png";
import Male from "../assets/male.svg";
import Female from "../assets/female.svg";
import Transgender from "../assets/transgender.svg";

const Register = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "Male",
    birthDate: "",
    email: "",
    category: "General",
    familyIncome: "b1lkh",
    state: "",
    degree: "",
    course: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    console.log(name, value);  // Debugging: check if values are updating
  };

  const handleReset = () => {
    setUser({
      firstName: "",
      lastName: "",
      gender: "Male",
      birthDate: "",
      email: "",
      category: "General",
      familyIncome: "b1lkh",
      state: "",
      degree: "",
      course: "",
      password: "",
      confirmPassword: "",
    });
    setStep(1);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      // Log the response for debugging
      console.log('Response:', response);
  
      // If the response is not okay (400 or other errors), handle it
      if (!response.ok) {
        // Get the error text, not JSON, since we are getting a 400 error
        const errorResponse = await response.text();
        console.log('Error response:', errorResponse); // Log the raw error text
  
        // Try to parse it as JSON if possible
        try {
          const errorData = JSON.parse(errorResponse);
          alert(`Registration failed: ${errorData.message || 'Unknown error'}`);
        } catch (parseError) {
          alert(`Registration failed: ${errorResponse || 'Unknown error'}`);
        }
  
        return;
      }
  
      // If response is okay, parse it as JSON
      const responseData = await response.json();
      console.log('Success response:', responseData);
  
      alert("Registration successful!");
  
      // Reset form fields
      setUser({
        firstName: "",
        lastName: "",
        gender: "Male",
        birthDate: "",
        email: "",
        category: "General",
        familyIncome: "b1lkh",
        state: "",
        degree: "",
        course: "",
        password: "",
        confirmPassword: "",
      });
  
      setStep(1);
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      alert(`Something went wrong: ${error.message}`);
    }
  };
  
  
  const nextStep = () => step < 4 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-gradient-to-br from-blue-900 to-customBlue flex flex-col justify-center items-center text-white p-8">
        <img src={login} alt="Happy adopter with pet" className="mb-6 w-[500px] h-auto" />
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Start Your Journey</h1>
        <p className="text-base lg:text-lg text-center max-w-md mb-6">
          Create your GUIDEX account and unlock access to government aid and services. Get started in just a few simple steps!
        </p>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-8 lg:p-10 relative">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-300 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-blue-300 rounded-full blur-3xl opacity-50"></div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
          {`Step ${step}: ${["Personal Information", "Contact Details", "Education & Background", "Create Account"][step - 1]}`}
        </h2>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 bg-white p-8 shadow-lg rounded-lg">
          {step === 1 && (
            <>
              {/* First Name */}
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your First Name"
                  value={user.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>

              {/* Last Name */}
              <div className="mb-6">
                <label htmlFor="lastName" className="block text-sm font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your Last Name"
                  value={user.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>

              {/* Gender Selection */}
              <div className="flex justify-around">
                {[
                  { label: "Male", icon: Male },
                  { label: "Female", icon: Female },
                  { label: "Transgender", icon: Transgender },
                ].map((gender) => (
                  <div className="text-center" key={gender.label}>
                    <input
                      type="radio"
                      id={gender.label}
                      name="gender"
                      value={gender.label}
                      checked={user.gender === gender.label}
                      onChange={handleChange}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={gender.label}
                      className="flex flex-col items-center border border-gray-300 rounded-lg p-4 peer-checked:border-customBlue peer-checked:bg-blue-100 cursor-pointer"
                    >
                      <img src={gender.icon} alt={gender.label} className="w-6 h-6 mb-2" />
                      {gender.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* Birth Date */}
              <div className="mb-4 flex justify-center items-center mt-4">
                <p className="text-lg text-center">Birth Date &nbsp;&nbsp;</p>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={user.birthDate}
                  onChange={handleChange}
                  required
                  className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={user.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-semibold">Category</label>
                <select
                  id="category"
                  name="category"
                  value={user.category}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="PVTG">PVTG</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="familyIncome" className="block text-sm font-semibold">Family Income</label>
                <select
                  id="familyIncome"
                  name="familyIncome"
                  value={user.familyIncome}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="b1lkh">Below 1 lakh</option>
                  <option value="b3lkh">1 to 3 lakh</option>
                  <option value="b5lkh">3 to 5 lakh</option>
                  <option value="b8lkh">5 to 8 lakh</option>
                  <option value="b10lkh">8 to 10 lakh</option>
                  <option value="a10lkh">Above 10 lakh</option>
                </select>
              </div>

              <div className="mb-4">

                <label htmlFor="familyIncome" className="block text-sm font-semibold">Family Income</label>
                <select
                  id="state"
                  name="state"
                  value={user.state}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                >
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu & Kashmir</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OD">Odisha</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TS">Telangana</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UK">Uttarakhand</option>
                  <option value="WB">West Bengal</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="CH">Chandigarh</option>
                  <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="PY">Puducherry</option>
              </select>
            </div>
        </>
          )}

        {step === 3 && (
          <>
            <div className="mb-4">
              <label htmlFor="degree" className="block text-sm font-semibold">Present Class / Degree</label>
              <select
                id="degree"
                name="degree"
                value={user.degree}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="PVTG">PVTG</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="course" className="block text-sm font-semibold">Present Course / Stream</label>
              <select
                id="course"
                name="course"
                value={user.course}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="PVTG">PVTG</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
                placeholder="Retype your password"
              />
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-evenly">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="bg-gradient-to-r from-blue-900 to-customBlue text-white font-bold py-3 px-4 rounded-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
              ← Back
            </button>
          )}
          <button type="button" onClick={handleReset} className="px-4 py-2 border-2 border-gray-500 text-gray-500 bg-white rounded-lg hover:bg-gray-600 hover:text-white">
            ⟳ Reset Form
          </button>
          {step < 4 ? (
            <button type="button" onClick={nextStep} className="bg-gradient-to-r from-blue-900 to-customBlue text-white font-bold py-3 px-4 rounded-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Next →
            </button>
          ) : (
            <button type="submit" className="bg-gradient-to-r from-blue-900 to-customBlue text-white font-bold py-3 px-4 rounded-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
    </div >
  );
};

export default Register;
