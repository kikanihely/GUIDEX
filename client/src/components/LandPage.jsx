import React from "react"
import LandImg from '../assets/landimg.webp'
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
function LandPage() {
  const navigate = useNavigate();

    const goToSchemesPage = () => {
      navigate("/schemes");
    };
  return (
    <div className="bg-white py-16 px-8 w-full h-[100vh] pt-[20vh]">
      <Helmet>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-bold text-customBlue leading-tight">
          Your Gateway to <span className="text-yellow-400">Government Schemes and </span>Assistance
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
          Easily explore government aid schemes and understand their eligibility criteria. Receive step-by-step assistance with official procedures and document applications.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-customBlue text-white px-6 py-3 rounded-lg shadow hover:bg-customYellow hover:text-customBlue" onClick={goToSchemesPage}>
              Explore Schemes &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>

            </button>
          </div>
        </div>
        <div>
          <img src={LandImg} alt="" className="h-[450px]"/>
        </div>
      </div>
    </div>
  );
};

export default LandPage
