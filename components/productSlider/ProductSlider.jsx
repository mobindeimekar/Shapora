"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./productSlider.css";
import Chevron from '@/public/icons/chevron-down.svg'
import Heart from '@/public/icons/heart.svg'
import Cart from '@/public/icons/shopping-cart.svg'


export default function ProductSlider({ products }) {
    return (
        <div className="relative w-full py-5 ">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={4}
                loop={true} 
                spaceBetween={30}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 15 },
                    640: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 5, spaceBetween: 30 },
                }}
                className="product-swiper"
            >
                {products.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="group relative text-center p-5 cursor-pointer">

                            {/* 🔹 بخش عکس */}
                            <div className="relative w-full h-[220px] mx-auto overflow-hidden rounded-md">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    quality={70}
                                    className="object-contain transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <Image
                                    src={item.hoverImage}
                                    alt={`${item.title} hover`}
                                    fill
                                    className="object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />

                                {/* 🔹 دکمه‌های شناور سمت راست بالا */}
                                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 -translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2">
                                    <button className="w-10 h-10 p-2 bg-white border border-neutral-300 rounded-lg hover:bg-primary hover:text-white">
                                        <Heart />
                                    </button>
                                    <button className="w-10 h-10 p-2 bg-white border border-neutral-300 rounded-lg hover:bg-primary hover:text-white">
                                        <Cart /> 
                                    </button>
                                </div>
                            </div>

                            {/* 🔹 اطلاعات محصول */}
                            <div className="mt-3">
                                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-red-500 text-sm font-medium mt-1">${item.price}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>

            <button className="custom-prev absolute -translate-y-1/2 z-2 cursor-pointer font-light rounded-full flex items-center justify-center">
                <Chevron className="h-10 w-10 rotate-90" />
            </button>
            <button className="custom-next absolute -translate-y-1/2 z-2 cursor-pointer font-light rounded-full flex items-center justify-center">
                <Chevron className="h-10 w-10 rotate-270" />
            </button>
        </div>
    );
}
