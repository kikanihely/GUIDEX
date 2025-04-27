import React, { useState, useEffect } from 'react';
import '@fontsource/martel-sans/900.css';
import BookmarkWhite from '../assets/bookmark-white.png';
import AnglesDown from '../assets/angles-down-solid.svg';
import ArrowRight from '../assets/arrow-right.png';
import SchemesCard from './SchemesCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // You can also use 'fetch' if preferred

const FeaturedScholarship = () => {
    const [schemes, setSchemes] = useState([]);
    const navigate = useNavigate();

    // Fetch all schemes from the backend when the component mounts
    useEffect(() => {
        const fetchSchemes = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/admin/schemes'); // Adjust API URL as per your setup
                const data = await response.json();
                if (response.ok) {
                    // Slice the first 5 schemes from the fetched data
                    setSchemes(data.schemes.slice(0, 5)); // Display only the first 5 schemes
                } else {
                    console.error("Failed to fetch schemes:", data.message);
                }
            } catch (error) {
                console.error("Error fetching schemes:", error);
            }
        };

        fetchSchemes();
    }, []);

    const goToSchemesPage = () => {
        navigate('/schemes');
    };

    return (
        <div className='h-fit w-full flex gap-[30px] justify-center items-center py-[40px] flex-col' style={{ fontFamily: 'Martel Sans,serif' }}>
            <div className="flex items-center justify-center text-[23px] md:text-[30px] h-[8vh] text-center">
                <b>Featured Scholarships</b>
            </div>
            <section className="p-6 flex flex-col gap-6 justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
                    {schemes.length > 0 ? (
                        schemes.map((scheme) => (
                            <SchemesCard
                                key={scheme._id}
                                schemeId={scheme._id}
                                title={scheme.schemeName}
                                description={scheme.schemeDescription}
                                date={new Date(scheme.createdAt).toLocaleDateString()} // Assuming the scheme has a createdAt field
                            />
                        ))
                    ) : (
                        <p>No schemes available</p>
                    )}
                </div>
            </section>
            <button className="flex justify-center items-center h-[50px] w-[150px] text-white bg-customBlue" onClick={goToSchemesPage}>
                View More &nbsp;&nbsp; <img src={AnglesDown} className='cursor-pointer h-[18px]' />
            </button>
        </div>
    );
};

export default FeaturedScholarship;
