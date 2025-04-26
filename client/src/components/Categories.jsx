import React from "react";
import Agriculture from '../assets/Agriculture.svg';
import Banking from '../assets/Banking.svg';
import Business from '../assets/Business.svg';
import Education from '../assets/Education.svg';
import Health from '../assets/Health.svg';
import Housing from '../assets/Housing.svg';
import PublicSafety from '../assets/Public Safety.svg';
import Science from '../assets/Science.svg';
import Skills from '../assets/Skills.svg';
import SocialWelfare from '../assets/Social Welfare.svg';
import Sports from '../assets/Sports.svg';
import Transport from '../assets/Transport.svg';
import Travel from '../assets/Travel.svg';
import Utility from '../assets/Utility.svg';
import Women from '../assets/Women.svg';
import '@fontsource/martel-sans/900.css';

const Categories = () => {
  const categories = [
    { img: Agriculture, title: "Agriculture & Rural" },
    { img: Banking, title: "Banking & Financial Services" },
    { img: Business, title: "Business & Entrepreneurship" },
    { img: Education, title: "Education & Learning" },
    { img: Health, title: "Health & Wellness" },
    { img: Housing, title: "Housing & Shelter" },
    { img: PublicSafety, title: "Public Safety, Law & Justice" },
    { img: Science, title: "Science & IT" },
    { img: Skills, title: "Skills & Employment" },
    { img: SocialWelfare, title: "Social Welfare" },
    { img: Sports, title: "Sports & Culture" },
    { img: Transport, title: "Transport & Infrastructure" },
    { img: Travel, title: "Travel & Tourism" },
    { img: Utility, title: "Utility & Sanitation" },
    { img: Women, title: "Women & Child" },
  ];

  return (
    <div className="flex items-center justify-center h-fit gap-[20px] flex-col pt-[40px] pb-[40px]" style={{fontFamily:'Martel Sans,serif'}}>
      <div className="flex items-center justify-center text-[23px] h-[10vh] text-center md:text-[30px]"><b>Find schemes based on categories</b></div>
      <div className="flex items-center justify-center gap-[40px] h-fit w-full flex-wrap">
        {categories.map((cat, index) => (
          <div className="flex flex-col items-center justify-center gap-[20px] w-[240px] h-[150px] rounded-[10px] text-center cursor-pointer shadow-custom4 hover:scale-105 hover:shadow-lg" key={index}>
            <img src={cat.img} alt={cat.title} className="h-[40px]" />
            {cat.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
