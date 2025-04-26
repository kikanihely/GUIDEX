import React, { useState } from "react";

const FeedbackForm = () => {
  const [usageFrequency, setUsageFrequency] = useState("");
  const [motivation, setMotivation] = useState("");
  const [mostUsedFeature, setMostUsedFeature] = useState("");
  const [improvement, setImprovement] = useState("");
  const [followUp, setFollowUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to submit feedback.");
      return;
    }

    const feedback = {
      usageFrequency,
      motivation,
      mostUsedFeature,
      improvement,
      followUp,
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/auth/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(feedback),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit feedback");
      }

      alert("Thank you for your feedback!");
      setUsageFrequency("");
      setMotivation("");
      setMostUsedFeature("");
      setImprovement("");
      setFollowUp(false);
    } catch (error) {
      console.error("Feedback submission error:", error);
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 pb-10 pt-[120px]">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-customBlue flex items-center mb-4 text-center">
          💡 Help Us Improve
        </h2>
        <hr className="mb-4" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="usage-frequency"
              className="block font-semibold text-gray-700"
            >
              How often do you use our Website?
            </label>
            <input
              type="text"
              id="usage-frequency"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Everyday / Once a week / Bi-weekly"
              value={usageFrequency}
              onChange={(e) => setUsageFrequency(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="motivation"
              className="block font-semibold text-gray-700"
            >
              What is the motivation to use our Website?
            </label>
            <textarea
              id="motivation"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="What problem does it solve for you?"
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="most-used-feature"
              className="block font-semibold text-gray-700"
            >
              What is your most used feature?
            </label>
            <input
              type="text"
              id="most-used-feature"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={mostUsedFeature}
              onChange={(e) => setMostUsedFeature(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="improvement"
              className="block font-semibold text-gray-700"
            >
              What would you like to see improved the most?
            </label>
            <textarea
              id="improvement"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Let us know your thoughts"
              value={improvement}
              onChange={(e) => setImprovement(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <input
              type="checkbox"
              id="follow-up"
              className="mr-2"
              checked={followUp}
              onChange={(e) => setFollowUp(e.target.checked)}
            />
            <label htmlFor="follow-up" className="text-gray-700">
              Receive personal emails for further assistance
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-customBlue text-white py-3 rounded-md hover:bg-blue-900 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
