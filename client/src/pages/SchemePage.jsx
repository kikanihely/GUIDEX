import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ThreeButtons from '../components/ThreeButtons';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import EligibilityModal from './EligibilityModal';

import { FaCheckCircle, FaFileAlt, FaRegClock } from 'react-icons/fa';

const SchemePage = () => {
    const { schemeId } = useParams();
    const [scheme, setScheme] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eligibleSchemeName, setEligibleSchemeName] = useState("");

    useEffect(() => {
        const fetchSchemeDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/admin/schemes/${schemeId}`);
                setScheme(response.data.scheme);
            } catch (error) {
                console.error("Error fetching scheme details:", error);
            }
        };

        fetchSchemeDetails();
    }, [schemeId]);

    const handleCheckEligibility = async () => {

        try {
            const res = await axios.post(`http://localhost:5000/api/check-eligibility/${schemeId}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (res.data.eligible) {
                setEligibleSchemeName(scheme.schemeName);
                setIsModalOpen(true);
            } else {
                alert("Sorry! You are not eligible for this scheme.");
            }
        } catch (error) {
            console.error("Eligibility check error:", error);
            alert("Something went wrong while checking eligibility.");
        }
    };

    if (!scheme) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="pt-[100px]">
                {/* Scheme Name & Description */}
                <div className="p-8 mx-16 bg-gray-50 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <h2 className="text-4xl font-bold text-gray-800">{scheme.schemeName}</h2>
                    <p className="text-gray-700 mt-4 text-lg">{scheme.schemeDescription}</p>
                </div>

                {/* Grid Layout for the sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 mx-8">
                    {/* Steps for Applying */}
                    <div className="p-8 bg-gray-50 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Steps for Applying</h2>
                        <ol className="list-decimal list-inside mt-4 text-gray-700 space-y-2">
                            {scheme.stepsForApplying && scheme.stepsForApplying.map((step, index) => (
                                <li key={index} className="flex items-center">
                                    <FaRegClock className="inline-block mr-2 text-blue-600" />
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Documents Required */}
                    <div className="p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Documents Required</h2>
                        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                            {scheme.selectedTagDocuments && scheme.selectedTagDocuments.map((document, index) => (
                                <li key={index} className="flex items-center">
                                    <FaFileAlt className="inline-block mr-2 text-yellow-600" />
                                    {document}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Eligibility Criteria */}
                <div className="p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-14">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Eligibility Criteria</h2>
                    <ul className="list-disc list-inside mt-4 text-gray-700 space-y-3">
                        <li><FaCheckCircle className="inline-block mr-2 text-green-600" /> Maximum Family Income: {scheme.maxFamilyIncome}</li>
                        <li><FaCheckCircle className="inline-block mr-2 text-green-600" /> Maximum Age: {scheme.maxAge}</li>
                        <li><FaCheckCircle className="inline-block mr-2 text-green-600" /> Caste/Category: {scheme.casteCategory}</li>
                        <li><FaCheckCircle className="inline-block mr-2 text-green-600" /> Gender: {scheme.gender}</li>
                        <li><FaCheckCircle className="inline-block mr-2 text-green-600" /> Course: {scheme.course}</li>
                        <li><FaCheckCircle className="inline-block mr-2 text-green-600" /> Occupation: {scheme.occupation}</li>
                        <li><FaCheckCircle className="inline-block mr-2 text-green-600" /> Nationality: {scheme.nationality}</li>
                        <li><FaCheckCircle className="inline-block mr-2 text-green-600" /> Disability Status: {scheme.disabilityStatus}</li>
                        <li><FaCheckCircle className="inline-block mr-2 text-green-600" /> Minority Status: {scheme.minorityStatus}</li>
                        <li><FaCheckCircle className="inline-block mr-2 text-green-600" /> Marital Status: {scheme.maritalStatus}</li>
                    </ul>

                    {/* Check Eligibility Button */}
                    <div className="text-center mt-6">
                        <button
                            onClick={handleCheckEligibility}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
                        >
                            Check Eligibility
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <EligibilityModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                schemeName={eligibleSchemeName}
            />

            <FAQ />
            <Footer />
        </>
    );
};

export default SchemePage;
