import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdminFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch all feedbacks
        const fetchFeedbacks = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/auth/admin/feedback", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();

                if (response.ok) {
                    setFeedbacks(data.feedbacks);
                } else {
                    setError(data.message || "Failed to fetch feedbacks");
                }
            } catch (err) {
                setError("Failed to fetch feedbacks");
                console.error("Error fetching feedbacks:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-[34.3rem] bg-gray-50 flex justify-center items-start px-4 pt-40 pb-0">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-6xl">
                    <h2 className="text-3xl font-bold text-customBlue mb-6 text-center">
                        Admin Dashboard - Feedbacks
                    </h2>

                    {loading && (
                        <div className="flex justify-center items-center py-10">
                            <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
                        </div>
                    )}

                    {error && (
                        <div className="text-center text-xl text-red-500 mb-4">{error}</div>
                    )}

                    {!loading && !error && feedbacks.length === 0 && (
                        <div className="text-center text-xl text-gray-500">No feedbacks available.</div>
                    )}

                    {!loading && !error && feedbacks.length > 0 && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-600">User</th>
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-600">Usage Frequency</th>
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-600">Motivation</th>
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-600">Most Used Feature</th>
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-600">Improvement</th>
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-600">Follow Up</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feedbacks.map((feedback) => (
                                        <tr
                                            key={feedback._id}
                                            className="border-b hover:bg-gray-50 transition-all"
                                        >
                                            <td className="py-4 px-6 text-sm text-gray-800">{feedback.userId.fullName}</td>
                                            <td className="py-4 px-6 text-sm text-gray-800">{feedback.usageFrequency}</td>
                                            <td className="py-4 px-6 text-sm text-gray-800">{feedback.motivation}</td>
                                            <td className="py-4 px-6 text-sm text-gray-800">{feedback.mostUsedFeature}</td>
                                            <td className="py-4 px-6 text-sm text-gray-800">{feedback.improvement}</td>
                                            <td className="py-4 px-6 text-sm text-gray-800">
                                                {feedback.followUp ? "Yes" : "No"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminFeedback;
