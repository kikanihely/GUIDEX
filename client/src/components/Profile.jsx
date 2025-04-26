import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching user data (from localStorage or API)
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUser(userData);
    } else {
      navigate("/login"); // Redirect to login page if no user data
    }
  }, [navigate]);

  if (!user) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-customBlue flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-lg p-6 bg-customBlue rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <img
            src={user.profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto"
          />
        </div>

        <h1 className="text-3xl font-bold">{user.firstName} {user.lastName}</h1>
        <p className="text-lg mt-2">{user.email}</p>
        <p className="text-sm mt-1">{user.gender}</p>
        <p className="text-sm mt-1">{user.category}</p>
        <p className="text-sm mt-1">{user.state}</p>
        <p className="text-sm mt-1">{user.degree} - {user.course}</p>
        <p className="text-sm mt-1">{user.birthDate}</p>

        {/* Edit Profile Button */}
        <button
        //   onClick={() => navigate("/edit-profile")}
          className="mt-6 bg-white text-customBlue px-6 py-2 rounded-md text-xl hover:bg-customYellow hover:text-customBlue transition duration-300"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
