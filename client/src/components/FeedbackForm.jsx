import React, { useState } from "react";

const FeedbackForm = () => {
  const [usageFrequency, setUsageFrequency] = useState("");
  const [motivation, setMotivation] = useState("");
  const [mostUsedFeature, setMostUsedFeature] = useState("");
  const [improvement, setImprovement] = useState("");
  const [followUp, setFollowUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = {
      usageFrequency,
      motivation,
      mostUsedFeature,
      improvement,
      followUp,
    };
    console.log("Feedback Submitted:", feedback);
    alert("Thank you for your feedback!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 pb-10 pt-[120px]">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-customBlue flex items-center mb-4 text-center">
          💡 Help Us Improve
        </h2>
        <hr className="mb-4" />

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Usage Frequency */}
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
            />
          </div>

          {/* Motivation */}
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
            ></textarea>
          </div>

          {/* Most Used Feature */}
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
            />
          </div>

          {/* Improvement */}
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
            ></textarea>
          </div>

          {/* Satisfaction Rating */}
          <div>
            <label className="block font-semibold text-gray-700">
              How satisfied are you with our service/product?
            </label>
            <div className="flex items-center justify-between text-3xl mt-2">
              <span title="Very Unsatisfied" className="cursor-pointer">😡</span>
              <span title="Unsatisfied" className="cursor-pointer">😟</span>
              <span title="Neutral" className="cursor-pointer">😐</span>
              <span title="Satisfied" className="cursor-pointer">😊</span>
              <span title="Very Satisfied" className="cursor-pointer">😍</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Very Unsatisfied</span>
              <span>Very Satisfied</span>
            </div>
          </div>

          {/* Follow-Up Checkbox */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-customBlue text-white py-3 rounded-md hover:bg-blue-900 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
