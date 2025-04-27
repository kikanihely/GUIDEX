import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SchemesCard = ({ title, description, date }) => {
    const [bookmarked, setBookmarked] = useState(false);
    const navigate = useNavigate();
    
    const goToSchemePage = () => {
        navigate('/scheme');
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
            {/* Title and Bookmark */}
            <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-customBlue">{title}</h3>
                <button
                    onClick={() => setBookmarked(!bookmarked)}
                    className="text-gray-500 hover:text-customBlue"
                >
                    {bookmarked ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-customBlue"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.25 3.75h13.5c.69 0 1.25.56 1.25 1.25v15l-7.5-4.5-7.5 4.5v-15c0-.69.56-1.25 1.25-1.25z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.25 3.75h13.5c.69 0 1.25.56 1.25 1.25v15l-7.5-4.5-7.5 4.5v-15c0-.69.56-1.25 1.25-1.25z"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Description */}
            <p
                className="text-gray-700 mt-4"
                style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    WebkitLineClamp: 4, // <- Show only 4 lines
                }}
            >
                {description}
            </p>

            {/* Footer */}
            <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                    Last updated on: <span className="font-medium">{date}</span>
                </p>
                <button
                    className="bg-customBlue text-white p-2 rounded-full hover:bg-customYellow hover:text-customBlue"
                    onClick={goToSchemePage}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SchemesCard;
