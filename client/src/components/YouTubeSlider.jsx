import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const YouTubeSlider = () => {
  const videos = [
    { id: 1, url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, url: 'https://www.youtube.com/embed/kJQP7kiw5Fk' },
    { id: 3, url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' },
    { id: 4, url: 'https://www.youtube.com/embed/o1tj2zJ2Wvg' },
    { id: 5, url: 'https://www.youtube.com/embed/L_jWHffIx5E' },
    { id: 6, url: 'https://www.youtube.com/embed/2Vv-BfVoq4g' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 relative">
    
                    {/* Swiper Component */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{
                            el: '.swiper-pagination-custom',
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="rounded-lg overflow-hidden"
                    >
                        {videos.map((video) => (
                            <SwiperSlide key={video.id}>
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        className="w-full h-full rounded-md"
                                        src={video.url}
                                        title={`YouTube Video ${video.id}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p className="mt-2 text-center text-gray-700 font-medium">
                                    Video {video.id} Description
                                </p>
                            </div>
                        </SwiperSlide>
                        
                        ))}
                    </Swiper>
    
                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 text-customBlue text-3xl bg-white p-2 rounded-fullfocus:outline-none">
                        ❮
                    </button>
                    <button className="swiper-button-next-custom absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 text-customBlue text-3xl bg-white p-2 rounded-full focus:outline-none">
                        ❯
                    </button>
    
                    {/* Custom Pagination Dots */}
                    <div className="swiper-pagination-custom mt-4 text-center"></div>
                </div>
  );
};

export default YouTubeSlider;
