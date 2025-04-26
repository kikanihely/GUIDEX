import React from 'react'
import '@fontsource/martel-sans/900.css';
import BookmarkWhite from '../assets/bookmark-white.png'
import AnglesDown from '../assets/angles-down-solid.svg'
import ArrowRight from '../assets/arrow-right.png'
import SchemesCard from './SchemesCard';
import { useNavigate } from 'react-router-dom';

const FeaturedScholarship = () => {
    const navigate = useNavigate();

    const goToSchemesPage = () => {
      navigate("/schemes");
    };
    return (

        <div className='h-fit w-full flex gap-[30px] justify-center items-center py-[40px] flex-col' style={{ fontFamily: 'Martel Sans,serif' }}>
            <div className="flex items-center justify-center text-[23px] md:text-[30px] h-[8vh] text-center"><b>Featured Scholarships</b></div>
            <section className="p-6 flex flex-col gap-6 justify-center items-center flex-wrap">
                <div className="grid grid-cols-1 2xl:grid-cols-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SchemesCard
                        title="Free cycle for girls in class 9 (OBC)"
                        description="Scheme provides free bicycle to girls studying in std 9 and belonging to SEBC caste and EBC caste Category."
                        date="28th December 2024"
                    />
                    <SchemesCard
                        title="Free cycle for girls in class 9 (OBC)"
                        description="Scheme provides free bicycle to girls studying in std 9 and belonging to SEBC caste and EBC caste Category."
                        date="28th December 2024"
                    />
                    <SchemesCard
                        title="Free cycle for girls in class 9 (OBC)"
                        description="Scheme provides free bicycle to girls studying in std 9 and belonging to SEBC caste and EBC caste Category."
                        date="28th December 2024"
                    />
                    <SchemesCard
                        title="Free cycle for girls in class 9 (OBC)"
                        description="Scheme provides free bicycle to girls studying in std 9 and belonging to SEBC caste and EBC caste Category."
                        date="28th December 2024"
                    />
                    <SchemesCard
                        title="Free cycle for girls in class 9 (OBC)"
                        description="Scheme provides free bicycle to girls studying in std 9 and belonging to SEBC caste and EBC caste Category."
                        date="28th December 2024"
                    />
                    <SchemesCard
                        title="Free cycle for girls in class 9 (OBC)"
                        description="Scheme provides free bicycle to girls studying in std 9 and belonging to SEBC caste and EBC caste Category."
                        date="28th December 2024"
                    />
                </div>
            </section>
            <button className="flex justify-center items-center h-[50px] w-[150px] text-white bg-customBlue" onClick={goToSchemesPage}>
                View More &nbsp;&nbsp; <img src={AnglesDown} className='cursor-pointer h-[18px]' />
            </button>
        </div >
    )
}

export default FeaturedScholarship