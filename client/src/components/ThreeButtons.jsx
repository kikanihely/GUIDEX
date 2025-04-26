import React from 'react';

const ThreeButtons = () => {
  return (
   <div className='pt-[100px]'>
    <div className="flex justify-center items-center w-full py-4 h-[12vh] gap-16">
      <div className="flex justify-center items-center w-[18%] h-[80%] border-2 border-[#003366] text-[#003366] font-semibold rounded-lg text-lg cursor-pointer hover:bg-[#003366] hover:text-white hover:scale-110 active:bg-[#003366] active:text-white active:scale-95">
        <a href="#about-scheme" className="w-full h-full flex justify-center items-center">About Scheme</a>
      </div>
      <div className="flex justify-center items-center w-[18%] h-[80%] border-2 border-[#003366] text-[#003366] font-semibold rounded-lg text-lg cursor-pointer hover:bg-[#003366] hover:text-white hover:scale-110 active:bg-[#003366] active:text-white active:scale-95">
        <a href="#faq" className="w-full h-full flex justify-center items-center">FAQ</a>
      </div>
      <div className="flex justify-center items-center w-[18%] h-[80%] border-2 border-[#003366] text-[#003366] font-semibold rounded-lg text-lg cursor-pointer hover:bg-[#003366] hover:text-white hover:scale-110 active:bg-[#003366] active:text-white active:scale-95">
        <a href="" className="w-full h-full flex justify-center items-center">Check Eligibility</a>
      </div>
    </div>
   </div>
  );
};


export default ThreeButtons;
