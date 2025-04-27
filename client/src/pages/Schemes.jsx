import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SchemesForm from '../components/SchemesForm';
import SchemesCard from '../components/SchemesCard';
import Footer from '../components/Footer';

const Schemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);

  // Fetch all schemes from the backend when the component mounts
  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/schemes'); // Adjust API URL as per your setup
        const data = await response.json();
        if (response.ok) {
          setSchemes(data.schemes); // Assuming the backend response has a "schemes" key
          setFilteredSchemes(data.schemes); // Initially show all schemes
        } else {
          console.error("Failed to fetch schemes:", data.message);
        }
      } catch (error) {
        console.error("Error fetching schemes:", error);
      }
    };

    fetchSchemes();
  }, []);

  // Function to handle search and filter schemes
  const handleSearch = (filters) => {
    const { state, schemeCategory, schemeName, date } = filters;
    
    const filtered = schemes.filter(scheme => {
      return (
        // If State is selected and matches scheme's state
        (state === '' || scheme.state === state || state === 'All') &&
        // If Scheme Category is selected and matches scheme's category
        (schemeCategory === '' || scheme.schemeCategory === schemeCategory) &&
        // If Scheme Name is entered and it matches the scheme name
        (schemeName === '' || scheme.schemeName.toLowerCase().includes(schemeName.toLowerCase())) &&
        // If Date is entered and it matches the scheme's created date
        (date === '' || new Date(scheme.createdAt).toLocaleDateString() === new Date(date).toLocaleDateString())
      );
    });
    
    setFilteredSchemes(filtered); // Update filtered schemes state
  };

  return (
    <>
      <Navbar />
      <SchemesForm onSearch={handleSearch} />
      <section className="p-6 flex flex-col gap-6 justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredSchemes.length > 0 ? (
            filteredSchemes.map((scheme) => (
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
      <Footer />
    </>
  );
};

export default Schemes;
