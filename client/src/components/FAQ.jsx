import React, { useState } from "react";

const FAQ = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the eligibility criteria for this scheme?",
            answer: "The eligibility criteria depend on your income, age, and other factors. Please refer to the official guidelines for detailed information.",
        },
        {
            question: "How can I apply for this scheme?",
            answer: "You can apply through the official government portal or visit your nearest help center.",
        },
        {
            question: "What documents are required?",
            answer: "You need proof of identity, proof of residence, and any additional documents specified in the scheme guidelines.",
        },
    ];

    return (
        <div className="p-6">
            {/* FAQ Section */}
            <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800">FAQs</h2>
                <div className="mt-6 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex justify-between items-center bg-blue-100 p-4 rounded-lg focus:outline-none hover:bg-blue-200"
                            >
                                <span className="text-gray-800 font-medium">{faq.question}</span>
                                <span className="text-blue-600">{activeFAQ === index ? "-" : "+"}</span>
                            </button>
                            {activeFAQ === index && (
                                <div className="mt-4 p-4 bg-blue-50 rounded-lg text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
