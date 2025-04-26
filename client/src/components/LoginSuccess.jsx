import React from "react";

const LoginSuccess = ({ closeModal}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">

            <div className="bg-white p-8 rounded-lg shadow-lg w-[450px] relative">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    ×
                </button>
                <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-customBlue">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-20 h-20"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                    Successfully Logged in!
                </h2>
                <p className="text-gray-600 mb-4 text-center">
                    You can now explore schemes and check your eligibility for that scheme.
                </p>
            </div>
        </div>
    );
};

export default LoginSuccess;
