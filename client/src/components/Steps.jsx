import React from "react";
import Icon1 from "../assets/how-it-works-icon1.jpg";
import Icon2 from "../assets/how-it-works-icon2.jpg";
import Icon3 from "../assets/how-it-works-icon3.jpg";
import Arrow from "../assets/angles-right-solid.svg";

const Steps = () => {
  return (
    <div className="min-h-[70vh] w-full bg-gradient-to-b from-[rgba(255,255,255,0.5)] to-[#00336629] text-[#003366] flex flex-col justify-center items-center px-4 pb-6">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        How it works
      </h1>

      {/* Steps Container */}
      <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-8">
        {/* Step 1 */}
        <div className="w-full sm:w-[90%] md:w-[350px] min-h-[350px] bg-white flex flex-col items-center justify-center text-center gap-5 px-5 py-6 font-semibold rounded-lg shadow-lg">
          <img src={Icon1} alt="Step 1" className="h-[120px] sm:h-[150px] md:h-[60%]" />
          <p>
            Create your Profile by providing some basic details super-quick and
            get registered with us.
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center">
          <img src={Arrow} alt="Arrow" className="h-[30px] md:h-[50px]" />
        </div>

        {/* Step 2 */}
        <div className="w-full sm:w-[90%] md:w-[350px] min-h-[350px] bg-white flex flex-col items-center justify-center text-center gap-5 px-5 py-6 font-semibold rounded-lg shadow-lg">
          <img src={Icon2} alt="Step 2" className="h-[120px] sm:h-[150px] md:h-[60%]" />
          <p>
            Get notified for matching Scholarship as soon as any scholarship
            matches your profile.
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center">
          <img src={Arrow} alt="Arrow" className="h-[30px] md:h-[50px]" />
        </div>

        {/* Step 3 */}
        <div className="w-full sm:w-[90%] md:w-[350px] min-h-[350px] bg-white flex flex-col items-center justify-center text-center gap-5 px-5 py-6 font-semibold rounded-lg shadow-lg">
          <img src={Icon3} alt="Step 3" className="h-[120px] sm:h-[150px] md:h-[60%]" />
          <p>
            Select any government scheme and check your Eligibility for that
            scheme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
