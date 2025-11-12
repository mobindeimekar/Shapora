"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useId } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Chevron from '@/public/icons/chevron-down.svg'





export default function CategorySlider({ categories }) {
    const id = useId();

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation]}
                slidesPerView={4}
                loop={true}
                spaceBetween={30}
                navigation={{
                    nextEl: `.next-${id}`,
                    prevEl: `.prev-${id}`,
                }}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 6 },

                }}
                className="category-swiper"
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.id} className="!h-auto mt-3">
                        <div className="group flex flex-col justify-between h-full p-5 cursor-pointer ">

                            {/* 🔹 بخش عکس */}
                            <div className="relative w-[170px] h-[170px] mx-auto overflow-hidden rounded-md">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                                    className="object-cover transition-scale duration-1000 group-hover:scale-110"
                                />


                            </div>

                            {/* 🔹 اطلاعات محصول */}
                            <div className="mt-3 text-center flex flex-col gap-y-1.5">

                                <h3 className=" text-gray-800 line-clamp-2 ">
                                    {category.title}
                                </h3>
                                <span className="text-sm text-gray-500 ">( {category.productCount} items )</span>


                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>

            <button className={`prev-${id} top-[-30px] right-[40px] absolute -translate-y-1/2 z-2 cursor-pointer font-light rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}>
                <Chevron className="h-9 w-9 rotate-90 stroke-1" />
            </button>
            <button className={`next-${id} top-[-30px] right-0 absolute -translate-y-1/2 z-2 cursor-pointer font-light rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}>
                <Chevron className="h-9 w-9 rotate-270 stroke-1" />
            </button>
        </div>
    );
}