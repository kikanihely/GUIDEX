import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SchemesForm from '../components/SchemesForm';
import SchemesCard from '../components/SchemesCard';
import Footer from '../components/Footer';

const Schemes = () => {
  const [schemes, setSchemes] = useState([]);

  // Fetch all schemes from the backend when the component mounts
  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/schemes'); // Adjust API URL as per your setup
        const data = await response.json();
        if (response.ok) {
          setSchemes(data.schemes); // Assuming the backend response has a "schemes" key
        } else {
          console.error("Failed to fetch schemes:", data.message);
        }
      } catch (error) {
        console.error("Error fetching schemes:", error);
      }
    };

    fetchSchemes();
  }, []);

  return (
    <>
      <Navbar />
      <SchemesForm />
      <section className="p-6 flex flex-col gap-6 justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
          {schemes.length > 0 ? (
            schemes.map((scheme) => (
              <SchemesCard
                key={scheme._id}
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
